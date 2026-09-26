import React from 'react'

const Third = () => {
  return (
    <>
     <div className="main-1">
            <div className="content">
                <h1 className='text-5xl font-bold'>
                    About us
                </h1>
                <p>
                    HomeMate is an on-demand home service platform connecting users with trusted professionals for maintenance, electrical, plumbing, and more. We ensure quality, reliability, and convenience, making home services simple, fast, and hassle-free for every household
                </p>
                <button className="button">
                    Read More
                </button>
            </div>
            <div className="slider">
                <img src="../images/img-1.jpg" alt="" />
            </div>
        </div>
        <hr/>
        <div className="main-1">
            <div className="slider">
                <img src="../images/img-2.jpg" alt="" />
            </div>
            <div className="content">
                <h1 className='text-5xl font-bold'>
                    We Provide Professional
                    Home Services.
                </h1>
                <p>
                    At HomeMate, we provide top-quality professional services tailored to your home needs. From electrical repairs and plumbing to general maintenance, our verified experts ensure timely, reliable, and efficient solutions. We prioritize customer satisfaction, safety, and convenience—making it easier than ever to maintain your home with confidence and peace of mind.
                </p>
                <button className="button">
                    Read More
                </button>
            </div>
        </div>
        <hr></hr>
    </>
  )
   
}

export default Third