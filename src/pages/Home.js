import React, { useContext, useEffect } from 'react'
import { ProductContex } from '../App'
import Accordian from '../components/Accordian';
import Carousel from '../components/Carousel';
import Slider from '../components/Slider'
import { PRODUCTS } from '../products';
import MapBackground from '../components/MapBackground';
import { Link } from 'react-router-dom';

function Home() {
   
    const pro = PRODUCTS;
   const AOS = useContext(ProductContex)
    
    const {clock} = useContext(ProductContex)


    
  return (
    <div className='home'>
        <section className='back1 d-flex align-items-center justify-content-center'>
        <div data-aos="zoom-in" className="text-center text-light pt-5">
            <p>The Views Are Unbe-Leaf-Able.</p>
            <strong><h1 className='d-flex  '>Cool People Choose Canada.</h1></strong>
        </div>
    
        </section>

        <section className='back2'>
        <div className="container">
          <ul className='d-flex py-5 my-5 justify-content-between'>
            <li><h1 data-aos="zoom-out-right" className=''>
                Latest From Us</h1></li>
            <li>                <Link className="btn" to="/province" role="button">Explore All</Link>
</li>
          </ul>
            

                
                <Carousel/>
        </div>
                <MapBackground/>
                <Slider/>
              <div className="container">

                <div className="row d-flex justify-content-between">
                  <div className="col-lg-6">
                  <h1 data-aos="zoom-out-right" className='my-5'>Few Common <br /> Questions</h1>

                <Accordian/>

                  </div>
                  <div className="col-lg-5 d-flex justify-content-end">
                    <img data-aos="fade-right" className='w-100' src="https://thumbs.gfycat.com/MaleCheerfulDrever-size_restricted.gif" alt="" />
                  </div>
                </div>
                
              </div>
        </section>

        <section className='back3'>
          <div className="">
          <h1 data-aos="zoom-out-right" className='my-5 container'>For Glowing Hearts</h1>
            <div className=" ">
              <ul className=''>
                <li>
            <Link to="/nat/production ID_4331635.mp4/Manmade/Ah, the true North, strong and free! There’s plenty to see and do in this country whether the vast outdoors of Canada’s wilder provinces and territories or bustling metropolises like Toronto and Montreal are calling your name. No matter your preference, Canada has historical sites, attractions, parks, and landmarks for every person and interest.">

              <div data-aos="flip-up" className="zoom position-relative">
                <div className="box zoom"></div>
              <video  autoPlay="autoplay" muted loop src={require(`../assets/production ID_4331635.mp4`)}></video>
              <div className=" text-light content position-absolute slide-top"><h3>Manmade Attractions</h3></div>
              </div>
            </Link>

                </li>

                <li>
            <Link to="/nat/pexels-tommy-t-10738254.mp4/Natural/Shimmering glaciers and vibrant lakes, jagged ice-capped peaks, dense forest and alpine meadows, not to mention the major wildlife roaming within — the Canadian Rockies delivers a montage of landscapes as quintessentially Canadian as maple syrup.">
              
              <div data-aos="flip-up" className="position-relative ">
              <div className="box"></div>
                <video autoPlay="autoplay" muted loop src={require("../assets/pexels-tommy-t-10738254.mp4")}></video>
                <div className="text-light content position-absolute "><h3>Natural Attractions</h3></div>

              </div>
            </Link>

                </li>
              </ul>


            </div>

            <h1></h1>
          </div>
        </section>
        

        
    </div>
  )
}

export default Home