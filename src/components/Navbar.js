import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContex } from '../App'

function Navbar() {
  const [colo, setColo] = useState('transparent')
  const [txt, settxt] = useState('light')
  const [disp, setDisp] = useState('')
  window.addEventListener('scroll',function(){
    if(window.scrollY > 300){
      setColo('brand')
      setDisp('none')
    }
    else if(window.scrollY < 300){
      setColo('transparent')
      setDisp('')

    }
  })
  const {clock} = useContext(ProductContex)

  return (
    <div className='navigation'>
        <nav className={`navbar navbar-dark fixed-top navbar-expand-lg bg-${colo}`}>
  <div className="container ">
    <Link className="navbar-brand zoom" to="/">
        <img className={`${disp} `} src="https://media1.giphy.com/media/Jx9n9pSg9JUJi/200w.gif?cid=6c09b952jx4i107oq9lbjog4wn2sr4mbf1xdmrlrswkkj608&rid=200w.gif&ct=g" alt="" />
        Visit Canada</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item zoom">
          <Link className=" nav-link" aria-current="page" to="/province">Provinces</Link>
        </li>
        
        <li className="nav-item zoom">
          <Link className="nav-link" to="/tips/production ID_4331635.mp4">Pratical Tips</Link>
        </li>
        
      </ul>
          <a className="nav-link zoom" href="#">Toronto <br /> {clock}</a>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar