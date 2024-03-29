import React from 'react'
import './ProjectSectionComponent.css'

const ProjectSectionComponent = () => {
  return (
    <>
        <div className="container-fluid projectbackgroung">

            <div className="row text-white text-center p-5">
                <h1 className='animate__animated animate__fadeIn'> Projects </h1>
            </div>

            {/* <div className="row">
                <div className="col-10">
                    
                </div>
                <div className="col-2">
                    
                </div>
            </div> */}


            <div className="row">
                <div className="col-md-1 col-sm-12 col-12"></div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div className="row text-white ps-5 pe-5 pt-5">
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="img-fluid">
                                <img src="./images/Projects/p1.png" className='w-100' alt="" />
                                <h3 className='text-center pt-4'> Ecommerce Website </h3>
                                {/* <p className='text-center'>This E-commerce project utilizes HTML, CSS, Bootstrap, React.js, and React Redux to recreate interface that "Transform your shopping experience into a journey of discovery! 🌟 Explore "Craft Magic" , your destination for unique and handmade treasures. Connect with skilled artisans, support the craft community, and bring a touch of creativity into your life. Join us in celebrating the art of crafting! #HandmadeFinds #CraftingCommunity"</p> */}
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-2 col-12"></div>
                    </div>
                    <div className="row text-white ps-5 pe-5 pt-5">
                        <div className="col-md-5 col-sm-2 col-12"></div>
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="img-fluid">
                                <img src="./images/Projects/p2.png" className='w-100' alt="" />
                                <h3 className='text-center pt-4'> Travel Website </h3>
                                {/* <p className='text-center'>This Travel Website project (TravelVista) utilizes HTML, CSS, and Bootstrap to recreate interface that believe in the power of meaningful travel. Discover unique destinations, connect with like-minded explorers, and plan your next adventure seamlessly. Your passport to a world of unforgettable experiences awaits! #TravelCommunity #ExploreTogether"</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row text-white ps-5 pe-5 pt-5">
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="img-fluid">
                                <img src="./images/Projects/p4.png" className='w-100' alt="" />
                                <h3 className='text-center pt-4'> Netflix Clone </h3>
                                {/* <p className='text-center'>I recently crafted a Netflix front page clone using HTML and CSS. Leveraging my skills in responsive design and user interface development, I meticulously replicated the sleek and immersive Netflix browsing experience. This project showcases my proficiency in creating visually appealing and functional interfaces.</p> */}
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-2 col-12"></div>
                    </div>
                    {/* <div className="row text-white ps-5 pe-5">
                        <div className="col-md-5 col-sm-2 col-12"></div>
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="img-fluid">
                                <img src="./images/Projects/p5.png" className='w-100' alt="" />
                                <h3 className='text-center pt-4'>Portfolio Website Website </h3>
                                <p className='text-center'></p>
                            </div>
                        </div> 
                    </div>*/}
                    {/* <div className="row text-white ps-5 pe-5">
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="img-fluid">
                                <img src="./images/Projects/p6.png" className='w-100' alt="" />
                                <h3 className='text-center pt-4'> Library Website </h3>
                                <p className='text-center'></p>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-2 col-12"></div>
                    </div> */}
                </div>
                <div className="col-md-1 col-sm-12 col-12"></div>
            </div>



        </div>
    </>
  )
}

export default ProjectSectionComponent