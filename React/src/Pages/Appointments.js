import React, { useEffect, useState } from 'react'

function Appointments() {

    useEffect(() => {
        async function getUser(id){
            const res = await fetch(`http://127.0.0.1:8000/api/getuser/${id}`)
            const user = await res.json()
            setFormData((oldData => {
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

    function pad2(n) {
        return (n < 10 ? '0' : '') + n;
    }
    const date = new Date()
    var month = pad2(date.getMonth() + 1);
    var day = pad2(date.getDate());
    var year = date.getFullYear();

    const [formData, setFormData] = useState({
        user_id : '',
        firstname: '', 
        lastname: '',
        phonenumber: '',
        email: '',
        age: '',
        message: '',
        time: '',
        allergy1:'',
        allergy2:'',
        allergy3:'',
        services:'',
        whitening:'', 
        cavity_filling:'',
        full_braces:'',
        capping:'',
        implants:'',
        root_canal:'',
    })

    const [appointmentConformation, setAppointmentConformation] = useState('')
    const services = []
    formData.whitening && services.push('whitening')
    formData.cavity_filling && services.push('cavity filling')
    formData.full_braces && services.push('full braces')
    formData.capping && services.push('capping')
    formData.implants && services.push('implants')
    formData.root_canal && services.push('root canal')

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        setFormData((oldData) => {
            return {
                ...oldData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...formData , services:services.join(',')})
        };
        async function addAppointment(){
            const res  = await fetch('http://127.0.0.1:8000/api/addappointment', requestOptions)
            const data = await res.json()
            data && setAppointmentConformation(true)
            
        }
        
        addAppointment()
            
        }

    return (
        <React.Fragment>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="heading bold">Book Appointment</h1>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="breadcrumb">
                                    <li><a href="/ndex-hospital-classNameic.html">Home</a></li>
                                    <li className="active">Book Appointment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-80 mb-60">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="heading font-bold mb-20">Online Appointment Form</h3>
                        <p className="mb-30">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left.</p>
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text" placeholder="Your First Name"
                                            name='firstname'
                                            value={formData.firstname}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text" placeholder="Your Last Name"
                                            name='lastname'
                                            value={formData.lastname}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Your Phone Number"
                                            name='phonenumber'
                                            value={formData.phonenumber}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text" placeholder="Your Email ID"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control date-select"
                                            type="text" placeholder="Enter your age"
                                            name='age'
                                            value={formData.age}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            tabIndex="-98"
                                            name='time'
                                            value={formData.date}
                                            onChange={handleChange}
                                        >
                                            <option>Select Slot</option>
                                            <option value={`${year}-${day}-${month} 09:00:00`}>9:00 p.m. - 12:00 p.m.</option>
                                            <option value={`${year}-${day}-${month} 12:00:00`}>12:00 p.m. - 4:00 p.m.</option>
                                            <option value={`${year}-${day}-${month} 16:00:00`}>4:00 p.m. - 8:00 p.m.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <legend>Allergies, If Any</legend>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                placeholder="Allergy 1"
                                                name='allergy1'
                                                value={formData.allergy1}
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                placeholder="Allergy 2"
                                                name='allergy2'
                                                value={formData.allergy2}
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                placeholder="Allergy 3"
                                                name='allergy3'
                                                value={formData.allergy3}
                                                onChange={handleChange}

                                            />
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <legend>Services Needed</legend>
                                        <div className="form-group mb-0 " style={{ textAlign: 'justify' }}>
                                            <div className="custom-control custom-checkbox mb-10">
                                                <input type="checkbox" className="custom-control-input" name='whitening' id="Whitening" checked={formData.whitening}
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="Whitening">Whitening</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-10">
                                                <input type="checkbox" className="custom-control-input" name='cavity_filling' id="cavity_filling" value={formData.cavity_filling}
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="cavity_filling">Cavity Filling</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-10">
                                                <input type="checkbox" className="custom-control-input" name='full_braces' id="full_braces" value={formData.full_braces}
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="full_braces">Full Braces</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-10">
                                                <input type="checkbox" className="custom-control-input"name='root_canal' id="root_canal" value={formData.root_canal}
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="root_canal">Root Canal</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-10">
                                                <input type="checkbox" className="custom-control-input" name='implants' value={formData.implants} id="implants" 
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="implants">Implants</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name='capping' value={formData.capping} id="capping" 
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor="capping">Capping</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" name='message' placeholder="Special Message" value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            {!appointmentConformation && <div className="form-group">
                                <button className="btn btn-primary" data-toggle='modal' type="submit" onClick={handleClick}><i className="ion-paper-plane-outline icon-left"></i> Book Appointment</button>
                            </div>}
                        </form>
                        {appointmentConformation &&
                            <div className="alert alert-success" role="alert">
                                <strong>Appointment added on {formData.time}</strong>
                            </div> 
                            }
                    </div>
                    <div className="col-lg-4 mt-40 mt-lg-0">
                        <aside className="sidebar pl-lg-20">
                            <div className="widget widget-text pt-0">
                                <h5 className="heading d-flex align-items-center"><i className="ion-help-circle-outline icon-left"></i>Need Help?</h5>
                                <p className="normal">In case of problems in filling out the form, pleease do let us know.</p>
                                <p className="h6 d-flex align-items-top mb-0"><i className="ion-mail-outline icon-left text-primary"></i>contact@example.com</p>
                                <p className="h6 d-flex align-items-center mb-0"><i className="ion-call-outline icon-left text-primary"></i>[00] 21-562-5625</p>
                            </div>
                            <div className="widget widget-departments">
                                <img  src='images/650-650-1.jpg' alt='placeimage' style={{width:'100%', height:'100%'}} />
                            </div>
                            <div className="widget widget-social">
                                <h5 className="heading d-flex align-items-center"><i className="ion-share-social-outline icon-left"></i>We're Social</h5>
                                <p className="mb-20">Care for your loved ones by sharing our blogs with your friends & family</p>
                                <ul className="social social-round social-2x">
                                    <li><a className="facebook" href="/"><i className="ion-logo-facebook"></i></a></li>
                                    <li><a className="twitter" href="/"><i className="ion-logo-twitter"></i></a></li>
                                    <li><a className="skype" href="/"><i className="ion-logo-skype"></i></a></li>
                                    <li><a className="pinterest" href="/"><i className="ion-logo-pinterest"></i></a></li>
                                    <li><a className="instagram" href="/"><i className="ion-logo-instagram"></i></a></li>
                                    <li><a className="youtube" href="/"><i className="ion-logo-youtube"></i></a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Appointments