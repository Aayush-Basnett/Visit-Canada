import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PRODUCTS } from '../products';
import { Link } from 'react-router-dom';


const Carousel = () => {
  const pro = PRODUCTS;
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["", ""],
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
            items: 3,

        }
    },
};

  return (
    <div data-aos="fade-up" className='carousel darkk'>
        <OwlCarousel className='w-100 owl-theme owl-carousel ' {...options} loop margin={10} nav dots={false} >
      { pro.map((a)=>(
        <Link to={`/detail/${a.id}/${a.location}`}>
    <div className="card zoom" style={{width: '25rem'}}>
        <div className="item">
  <img height='250px' src={a.img} className="card-img-top " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    {
      console.log('title: ' + a.title)
    }
    <p className="card-text">{a.description.slice(0,40)} ...</p>
  </div>
</div>


  </div></Link>
                ))}
</OwlCarousel>


    </div>
  )
}

export default Carousel