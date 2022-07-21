import React from 'react'

function Footer() {
  return (
    <React.Fragment>
             <footer className="footer-2">
                <div className="footer-pri">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="widget widget-about">
                                    <a href="/ndex-hospital-classNameic.html">
                                        <img src="images/logo-light.svg" className="logo-footer" alt="" />
                                    </a>
                                    <p className="mt-20 footer-text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                           
                            
                                
                                </div>
                            </div>
                            <div className="col-lg-4">
                          
                           
                        
                                <div className="widget widget-twitter">
                                    <h5 className="heading font-bold">Latest Tweet</h5>
                                    <div className="tweets">
                                        <ul className="carousel-items">
                                            <li className="tweet-item">
                                                <p>How to tell if the hand sanitizer you’re buying is safe and actually works? <a href="/">#askDoctor</a></p>
                                            </li>
                                            <li className="tweet-item">
                                                <p>Screen time doesn’t hurt kids’ social skills, says harvard university <a href="/">#healthcare #dailyTips</a></p>
                                            </li>
                                            <li className="tweet-item">
                                                <p>Can clothes and shoes track infection into your house? What to Know <a href="/">Read blog here</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="/" className="btn btn-outline-light curved btn-sm mt-10">Follow Us</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget widget-timings">
                                    <h5 className="heading font-bold">Hospital Timings</h5>
                                    <table className="table table-bordered footer-text">
                                        <tbody>
                                            <tr>
                                                <td>Mon - Fri</td>
                                                <td>9:00 am to 6:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Saturday</td>
                                                <td>10:00 am to 1:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Sunday</td>
                                                <td>Weekly Off</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-10 mb-10">
                                <ul className="misc-links">
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/">Usage Rights</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 mt-10 mb-10 text-right">
                                <p className="mb-0 footer-text text-lg-right text-center">&copy; 2022 All Rights Reserved.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


    </React.Fragment>
  )
}

export default Footer