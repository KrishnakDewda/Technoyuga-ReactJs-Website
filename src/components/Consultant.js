import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '../baseURL';

const Consultant = () => {
    const [error, setError] = useState({});
    const [data, setData] = useState({ username: "", phone: "", email: "", comment: "", budget: "", nda: "" })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("messgae submited")
            const token = localStorage.getItem("TY_TOKEN");
            const body = new URLSearchParams();
            body.append('name', data.username);
            body.append('email', data.email)
            body.append('phonenumber', data.phone)
            body.append('budget', data.budget)
            body.append('discussyourdream', data.comment)
            body.append('nda', data.nda)
            axios({
                url: `${URL}contact-us`,
                method: "POST",
                header: {
                    Authorization: `Bearer ${token}`,
                },
                data: body
            }).then((response) => {
                if (response.data.status === true) {
                    setData({
                        username: "", phone: "", email: "", comment: "", budget: "", nda: ""
                    })
                    toast.success('Form Submited !!', { style: { background: '#333', color: '#fff', marginTop: '70px' } })
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function validate() {

        let isValid = true;
        let err = {};
        if (!data.username) {
            err['username_err'] = "Please provide your user name!"
            isValid = false;
        }
        if (!data.email) {
            err['email_err'] = "Please provide your email!"
            isValid = false;
        }
        else if (typeof data.email !== "undefined") {
            let lastAtPos = data.email.lastIndexOf('@');
            let lastDotPos = data.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') === -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
                isValid = false;
                err["email_err"] = "Email is not valid";
            }
        }
        if (!data.phone) {
            err['phone_err'] = "Please provide your phone number!"
            isValid = false;
        }
        // if (!data.budget) {
        //     err['budget_err'] = "Please provide your budget!"
        //     isValid = false;
        // }
        if (!data.comment) {
            err['comment_err'] = "Please provide your requirement!"
            isValid = false;
        }
        // if (!data.nda) {
        //     err['nda_err'] = "Please choose option!"
        //     isValid = false;
        // }
        setError(err);
        return isValid;
    };
    return (
        <>
            <Toaster />
            <div className="col col-12 col-lg-6">
                <div className="hire-form">
                    <h2 className="hire-form-title">Get Free Consultation Now</h2>
                    <p className="hire-form-discription">Set up a developer interview and hire within 24 hours
                    </p>
                    <div className="hire-form-box">
                        <div className="hire-form-input">
                            <label className="form-label">Full name *</label>
                            <input type="text" className="form-control" name='username' onChange={onChange} value={data.username} />
                            <div className='error' style={{ color: "red" }}>{error.username_err}</div>
                        </div>
                        <div className="hire-form-input">
                            <label className="form-label">Email address *</label>
                            <input type="text" className="form-control" name='email' onChange={onChange} value={data.email} />
                            <div className='error' style={{ color: "red" }}>{error.email_err}</div>
                        </div>
                        <div className="hire-form-input">
                            <label className="form-label">Contact number *</label>
                            <input type="number" className="form-control" name='phone' onChange={onChange} value={data.phone} />
                            <div className='error' style={{ color: "red" }}>{error.phone_err}</div>
                        </div>
                        <div className="hire-form-input">
                            <label className="form-label">Discuss your Requirement *</label>
                            <textarea cols="30" rows="5" className="form-control" name='comment' onChange={onChange} value={data.comment}></textarea>
                            <div className='error' style={{ color: "red" }}>{error.comment_err}</div>
                        </div>
                        <a href="" className="btn btn-info hire-form-btn" onClick={handleSubmit}>HIRE DEVELOPER NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultant