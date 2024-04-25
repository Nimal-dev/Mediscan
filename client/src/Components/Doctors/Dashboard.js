import React from 'react'
import Header from './Header';
import Footer from './Footer';


function Dashboard() {
    
  return (
    <>
    <Header/>
    <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                <div className="row g-4">
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                            <p className="text-light mb-0">Expert Doctors</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                            <p className="text-light mb-0">Medical Stuff</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                            <p className="text-light mb-0">Total Patients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className=" position-relative">
                        <img className="img-fluid" src="assets/img/carousel-1.jpg" alt=""/>
                    </div>
        </div>
        </div>
    </div>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column">
                        <img className="img-fluid rounded w-75 align-self-end" src="assets/img/about-1.jpg" alt=""/>
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="assets/img/about-2.jpg" alt="" style={{marginTop: "-25%"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Experience the future of medical scan analysis with Mediscan. Whether you're a healthcare professional seeking advanced diagnostic tools or an individual taking charge of your health, our platform is here to support you every step of the way. Sign up now and unlock a new era of medical intelligence!</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Our Departments
                </h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Orthology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div> */}
            </div>
        </div>
    </div>


    {/* <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                        <h1 className="text-white mb-4">Why Choose Us</h1>
                        <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-user-md text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Experience</p>
                                        <h5 className="text-white mb-0">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"  style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-check text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Quality</p>
                                        <h5 className="text-white mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"  style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Positive</p>
                                        <h5 className="text-white mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"  style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-headphones text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">24 Hours</p>
                                        <h5 className="text-white mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="assets/img/feature.jpg" style={{objectFit: "cover"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                <h1>Our Doctors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-1.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr.Susan</h5>
                            <p className="text-primary">Orthology</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-2.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Abraham Daniel</h5>
                            <p className="text-primary">Neurology</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-3.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Anna</h5>
                            <p className="text-primary">Cardiology</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-4.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Issac</h5>
                            <p className="text-primary">Oncologists</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   


    {/* <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                <h1>What Say Our Patients!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="assets/img/testimonial-1.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="assets/img/testimonial-2.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="assets/img/testimonial-3.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <Footer/>

    </>
  )
}

export default Dashboard