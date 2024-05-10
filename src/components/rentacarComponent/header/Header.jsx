import "./header.scss";

import { useEffect, useState } from 'react'
import Offer from "../../offer/Offer"

import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";
import { MdCarRental, MdOutlineTour } from "react-icons/md";
import { BiCurrentLocation, BiCalendar } from "react-icons/bi";

import { useTranslation } from 'react-i18next';
const today = `${new Date().getFullYear()}-${`${new Date().getMonth() +
    1}`.padStart(2, 0)}-${`${new Date().getDate()}`.padStart(
        2,
        0
    )}T${`${new Date().getHours()}`.padStart(
        2,
        0
    )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`;

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
            to: ["Milas Airport","İstanbul"]
        }
    ]);
    const [openDestModal, setOpenDestModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState("")
    const [openToModal, setOpenToModal] = useState(false)
    const [selectedToCity, setSelectedToCity] = useState("")
    const [selectedDestination, setSelectedDestination] = useState([])

    useEffect(() => {
        setDestinations(destionations)
    },[destionations])
    const handleCity = (value) => {
        const dt = destionations.filter(x => x.from === value);
        setSelectedDestination(dt[0].to);
        setSelectedCity(value)
        setOpenDestModal(false)
    }
    const handleToCity = (value) => {
        setSelectedToCity(value)
        setOpenToModal(false)
    }
    const handleChange = (ev) => {
        if (!ev.target['validity'].valid) return;
        const dt = ev.target['value'];
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
                We Expert in Car Rental
                </h1>
                <p className="headerDesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="headerBtn" onClick={() => setOpenModal(true)}>{t('get_an_offer')}</button>
                <div className="headerSearch">

                    <div className="headerSearchItem">
                        <BiCurrentLocation className="headerIcon" />

                        <label onClick={() => setOpenDestModal(!openDestModal)}>{selectedCity ? selectedCity : "Pick Up Location"}</label>
                        {

                            <div className={`openDestModal ${openDestModal ? "opened" : ""}`}>
                                {destionations ?
                                    destionations.map((city, i) => (
                                        <div key={i} onClick={() => handleCity(city.from)}>
                                            <BiCurrentLocation className="headerIcon" />
                                            <div>{city.from}</div>
                                        </div>
                                    ))
                                    : "No City"
                                }
                            </div>}

                    </div>
                    <div className="headerSearchItem">
                        <BiCalendar className="headerIcon" />
                        <input type="datetime-local" onChange={handleChange} defaultValue={today} />
                    </div>
                    <div className="headerSearchItem">
                        <BiCurrentLocation className="headerIcon" />
                        <label onClick={() => setOpenToModal(!openToModal)}>{selectedToCity ? selectedToCity : "Drop Off Location"}</label>
                        {

                            <div className={`openDestModal ${openToModal ? "opened" : ""}`}>
                                {selectedDestination ?
                                    selectedDestination.map((item, i) => (
                                        <div key={i} onClick={() => handleToCity(item)}>
                                            <BiCurrentLocation className="headerIcon" />
                                            <div>{item}</div>
                                        </div>
                                    ))
                                    : "No City"
                                }
                            </div>}
                    </div>
                    <div className="headerSearchItem">
                        <BiCalendar className="headerIcon" />
                        <input type="datetime-local" onChange={handleChange} defaultValue={today} />
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