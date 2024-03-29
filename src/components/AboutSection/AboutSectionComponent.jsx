import React from 'react'
import './AboutSectionComponent.css'

const AboutSectionComponent = () => {

    const handleEmailClick = () => {
      const emailAddress = 'tomar.gt28@gmail.com';
      const subject = '';
      const body = '';
  
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      window.location.href = mailtoLink;
    };


  return (
    <>
      <div className="container-fluid">
        <div className="row p-5 text-center text-white">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-12 align-self-center">
            <div className="row">
              <div className="col-md-2 col-sm-12 col-12"></div>
              <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center ">
                <img className='img-fluid imgprofileabout' src="./images/Self/profile22.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12 align-self-center">
            <div className="col-md-10 col-sm-12 col-12 text-white pt-5 ">
              <h3>Front End Developer & Software Engineer</h3>
              <p>Hey, I am Garima Tomar</p>
              <p> ✔ Passionate programmer with hands-on experience in FrontEnd development.</p>
              <p> ✔ Interested in solving problems real-life problems with lots of Data Structures.</p>
              <p> ✔ Exploring the new technology</p>
              <p>✔ I'm seeking a position that will allow me to expand my knowledge and abilities while still allowing me to 
                    accomplish outstanding work and that will help me grow as a Software Engineer.</p>
              
              
              <div className="row mb-3 ps-3">
                <div className="col-sm-6 col-sm-6 col-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                <div className="col-sm-6 col-sm-6 col-6 py-2"><h6>Experience: <span className="text-secondary"> 10 Months</span></h6></div>
                <div className="col-sm-6 col-sm-6 col-6 py-2"><h6>Phone: <span className="text-secondary">+91 98211XXXXX</span></h6></div>
                <div className="col-sm-6 col-sm-6 col-6 py-2"><h6>Email: <span className="text-secondary">tomar.gt28@gmail.com</span></h6></div>
                <div className="col-sm-6 col-sm-6 col-6 py-2"><h6>Address: <span className="text-secondary">New Delhi, India</span></h6></div>
                {/* <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div> */}
              </div>


              <p className='ps-3 pt-4'><button className='btn btn-outline-light btnmail ps-4 pe-4 fw-bold' onClick={handleEmailClick}>Hire Me</button></p>
            </div>
            <div className="col-md-2 col-sm-12 col-12"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSectionComponent