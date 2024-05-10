import "./header.scss";
import { DateRange } from 'react-date-range';
import { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Offer from "../../offer/Offer"
import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";
import { MdCarRental, MdOutlineTour } from "react-icons/md";
import { BiCurrentLocation, BiCalendar } from "react-icons/bi";

import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation()
    const tabs = [
        { tabName: `${t('villa')}`, tabIcon: AiOutlineHome, tabLink: "/" },
        { tabName: `${t('transfer')}`, tabIcon: AiOutlineCar, tabLink: "/transfer" },
        { tabName: `${t('rent_a_car')}`, tabIcon: MdCarRental, tabLink: "/rentacar" },
        { tabName: `${t('hotel')}`, tabIcon: RiHotelLine, tabLink: "/hotel" },
        { tabName: `${t('tour')}`, tabIcon: MdOutlineTour, tabLink: "/tour" },
    ];
    const [openModal, setOpenModal] = useState(false);

    const [destionations, setDestinations] = useState([
        {
            from: "Fethiye",
            to: ["Dalaman Airport", "Milas Airport", "Antalya Airport", "Hisarönü"]
        },
        {
            from: "Marmaris",
            to: ["Fethiye", "İstanbul", "Antalya Airport", "Hisarönü"]
        },
        {
            from: "İstanbul",
            to: ["Milas Airport", "İstanbul"]
        }
    ]);
    const [openDestModal, setOpenDestModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        baby: 0
    });
    const handleOption = (name, operation) => {

        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,

            };
        })
            ;
    }

    
    useEffect(() => {
        setDestinations(destionations)
    }, [destionations])
    const handleCity = (value) => {
        const dt = destionations.filter(x => x.from === value);
        setSelectedCity(value)
        setOpenDestModal(false)
        console.log(dt)
    }

    return (
        <div className="headerTransfer">
            <div className="headerContainer">
                <div className="headerList">
                    {
                        tabs.map((tab, i) => (

                            <div key={i} className="headerListItem">
                                <NavLink to={tab.tabLink} className={({ isActive }) => (isActive ? "active" : "")} end>
                                    <tab.tabIcon />
                                    <span>{tab.tabName}</span>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
                <h1 className="headerTitle">
                    Wherever you go, stay with us!
                </h1>
                <p className="headerDesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="headerBtn" onClick={() => setOpenModal(true)}>{t('get_an_offer')}</button>
                <div className="headerSearch">

                    <div className="headerSearchItem">
                        <BiCurrentLocation className="headerIcon" />

                        <label onClick={() => setOpenDestModal(!openDestModal)}>{selectedCity ? selectedCity : "Select Hotel Location"}</label>
                        {

                            <div className={`openDestModal ${openDestModal ? "opened" : ""}`}>
                                {destionations ?
                                    destionations.map((city, i) => (
                                        <div key={i} onClick={() => handleCity(city.from)}>
                                            <BiCurrentLocation className="headerIcon" />
                                            <div>{city.from} Hotels</div>
                                        </div>
                                    ))
                                    : "No City"
                                }
                            </div>}

                    </div>
                    <div className="headerSearchItem">
                        <BiCalendar className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} ${t('to')} ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                        {
                            openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates} className="date"
                                minDate={new Date()}
                            />
                        }

                    </div>
                    <div className="headerSearchItem">
                        
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} ${t('adult')} -  ${options.children} ${t('children')} - ${options.baby} ${t('baby')}`}</span>
                        {openOptions &&

                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">{t('adult')}</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">{t('children')}</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">{t('baby')}</span>
                                    <div className="optionCounter">
                                        <button disabled={options.baby <= 1} className="optionCounterButton" onClick={() => handleOption("baby", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.baby}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("baby", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="headerSearchItem hdrSearchBtn">
                        <button className="headerSearchBtn">{t('search')}</button>
                    </div>
                </div>
            </div>
            <Offer setOpenModal={setOpenModal} openModal={openModal}></Offer>
        </div >
    )
}

export default Header;