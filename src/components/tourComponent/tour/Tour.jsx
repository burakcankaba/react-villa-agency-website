import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./tour.scss"
import { MdOutlineTour } from 'react-icons/md';

const Tour = () => {

    return (
        <div className='tourList'>
            <div className='tour'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdOutlineTour />Cappadocia Tour</h2>
                         
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
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> <strong>Tour Tarihi: </strong> 24/12/22 </div>
                    </div>
                    <div>
                        <div> 3 <strong>Gece</strong> 4 <strong>Gün</strong></div>
                    </div>
                </div>
                <div className='tourDesc'>
                     Our tour departs on the day it is determined. Our waiting time for late customers is 10 minutes. A 5% refund is made for our customers who can't catch up after 10 minutes.

                </div>


            </div>
            <div className='tour'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdOutlineTour />Cappadocia Tour</h2>
                         
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
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> <strong>Tour Tarihi: </strong> 24/12/22 </div>
                    </div>
                    <div>
                        <div> 3 <strong>Gece</strong> 4 <strong>Gün</strong></div>
                    </div>
                </div>
                <div className='tourDesc'>
                     Our tour departs on the day it is determined. Our waiting time for late customers is 10 minutes. A 5% refund is made for our customers who can't catch up after 10 minutes.

                </div>


            </div>
            <div className='tour'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdOutlineTour />Cappadocia Tour</h2>
                         
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
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> <strong>Tour Tarihi: </strong> 24/12/22 </div>
                    </div>
                    <div>
                        <div> 3 <strong>Gece</strong> 4 <strong>Gün</strong></div>
                    </div>
                </div>
                <div className='tourDesc'>
                     Our tour departs on the day it is determined. Our waiting time for late customers is 10 minutes. A 5% refund is made for our customers who can't catch up after 10 minutes.

                </div>


            </div>
            <div className='tour'>

                <div className="villaTop">
                    <div className="villaTitle">
                        <h2><MdOutlineTour />Cappadocia Tour</h2>
                         
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
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdng.jollytur.com/files/packagephoto/packagephotos/406a0469-e063-499f-bc54-b27ffbfac37e-600.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </Link>
                    {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                </div>

                <div className="villaBottom">

                    <div>
                        <div> <strong>Tour Tarihi: </strong> 24/12/22 </div>
                    </div>
                    <div>
                        <div> 3 <strong>Gece</strong> 4 <strong>Gün</strong></div>
                    </div>
                </div>
                <div className='tourDesc'>
                     Our tour departs on the day it is determined. Our waiting time for late customers is 10 minutes. A 5% refund is made for our customers who can't catch up after 10 minutes.

                </div>


            </div>


        </div>
    )
}

export default Tour