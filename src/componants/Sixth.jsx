import React from 'react'

const Sixth = () => {
  return (
    <>
    <div className='cont-head'>
        <h1 className='text-5xl font-bold'>Contact us</h1>
    </div>
    <div className='contect-us'>
        <div className="information">
        <div className="container-5">
        <form id="contactForm">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="button-mid">
            <button className="button">
                Submit
            </button>
        </div>
        </form>
    </div>
        </div>
        <div className="map">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5222084769457!2d75.83011498214498!3d22.63431049582971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbd4b18ae343%3A0x651885ee68033cc7!2sIMC%20Palash%20Parishar%201%2C%20B01%20Building!5e0!3m2!1sen!2sin!4v1744092549195!5m2!1sen!2sin"
                width={500}
                height={500}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
        </div>
    </div>
    </>
  )
}

export default Sixth