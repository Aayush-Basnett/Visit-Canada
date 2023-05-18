import React from 'react'
import { useParams } from 'react-router-dom';
import { TIPS } from '../products';

function Tips() {
  const {video} = useParams();
  
  return (
    <div className='tips'>
<div className="position-relative">

<div className="box"></div>
<video className='w-100' autoPlay="autoplay" muted loop src={require(`../assets/${video}`)}>
</video>
<div className="text-light text-center content position-absolute ">
<h1> Travel Tips Canada for planning and on the go
</h1>
<p></p>
</div>

</div> 

    {
      TIPS.map((a)=>(

<div style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)),url(${a.img})`
            }}
                 className="parallax">
                    <div className="row text-light d-flex align-items-center justify-content-between">
              <div data-aos="zoom-in" className="col-lg-6 p-5">
                <h1 className='pt-5 mt-5'>{a.title}</h1>
                <p>{a.description}</p>
                <div className="bton">

                               {/* <Link className="btn text-light" to={`/province-detail/${a.id}/${a.title}`} role="button">Explore All</Link> */}
                </div>

              </div>
              <div data-aos="zoom-in" className="col-lg-6 justify-content-between">
                <div className="intel text-end p-5 m-5">
                <h2 className=''>
                </h2>
                <h2> 
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

export default Tips