import React from 'react'

const Firstpage = () => {
  return (
    <div className="main-1">
        <div className="content">
            <h1 className='text-6xl font-bold'>
                Repair and
                <br/>
                Maintenance
                <br/>
                Services
            </h1>
            <p>
                A platform designed to connect users with verified home service providers like electricians,
                plumbers, and other skilled professionals. It also allows freelancers to bid on service requests,
                ensuring competitive pricing and a variety of options for users.
            </p>
            <button className="button">
                Contact Us
            </button>
        </div>
        <div className="slider">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="../images/electrician.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="../images/plumber.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="../images/mechanic.jpeg" className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Firstpage