import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./searchitem.scss"
import { BsDoorClosed, BsPeople } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
    return (
        <div className="searchVillaItem">
            <div className="svi_start">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        "--swiper-navigation-color": "#626262",
                        "--swiper-navigation-size": "15px",
                        "--swiper-pagination-color": "white",
                        "--swiper-pagination-bullet-width": "5px",
                        "--swiper-pagination-bullet-height": "5px"
                    }}
                >
                    {
                        item.photos && item.photos.slice(0, 5).map((item,i) => (
                            <SwiperSlide key={i}><img src={item} alt="" /></SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
            <div className="svi_middle">
                <h4>{item.name}</h4>
                <span>{item.city} / {item.location} / {item.sublocation}</span>
                <div className="svi_middle_props">
                    <div>
                        <BsPeople></BsPeople><span>4 Kişilik</span>
                    </div>
                    <div>
                        <BsDoorClosed></BsDoorClosed><span>4 Oda</span>
                    </div>
                    <div>
                        <IoBedOutline></IoBedOutline><span>4 Yatak</span>
                    </div>

                </div>
                <div className="svi_middle_tags">
                    <span>Muhafazakar Villa</span>
                    <span>Özel Havuzlu</span>
                    <span>Jakuzi</span>
                    <span>Merkezi Konumda</span>
                </div>
            </div>
            <div className="svi_end">
                <div className="rating">
                    <label>5</label>
                    <span>15 yorum</span>
                </div>
                <div className="priceContainer">
                    <div className="prePayment">
                        <span className="priceLabel">Ön Ödeme :</span><span className="priceValue">1.193TL</span>
                    </div>
                    <div className="totalPayment">
                        <span className="priceLabel">5 Gün Toplam :</span><span className="priceValue"> 11.458 TL</span>
                    </div>
                    <div className="totalDiscount">
                        <span className="priceLabel">İndirim Tutarı :</span><span className="priceValue"> 1.562 TL</span>
                    </div>
                </div>
                <Link to={`/villadetail/${item._id}`}>İncele</Link>

            </div>
        </div>
    )
}

export default SearchItem