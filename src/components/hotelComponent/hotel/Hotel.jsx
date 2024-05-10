import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./hotel.scss"
import { MdHotelClass } from 'react-icons/md';
import { AiFillStar } from "react-icons/ai";

const Hotel = () => {

    return (
        <div className='hotelList'>
            <div className='hotel'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdHotelClass />Palan Hotel</h2>

                    </div>
                </div>
                <div className="villaMiddle">
                    <Link to="/transfer">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#626262",
                                "--swiper-navigation-size": "15px"
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> Palandoken, <strong>Erzurum</strong></div>
                    </div>
                    <div>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                </div>



            </div>
            <div className='hotel'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdHotelClass />Palan Hotel</h2>

                    </div>
                </div>
                <div className="villaMiddle">
                    <Link to="/transfer">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#626262",
                                "--swiper-navigation-size": "15px"
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> Palandoken, <strong>Erzurum</strong></div>
                    </div>
                    <div>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                </div>



            </div>
            <div className='hotel'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdHotelClass />Palan Hotel</h2>

                    </div>
                </div>
                <div className="villaMiddle">
                    <Link to="/transfer">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#626262",
                                "--swiper-navigation-size": "15px"
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> Palandoken, <strong>Erzurum</strong></div>
                    </div>
                    <div>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                </div>



            </div>
            <div className='hotel'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdHotelClass />Palan Hotel</h2>

                    </div>
                </div>
                <div className="villaMiddle">
                    <Link to="/transfer">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#626262",
                                "--swiper-navigation-size": "15px"
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://images.etstur.com/files/images/hotelImages/TR/51218/m/Palan-Otel-Genel-287651.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> Palandoken, <strong>Erzurum</strong></div>
                    </div>
                    <div>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Hotel