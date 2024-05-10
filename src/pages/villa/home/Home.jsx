import Featured from "../../../components/featured/Featured";
import Villa from "../../../components/villa/Villa";

import Faq from "../../../components/faq/Faq";

import "./home.scss";
import Header from "../../../components/layoutComponents/header/Header";
import WhoWeAre from "../../../components/whoWeAre/WhoWeAre";
import OurServices from "../../../components/ourServices/OurServices";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Villas guest love</h1>
          <Villa/>
          <WhoWeAre/>
          <h1 className="homeTitle">Our Services</h1>
          <OurServices/>
          <Faq/>
      </div>
      
    </div>
  )
}

export default Home;