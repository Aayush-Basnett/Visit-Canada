import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS, Provinces } from '../products'


function ProvinceDetail() {
    const { dets, loc } = useParams();

    const province = Provinces.find(p => p.id=== parseInt(dets));
    const moreProduct = PRODUCTS.filter(p => p.location=== (loc));

    console.log(moreProduct)
  return (
    <div>
        <div className="parallax d-flex text-light  justify-content-center" 
        style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)),url(${province.img})`
        }}
        >
            <div className=" d-flex align-items-center">
                <ul>
                    <li><h1 className='main'>{province.title}</h1> <br /></li>


                </ul>

            </div>
        </div>

        <div className="container">
            <div className="row">
            {
                moreProduct.map((a)=>(
                    <div className="col-lg-4 my-5">
                        <div className="cool-card text-light">
                        <Link to={`/detail/${a.id}/${a.location}`}>

                    <article onClick={()=>console.log(a.id + ' ' + a.location)} className="card overflow-hidden">
  <img className="card__background" src={a.img} alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width={1920} height={2193} />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">{a.title}</h2>
      <p className="card__description">
        Click me to learn more about {a.title}
       {/* {a.description.slice(0,50)}... */}
      </p>
    </div>
    <button className="card__button">Read more</button>
  </div>
</article>
</Link>
</div>
                    </div>


                ))
            }
            </div>
        </div>
      
    </div>
  )
}

export default ProvinceDetail