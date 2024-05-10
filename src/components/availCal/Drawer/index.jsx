import { useRef, useEffect, useMemo } from "react";
import { useCalendar, useDrawer } from "../store";
import { Button } from "../Button/index";
import styles from "./styles.module.scss";

import { DATE_FORMAT, MONTH_LIST } from "../config/index";
import { format } from "multi-date";
export function Drawer() {
  const { opened, setOpened } = useDrawer();
  const drawerRef = useRef();
  const priceMoreRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) =>
      drawerRef.current === event.target && setOpened(false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerRef]);

  const {
    getSelectedDatePrices,
    setBlocks,
    setDates,
    setPendingPayments,
    getSelectedDateRanges,
    dates,
  } = useCalendar();
  if (!opened) return;
  const totalData = getSelectedDatePrices();
  const days = getSelectedDateRanges();

  const handlePay = (paytype) => {
    const arr = days.reduce((p, c) => [...p, c.date], []);
    if (dates.checkout !== "") arr.pop();
    switch (paytype) {
      case "done":
        setBlocks(arr);
        break;
      case "pending":
        setPendingPayments({
          dateRange:arr,
          checkinDate:format(dates.checkin, DATE_FORMAT),
          checkoutDate:format(dates.checkout, DATE_FORMAT)
      });
        break;
    }
    setOpened();
    setDates({ checkin: "", checkout: "" });
    
  };
  
  const checkin = new Date(dates.checkin);
  const checkout = new Date(
    dates.checkout !== ""
      ? dates.checkout
      : new Date(
          checkin.getFullYear(),
          checkin.getMonth(),
          checkin.getDate() + 1
        )
  );
  return (
    <div className={styles.drawerContainer} ref={drawerRef}>
      <div className={styles.drawerWrapper}>
        <div className={styles.drawerClose} onClick={() => setOpened(false)}>
          Kapat
        </div>
        <p className={styles.drawerTitle}>
          Satın al <small>({totalData.count} gece)</small>
        </p>
        <div className={styles.drawerBody}>
          <div className={styles.dayItem}>
            {checkin.getDate()} {MONTH_LIST[checkin.getMonth()]}
          </div>
          <div className={styles.bodyArrow}>
            <div>
              
                {totalData.count-1} Gece
              
            </div>
          </div>
          <div className={styles.dayItem}>
            {checkout.getDate()} {MONTH_LIST[checkout.getMonth()]}
          </div>
        </div>

        <div className={styles.drawerActions}>
          <Button
            disabled={totalData.total === 0}
            onClickHandle={() => handlePay("pending")}
            className={styles.choosepayment}
          >
            <>
              Ödeme Yap
              <span>₺{totalData.total}</span>
            </>
          </Button>
          <Button
            disabled={totalData.total === 0}
            onClickHandle={() => handlePay("done")}
          >
            <>
              Satın Al
              <span>₺{totalData.total}</span>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;