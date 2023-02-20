import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import { URL } from '../baseURL';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const HelpDesk = () => {
    const [error, setError] = useState({});
    const [userData, setUserData] = useState({ username: "", phone: "", email: "", comment: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("messgae submited")
            const token = localStorage.getItem("TY_TOKEN");
            const body = new URLSearchParams();
            body.append('full_name', userData.username);
            body.append('email', userData.email);
            body.append('contact_no', userData.phone);
            body.append('requirements', userData.comment);
            axios({
                url: `${URL}help-request`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: body
            }).then((response) => {
                if (response.data.status === true) {
                    setUserData({
                        username: "", phone: "", email: "", comment: ""
                    })
                    toast.success('Form Submited !!', { style: { background: '#333', color: '#fff', marginTop: '70px' } })
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function validate() {

        let isValid = true;
        let err = {};
        if (!userData.username) {
            err['username_err'] = "Please provide your full name!"
            isValid = false;
        }
        if (!userData.email) {
            err['email_err'] = "Please provide your email!"
            isValid = false;
        }
        else if (typeof userData.email !== "undefined") {
            let lastAtPos = userData.email.lastIndexOf('@');
            let lastDotPos = userData.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && userData.email.indexOf('@@') === -1 && lastDotPos > 2 && (userData.email.length - lastDotPos) > 2)) {
                isValid = false;
                err["email_err"] = "Email is not valid";
            }
        }
        if (!userData.phone) {
            err['phone_err'] = "Please provide your phone number!"
            isValid = false;
        }
        if (!userData.comment) {
            err['comment_err'] = "Please provide your requirements!"
            isValid = false;
        }
        setError(err);
        return isValid;
    };
    return (
        <section className="help-section">
            <div className="container">
                <div className="help-content">
                    <div className="row align-items-center">
                        <div className="col col-12 col-md-12 col-lg-3 col-xl-3">
                            <h2 className="help-title">How Can we Help ?</h2>
                        </div>
                        <div className="col col-12 col-md-12 col-lg-9 col-xl-9">
                            <div className="help-form">
                                <div className="row">
                                    <div className="col col-12 col-md-4">
                                        <div className="help-input">
                                            <label className="form-label">Your Full Name</label>
                                            <input type="text" className="form-control" name="username" value={userData.username} onChange={onChange} />
                                            <div className='error' style={{ color: "red" }}>{error.username_err}</div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4">
                                        <div className="help-input">
                                            <label className="form-label">Email Id</label>
                                            <input type="email" className="form-control" name="email" value={userData.email} onChange={onChange} />
                                            <div className='error' style={{ color: "red" }}>{error.email_err}</div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4">
                                        <div className="help-input">
                                            <label className="form-label">Phone Number</label>
                                            {/* <div className="hire-form-country help-form-country"> */}
                                            {/* <input type="tel" className="form-control" id='mobile-number' /> */}
                                            <PhoneInput
                                                inputExtraProps={{
                                                    name: "phone",
                                                    required: true,
                                                    autoFocus: true
                                                }}
                                                defaultCountry={"us"}
                                                value={userData.phone}
                                                onChange={(val) => setUserData({ ...userData, phone: val })}
                                            />
                                            <div className='error' style={{ color: "red" }}>{error.phone_err}</div>
                                            {/* <div className="form-country-selector help-form-country-selector">
                                                            <select className="js-example-templating">
                                                                <option value="india">India <span>+91</span></option>
                                                                <option value="Afghanistan">Afghanistan <span>+93</span>
                                                                </option>
                                                                <option value="Albania">Albania <span>+355</span></option>
                                                                <option value="Algeria">Algeria <span>+213</span></option>
                                                                <option value="Austria">Austria <span>+43</span></option>
                                                                <option value="Bangladesh">Bangladesh <span>+880</span></option>
                                                                <option value="Belize">Belize <span>+501</span></option>
                                                                <option value="Canada">Canada <span>+1</span></option>
                                                            </select>
                                                        </div> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    <div className="col col-12">
                                        <div className="help-input w-100">
                                            <label className="form-label">Discuss your Requirement</label>
                                            <textarea className="form-control" cols="30" rows="7" name="comment" value={userData.comment} onChange={onChange}></textarea>
                                            <div className='error' style={{ color: "red" }}>{error.comment_err}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-btn text-right">
                                    <a href="#" className="btn schedule-btn" onClick={handleSubmit}>GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpDesk