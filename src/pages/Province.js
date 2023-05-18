import React from 'react'
import { Provinces } from '../products'
import Weather from '../components/Weather';
import { Link } from 'react-router-dom';

function Province() {
    const pro = Provinces;



  return (
    <div className='province' >
        {
            pro.map((a)=>(

                <div style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)),url(${a.img})`
            }}
                 className="parallax">
                    <div className="row text-light d-flex align-items-center justify-content-between">
              <div data-aos="zoom-in" className="col-lg-6 p-5">
                <h1 className='pt-3 mt-3'>{a.title}</h1>
                <p>{a.description}</p>
                <div className="bton">

                               <Link className="btn" to={`/province-detail/${a.id}/${a.title}`} role="button">Explore All</Link>
                </div>

              </div>
              <div data-aos="zoom-in" className="col-lg-6 justify-content-between">
                <div className="intel text-end pt-0 mt-5">
                <h2 className=''>
                </h2>
                <h2> 
            <Weather key={a.id} {...a}/>
       </h2>

                </div>
              </div>
            </div>
            
                 </div>
                 
            ))
        }
       
       
    </div>
  )
}

export default Province