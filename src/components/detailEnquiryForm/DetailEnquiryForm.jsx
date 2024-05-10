import { useContext, useEffect, useState } from 'react'
import { AiOutlineAlert, AiOutlinePlusSquare } from 'react-icons/ai'
import { MdArrowDropDown, MdDateRange } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

import { SearchContext } from '../../context/SearchContext'
import Calendar from "../deneme/Calendar"
import './detailEnquiryForm.scss'

const DetailEnquiryForm = ({ calendar, rules, vName, vImg,vId,closeDates }) => {
    const [getInfo, setGetInfo] = useState({});
    const [openDate, setOpenDate] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const { dates, options } = useContext(SearchContext)

    const navigate = useNavigate();


    const [date, setDate] = useState([
        {
            startDate: dates.length !== 0 ? dates[0].startDate : new Date(),
            endDate: dates.length !== 0 ? dates[0].endDate : new Date(),
            key: 'selection'
        }
    ]);
    const getDateRange = (dr) => {
        setGetInfo(dr)
    }
    const [reservation, setReservation] = useState({})
    const location = useLocation();
    useEffect(() => {
        setReservation({
            getInfo,
            rules,
            options, vName, vImg ,vId
        })
    }, [getInfo])

    const handleReservation = () => {
        navigate("/reservation", { state: { reservation } })
    }
    return (
        <div className="detailEnquiryForm">

            <div className="def_item">
                <div className='def_itemDate' onClick={() => setOpenDate(!openDate)}>
                    <MdDateRange></MdDateRange>
                    <div>
                        <div className='def_itemDateC'>Check-in Date</div>
                        <div>{getInfo ? getInfo.startDR : ""}</div>
                    </div>
                    <MdArrowDropDown></MdArrowDropDown>
                </div>
                <div className='stick'></div>
                <div className='def_itemDate' onClick={() => setOpenDate(!openDate)}>
                    <MdDateRange></MdDateRange>
                    <div>
                        <div className='def_itemDateC'>Check-out Date</div>
                        <div>{getInfo ? getInfo.endDR : ""}</div>
                    </div>
                    <MdArrowDropDown></MdArrowDropDown>
                </div>

                {
                    openDate &&
                    <Calendar getDateRange={getDateRange} calendar={calendar} setOpenDate={setOpenDate} closeDates={closeDates} />
                }
            </div>





            {(getInfo && getInfo.totalPrice) ?
                <>
                    <div className='def_paymentPlan' >
                        <div>Payment Plan</div>
                        <ul>
                            <li>
                                <div>
                                    <span className='def_ppTitle'><AiOutlinePlusSquare></AiOutlinePlusSquare> Pre Payment:</span><span className='def_ppValue'>{(getInfo.totalPrice * 30) / 100}TL</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='def_ppTitle'><AiOutlinePlusSquare></AiOutlinePlusSquare> Remaining Payment:</span><span className='def_ppValue'>{(getInfo.totalPrice * 70) / 100}TL</span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span className='def_ppTitle'><AiOutlinePlusSquare></AiOutlinePlusSquare> Deposit:</span><span className='def_ppValue'>{rules.deposit}TL</span>
                                </div>
                            </li>
                            <li>
                                {/* <div className='def_discountPrice'>
                                    <span className='def_ppTitle'>Discount Amount:</span><span className='def_ppValue discount'>1.000TL</span>
                                </div> */}
                                <div className='def_totalPrice'>
                                    <span className='def_ppTitle'>Total({getInfo.totalDay} Nights):</span><span><span className='def_ppValue prc'>{parseInt(getInfo.totalPrice) + parseInt(rules.deposit)}TL</span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button onClick={handleReservation} className='def_sendButton'>Send Reservation Request</button>
                </>
                :
                <button className="bgAlertBtn">
                    <AiOutlineAlert />
                    <span> Please Select Date To See Prices.</span>
                </button>
            }
        </div >
    )
}

export default DetailEnquiryForm