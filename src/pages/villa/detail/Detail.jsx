import VillaMedias from "../../../components/villaMedias/VillaMedias"
import VillaDistances from "../../../components/villaDistances/VillaDistances"
import "./detail.scss"
import { TbLocation } from "react-icons/tb"
import { BsDoorClosed, BsPeople } from "react-icons/bs"
import { GiShower } from "react-icons/gi"
import { IoBedOutline } from "react-icons/io5"
import BedRooms from "../../../components/bedRooms/BedRooms"
//import AvailCal from "../../../components/availCal/AvailCal"
import PeriodicPrices from "../../../components/periodicPrices/PeriodicPrices"
import VillaRules from "../../../components/villaRules/VillaRules"
import DetailEnquiryForm from "../../../components/detailEnquiryForm/DetailEnquiryForm"
import Facilities from "../../../components/facilities/Facilities"
import Description from "../../../components/descriptions/Description"
import Map from "../../../components/map/Map"
import useFetch from "../../../hooks/useFetch"
import { useLocation } from "react-router-dom"
import Calendar from "../../../components/calendar/Calendar"
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { useState } from "react"

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/villas/find/${id}`)

  const [openPhotosModal, setOpenPhotosModal] = useState(false)
  return (
    <>


      <div className="villaDetail">

        <VillaMedias slidesPerView={4} photos={data.photos} modal={false} />
        <div className="villaInfoContainer">
          <div className="villaInfos">
            <div className="vd_breadcrumbs">
              <span>TalaTourism / {data.city} Rental Villa / {data.location} Rental Villa</span>
              <button className="showAllPhotos_detail" onClick={() => setOpenPhotosModal(true)}>Show All Photos</button>
            </div>
            <div className="vd_title">
              <h1>{data.name}</h1>
              <label>
                <TbLocation /><span> {data.city} / {data.location}</span>
              </label>
            </div>
            <div className="vd_container">
              <div className="vd_left">

                <div className="vd_props">
                  {data.props ? (
                    <>
                      <div>
                        <BsPeople></BsPeople><span>{data.props.personCount} People</span>
                      </div>
                      <div>
                        <BsDoorClosed></BsDoorClosed><span>{data.props.bedRoomCount} Rooms</span>
                      </div>
                      <div>
                        <GiShower></GiShower><span>{data.props.bedRoomCount} Bathroom</span>
                      </div>
                      <div>
                        <IoBedOutline></IoBedOutline><span>{data.props.bedCount} Beds</span>
                      </div>
                    </>
                  ) : null}

                </div>
                <div className="villaInformations">
                  <h2 className="vd_titleH2">Villa Description</h2>
                  <Description desc={data.desc} pool={data.pool} />

                </div>
                <div className="vd_bedrooms">
                  <h2 className="vd_titleH2">Where you'll sleep</h2>
                  <BedRooms rooms={data.rooms} />
                </div>
                <div className="vd_rules">
                  <h2 className="vd_titleH2">Villa Rules</h2>
                  <VillaRules rules={data.rules} />
                </div>
                <div className="vd_distances">
                  <h2 className="vd_titleH2">Distances</h2>
                  <VillaDistances distances={data.distances} />
                </div>
                <div className="vd_map">
                  <h2 className="vd_titleH2">Look at the Location of Our Villa</h2>
                  <Map />
                </div>

                <div className="vd_periodicPrices">
                  <h2 className="vd_titleH2">Periodic Prices</h2>
                  <PeriodicPrices periodicPrices={data.prices} />
                </div>
                <div className="vd_facilities">
                  <h2 className="vd_titleH2">Facilities</h2>
                  <Facilities facilities={data.facilities} />
                </div>
                

              </div>
              <div className="vd_right">
                <DetailEnquiryForm calendar={data.prices} rules={data.rules} vName={data.name} vImg={data.photos} vId={data._id} closeDates={data.calendar} />
                <div className="shareVillas">
                  <h4>Share {data.name} on Social Media</h4>
                  <ul>
                    <li>
                      <FacebookShareButton url={`https://talaturizm.com/${location.pathname}`}>
                        <FacebookIcon round />
                      </FacebookShareButton>
                    </li>
                    <li>
                      <FacebookMessengerShareButton url={`https://talaturizm.com/${location.pathname}`}>
                        <FacebookMessengerIcon round />
                      </FacebookMessengerShareButton>
                    </li>
                    <li>
                      <WhatsappShareButton url={`https://talaturizm.com/${location.pathname}`}>
                        <WhatsappIcon round />
                      </WhatsappShareButton>
                    </li>
                    <li>
                      <TwitterShareButton url={`https://talaturizm.com${location.pathname}`}>
                        <TwitterIcon round />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <TelegramShareButton url={`https://talaturizm.com/${location.pathname}`}>
                        <TelegramIcon round />
                      </TelegramShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton url={`https://talaturizm.com/${location.pathname}`}>
                        <LinkedinIcon round />
                      </LinkedinShareButton>
                    </li>

                  </ul>
                </div>

              </div>
              <div className="vd_calendar">
                  <h2 className="vd_titleH2">Availability Calendar</h2>
                  <Calendar calendar={data.prices} closeDates={data.calendar} showenMonthCount={2} />
                </div>
            </div>



          </div>
        </div>
        {openPhotosModal && <div className="villaPhotosModal">
          <div className="villaPModal">
            <VillaMedias slidesPerView={1} photos={data.photos} modal={true} setOpenPhotosModal={setOpenPhotosModal} />
          </div>
        </div>}
      </div>

    </>
  )
}

export default Detail;