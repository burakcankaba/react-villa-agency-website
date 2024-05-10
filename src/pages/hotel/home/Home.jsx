import React from 'react'
import Header from '../../../components/hotelComponent/header/Header'
import Hotels from "../../../components/hotelComponent/hotel/Hotel"
import WhoWeAre from "../../../components/whoWeAre/WhoWeAre"
import OurServices from "../../../components/ourServices/OurServices"

const Home = () => {
  return (
    <>
        <Header></Header>
        <div className="transferHome">
        <h1 className="homeTitle">Best Price Hotels</h1>
        <Hotels/>
        
        <WhoWeAre/>
        <h1 className="homeTitle">Our Services</h1>
        <OurServices></OurServices>
        </div>
    </>
  )
}

export default Home