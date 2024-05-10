import React from 'react'
import Header from '../../../components/tourComponent/header/Header'
import Tours from "../../../components/tourComponent/tour/Tour";
import WhoWeAre from "../../../components/whoWeAre/WhoWeAre";
import OurServices from "../../../components/ourServices/OurServices"
import "./home.scss"
const Home = () => {
  return (
    <>
        <Header></Header>
        <div className="transferHome">
        <h1 className="homeTitle">Best Price Tours</h1>
        <Tours/>
        
        <WhoWeAre/>
        <h1 className="homeTitle">Our Services</h1>
        <OurServices></OurServices>
        </div>
    </>
  )
}

export default Home