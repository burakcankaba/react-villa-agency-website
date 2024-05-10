import "./villa.scss"
import { CiLocationArrow1 } from 'react-icons/ci';
import { BsPeople, BsDoorClosed } from 'react-icons/bs';
import { GiShower } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { IoBedOutline } from 'react-icons/io5';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Villa = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/villas");
    const { t } = useTranslation()
    return (
        <div className="villa">
            {loading ? "Loading" : (<>

                {data.slice(0, 4).map((item, i) => (


                    <div className="villaItem" key={i}>
                        <div className="villaTop">
                            <div className="villaTitle">
                                <h2><AiOutlineHome />{item.name}</h2>

                            </div>
                            <div className="villaLocation">
                                <label><CiLocationArrow1 /><span>{item.city} / {item.location}</span></label>
                                {
                                    item.prices[0] &&
                                    <span>{t('nighty')} ₺ {Math.min(...item.prices.map(item => item.price))} - ₺ {Math.max(...item.prices.map(item => item.price))}</span>
                                }


                                    
                            </div>


                        </div>
                        <div className="villaMiddle">
                            <Link to={`/villadetail/${item._id}`}>
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
                                    {item.photos && item.photos.slice(0, 5).map((item, i) => (
                                        <SwiperSlide key={i}><img src={item} alt="" /></SwiperSlide>
                                    ))

                                    }

                                </Swiper>
                            </Link>
                            {/* <button>
                                            <IoCalendar className="bsCalendar" /> <span>Availability Calendar</span>
                                        </button> */}
                        </div>

                        <div className="villaBottom">

                            <div>
                                <BsPeople></BsPeople><div>{item.props.personCount} {t('people')}</div>
                            </div>
                            <div>
                                <BsDoorClosed></BsDoorClosed><div>{item.props.bedRoomCount} {t('room')}</div>
                            </div>
                            <div>
                                <GiShower></GiShower><div>{item.props.bathRoomCount} {t('shower')}</div>
                            </div>
                            <div>
                                <IoBedOutline></IoBedOutline><div>{item.props.bedCount} {t('bed')}</div>
                            </div>



                        </div>

                    </div>
                ))
                }
            </>)
            }
            <div className="showallbtn">
                <Link to="/villalist">{t('show_all_villas')}</Link>
            </div>


        </div>
    )
}

export default Villa