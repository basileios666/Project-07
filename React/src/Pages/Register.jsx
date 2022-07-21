import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const [data, setFormValue] = useState({firstname:'',lastname:'',email:'',password:''});

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  window.axios = require("axios");
  const Submit = (event) => {
    event.preventDefault();
    const api = {
      firstname:data.firstname,
      lastname:data.lastname,
      email:data.email,
      password:data.password
    };
    console.log(data.email);
    axios.post("http://127.0.0.1:8000/api/adduser", api);
  };
  
  // get data

  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };


  

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      {/* <section className=""> */}
      {/* <!-- Jumbotron --> */}
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h5 className="my-5 display-3 fw-bold ls-tight"  >
              The most progressive  protocols for
 <br />
                <span className="text-primary" style={{fontSize:"30px"}}> creating & maintaining 
YOUR SMILE!</span>
              </h5>
            
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <img src="images/logo.svg" alt="" className="logo" style={{ marginBottom: '30px' }} />

                  <form onSubmit={Submit}  >
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" name='firstname' placeholder='First name'  onChange={valueHandler} />
                          {/* <label className="form-label" for="form3Example1">First name</label> */}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" name="lastname" placeholder='Last name' onChange={valueHandler} />
                          {/* <label className="form-label" for="form3Example2">Last name</label> */}
                        </div>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" name="email" placeholder='Email address' onChange={valueHandler} />
                      {/* <label className="form-label" for="form3Example3">Email address</label> */}
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" name="password" placeholder='Password' onChange={valueHandler} />
                      {/* <label className="form-label" for="form3Example4">Password</label> */}
                    </div>



                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                    <div className="text-center my-3 display-5 fw-bold ls-tight">
                      OR :
                    </div>
                    {/* <!-- Register buttons --> */}
                    <div className="text-center">

                      {/* <button type="submit" className="btn btn-primary btn-block mb-4" >
                        Login
                      </button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  )
}

export default Register