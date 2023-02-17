import React, { useState } from 'react'
import { URL } from '../baseURL';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Discuss = (props) => {

    const [error, setError] = useState({});
    const [userData, setUserData] = useState({ username: "", phone: "", email: "", comment: "", budget: "", nda: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("messgae submited")
            const token = localStorage.getItem("TY_TOKEN");
            const body = new URLSearchParams();
            body.append('name', userData.username);
            body.append('email', userData.email)
            body.append('phonenumber', userData.phone)
            body.append('budget', userData.budget)
            body.append('discussyourdream', userData.comment)
            body.append('nda', userData.nda)
            axios({
                url: `${URL}contact-us`,
                method: "POST",
                header: {
                    Authorization: `Bearer ${token}`,
                },
                data:body
            }).then((response) => {
                if(response.data.status===true){
                    setUserData({
                        username: "", phone: "", email: "", comment: "", budget: "", nda: ""
                    })
                    toast.success('Form Submited !!', { style: { background: '#333', color: '#fff' } })
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
            err['username_err'] = "Please provide your user name!"
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
        if (!userData.budget) {
            err['budget_err'] = "Please provide your budget!"
            isValid = false;
        }
        if (!userData.comment) {
            err['comment_err'] = "Please provide comment!"
            isValid = false;
        }
        if (!userData.nda) {
            err['nda_err'] = "Please choose option!"
            isValid = false;
        }
        setError(err);
        return isValid;
    };

    return (
        <div>
            <Toaster/>
            <section className="idea-discussion">
                <div className="overlay"></div>
                <div className="container">
                    <div className="discusion-inner">
                        <h3>{props.h3}</h3>
                        <p>100% Idea protection. We sign Non Disclosure Agreement</p>
                    </div>
                    <div className="idea-form-wrapper">
                        <div className="row">
                            <div className="col-md-6 dark-blue">
                                <h4>You have a <span>Dream.</span></h4>
                                <p className="force-pad">We have the experience to make this Dream a <span>reality.</span></p>
                                <p className="small-text">Here’s what you will get for submitting your contact details.</p>
                                <div className="dream-list">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p><span>1</span> 45 minutes of free consultation.</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <p><span>2</span> A strict non-disclosure agreement</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p><span>3</span> Free Market & Competitive Analysis.</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <p><span>4</span> Suggestions on Revenue Models & Go To Market Strategy</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p><span>5</span> No obligation Technical Specs & Proposal.</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <p><span>6</span> Guidance on Pre-launch & Post-Launch Marketing.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 light-gery">
                                <div className="section-title d-md-none">
                                    <h2 > {props.h3}</h2>
                                </div>
                                <h5>At Techno Yuga, we don't just develop apps. We build Dreams. <span>Lets Build yours!</span></h5>
                                <form className="contact-form" id="contact-form">
                                    <div className="row mb-3">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label for="uname">Your Name *</label>
                                                <input type="text" className="form-control" id="uname" name="username" onChange={onChange} value={userData.username} />
                                                <div className='error' style={{ color: "red" }}>{error.username_err}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label for="email">Email Id *</label>
                                                <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={userData.email} />
                                                <div className='error' style={{ color: "red" }}>{error.email_err}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label for="uname">Phone Number *</label>
                                                <input type="Number" className="form-control" id="phone" name="phone" onChange={onChange} value={userData.phone} />
                                                <div className='error' style={{ color: "red" }}>{error.phone_err}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label for="uname">Budget *</label>
                                                <select name="budget" className="custom-select" value={userData.budget} onChange={onChange}>
                                                    <option selected>Choose Budget</option>
                                                    <option value="$5000 - $10000">$5000 - $10000</option>
                                                    <option value="$10000 - $15000">$10000 - $15000</option>
                                                    <option value="$15000 - $20000">$15000 - $20000</option>
                                                    <option value="$20000 - $30000">$20000 - $30000</option>
                                                    <option value="$30000 or More">$30000 or More</option>
                                                </select>
                                                <div className='error' style={{ color: "red" }}>{error.budget_err}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="comment">Discuss your Dream *</label>
                                                <textarea className="form-control" rows="5" id="comment" onChange={onChange} name='comment'></textarea>
                                                <div className='error' style={{ color: "red" }}>{error.comment_err}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-lg-5 mt-xl-5">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="d-block mb-3">Do you need a NDA ? *</label>
                                                <div className="custom-control custom-radio custom-control-inline m-r">
                                                    <input type="radio" className="custom-control-input" id="customRadio" name="nda" checked={userData.nda === "Yes" ? true : false} value="Yes" onChange={onChange} />
                                                    <label className="custom-control-label" for="customRadio">Yes</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input" id="customRadio2" name="nda" checked={userData.nda === "No" ? true : false} value="No" onChange={onChange} />
                                                    <label className="custom-control-label" for="customRadio2">No</label>
                                                </div>
                                                <div className='error' style={{ color: "red" }}>{error.nda_err}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 text-center text-md-right">
                                            <button className="contact-btn" type='button' onClick={handleSubmit}>Get in Touch</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Discuss