import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [dataBase, setDataBase] = useState([]);
    const [email, setEmail] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        //focus on user input after render to avoid autofocus on login page when user is already logged in 
        //we will reference with the user ref
        userRef.current.focus();
    }, [])
    // if the user changes  the password state or the email state the error message will change to empty
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           

            fetch('http://127.0.0.1:8000/api/getallusers').then(res => res.json()).then(data => {
                setDataBase(data);
            },
                dataBase.map(user => {
                    console.log(user.email)
                    if (user.email === email && user.password === password)
                    {
                        localStorage.setItem('isloggedIn','1');
                        setSuccess(true);
                        setAuth(user);
                        }
                })
            );
         
            // setAuth({ email, password });
            // setEmail('');
            // setPassword('');
        } catch (err) {
                setErrMsg('Login Failed');
            }
        errRef.current.focus();
        
        console.log(success);
        }
   
    return (
        <>
            {success ? (
                <section>
                   
                    <br />
                    <p>
                        {
                            window.location.href = 'http://localhost:3000/'
                        }
                    </p>
                </section>
            ) : (


                <section className="">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    {/* <!-- Jumbotron --> */}
                    <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                        <div className="container">
                            <div className="row gx-lg-5 align-items-center">
                                <div className="col-lg-6 mb-5 mb-lg-0">

                                    <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                        <img src="images/500-580-1.png" alt="" height={610} />
                                    </p>
                                </div>

                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <div className="card">
                                        <div className="card-body py-5 px-md-5">
                                            <img src="images/logo.svg" alt="" className="logo" style={{ marginBottom: '30px' }} />

                                            <form onSubmit={handleSubmit} >

                                                {/* <!-- Email input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="email" ref={userRef} id="username" autoComplete='off' className="form-control" placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)} />
                                                    {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                                </div>

                                                {/* <!-- Password input --> */}
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                                    {/* <label className="form-label" for="form3Example4">Password</label> */}
                                                </div>



                                                {/* <!-- Submit button --> */}
                                                <button type="submit" className="btn btn-primary btn-block mb-4" >
                                                    Login
                                                </button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>

    );
}
export default Login