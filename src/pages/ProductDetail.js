import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Weather from '../components/Weather';
import { PRODUCTS, Provinces } from '../products'

function ProductDetail() {
    const { dets, loc } = useParams();
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const product = PRODUCTS.find(p => p.id=== parseInt(dets));
    //parseInt converts string to integer. mathi ko eg ma == matra use gareko vaye 
    //parseInt use garna pardaina thiyo but since using === minimizes chances of error
    //we use parseInt. note: === checks both data type and value.

    const moreProduct = PRODUCTS.filter(p => p.location=== (loc));
    const PROVINCES = Provinces.find(p=> p.title ===(loc));

  return (
    <div className='product-detail'>
        <div className="parallax d-flex text-light  justify-content-center" 
        style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)),url(${product.img})`
        }}
        >
            <div className=" d-flex align-items-center">
                <ul>
                    <li><h1 className='main'>{product.title}</h1> <br /></li>
                    <li><p className='text-center'>-{product.location}</p>
</li>

                </ul>

            </div>
        </div>
        <div className="container">
            <div className="row  my-5 py-5">
                <div className="col-lg-6 ">
                    <div className="text-light">
                        <Weather
                        key={PROVINCES.id}
                        {...PROVINCES}
                        />
                    </div>
                </div>
                
                <div className="col-lg-6">
                   <h1>About {product.title}</h1>
                   <p> {product.description}</p>
                </div>
            </div>

            <h1>Explore more of {product.location}</h1>
            <div className="row">

            {
                moreProduct.map((a)=>(
                    <div className="col-lg-4 my-5">
                        <div className="cool-card text-light">
                        <Link to={`/detail/${a.id}/${a.location}`}>

                    <article onClick={goToTop} className="card overflow-hidden">
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

export default ProductDetail