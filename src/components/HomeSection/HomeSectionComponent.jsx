import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './HomeSectionComponent.css'
import { Link } from 'react-router-dom'
import ProjectSectionContainer from '../../containers/ProjectSectionContainer'
import AboutSectionContainer from '../../containers/AboutSectionContainer'
import CertificateSectionContainer from '../../containers/CertificateSectionContainer'
import ContactSectionContainer from '../../containers/ContactSectionContainer'
import ResumeSectionContainer from '../../containers/ResumeSectionContainer'
import SkillsSectionContainer from '../../containers/SkillsSectionContainer'

const HomeSectionComponent = () => {

  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const typedTextRef = useRef();

  
  useEffect(() => {
    if (typedTextRef.current) {
      const typed_strings = typedTextRef.current.dataset.strings;
      const typed = new Typed(typedTextRef.current, {
        strings: typed_strings.split(', '),
        typeSpeed: 130,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
        showCursor: false,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []); 

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className="container-fluid portfoliomaincont overflow-scroll scrollscroll">


        <div id="nav-section" className="row row1st pt-4 pb-4 mb-4 sticky-to">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link active" onClick={() => smoothScrollTo('home-section')}><span className="allnavbarlinks">Home</span></Link>
                  </li>
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link" onClick={() => smoothScrollTo('project-section')}><span className="allnavbarlinks">Projects</span></Link>
                  </li>
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link" onClick={() => smoothScrollTo('about-section')}><span className="allnavbarlinks">About</span></Link>
                  </li>
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link" onClick={() => smoothScrollTo('resume-section')}><span className="allnavbarlinks">Resume</span></Link>
                  </li>
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link" onClick={() => smoothScrollTo('skills-section')}><span className="allnavbarlinks">Skills</span></Link>
                  </li>
                  <li className="nav-item ps-3 pe-3">
                    <Link className="nav-link" onClick={() => smoothScrollTo('contact-section')}><span className="allnavbarlinks">Contact</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>


        <div id="home-section" className="row row2nd align-items-center pb-5">
          <div className="mx-auto text-center text-white m-5 p-5">
            <div className="row p-5 m-5">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                <h1 className="display-3 text-uppercase text-pink mb-2">Garima Tomar</h1>
                <div className="typed-text-container">
                  <h1 ref={typedTextRef} className="typed-text-output d-inline font-weight-lighter text-white" data-strings=" Web Developer, Front-End Developer, Software Engineer"></h1>
              </div>
            </div>
            <h3>
              <a href="GarimaCVNew.pdf" className=" btncv btn btn-outline-light mr-5" download="Garima_CV.pdf" type="application/pdf" >Download CV</a>
            </h3>
          </div>
        </div>

        <div id="about-section" className="row row3rd">
          <AboutSectionContainer/>
        </div>

        <div id="resume-section" className="row row4th">
          <ResumeSectionContainer/>
        </div>

        <div id="skills-section" className="row row5th">
          <SkillsSectionContainer/>
        </div>

        <div id="project-section" className="row row6th">
          <ProjectSectionContainer/>
        </div>

        <div id="certificate-section" className="row row7th">
          <CertificateSectionContainer/>
        </div>

        <div id="contact-section" className="row row8th">
          <ContactSectionContainer/>
        </div>
        
        <span className="top-arrow-btn" onClick={() => smoothScrollTo('nav-section')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffa3e8" d="M15 20H9v-8H4.16L12 4.16L19.84 12H15"/></svg>
          <span className="arrow-ring outer-ring"></span>
          <span className="arrow-ring inner-ring"></span>
        </span>

      </div>
    </>
  )
}

export default HomeSectionComponent





// <h2 className='mr-auto heading-h2'>
// <span className="gsap-reveal">
//   Resume<span className={`${isCoverVisible ? 'cover' : 'cover-visible'}`}></span>
// </span>
// </h2>





// import React, { useEffect, useRef, useState } from 'react';
// import Typed from 'typed.js';
// import './HomeSectionComponent.css'
// import { Link } from 'react-router-dom'
// import ProjectSectionContainer from '../../containers/ProjectSectionContainer'
// import AboutSectionContainer from '../../containers/AboutSectionContainer'
// import CertificateSectionContainer from '../../containers/CertificateSectionContainer'
// import ContactSectionContainer from '../../containers/ContactSectionContainer'
// import ResumeSectionContainer from '../../containers/ResumeSectionContainer'
// import SkillsSectionContainer from '../../containers/SkillsSectionContainer'

// const HomeSectionComponent = () => {

//   const typedTextRef = useRef();
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       if (scrollTop > 100) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (typedTextRef.current) {
//       const typed_strings = typedTextRef.current.dataset.strings;
//       const typed = new Typed(typedTextRef.current, {
//         strings: typed_strings.split(', '),
//         typeSpeed: 130,
//         backSpeed: 20,
//         smartBackspace: false,
//         loop: true,
//         showCursor: false,
//       });

//       return () => {
//         typed.destroy();
//       };
//     }
//   }, []); 

//   const smoothScrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   return (
//     <>
//       <div className="container-fluid portfoliomaincont overflow-scroll scrollscroll">


//         <div id="nav-section" className="row row1st pt-4 pb-4 sticky-to">
//           <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link active" onClick={() => smoothScrollTo('home-section')}><span className="allnavbarlinks">Home</span></Link>
//                   </li>
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link" onClick={() => smoothScrollTo('project-section')}><span className="allnavbarlinks">Projects</span></Link>
//                   </li>
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link" onClick={() => smoothScrollTo('about-section')}><span className="allnavbarlinks">About</span></Link>
//                   </li>
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link" onClick={() => smoothScrollTo('resume-section')}><span className="allnavbarlinks">Resume</span></Link>
//                   </li>
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link" onClick={() => smoothScrollTo('skills-section')}><span className="allnavbarlinks">Skills</span></Link>
//                   </li>
//                   <li className="nav-item ps-3 pe-3">
//                     <Link className="nav-link" onClick={() => smoothScrollTo('contact-section')}><span className="allnavbarlinks">Contact</span></Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>



//         <div id="home-section" className="row row2nd align-items-center pb-5">
//           <div className="mx-auto text-center text-white m-5 p-5">
//             <div className="row p-5 m-5">
//               <h3 className="text-white font-weight-normal mb-3">I'm</h3>
//                 <h1 className="display-3 text-uppercase text-pink mb-2">Garima Tomar</h1>
//                 <div className="typed-text-container">
//                   <h1 ref={typedTextRef} className="typed-text-output d-inline font-weight-lighter text-white" data-strings=" Web Developer, Front-End Developer, Software Engineer"></h1>
//               </div>
//             </div>
//             <h3>
//               <a href="GarimaCVNew.pdf" className=" btncv btn btn-outline-light mr-5" download="Garima_CV.pdf" type="application/pdf" >Download CV</a>
//             </h3>
//           </div>
//         </div>

//         <div id="about-section" className="row row3rd">
//           <AboutSectionContainer/>
//         </div>

//         <div id="resume-section" className="row row4th">
//           <ResumeSectionContainer/>
//         </div>

//         <div id="skills-section" className="row row5th">
//           <SkillsSectionContainer/>
//         </div>

//         <div id="project-section" className="row row6th">
//           <ProjectSectionContainer/>
//         </div>

//         <div id="certificate-section" className="row row7th">
//           <CertificateSectionContainer/>
//         </div>

//         <div id="contact-section" className="row row8th">
//           <ContactSectionContainer/>
//         </div>
//         {showScrollButton && (
//           <button className="top-arrow-btn" onClick={() => smoothScrollTo('nav-section')}>
//             top
//           </button>
//         )}

//       </div>
//     </>
//   )
// }

// export default HomeSectionComponent