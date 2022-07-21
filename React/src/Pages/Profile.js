import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

function Profile () {
  useEffect(() => {
    async function getUser(id){
        const res = await fetch(`http://127.0.0.1:8000/api/getuser/${id}`)
        const user = await res.json()
        getUser((oldData => {
            return {
                ...oldData,
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                phonenumber:user.phonenumber,
                age:user.age,
                user_id: user.id
            }
        }))
    }
    getUser(1)
},[])
    return (
    <div className="app">
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="heading bold">Profile</h1>
            </div>
          </div>
        </div>
        <div class="breadcrumb-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <ul class="breadcrumb">
                  <li>
                    <a href="index-hospital-classic.html">Home</a>
                  </li>
                  <li class="active">Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-60">
        <div class="row">
          <div class="col-lg-4 mt-20">
            <div class="doctor-img">
              <img src="images/tooth.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-lg-8 mt-20">
            <div class="doctor-details text-left">
              <h5 class="heading font-bold text-primary">Profile</h5>
              <h3 class="heading font-bold mb-10"> Welcome name</h3>
              <hr class="hr-1 ml-0" />

              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Fisrt Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="firstName"
                      placeholder="First name"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">User Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="userName"
                      placeholder="User name"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      placeholder="0770000000"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputZip">Age</label>
                    <input type="number" class="form-control" id="inputZip" />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-primary pt-60 pb-60 mt-80"
        style={{
          backgroundImage: "url(images/world-map-2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "50%",
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 mt-20 mb-20">
              <div class="counter-box-1 text-center">
                <div class="fact-number text-white">
                  <span
                    class="fact-count"
                    data-from="0"
                    data-to="300"
                    data-speed="3000"
                  >
                    0
                  </span>
                  +
                </div>
                <h5 class="heading font-semi-bold text-white mb-0">
                  Surgeries
                </h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-20 mb-20">
              <div class="counter-box-1 text-center">
                <div class="fact-number text-white">
                  <span
                    class="fact-count"
                    data-from="0"
                    data-to="700"
                    data-speed="3000"
                  >
                    0
                  </span>
                  +
                </div>
                <h6 class="heading font-semi-bold text-white mb-0">Patients</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-20 mb-20">
              <div class="counter-box-1 text-center">
                <div class="fact-number text-white">
                  <span
                    class="fact-count"
                    data-from="0"
                    data-to="15"
                    data-speed="3000"
                  ></span>
                  +
                </div>
                <h6 class="heading font-semi-bold text-white mb-0">
                  Years Experience
                </h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-20 mb-20">
              <div class="counter-box-1 text-center">
                <div class="fact-number text-white">
                  <span
                    class="fact-count"
                    data-from="0"
                    data-to="1500"
                    data-speed="3000"
                  >
                    0
                  </span>
                  +
                </div>
                <h6 class="heading font-semi-bold text-white mb-0">
                  consultations
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-60 mb-80">
        <div class="row justify-content-center">
          <div class="col-lg-5 mt-20">
            <h5 class="heading font-bold text-primary">Get in Touch</h5>
            <h3 class="heading font-bold">Book your appointment</h3>
            <p class="h5 mb-30">
              Excepteur sint occaecat sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p class="h6 d-flex align-items-top opacity-08">
              <i class="ion-location-outline icon-left text-primary"></i>5th
              Floor, Ameritrunk Building,
              <br /> Times Square, USA-12435
            </p>
            <p class="h6 d-flex align-items-center opacity-08">
              <i class="ion-call-outline icon-left text-primary"></i>
              213-562-5625
            </p>
            <ul class="social social-2x d-inline-flex mt-20">
              <li>
                <a class="facebook" href="#">
                  <i class="ion-logo-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="ion-logo-twitter"></i>
                </a>
              </li>
              <li>
                <a class="google" href="#">
                  <i class="ion-logo-google"></i>
                </a>
              </li>
              <li>
                <a class="whatsapp" href="#">
                  <i class="ion-logo-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-7 mt-20">
            <form>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Your Email ID"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control date-select"
                      type="text"
                      placeholder="Your Date of Birth"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <select class="form-control">
                      <option>Select Appointment Slot</option>
                      <option>9:00 p.m. - 12:00 p.m.</option>
                      <option>12:00 p.m. - 4:00 p.m.</option>
                      <option>4:00 p.m. - 8:00 p.m.</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Special Message to Doctor"
                ></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default Profile;
