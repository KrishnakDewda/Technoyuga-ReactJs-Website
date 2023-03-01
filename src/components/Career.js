import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { URL } from '../baseURL';
import PhoneInput from 'react-phone-input-2';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from 'react-router-dom';

const Career = () => {
    // useEffect(() => {
    //     toast.success('Helllooo', { style: { marginTop: '50px' } })
    // }, [])
    const submitForm = useRef();
    let location = useLocation();
    const [jobTitles, setJobTitles] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("TY_TOKEN");
        console.log(token);
        axios({
            url: `${URL}get-job-titles-list`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === true) {
                setJobTitles(response.data.data);
            }
        }).catch((err) => {
            console.log('error', err);
        })

    }, [])

    const [error, setError] = useState({});
    const [resume, setResume] = useState({
        inputName: "", inputEmail: "", inputNumber: "",
        inputJob: "", inputNotice: "", file: "", inputCTC: "", inputCTC2: "", inputMessage: ""
    });
    const [fileName, setFileName] = useState('');


    const handleImage = (e) => {
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg' ||
            file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            setFileName(file.name);
            const token = localStorage.getItem("TY_TOKEN");
            const body = new FormData();
            body.append('file', file);
            axios({
                url: `${URL}upload-resume`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: body
            }).then((response) => {
                if (response.data.status === true) {
                    // toast.success('Resume Uploaded!', { style: { background: '#333', color: '#fff', marginTop: "70px" } })
                    setResume({ ...resume, file: response.data.data.url });
                }
            }).catch((err) => {
                console.log(err);
            })

        } else {
            setError({ ...error, file_err: 'Invalid file format. ' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Messgae submit")
            const token = localStorage.getItem("TY_TOKEN");
            const body = new URLSearchParams();
            body.append('resume', resume.file);
            body.append('name', resume.inputName);
            body.append('email', resume.inputEmail);
            body.append('phoneno', resume.inputNumber);
            body.append('job_title', resume.inputJob);
            body.append('notice_period', resume.inputNotice);
            body.append('current_ctc', resume.inputCTC);
            body.append('expected_ctc', resume.inputCTC2);
            body.append('message', resume.inputMessage);
            axios({
                url: `${URL}add-resume`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: body
            }).then((response) => {
                if (response.data.status === true) {
                    setResume({
                        inputName: "", inputEmail: "", inputNumber: "",
                        inputJob: "", inputNotice: "", file: "", inputCTC: "", inputCTC2: "", inputMessage: ""
                    });
                    toast.success('Thanks for contacting us!!', { style: { background: '#333', color: '#fff', marginTop: '70px' } })
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const onChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value })
    }

    function validate() {

        let isValid = true;
        let err = {};
        if (!resume.inputName) {
            err['inputName_err'] = "Please provide your name"
            isValid = false;
        }
        if (!resume.inputEmail) {
            err['inputEmail_err'] = "Please provide your email"
            isValid = false;
        }
        else if (typeof resume.inputEmail !== "undefined") {
            let lastAtPos = resume.inputEmail.lastIndexOf('@');
            let lastDotPos = resume.inputEmail.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && resume.inputEmail.indexOf('@@') === -1 && lastDotPos > 2 && (resume.inputEmail.length - lastDotPos) > 2)) {
                isValid = false;
                err["inputEmail_err"] = "Email is not valid";
            }
        }
        if (!resume.inputNumber) {
            err['inputNumber_err'] = "Please provide your phone number"
            isValid = false;
        }
        if (!resume.inputJob) {
            err['inputJob_err'] = "Please provide your job title"
            isValid = false;
        }
        if (!resume.inputNotice) {
            err['inputNotice_err'] = "Please provide your notice period"
            isValid = false;
        }
        if (!resume.file) {
            err['file_err'] = "Please provide your resume"
            isValid = false;
        }
        if (!resume.inputCTC) {
            err['inputCTC_err'] = "Please provide your current CTC"
            isValid = false;
        }
        if (!resume.inputCTC2) {
            err['inputCTC2_err'] = "Please provide your expected CTC"
            isValid = false;
        }
        if (!resume.inputMessage) {
            err['inputMessage_err'] = "Please provide your message"
            isValid = false;
        }
        setError(err);
        return isValid;
    };


    return (
        <div>
            <Toaster />
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TRJ57"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

            <header id="header" className="fixed-top header-light">
                <div className="container-fluid d-flex">
                    <div className="logo mr-auto">
                        <a href="/"><img src="img/technoyuga-logo.svg" alt="technoyuga logo"
                            className="img-fluid" /></a>
                    </div>
                    <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu" /></button>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li ><a href="/">Home</a></li>
                            <li className="drop-down"><a href="#0">About us</a>
                                <ul>
                                    <li><a href="/about-us">Company</a></li>
                                    <li><a href="/about-us-our-story">Our Story</a></li>
                                    <li><a href="/our-team">Our Team</a></li>
                                </ul>
                            </li>
                            <li className="drop-down mega"><a href="#0">Services</a>
                                <ul className="row">
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-menu-icon.png" />
                                            <div className="media-body">
                                                <a href="/ios-application-development">IOS Development</a>
                                                <p>Custom Native iPhone App Development and support</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-android.png" />
                                            <div className="media-body">
                                                <a href="/android-application-development">Android App
                                                    Development</a>
                                                <p>Ondemand android developemnet for your business</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-flutter.png" />
                                            <div className="media-body">
                                                <a href="/flutter-application-development">Flutter App
                                                    Development</a>
                                                <p>Helping startups, small businesses and growing enterprises </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-blockchain.png" />
                                            <div className="media-body">
                                                <a href="/blockchain-application-development">BlockChain
                                                    Development</a>
                                                <p>App development using flutter and react technology</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-iot.png" />
                                            <div className="media-body">
                                                <a href="/iot-application-development">IOT App Development</a>
                                                <p>controlled remotely and can be used to monitor the connected product's
                                                    condition</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-arvr.png" />
                                            <div className="media-body">
                                                <a href="/augmented-reality-development">AR VR Development</a>
                                                <p>empower businesses them with our skilled technology capabilities in AR/VR</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-react.png" />
                                            <div className="media-body">
                                                <a href="/react-native-application-development">React Native
                                                    Development</a>
                                                <p>iOS and Android mobile applications in an industry-driving structure</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-web.png" />
                                            <div className="media-body">
                                                <a href="/web-app-development">Web Development</a>
                                                <p>We build bespoke websites and web applications</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="lets-connect">
                                            <a href="/contact-us">Lets Connect <span className="ml-2"><img
                                                src="img/arrow 2.svg" /></span>
                                            </a>
                                            <p>meet the enthusiastic team of developers and designers</p>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/career">Careers</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
                            <li className="get-started"><a href="/contact-us">Estimate Project</a></li>
                        </ul>
                    </nav>
                    <nav className="mobile-nav d-lg-none">
                        <ul>
                            <li className={`nav-link ${location.pathname === "/" ? "active" : ""}`}><a href="/">Home</a></li>
                            <li className="drop-down"><a href="#0">About us</a>
                                <ul>
                                    <li><a href="/about-us">Company</a></li>
                                    <li><a href="/about-us-our-story">Our Story</a></li>
                                    <li><a href="/ourteam">Our Team</a></li>
                                </ul>
                            </li>
                            <li className="drop-down mega"><a href="#0">Services</a>
                                <ul className="row">
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-menu-icon.png" />
                                            <div className="media-body">
                                                <a href="/ios-application-development">IOS Development</a>
                                                <p>Custom Native iPhone App Development and support</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-android.png" />
                                            <div className="media-body">
                                                <a href="/android-application-development">Android App Development</a>
                                                <p>Ondemand android developemnet for your business</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-flutter.png" />
                                            <div className="media-body">
                                                <a href="/flutter-application-development">Flutter App Development</a>
                                                <p>Helping startups, small businesses and growing enterprises </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-blockchain.png" />
                                            <div className="media-body">
                                                <a href="/blockchain-application-development">BlockChain Development</a>
                                                <p>App development using flutter and react technology</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-iot.png" />
                                            <div className="media-body">
                                                <a href="/iot-application-development">IOT App Development</a>
                                                <p>controlled remotely and can be used to monitor the connected product's condition</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-arvr.png" />
                                            <div className="media-body">
                                                <a href="/augmented-reality-development">AR VR Development</a>
                                                <p>empower businesses them with our skilled technology capabilities in AR/VR</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-react.png" />
                                            <div className="media-body">
                                                <a href="/react-native-application-development">React Native Development</a>
                                                <p>iOS and Android mobile applications in an industry-driving structure</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="media">
                                            <img src="img/mega-menu/mega-web.png" />
                                            <div className="media-body">
                                                <a href="/web-app-development">Web Development</a>
                                                <p>We build bespoke websites and web applications</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-4">
                                        <div className="lets-connect">
                                            <a href="/contact-us">Lets Connect <span className="ml-2"><img src="img/arrow 2.svg" /></span>
                                            </a>
                                            <p>meet the enthusiastic team of developers and designers</p>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                            <li className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}><a href="/portfolio">Portfolio</a></li>
                            <li className={`nav-link ${location.pathname === "/career" ? "active" : ""}`}><a href="/career">Careers</a></li>
                            <li className={`nav-link ${location.pathname === "/contact-us" ? "active" : ""}`}><a href="/contact-us">Contact us</a></li>
                            <li className="get-started"><a href="/contact-us">Estimate Project</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="landing-section">
                    <div className="landing-img">
                        <LazyLoadImage className="img-fluid w-100" src="img/landing_bg.png" alt="" />
                        {/* <img src="img/landing_bg.png" alt="" className="img-fluid w-100" /> */}
                    </div>
                    <div className="container">
                        <div className="landing-section-content">
                            <div className="landing-details">
                                <h1 className="landing-content-title">
                                    Your chance to disrupt<br className="d-none d-md-block" /> Digital & Mobile Ecosystem with
                                </h1>
                                <h2 className="landing-content-subtitle">
                                    TECHNOYUGA
                                </h2>
                                <div className="landing-button">
                                    {/* <a href="#submit-resume" className="btn btn-outline-light" >Apply Now</a> */}
                                    <button className='btn btn-outline-light' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="our-culture-section">
                    <img src="img/career/bubbles.svg" alt="" className="img-fluid culture-bg" />
                    <div className="container">
                        <div className="our-culture-content">
                            <div className="our-culture-heading">
                                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                                    <h2>Our Culture</h2>
                                    <p>Together, we can</p>
                                    <p className="title-para">At Technoyuga, We are everything because of our team, and we are
                                        extremelyproud of each and
                                        every team member who is part of our family,helping us to grow and learn every step.</p>
                                </div>

                            </div>
                            <div className="our-culture-gallery">
                                <div className="row align-items-center p-0 justify-content-center">
                                    <div className="col col-12 col-md-3 col-lg-twenty">
                                        <div className="our-item1 text-end">
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_1.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_1.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_2.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_2.png" alt="" className="img-fluid" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-2 col-lg-twenty">
                                        <div className="our-item2">
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_3.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_3.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_4.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_4.png" alt="" className="img-fluid" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4 col-lg-forty">
                                        <div className="our-item3">
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_5.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_5.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_6.png" alt="" className="img-fluid" />

                                                {/* <img src="img/career/img_6.png" alt="" className="img-fluid" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-3 col-lg-twenty">
                                        <div className="our-item4">
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_7.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_7.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_8.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_8.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="our-culture-item">
                                                <LazyLoadImage src="img/career/img_9.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/img_9.png" alt="" className="img-fluid" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="choose-section">
                    <LazyLoadImage src="img/career/bubbles1.svg" alt="" className="img-fluid choose-bg" />
                    {/* <img src="img/career/bubbles1.svg" alt="" className="img-fluid choose-bg" /> */}
                    <div className="container">
                        <div className="choose-section-content">
                            <div className="choose-section-heading">
                                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                                    <h2>Why choose us ?</h2>
                                    <p>Aspects of Technoyuga</p>
                                    <p className="title-para">We promise you an inclusive work environment where you will fall in
                                        love with challenging as
                                        well as getting challenged.</p>
                                </div>
                            </div>
                            <div className="choose-item-content">
                                <div className="row justify-content-center">
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame1.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame1.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Flexible workinh hours <br className="d-none d-md-block" />and WFH facility as
                                                    &<br className="d-none d-md-block" /> when needed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame2.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame2.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Free Access to OTT Platforms like Amazone prime, Netflix, Hotstar etc...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame3.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame3.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Oppurtunities to work on brilliant startup ideas and<br
                                                        className="d-none d-md-block" /> top enterpise projects
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame4.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame4.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Interests-Free<br className="d-none d-md-block" /> Personal loans
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame5.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame5.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Monthly Lunch & Dinner from the company
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame6.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame6.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Employee of the Quarter Awards & Gifts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item m-0 choose-item1">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame7.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame7.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Leave Compensation<br className="d-none d-md-block" /> and Comoff.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="choose-item m-0">
                                            <div className="choose-item-img">
                                                <LazyLoadImage src="img/career/frame8.png" alt="" className="img-fluid" />
                                                {/* <img src="img/career/frame8.png" alt="" className="img-fluid" /> */}
                                            </div>
                                            <div className="choose-item-detail">
                                                <p className="choose-item-detail-description">
                                                    Friendly Working<br className="d-none d-md-block" /> enviourment
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="opportunities-section">
                    <LazyLoadImage src="img/career/bubbles2.svg" alt="" className="img-fluid opportunities-bg" />
                    {/* <img src="img/career/bubbles2.svg" alt="" className="img-fluid opportunities-bg" /> */}
                    <div className="container">
                        <div className="opportunities-section-content">
                            <div className="opportunities-content-heading">
                                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                                    <h2>Trending Opportunities</h2>
                                    <p>Openings At Technoyuga</p>
                                </div>
                            </div>
                            <div className="trending-opportunities-content">

                                <div id="accordion" className="trending-accordion">
                                    <div className="card trending-item">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn  trending-button" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    IOS Developer
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="trending-item-description">
                                                    We are looking for experienced and seasoned iOS App Developers, who are
                                                    passionate to create mind-blowing iOS applications, which set new benchmarks
                                                    in
                                                    the app development space.
                                                </p>
                                                <div className="trending-btn">
                                                    {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                                    <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card trending-item">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn  collapsed trending-button" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    React Native Developer
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="trending-item-description">
                                                    We are looking for experienced and seasoned iOS App Developers, who are
                                                    passionate to create mind-blowing iOS applications, which set new benchmarks
                                                    in
                                                    the app development space.
                                                </p>
                                                <div className="trending-btn">
                                                    {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                                    <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card trending-item">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn  collapsed trending-button" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    UI/UX Designer
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="trending-item-description">
                                                    We are looking for experienced and seasoned iOS App Developers, who are
                                                    passionate to create mind-blowing iOS applications, which set new benchmarks
                                                    in
                                                    the app development space.
                                                </p>
                                                <div className="trending-btn">
                                                    {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                                    <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card trending-item">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0">
                                                <button className="btn  collapsed trending-button" data-toggle="collapse"
                                                    data-target="#collapseFour" aria-expanded="false"
                                                    aria-controls="collapseFour">
                                                    Business Development Executive
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="trending-item-description">
                                                    We are looking for experienced and seasoned iOS App Developers, who are
                                                    passionate to create mind-blowing iOS applications, which set new benchmarks
                                                    in
                                                    the app development space.
                                                </p>
                                                <div className="trending-btn">
                                                    {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                                    <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card trending-item">
                                        <div className="card-header" id="headingFive">
                                            <h5 className="mb-0">
                                                <button className="btn  collapsed trending-button" data-toggle="collapse"
                                                    data-target="#collapseFive" aria-expanded="false"
                                                    aria-controls="collapseFive">
                                                    .Net Developer
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="trending-item-description">
                                                    We are looking for experienced and seasoned iOS App Developers, who are
                                                    passionate to create mind-blowing iOS applications, which set new benchmarks
                                                    in
                                                    the app development space.
                                                </p>
                                                <div className="trending-btn">
                                                    {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                                    <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="join-team-section">
                    <LazyLoadImage src="img/career/join-bubbles.svg" alt="" className="img-fluid join-bg" />
                    {/* <img src="img/career/join-bubbles.svg" alt="" className="img-fluid join-bg" /> */}
                    <div className="container">
                        <div className="join-team-content">
                            <div className="row align-items-center">
                                <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="join-team-heading">
                                        <div className="section-title aos-init aos-animate" data-aos="fade-up">
                                            <h2>Join the Technoyuga team!</h2>
                                            <p>Aspects of Technoyuga</p>
                                            <p className="title-para">Innovate with the latest and greatest technologies & get to
                                                work on some of the coolest projects you can imagine.</p>
                                        </div>
                                        <div className="join-team-button">
                                            {/* <a href="#" className="btn btn-primary">APPLY NOW</a> */}
                                            <button className='btn btn-primary' onClick={() => submitForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} >Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="join-team-img">
                                        <LazyLoadImage src="img/career/team.png" alt="" className="img-fluid" />
                                        {/* <img src="img/career/team.png" alt="" className="img-fluid" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="resume-form-section" ref={submitForm}>
                    <div className="container">
                        <div className="resume-form-content">
                            <h2 className="resume-form-title">
                                Submit Resume
                            </h2>
                            <div className="resume-form">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputName">Your Name *</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="" name='inputName' onChange={onChange} value={resume.inputName} />
                                            <div className='error' style={{ color: "red" }}>{error.inputName_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputEmail">Email Id *</label>
                                            <input type="Email" className="form-control" id="inputEmail" placeholder="" name='inputEmail' onChange={onChange} value={resume.inputEmail} />
                                            <div className='error' style={{ color: "red" }}>{error.inputEmail_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputNumber">Phone Number *</label>
                                            {/* <input type="Number" className="form-control" id="inputNumber" placeholder="" name='inputNumber' onChange={onChange} value={resume.inputNumber} /> */}
                                            <PhoneInput
                                                inputExtraProps={{
                                                    name: "phone",
                                                    required: true,
                                                    autoFocus: true
                                                }}
                                                placeholder=""
                                                defaultCountry={"us"}
                                                value={resume.inputNumber}
                                                onChange={(val) => setResume({ ...resume, inputNumber: val })}
                                            />
                                            <div className='error' style={{ color: "red" }}>{error.inputNumber_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="file">Upload Resume *</label>
                                            <div className="resume-file">
                                                <input type="file" className="form-control-file" id="file" name='file' onChange={handleImage} />
                                                {!resume.file ? <span>choose File</span> : <span style={{ right: '0', left: '0', width: '100%', background: 'none', textAlign: 'start' }}>{fileName}</span>}
                                            </div>
                                            <p><b>Note :</b> Please upload file in PDF, WORD, PNG, JPEG or JPG format. </p>
                                            <div className='error' style={{ color: "red" }}>{error.file_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputJob">Job Title *</label>
                                            <select id="inputJob" className="form-control" onChange={onChange} name='inputJob' value={resume.inputJob}>
                                                <option value="">Select Job Title...</option>
                                                {jobTitles.length > 0 && jobTitles.map((elem) =>
                                                    <option value={elem._id}>{elem.title}</option>
                                                )}
                                            </select>
                                            <div className='error' style={{ color: "red" }}>{error.inputJob_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputNotice">Notice Period * (In Months)</label>
                                            {/* <input type="number" className="form-control" id="inputNotice" onChange={onChange} name='inputNotice' value={resume.inputNotice} /> */}
                                            <select id="inputNotice" className="form-control" onChange={onChange} name='inputNotice' value={resume.inputNotice}>
                                                <option value="">Select Notice Period</option>
                                                <option value="1month">1 month</option>
                                                <option value="2-months">2 months</option>
                                                <option value="3-months">3 months</option>
                                                <option value="6-months">6 months</option>
                                            </select>
                                            <div className='error' style={{ color: "red" }}>{error.inputNotice_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputCTC">Current CTC * (In Lakhs)</label>
                                            <input type="number" min="0" className="form-control" id="inputCTC"
                                                onKeyDown={(e) => {
                                                    if (e.keyCode === 38 || e.keyCode === 40) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                placeholder="" onChange={onChange} name='inputCTC' value={resume.inputCTC} />
                                            <div className='error' style={{ color: "red" }}>{error.inputCTC_err}</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="resume-label" for="inputCTC2">Expected CTC * (In Lakhs)</label>
                                            <input type="number" min="0"
                                            onKeyDown={(e) => {
                                                if (e.keyCode === 38 || e.keyCode === 40) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            className="form-control" id="inputCTC2" placeholder="" onChange={onChange} name='inputCTC2' value={resume.inputCTC2} />
                                            <div className='error' style={{ color: "red" }}>{error.inputCTC2_err}</div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label className="resume-label" for="inputMessage">Message *</label>
                                            <textarea className="form-control" id="inputMessage" cols="5"
                                                rows="6" onChange={onChange} name='inputMessage' value={resume.inputMessage}></textarea>
                                            <div className='error' style={{ color: "red" }}>{error.inputMessage_err}</div>
                                        </div>
                                        <div className="resume-button ml-auto">
                                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                                {/* <div className="row">
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="name" className="resume-label">Your Name*
                                            </label>
                                            <input type="text" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="email" className="resume-label">Email Id
                                            </label>
                                            <input type="email" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="number" className="resume-label">Phone Number
                                            </label>
                                            <input type="number" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="file" className="resume-label">Upload Resume
                                            </label>
                                            <div className="resume-file">
                                                <div className="choose-file">
                                                    <input type="file" className="" />
                                                    <span>choose File</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="text" className="resume-label">Job Title
                                            </label>
                                            <select className="form-select resume-select">
                                                <option value="1">Web Designer</option>
                                                <option value="2">Web Developer</option>
                                                <option value="3">IOS Developer</option>
                                                <option value="4">Flutter Developer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="text" className="resume-label">Notice Period
                                            </label>
                                            <input type="text" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="number" className="resume-label">Current CTC*
                                            </label>
                                            <input type="text" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="resume-form-item">
                                            <label for="number" className="resume-label">Expected CTC
                                            </label>
                                            <input type="text" className="form-control resume-input" />
                                        </div>
                                    </div>
                                    <div className="col col-12">
                                        <div className="resume-form-item">
                                            <label for="text" className="resume-label">Message
                                            </label>
                                            <textarea className="form-control resume-msg" cols="5" rows="7"></textarea>
                                        </div>
                                    </div>
                                    <div className="resume-button">
                                        <a href="#" className="btn btn-primary">SUBMIT</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

            </main>



            {/* <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="footer-nav">
                            <img src="img/technoyuga-logo-w.svg" alt="technoyuga logo" />
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/contact-us">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copy">
                        <div className="copyright">
                            Made with ❤️ in India
                        </div>

                        <div className="social-media">
                            <ul>
                                <li><a target="_blank" href="https://www.linkedin.com/company/technoyuga-pvt-ltd"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/techno_yuga"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com/TechnoYuga"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> */}

            <Footer />

            <div className="modal fade" id="ep1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/IUdD-rRJPPw"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/9WBFOyI3M5U"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client3">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/eGxasloU0BQ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client4">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/i8Mc4J3MiSc"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client5">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MtIOQp5SnH0"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client6">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Lh63IlWwQn4"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="afterpopup" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-content-wrapper">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 pr-0 dnm">
                                    <LazyLoadImage className="img-fluid" src="img/modal-img.png" />
                                    {/* <img className="img-fluid" src="img/modal-img.png" /> */}
                                </div>
                                <div className="col-lg-6 col-md-6 pl-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <LazyLoadImage src="img/close-icon.svg" />
                                        {/* <img src="img/close-icon.svg" /> */}
                                    </button>
                                    <div className="content-area">
                                        <h5>Do you have an <strong>Idea?</strong></h5>
                                        <p>Book a discovery call to validate your idea and get a free roadmap.</p>
                                        <a href="/contact-us" className="estimate">Estimate Project</a>
                                        <p className="banner-dis"><b>*No Spam. 100% Privacy Guaranteed.</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-bubble-img">
                                <LazyLoadImage src="img/modal-bubble.svg" />
                                {/* <img src="img/modal-bubble.svg" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Career