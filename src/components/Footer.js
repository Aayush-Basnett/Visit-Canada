import React from 'react'

function Footer() {
  return (
    <div className='foot'>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="mt-5">
    <footer className="bg-primary text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6  mb-md-0">
            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: 150, height: 150}}>
              <img src="https://media1.giphy.com/media/Jx9n9pSg9JUJi/200w.gif?cid=6c09b952jx4i107oq9lbjog4wn2sr4mbf1xdmrlrswkkj608&rid=200w.gif&ct=g" height={70} alt loading="lazy" />
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam aliquid debitis accusamus illum delectus at eum consectetur libero nobis.</p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a className="text-white ps-2" href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6  mb-md-0">
            <h5 className="text-uppercase mb-4">Canada</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem ipsum dolor sit amet.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem ipsum dolor sit amet.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem ipsum dolor sit amet consectetur adipisicing.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem, ipsum dolor.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem, ipsum dolor.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem ipsum dolor sit.</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lorem ipsum dolor sit amet consectetur.</a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-md-0">
            <h5 className="text-uppercase mb-4">Canada</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />General information</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />About </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />data</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Job</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />the visit</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Contact</a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p><i className="fas fa-map-marker-alt pe-2" />Saskatoon, Canada</p>
              </li>
              <li>
                <p><i className="fas fa-phone pe-2" />+ 01 234 567 89</p>
              </li>
              <li>
                <p><i className="fas fa-envelope pe-2 mb-0" />contact@example.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        Visit Canada
      </div>
    </footer>
  </div>
  {/* End of .container */}
</div>

  )
}

export default Footer