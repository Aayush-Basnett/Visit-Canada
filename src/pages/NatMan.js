import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../products';


function NatMan() {
  const {video, cat, disc} = useParams();
  const [search, setSearch] = useState("")
  
  const handleSearchChange = (event) =>{
    setSearch(event.target.value);
  }
  
  const places = PRODUCTS.filter(p => p.category === cat && (p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || p.location.toLocaleLowerCase().includes(search.toLocaleLowerCase())  ));
  
  console.log(search)
  return (

    <div className='natman'>
      
      <div className="position-relative">

      <div className="box"></div>
    <video className='w-100' autoPlay="autoplay" muted loop src={require(`../assets/${video}`)}>
    </video>
    <div className="text-light text-center mt-3 content position-absolute ">
      <h1>{cat} Attractions</h1>
      <p>{disc}</p>
      </div>

      </div>

      <div className="container">
        <div className="search-box">

        <input onChange={handleSearchChange} className='my-5 p-2 ' type="text" placeholder='search...'/>
        </div>
        {/* <div className="form-outline">
  <input type="search" id="form1" className="form-control" placeholder="Type query" aria-label="Search" />
</div> */}

        {
          places.length > 0?
          <div className="row">
        {
        places.map((a)=>(
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
      : <div className='min-height'>
        <h1>No results found</h1>
      </div>  
      }
      </div>
     
    </div>
  )
}

export default NatMan