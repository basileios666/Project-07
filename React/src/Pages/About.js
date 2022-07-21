
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'


function About() {


    const { Comment_id } = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {

        Axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then(res => {

                console.log("getting from", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])




    return (




        <div className='app'>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="heading bold text-left">About Us</h1>
                        </div>
                    </div>
                </div>
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="breadcrumb">
                                    <li><a href="index-hospital-classic.html">Home</a></li>
                                    <li class="active">About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-6 mt-20 pr-30">
                        <h6 class="heading font-bold text-primary">Brief History</h6>
                        <h3 class="heading font-bold">Get to know us more</h3>
                        <p class="lead">American Dental Clinic is unique and distinctive because we incorporate skill, experience and technology under one roof. The work of our highly competent doctors of varying disciplines of dentistry, coupled with the use of the latest equipment and technologies ensures that each patient is treated like royalty</p>

                    </div>
                    <div class="col-lg-6 mt-20">
                        <img src="images/750-500-2.jpg" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div class="container-fluid p-0 mt-60">
                <div class="row no-gutters">
                    <div class="col-lg-4 mt-20 bg-grey-1 p-60">
                        <div class="iconbox-4 text-center">
                            <div class="iconbox-icon">
                                <i class="ion-alarm-outline"></i>
                            </div>
                            <div class="iconbox-body">
                                <h5 class="heading font-bold font-5">Family Like Care</h5>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-20 bg-grey-2 p-60">
                        <div class="iconbox-4 text-center">
                            <div class="iconbox-icon">
                                <i class="ion-bandage-outline"></i>
                            </div>
                            <div class="iconbox-body">
                                <h5 class="heading font-bold font-5">Excellent Support Staff</h5>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-20 bg-grey-1 p-60">
                        <div class="iconbox-4 text-center">
                            <div class="iconbox-icon">
                                <i class="ion-alarm-outline"></i>
                            </div>
                            <div class="iconbox-body">
                                <h5 class="heading font-bold font-5">Family Like Care</h5>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-80">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="heading-block">
                            <h3 class="heading font-bold">Bond of Trust</h3>
                            <p class="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mt-20">
                        <img src="images/750-500-1.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 mt-20">
                        <div class="tabs-1">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a href="#t1body1" class="nav-link active" aria-controls="t1body1" role="tab" data-toggle="tab">
                                        <i class="ion-people-outline icon-left"></i> Experience
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#t1body2" class="nav-link" aria-controls="t1body2" role="tab" data-toggle="tab">
                                        <i class="ion-flask-outline icon-left"></i> Facilities
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade show active" id="t1body1">
                                    <p>At the Medwise Dental our foundation lies in our ideology. We understand the complexities of dental problems and the absolute need to tackle them with utmost care, which is why our clinics consist of some of the most highly reputable doctors in the UAE, and are equipped with state of the art equipment. We ensure that no stone is left unturned in providing our patients with the best healthcare facilities.</p>

                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="t1body2">
                                    <p>Since 1985 our clinics in Dubai and Abu Dhabi have provided patients with the finest dental care treatments in UAE. Our team of highly skilled specialists, consisting of dentists and hygienists are led by Dr. Michael Ziegler in their commitment to excellence. Each of our clinics is equipped to provide a complete range of treatments; including general dentistry, state-of-the-art cosmetic dentistry, dental implants, prosthetics, children’s dentistry, veneer placements and othrodontics</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-80 pb-80 mt-80" style={{ backgroundImage: 'url(images/bg-pattern-1.png)' }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="heading-block">
                                <h3 class="heading font-bold">Patient Testimonials</h3>
                                <p class="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="testimonial-1">
                                <div class="slider-items">
                                  {/* { data.map((data) =>
                                    <div key={data.id} class="testimonial-item">
                                        <p class="testimonial-text font-style-3 font-italic text-lh-10">{data.body}</p>
                                        <div class="testimonial-author">
                                            <h5 class="heading">{data.name}</h5>

                                        </div>
                                    </div>
                               
                               )} */}
                            
                                </div>





                                <section >
                                    <div class="container py-5">
                                      
                                        <div class="row text-center">
                                                      
                                                      
                                        { data.map((data) =>
                                            <div class="col-md-4 mb-4 mb-md-0">
                                           
                                                <div class="card">
                                                    <div class="card-body py-4 mt-2">
                                                        <div class="d-flex justify-content-center mb-4">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                          class="rounded-circle shadow-1-strong" width="100" height="100" />
                                                        </div>
                                                        <h5 class="font-weight-bold">{data.name}</h5>
                                                  
                                                        <ul class="list-unstyled d-flex justify-content-center">
                                                            <li>
                                                                <i class="fas fa-star fa-sm text-info"></i>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-star fa-sm text-info"></i>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-star fa-sm text-info"></i>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-star fa-sm text-info"></i>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-star-half-alt fa-sm text-info"></i>
                                                            </li>
                                                        </ul>
                                                        <p class="mb-2">
                                                            <i class="fas fa-quote-left pe-2"></i> {data.body}
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                          
                                            </div>
                                      
                                      )}
                                        </div>
                                        
                                    </div>
                                </section>



















                                {/* <div class="slider-nav-outer">
                                    <div class="slider-nav">
                                        <div class="testimonial-author-img">
                                            <img src="images/250-250-1.jpg" class="img-fluid" alt="" />
                                        </div>
                                        <div class="testimonial-author-img">
                                            <img src="images/250-250-2.jpg" class="img-fluid" alt="" />
                                        </div>
                                        <div class="testimonial-author-img">
                                            <img src="images/250-250-3.jpg" class="img-fluid" alt="" />
                                        </div>
                                        <div class="testimonial-author-img">
                                            <img src="images/250-250-4.jpg" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default About