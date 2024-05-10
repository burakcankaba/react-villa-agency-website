import React from 'react'
import { MdBed } from 'react-icons/md'
import  { Navigation, Pagination } from 'swiper'
import { SwiperSlide,Swiper } from 'swiper/react'
import "./bedrooms.scss"

const BedRooms = ({rooms}) => {
  return (
    <div>
        <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    keyboard={{
                    enabled: true,
                    }}
                    
                    navigation={true}
                    modules={[ Pagination, Navigation]}
                    className="bedRooms"
                    style={{
                      "--swiper-navigation-color": "#626262",
                      "--swiper-navigation-size": "15px",
                      "--swiper-pagination-color":"white",
                      "--swiper-pagination-bullet-width":"5px",
                      "--swiper-pagination-bullet-height":"5px"
                    }}
                >
                    {rooms && rooms.map((item,i)=>(
                        <SwiperSlide key={item._id}>
                        <div className="bedroomSlide">
                            {
                                item.img ? <img src={item.img[0]} alt={item.name} />:<img src="http://www.talavillarental.com/DB_INT_Image/3/1/1.%20First%20Floor%20double%20bedroom.JPG" alt="" />
                            }
                            
                            <div>
                                <div className='bedRoomTitle'>{i+1}. Bedroom</div>
                                <div className='bedRoomDesc'>
                                    <label>{item.desc}</label>
                                    <MdBed></MdBed>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    ))}
                    
                </Swiper>
    </div>
  )
}

export default BedRooms