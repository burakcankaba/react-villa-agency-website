import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./villaMedias.scss"
import { AiFillCloseSquare } from "react-icons/ai";

const villaMedias = ({ photos,slidesPerView,modal,setOpenPhotosModal }) => {
  return (



    <div className="villaMedias">
      {
        modal && 
          <div className="closePhotosModal" onClick={()=>setOpenPhotosModal(false)}>
            <AiFillCloseSquare></AiFillCloseSquare>
          </div>
      }
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="villaMedias"
        style={{
          "--swiper-navigation-color": "#626262",
          "--swiper-navigation-size": "15px",
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-width": "5px",
          "--swiper-pagination-bullet-height": "5px"
        }}
      >
        {
          photos && photos.map((item,i) => (
            <SwiperSlide key={i}><img src={item} alt="" /></SwiperSlide>
          ))
        }

      </Swiper>
      
    </div>
  )
}

export default villaMedias