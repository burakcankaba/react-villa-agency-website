import React, { useEffect, useMemo, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { format } from "multi-date";
import { DATE_FORMAT } from "../config/index.js";
import { useCalendar, useDrawer } from "../store/index.js";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Calendar = ({ children, sameDay = 0, detail = [], disablePrevDate = false,pending}) => {
  const { setBlocks, dates, setDates, showenMonthCount, getSelectedDatePrices, pendingPayments  ,setPendingPayments} = useCalendar();
  const pendingDateArray = (pending && pending.pending);
  const [pendingDates,setPendingDates] = useState([]);
  const array3 = pendingDates.concat(pendingDateArray);
  const INIT_DATE = {
    m:
      dates.checkin && !isNaN(new Date(dates.checkin))
        ? dates.checkin.getMonth()
        : new Date().getMonth(),
    y:
      dates.checkin && !isNaN(new Date(dates.checkin))
        ? dates.checkin.getFullYear()
        : new Date().getFullYear(),
  };
  const [nShow, setNShow] = useState([INIT_DATE]); //Gösterilecek ayları tutan state
  
 
  useEffect(() => {
    if (
      format(dates.checkin, "YYYY-MM-DD") === format(dates.checkout, "YYYY-MM-DD")
    ) {
      setDates({
        checkin: "",
        checkout: "",
      });
    }
  }, [dates.checkout]); // başlangıç ve bitiş aynı gün ise boşalt

  const dateRef = useRef();

  useEffect(() => {
    const arr = [...nShow];
    while (true) {
      if (arr.length === showenMonthCount) {
        break;
      }
      if (arr[arr.length - 1].m === 11) {
        arr.push({
          m: 0,
          y: arr[arr.length - 1].y + 1,
        });
      } else {
        arr.push({
          m: arr[arr.length - 1].m + 1,
          y: arr[arr.length - 1].y,
        });
      }
    }
    setNShow(arr);
  }, [showenMonthCount]);   //ay gösterimi

  const nextMonths = () => {
    if (
      nShow?.[nShow.length - 1]?.y === new Date().getFullYear() + 1 &&
      nShow?.[nShow.length - 1]?.m === new Date().getMonth()

    )
      return;
    const newArr = nShow.map((ele) => {
      if (ele.m === 11) {
        return {
          m: 0,
          y: ele.y + 1,
        };
      }
      return {
        m: ele.m + 1,
        y: ele.y,
      };
    });
    setNShow(newArr);
  };
  const prevMonths = () => {
    if (
      nShow[0].m - 1 < new Date().getMonth() &&
      nShow[0].y === new Date().getFullYear()
    )
      return;
    const newArr = nShow.map((ele) => {
      if (ele.m === 0) {
        return {
          m: 11,
          y: ele.y - 1,
        };
      }
      return {
        m: ele.m - 1,
        y: ele.y,
      };
    });
    setNShow(newArr);
  };
  return (
    <div
      className="datePickerContainer"
      ref={dateRef}
      tabIndex={0}
      id="date-picker"
    >
      {children}
      <div className={styles.datePickWrapper}>
        <div
          className={styles.leftArrow}
          onClick={prevMonths}
          disabled={
            nShow[0].m - 1 < new Date().getMonth() &&
            nShow[0].y === new Date().getFullYear()
          }
        >
          <AiOutlineArrowLeft />
        </div>
        <div
          disabled={
            nShow[nShow.length - 1]?.y === new Date().getFullYear() + 1 &&
            nShow[nShow.length - 1]?.m === new Date().getMonth()
          }
          className={styles.rightArrow}
          onClick={nextMonths}
        >
          <AiOutlineArrowRight />
        </div>


        <div className={styles.datePickerMonths}>
          {nShow.map((ele, indx) => {
            return (
              <Months
                month={ele.m}
                year={ele.y}
                key={`${ele.m}+${ele.y}`}
                sameDay={sameDay}
                detail={detail}
                disablePrevDate={disablePrevDate}
              />
            );
          })}
        </div>
        <div className={styles.datePickerInfo}>


          <div className={styles.pickerChooseInfo}>
            <div>
              <p>Booked</p>
              <span className={styles.choosefull}></span>
            </div>

            <div>
              <p>Check-in</p>
              <span className={`${styles.choosechosen} ${styles.chooseLogin}`}></span>
            </div>
            <div>
              <p>Check-out</p>
              <span className={`${styles.choosechosen} ${styles.chooseExit}`}></span>
            </div>

            <div>
              <p>Date Range</p>
              <span className={styles.choosecheckInRange}></span>
            </div>

            <div>
              <p>Pending</p>
              <span className={styles.choosepayment}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Months = ({ month = new Date().getMonth(), year = new Date().getFullYear(), sameDay, detail, disablePrevDate, }) => {


  const { dates, setDates, blocks, pendingPayments } = useCalendar();

  const [changeMonth, setChangeMonth] = useState({
    month: month,
    year: year,
  });
  const [data, setData] = useState({});
  const [monthAvg, setMonthAvg] = useState(0);

  useEffect(() => {
    setData(
      getDaysInMonth(changeMonth.month, changeMonth.year, blocks, sameDay, disablePrevDate, pendingPayments));
  }, [changeMonth, blocks, pendingPayments]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setMonthAvg(getAvgPrice(data, detail));
    }
  }, [data]);

  useMemo(() => {
    if (new Date(dates.checkin) > new Date(dates.checkout)) {
      return setDates({
        checkin: dates.checkout,
        checkout: dates.checkin,
      });
    }

    var flag = 0;
    if (data.data) {
      const arr = data.data.map((i) => {
        if (
          (i.blocked || i.pending) &&
          dates.checkin < i.time &&
          dates.checkout > i.time
        ) {
          flag = 1;
        }
        if (
          i.time &&
          (i.time.toDateString() ===
            (dates.checkin &&
              !isNaN(new Date(dates.checkin)) &&
              dates.checkin.toDateString()) ||
            i.time.toDateString() ===
            (dates.checkout &&
              !isNaN(new Date(dates.checkout)) &&
              dates.checkout.toDateString()))
        ) {
          return { ...i, color: "#3564E2" };
        }
        if (dates.checkin < i.time && dates.checkout > i.time) {
          return { ...i, color: "activeRangeDay" };
        }
        return { ...i, color: "" };
      });
      if (flag) {
        return setDates({
          checkin: "",
          checkout: "",
        });
      }
      setData({ month: data.month, data: arr });
    }
  }, [dates]);

  const { setOpened, opened } = useDrawer();
  const handleDayClick = (ele) => {
    if (ele.active) {
      if (dates.checkout === ele.time || dates.checkin === ele.time) {
        return setDates({
          checkin: "",
          checkout: "",
        });
      }
      if (dates.checkin === "") {
        setDates({
          ...dates,
          checkin: ele.time,
        });
      } else if (dates.checkin !== "") {
        setDates({
          ...dates,
          checkout: ele.time,

        });
        setOpened()
      }
    }
  };

  function getClassLists(ele) {
    if (ele.time === "" && !ele.time && typeof ele !== "object") return;

    return [
      format(ele.time, DATE_FORMAT) === format(dates.checkin, DATE_FORMAT)
        ? styles.checkInDate
        : null,
      format(ele.time, DATE_FORMAT) === format(dates.checkout, DATE_FORMAT)
        ? styles.checkOutDate
        : null,
      format(ele.time, DATE_FORMAT) === format(new Date(), DATE_FORMAT)
        ? styles.todayDate
        : null,
    ]
      .map((item) => item)
      .join(" ");
  }

  return (
    <div className={styles.monthWrapper}>
      <>
        <div className={styles.weekDaysTitle}>
          {data.data && (
            <div>
              {data.month}
              &nbsp;{year}
            </div>
          )}
        </div>
        <div className={styles.weekDaysWrapper}>
          <div>Pzt</div>
          <div>Sa</div>
          <div>Çar</div>
          <div>Per</div>
          <div>Cu</div>
          <div>Cmt</div>
          <div>Paz</div>
        </div>
        <div className={styles.WeekMonthWrapper}>
          {data.data &&
            data.data.map((ele, indx) => {
              return (
                <div
                  className={`${styles.dayWrapper} ${getClass(
                    ele,
                    dates
                  )} ${getClassLists(ele)} ${ele.active ?
                      styles.activeDay
                      : ele.blocked
                        ? styles.fullDay
                        : ele.pending
                          ? styles.pendingDay
                          : styles.notActiveDay
                    } ${ele.isCheckin ? styles.checkin:  ""} ${ele.isCheckout ? styles.checkout:""} ${!ele.time ? styles.emptyField : ""} ${ele.day === 6 || ele.day === 0 ? styles.dayWeekend : ""
                    }
                `}
                  onClick={() => handleDayClick(ele)}
                  key={`${ele.date}-${ele.day}-${indx}`}
                >
                  <div className="burak">{ele.date}</div>
                  {ele.active &&
                    !ele.blocked &&
                    detail[format(ele.time, DATE_FORMAT)]?.price && (
                      <div
                        className={styles.dayPrice}
                        style={{
                          color:
                            detail[format(ele.time, DATE_FORMAT)].price <
                            (monthAvg * 80) / 100 && "#00c700",
                        }}
                      >
                        ₺{" "}
                        {currenyShortner(
                          detail[format(ele.time, DATE_FORMAT)].price
                        )}
                      </div>
                    )}
                </div>
              );
            })}
        </div>
      </>
    </div>
  );
};

const currenyShortner = (m) => {
  if (m.length >= 4) {
    return `${(parseInt(m) / 1000).toFixed(1)}k`;
  } else {
    return m;
  }
};

const getClass = (i, dates) => {
  if (
    i.time &&
    (i.time.toDateString() ===
      (dates.checkin &&
        !isNaN(new Date(dates.checkin)) &&
        dates.checkin.toDateString()) ||
      i.time.toDateString() ===
      (dates.checkout &&
        !isNaN(new Date(dates.checkout)) &&
        dates.checkout.toDateString()))
  ) {
    return styles.activeDate;
  }
  if (i.time && (i.time === dates.checkin || i.time === dates.checkout)) {
    return styles.activeDate;
  }
  if (dates.checkin < i.time && dates.checkout > i.time) {
    return styles.inbtwDates;
  }
  return "";
};

const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

function getDaysInMonth(month, year, blocked, sameDay, disablePrevDate, pendingPayments) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const arr = days.map((ele) => {
    if (blocked.includes(format(ele, DATE_FORMAT))) {
      return {
        active: false,
        blocked: true,
        day: new Date(ele).getDay(),
        date: new Date(ele).getDate(),
        time: new Date(ele),
      };
    }
    for (let i = 0; i < pendingPayments.length; i++) {
      if (pendingPayments[i].dateRanges.includes(format(ele, DATE_FORMAT))) {
        
        return {
          isCheckin : pendingPayments[i].checkinDate === format(ele, DATE_FORMAT) ? true : false,
          isCheckout : pendingPayments[i].checkoutDate === format(ele, DATE_FORMAT) ? true : false,
          active: false,
          pending: true,
          day: new Date(ele).getDay(),
          date: new Date(ele).getDate(),
          time: new Date(ele),
        };
      }
    }

    if (
      sameDay &&
      format(new Date(), DATE_FORMAT) === format(ele, DATE_FORMAT)
    ) {
      return {
        active: true,
        day: new Date(ele).getDay(),
        date: new Date(ele).getDate(),
        time: new Date(ele),
      };
    }
    const today = new Date();
    today.setDate(today.getDate() - 1);
    if (today > ele) {
      if (disablePrevDate) {
        return {
          active: true,
          day: new Date(ele).getDay(),
          date: new Date(ele).getDate(),
          time: new Date(ele),
        };
      }
      return {
        active: false,
        day: new Date(ele).getDay(),
        date: new Date(ele).getDate(),
        time: new Date(ele),
      };
    }
    return {
      active: true,
      day: new Date(ele).getDay(),
      date: new Date(ele).getDate(),
      time: new Date(ele),
    };
  });
  const fillerArr = [0, 1, 2, 3, 4, 5, 6];
  const fillArr = [...fillerArr.slice(0, arr[0].time.getDay() - 1), ...arr];
  return { month: monthNames[month], data: fillArr };
}

const getAvgPrice = (data, details) => {
  let sum = 0;
  data.data.forEach((ele) => {
    if (
      ele.active &&
      !ele.blocked &&
      format(ele.time, DATE_FORMAT) &&
      details[format(ele.time, DATE_FORMAT)]?.price
    ) {
      sum = sum + parseInt(details[format(ele.time, DATE_FORMAT)].price);
    }
  });
  return sum / 30;
};

export default Calendar;
