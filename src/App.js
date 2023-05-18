import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { PRODUCTS } from './products';
import { createContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Clock from 'react-live-clock';
import Province from './pages/Province';
import ProvinceDetail from './pages/ProvinceDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductDetail from './pages/ProductDetail';
import NatMan from './pages/NatMan';
import Tips from './pages/Tips';
export const ProductContex = createContext();


function App() {
  const clock =<Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Toronto'} />
  const [product, setProduct] = useState(PRODUCTS)

   useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div>
      <ProductContex.Provider value={{...product, clock, AOS}}>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/province" element={<Province />} />
        <Route path="/province-detail/:dets/:loc" element={<ProvinceDetail />} />
        <Route path="/detail/:dets/:loc" element={<ProductDetail />} />
        <Route path="/nat/:video/:cat/:disc" element={<NatMan />} />
        <Route path="/tips/:video" element={<Tips />} />

      </Routes>
      <Footer/>
      </ProductContex.Provider>


    </div>
  );
}

export default App;
