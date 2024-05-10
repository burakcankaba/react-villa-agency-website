import React from 'react'
import Cars from '../../../components/transferComponent/cars/Cars'
import Header from '../../../components/transferComponent/header/Header'
import "./home.scss"
import WhoWeAre from "../../../components/whoWeAre/WhoWeAre"
import OurServices from '../../../components/ourServices/OurServices'
const Home = () => {
  return (
    <>
        <Header></Header>
        <div className="transferHome">
        <h1 className="homeTitle">Best Transfer Cars</h1>
        <Cars/>
        
        <WhoWeAre/>
        <h1 className="homeTitle">Our Services</h1>
        <OurServices></OurServices>
        </div>
    </>
  )
}

export default Home