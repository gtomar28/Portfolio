import React from 'react'
import './ResumeSectionComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, } from '@fortawesome/free-solid-svg-icons';

const ResumeSectionComponent = () => {
  return (
    <>
      <div className="conatiner-flui resume_bg">
        <div className="row p-5 text-center text-white">
          <h1>Resume</h1>
        </div>
        <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="row text-white">
                    <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                      <div className="row">
                        <h3 className="mb-4">My Education</h3>
                        <div className="border-left borderllight ps-3 pt-3 pl-4 ml-2">
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">Master Of Computer Application</h5>
                                  <p className="mb-2"><strong>DAV INSTITUTE OF TECHNOLOGY AND MANAGEMENT</strong></p>
                                  <p className="mb-2"><small>| Affiliated by MDU |</small></p>
                                  <p className="mb-2"> <img src="img/date.png" alt="" width="40px"/> <strong>2022 - 2024</strong> | <img src="img/location.png" alt="" width="40px"/> <strong>Delhi-NCR , India</strong> </p>
                                </div>

                            </div>
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">Bachelor of Computer Applications</h5>
                                  <p className="mb-2"><strong>GOVERNMENT COLLEGE FOR GIRLS</strong></p>
                                  <p className="mb-2"><small>| Affiliated by MDU |</small></p>
                                  <p className="mb-2"> <img src="img/date.png" alt="" width="40px"/> <strong>2018 - 2021</strong> | <img src="img/location.png" alt="" width="40px" /> <strong>Delhi-NCR , India</strong> </p>
                                </div>
                            </div>
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">Aggarwal Public School</h5>
                                  <p className="mb-2"><strong>12th |</strong><small> CBSE</small> </p>
                                  <p className="mb-2"> <img src="img/date.png" alt="" width="40px"/> <strong>2017 - 2018</strong> | <img src="img/location.png" alt="" width="40px" /> <strong>Delhi-NCR , India</strong> </p>
                                </div>
                            </div>
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">Aggarwal Public School</h5>
                                  <p className="mb-2"><strong>10th |</strong><small> CBSE</small> </p>
                                  <p className="mb-2"> <img src="img/date.png" alt="" width="40px"/> <strong>2016 - 2017</strong> | <img src="img/location.png" alt="" width="40px" /> <strong>Delhi-NCR , India</strong> </p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="row text-white">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                      <div className="row">
                        <h3 className="mb-4">My Experience</h3>
                        <div className="border-left borderllight ps-3 pt-3 pl-4 ml-2">
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">ASSOCIATE FULL STACK DEVELOPER</h5>
                                  <p className="mb-2"><strong>Scriza Private Limited</strong> | <small>Aug 2023 - Present</small></p>
                                  <p>Currently working as a Associate Full-stack Developer.<br/>
                                  I had practical training in React.js, Node.js, AWS, Gitlab</p>
                                </div>

                            </div>
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">FRONTEND DEVELOPER INTERN</h5>
                                  <p className="mb-2"><strong>Scriza Private Limited</strong> | <small>June 2023 - Aug 2023 </small></p>
                                  <p>
                                    Responsible for the development of websites based on the company customer's needs.
                                    Maintained and improved proprietary software used internally by the company.
                                    For internal use, a dynamic website was created using <br/>[ HTML, CSS, Bootstrap, WordPress, and JavaScript ].
                                  </p>
                                </div>
                            </div>
                            <div className="position-relative mb-5">
                                <span className='faloctioniconn'><FontAwesomeIcon icon={faLocationCrosshairs}/></span>
                                <div className="content ps-2">
                                  <h5 className="font-weight-bold mb-1">SOFTWARE TESTING INTERN</h5>
                                  <p className="mb-2"><strong>PHN Technology Pvt Ltd, Pune.</strong> | <small>01 May 2023 - 31 May 2023 </small></p>
                                  <p>
                                    I obtained practical experience as a software testing intern by working on client projects and interacting with a group of developers. I gained expertise in Manual Testing.
                                  </p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                </div>
            </div>
    </div>


    </>
  )
}

export default ResumeSectionComponent