
import { BsPeople, BsBag } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./cars.scss"
import { BiCar } from 'react-icons/bi';

const Cars = () => {

    return (
        <div className='carList'>
            <div className='car'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Sedan</h2>
                        <button>Book Now</button>
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
                        <BsPeople></BsPeople><div> 4 Passenger</div>
                    </div>
                    <div>
                        <BsBag></BsBag><div> 4 Bags</div>
                    </div>
                </div>


            </div>
            <div className="car">
                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Sedan</h2>
                        <button>Book Now</button>
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
                        <BsPeople></BsPeople><div> 4 Passenger</div>
                    </div>
                    <div>
                        <BsBag></BsBag><div> 4 Bags</div>
                    </div>
                </div>

            </div>
            <div className="car">
                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Vito</h2>
                        <button>Book Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image22.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <BsPeople></BsPeople><div> 4 Passenger</div>
                    </div>
                    <div>
                        <BsBag></BsBag><div> 4 Bags</div>
                    </div>
                </div>

            </div>
            <div className="car">
                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><BiCar />Transporter</h2>
                        <button>Book Now</button>
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
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image19.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://www.tranigo.com/site/images/image19.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <BsPeople></BsPeople><div> 8 Passenger</div>
                    </div>
                    <div>
                        <BsPeople></BsPeople><div> 8 Passenger</div>
                    </div>
                    <div>
                        <BsBag></BsBag><div> 8 Bags</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cars