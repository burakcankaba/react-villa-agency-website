import React, { useEffect, useState } from 'react'
import "./calendar.scss"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Month from './Month';


const Calendar = ({ calendar, showenMonthCount,closeDates }) => {
    const INIT_DATE = {
        m: new Date().getMonth(),
        y: new Date().getFullYear(),
    };

    const [nShow, setNShow] = useState([INIT_DATE]);
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
        <>

            <div className='talaCalendar' >
                <div className="tc_header">
                    <div className={`tc_navigator ${nShow[0].m - 1 < new Date().getMonth() &&
                            nShow[0].y === new Date().getFullYear() ? "disable":""}`} onClick={prevMonths}>
                        <AiOutlineArrowLeft />
                    </div>

                    <div  className={`tc_navigator ${nShow[nShow.length - 1]?.y === new Date().getFullYear() + 1 &&
                        nShow[nShow.length - 1]?.m === new Date().getMonth() ? "disable":""}`}
                        onClick={nextMonths} >
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="tc_months">
                    {nShow.map((item, i) => (
                        <Month key={i} currentDate={item} closeDates={closeDates} calendar={calendar} />
                    ))}
                </div>

            </div>
            <div className="calendarInfo">
                <ul>
                    <li className='today'>Today</li>
                    <li className='checkinDay'>CheckinDay</li>
                    <li className='checkoutDay'>CheckoutDay</li>
                    <li className='booked'>Booked</li>
                    <li className="available">Available</li>
                </ul>
            </div>
        </>
    )
}

export default Calendar


