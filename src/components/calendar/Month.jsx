import React, { useState } from 'react'

const Month = ({ currentDate,calendar,closeDates }) => {
    let date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let isToday, minDatesFromNow, bookedDates, checkinDate, checkoutDate, price;
    let fullDays = [], firstDaysofMonth = [], lastDaysofMont = [];
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
   
    let firstDayofMonth = new Date(currentDate.y, currentDate.m, 1).getDay(), // first day of month
        lastDateofMonth = new Date(currentDate.y, currentDate.m + 1, 0).getDate(), // last days of month 
        lastDayofMonth = new Date(currentDate.y, currentDate.m, lastDateofMonth).getDay(), // last day of month
        lastDateofLastMonth = new Date(currentDate.y, currentDate.m, 0).getDate(); // prev months last days

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

    return (
        <div className="tc_wrap">
            <div className="tc_currentDate">
                {months[currentDate.m]} {currentDate.y}
            </div>
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
                            isToday = (fulldays === date.getDate() && currentDate.m === new Date().getMonth()
                                && currentDate.y === new Date().getFullYear()) ? "today" : ""
                            minDatesFromNow = (fulldays < date.getDate() && currentDate.m <= new Date().getMonth()
                                && currentDate.y <= new Date().getFullYear()) ? "pastDay" : ""

                            bookedDates = closeDates && closeDates.booked.map((item) => {
                                const range = dateRange(new Date(item.startDate), new Date(item.endDate));
                                const dates = range.map(date => date.toISOString().slice(0, 10))

                                return dates.includes(`${currentDate.y}-${currentDate.m < 10 ? `0${currentDate.m + 1}` : `${currentDate.m + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "bookedDay" : ""
                            }).join("")
                            
                            checkinDate = closeDates && closeDates.booked.map((item) => {
                                return item.startDate.slice(0, 10) === (`${currentDate.y}-${currentDate.m < 10 ? `0${currentDate.m + 1}` : `${currentDate.m + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "checkinDay" : ""
                            }).join("")
                            checkoutDate =closeDates && closeDates.booked.map((item) => (
                                item.endDate.slice(0, 10) === (`${currentDate.y}-${currentDate.m < 10 ? `0${currentDate.m + 1}` : `${currentDate.m + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? "checkoutDay" : ""
                            )).join("")
                            price = calendar?.map((item) => {
                                const range = dateRange(new Date(item.startDate), new Date(item.endDate));
                                const dates = range.map(date => date.toISOString().slice(0, 10))
                                return dates.includes(`${currentDate.y}-${currentDate.m < 10 ? `0${currentDate.m + 1}` : `${currentDate.m + 1}`}-${fulldays < 10 ? `0${fulldays}` : `${fulldays}`}`) ? item.price : ""

                            })
                            return <li className={`${isToday} ${minDatesFromNow} ${bookedDates} ${checkinDate} ${checkoutDate}`} key={fulldays}>
                                <label>{fulldays}</label>
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
    )
}

export default Month