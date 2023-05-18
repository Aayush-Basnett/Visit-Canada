import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Provinces } from '../products';

function Slider() {
  const pro = Provinces;

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: ["<", ">"],
    navClass: ["owl-prev", "owl-next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
};
  return (
    <div className='slider'>
              <OwlCarousel className='w-100 owl-theme owl-carousel ' {...options} loop margin={10} nav dots={false} >
                {
                  pro.map((a)=>(

              <div className="item">
              <div 
            style={{
                background:`linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)), url(${a.img}), no-repeat `,
                height: '80vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',

            }}
             className='d-flex'>  
            <div data-aos="zoom-in" className="row text-light d-flex align-items-center justify-content-between">
              <div className="col-lg-7 p-5">
                <h1>{a.title}</h1>
                <p>{a.description}</p>
              </div>
              <div className="col-lg-5 justify-content-between">
                <img className='foto' src={a.map} alt="" />
              </div>
            </div>
              </div>
                      </div>
                  ))
                }
            </OwlCarousel>
    </div>
  )
}

export default Slider