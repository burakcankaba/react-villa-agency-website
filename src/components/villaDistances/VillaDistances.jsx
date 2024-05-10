import "./villaDistances.scss"
import React from 'react'
import { MdLocationCity } from 'react-icons/md'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
const villaDistances = ({distances}) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            keyboard={{
                enabled: true,
            }}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="villaDistancesContainer"
            style={{
                "--swiper-navigation-color": "#626262",
                "--swiper-navigation-size": "15px",
                "--swiper-pagination-color": "white",
                "--swiper-pagination-bullet-width": "5px",
                "--swiper-pagination-bullet-height": "5px"
            }}
        >
            {distances && distances.map((item,i) => (
                <SwiperSlide key={i}>
                    <div className="villaDistances">
                        <img src={item.img[0]} alt="" />
                        <div>
                            <div className='villaDistancesTitle'>{item.title}</div>
                            <div className='villaDistancesDesc'>
                                <label>{item.desc}</label>
                                <MdLocationCity></MdLocationCity>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default villaDistances