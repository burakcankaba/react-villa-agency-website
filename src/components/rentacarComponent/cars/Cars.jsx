

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./cars.scss"
import { BiCar } from 'react-icons/bi';
import { GiGearStick } from 'react-icons/gi';
import { TbGasStation } from 'react-icons/tb';
import { IoLogoModelS } from 'react-icons/io';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';





const Cars = () => {

    return (
        <div className='rentacarList'>
            <div className='car'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Renault Megane</h2>
                        <button>Rent Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra><div> 4 Seats</div>
                    </div>
                    <div>
                        <GiGearStick></GiGearStick><div> Automatic </div>
                    </div>
                    <div>
                        <TbGasStation></TbGasStation><div> Diesel</div>
                    </div>
                    <div>
                        <IoLogoModelS></IoLogoModelS><div> 2021</div>
                    </div>
                </div>


            </div>
            <div className='car'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Renault Megane</h2>
                        <button>Rent Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra><div> 4 Seats</div>
                    </div>
                    <div>
                        <GiGearStick></GiGearStick><div> Automatic </div>
                    </div>
                    <div>
                        <TbGasStation></TbGasStation><div> Diesel</div>
                    </div>
                    <div>
                        <IoLogoModelS></IoLogoModelS><div> 2021</div>
                    </div>
                </div>


            </div>
            <div className='car'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Renault Megane</h2>
                        <button>Rent Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra><div> 4 Seats</div>
                    </div>
                    <div>
                        <GiGearStick></GiGearStick><div> Automatic </div>
                    </div>
                    <div>
                        <TbGasStation></TbGasStation><div> Diesel</div>
                    </div>
                    <div>
                        <IoLogoModelS></IoLogoModelS><div> 2021</div>
                    </div>
                </div>


            </div>
            <div className='car'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Renault Megane</h2>
                        <button>Rent Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image1.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <MdAirlineSeatReclineExtra></MdAirlineSeatReclineExtra><div> 4 Seats</div>
                    </div>
                    <div>
                        <GiGearStick></GiGearStick><div> Automatic </div>
                    </div>
                    <div>
                        <TbGasStation></TbGasStation><div> Diesel</div>
                    </div>
                    <div>
                        <IoLogoModelS></IoLogoModelS><div> 2021</div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Cars