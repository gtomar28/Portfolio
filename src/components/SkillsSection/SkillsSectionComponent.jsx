import React, {useState, useEffect} from 'react'
import './SkillsSectionComponent.css'
import ProgressBar from "@ramonak/react-progress-bar";

const SkillsSectionComponent = () => {


  // const [htmlPercentage, setHtmlPercentage] = useState(0);
  // const [cssPercentage, setCssPercentage] = useState(0);
  // const [javascriptPercentage, setJavascriptPercentage] = useState(0);
  // const [reactPercentage, setReactPercentage] = useState(0);

  // useEffect(() => {
  //   const animatePercentage = (targetPercentage, setter) => {
  //     let currentPercentage = 0;
  //     const step = 1; 
  //     const duration = 90;

  //     const intervalId = setInterval(() => {
  //       currentPercentage += step;
  //       if (currentPercentage >= targetPercentage) {
  //         clearInterval(intervalId);
  //         currentPercentage = targetPercentage;
  //       }
  //       setter(currentPercentage);
  //     }, duration);
  //   };

  //   animatePercentage(99, setHtmlPercentage);
  //   animatePercentage(90, setCssPercentage);
  //   animatePercentage(75, setJavascriptPercentage);
  //   animatePercentage(80, setReactPercentage);
  // }, []); 



  return (
    <>
      <div className="container-fluid p-5 text-white">
        <div className="row"><h1 className='heading-h1 text-center'> My Skills</h1></div>
        <div className="row">
          <div className="col-lg-1 col-md-2 col-sm-1 "></div>

          <div className="col-lg-10 col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>HTML</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={90} customLabel="90%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>CSS</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={70} customLabel="70%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Javascript</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={74} customLabel="74%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Bootstrap</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={87} customLabel="87%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Tailwind</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={50} customLabel="50%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>React JS</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={80} customLabel="80%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Redux</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={40} customLabel="40%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Next Js</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={30} customLabel="30%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>C</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={75} customLabel="75%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>C++</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={70} customLabel="70%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Core Java</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={72} customLabel="72%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>SQL</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={65} customLabel="65%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Git</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={65} customLabel="65%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>Github</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={65} customLabel="65%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <span>DSA</span>
                  </div>
                  <div className="col-md-9">
                    <span><ProgressBar completed={45} customLabel="45%" height='2.5vh' width='90%' labelSize='14px' bgColor='#fec0ef' labelColor='#001f2c' /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-1 "></div>
        </div>
      </div>
    </>
  )
}

export default SkillsSectionComponent