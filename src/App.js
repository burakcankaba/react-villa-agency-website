
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './layout/Layout';
import VillaHome from './pages/villa/home/Home';
import VillaList from './pages/villa/list/List';
import VillaDetail from './pages/villa/detail/Detail';
import VillaReservation from './pages/villa/reservation/Reservation';
import TransferHome from './pages/transfer/home/Home';
import TransferList from './pages/transfer/list/List';
import TransferDetail from './pages/transfer/detail/Detail';
import RentaCarHome from './pages/rentacar/home/Home';
import RentaCarList from './pages/rentacar/list/List';
import RentaCarDetail from './pages/rentacar/detail/Detail';
import TourHome from './pages/tour/home/Home';
import TourList from './pages/tour/list/List';
import TourDetail from './pages/tour/detail/Detail';
import HotelHome from './pages/hotel/home/Home';
import HotelList from './pages/hotel/list/List';
import HotelDetail from './pages/hotel/detail/Detail';
import ScrollTop from './components/scrollTop/ScrollTop';
import Documents from './pages/others/documents/Documents';
import NotFound from './pages/others/404/NotFound';



function App() {
  return (

    <BrowserRouter>
      <Layout>
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<VillaHome />} />
          <Route path="/villalist" element={<VillaList />} />
          <Route path="/villadetail/:id" element={<VillaDetail />} />
          <Route path="/reservation" element={<VillaReservation />} />
          <Route path="/transfer" element={<TransferHome />} />
          <Route path="/transferlist" element={<TransferList />} />
          <Route path="/transferdetail/:id" element={<TransferDetail />} />
          <Route path="/rentacar" element={<RentaCarHome />} />
          <Route path="/rentacarlist" element={<RentaCarList />} />
          <Route path="/rentacardetail/:id" element={<RentaCarDetail />} />
          <Route path="/tour" element={<TourHome />} />
          <Route path="/tourlist" element={<TourList />} />
          <Route path="/tourdetail/:id" element={<TourDetail />} />
          <Route path="/hotel" element={<HotelHome />} />
          <Route path="/hotellist" element={<HotelList />} />
          <Route path="/hoteldetail/:id" element={<HotelDetail />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="*" exact={true} component={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
