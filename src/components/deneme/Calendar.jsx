import React, { useEffect, useState } from 'react'
import "./calendar.scss"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"


const Calendar = (props) => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
    let [currY, setcurrY] = useState(currYear)
    let [currM, setcurrM] = useState(currMonth)



    const addDays = (date, days = 1) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const dateRange = (start, end, range = []) => {
        if (start > end) return range;
        const next = addDays(start, 1);
        return dateRange(next, end, [...range, start]);
    };


    let isToday, minDatesFromNow, bookedDates, checkinDate, checkoutDate, price;
    let fullDays = [], firstDaysofMonth = [], lastDaysofMont = [], rangeD;

    const getCalendar = () => {
        let firstDayofMonth = new Date(currY, currM, 1).getDay(), // Ayın ilk günü
            lastDateofMonth = new Date(currY, currM + 1, 0).getDate(), // Ayın son tarihi 
            lastDayofMonth = new Date(currY, currM, lastDateofMonth).getDay(), // Ayın son günü
            lastDateofLastMonth = new Date(currY, currM, 0).getDate(); // Önceki ayların son günleri

        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            fullDays.push(i)

        }
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            firstDaysofMonth.push(lastDateofLastMonth - i + 1);
        }

        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            lastDaysofMont.push(i - lastDayofMonth + 1)
        }
    }

    getCalendar();
    const handleMonth = (value) => {
        currM = (value === 1 ? currM - 1 : currM + 1)
        setcurrM(currM)
        if (currM < 0 || currM > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currY, currM);
            currM = (date.getMonth())
            currY = (date.getFullYear())
            setcurrM(currM)
            setcurrY(currY)
        } else {
            date = new Date(); // pass the current date as date value
        }
        getCalendar()
    }

    const [startDR, setStartDR] = useState("")
    const [endDR, setEndDR] = useState("")
    const handleGetDateRange = (e) => {
        const { name } = e.target;
        if (startDR === "") {
            setStartDR(name)
        }
        else {
            if (endDR === "") {
                setEndDR(name)
            }
            else {
                setStartDR("")
                setEndDR("")
            }

        }
    }
    let datesBetween = []
    let priceList = []
    if (endDR !== "") {
        datesBetween = dateRange(new Date(startDR), new Date(endDR))
        datesBetween = datesBetween.map(date => date.toISOString().slice(0, 10))
        let totalPrice = 0;
        datesBetween.map((item) => {
            props.calendar.map((dateR) => {
                const range = dateRange(new Date(dateR.startDate), new Date(dateR.endDate));
                const dates = range.map(date => date.toISOString().slice(0, 10))
                const price = dates.includes(item) ? dateR.price : ""
                priceList.push(price)
                priceList = priceList.filter(item => item);
            })
        })
        priceList.pop();

        priceList.map((item) => {
            totalPrice = item + totalPrice
        })
        const todayDay = priceList.length;
        props.setOpenDate(false)
        rangeD = {
            startDR: startDR,
            endDR: endDR,
            totalPrice: totalPrice,
            totalDay: todayDay
        }
    }
    useEffect(() => {
        props.getDateRange(rangeD)
    }, [rangeD])
    return (
        <>

            <div className='talaCalendar2' >
                <div className="tc_header">
                    <div onClick={() => handleMonth(1)} className={`${currM - 1 < new Date().getMonth() && currY === new Date().getFullYear() ? "disable" : ""} tc_navigator`} >
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="tc_currentDate">
                        {months[currM]} {currY}
                    </div>
                    <div onClick={() => handleMonth(2)} className={`${currY === new Date().getFullYear() + 1 && currM === new Date().getMonth() ? "disable" : ""} tc_navigator `} >
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="tc_wrap">
                    <div className="tc_dayNames">
                        <ul>
                            {
                                days &&
                                days.map((dayName, i) => (
                                    <li key={i}>{dayName}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tc_days">
                        <ul>

                            {
                                firstDaysofMonth?.map((fdm) => (
                                    <li className='inactive' key={fdm}><label>{fdm}</label></li>
                                ))
                            }
                            {
                                fullDays?.map((fulldays) => {
                                    isToday = (fulldays === date.getDate() && currM === new Date().getMonth()
                                        && currY === new Date().getFullYear()) ? "today" : ""
                                    minDatesFromNow = (fulldays < date.getDate() && currM <= new Date().getMonth()
                                        && currY <= new Date().getFullYear()) ? "pastDay" : ""

                                        console.log(props.closeDates)
                                     bookedDates = props.closeDates && props.closeDates.booked.map((item) => {
                                         const range = dateRange(new Date(item.startDate), new Date(item.endDate));
                                         const dates = range.map(date => date.toISOString().slice(0, 10))

                                         return dates.includes(`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "bookedDay" : ""
                                     }).join("")

                                     checkinDate = props.closeDates && props.closeDates.booked.map((item) => {
                                         return item.startDate.slice(0, 10) === (`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "checkinDay" : ""
                                     }).join("")
                                     checkoutDate =props.closeDates && props.closeDates.booked.map((item) => (
                                         item.endDate.slice(0, 10) === (`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "checkoutDay" : ""
                                     )).join("")
                                    price = props.calendar?.map((item) => {
                                        const range = dateRange(new Date(item.startDate), new Date(item.endDate));
                                        const dates = range.map(date => date.toISOString().slice(0, 10))
                                        return dates.includes(`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? item.price : ""

                                    })
                                    const sDr = startDR === (`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "startDR" : "";
                                    const eDr = endDR === (`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "endDR" : "";
                                    const ranged = datesBetween.includes(`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "ranged" : ""
                                    return <li className={`${isToday} ${minDatesFromNow} ${bookedDates} ${checkinDate} ${checkoutDate} ${sDr} ${eDr} ${ranged}`} key={fulldays}
                                    >
                                        <input readOnly name={`${currY}-${currM < 10 ? `0${currM + 1}` : `${currM + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`}
                                            onClick={(e) => handleGetDateRange(e)} value={fulldays} ></input>
                                        {
                                            checkinDate &&
                                            <span className='checkin_text'>Check-in</span>
                                        }
                                        {
                                            checkoutDate &&
                                            <span className='checkout_text'>Check-out</span>
                                        }
                                        <div>{price}₺</div>
                                    </li>
                                })
                            }
                            {
                                lastDaysofMont?.map((ldm) => (
                                    <li className='inactive' key={ldm}><label>{ldm}</label></li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar


