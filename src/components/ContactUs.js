import React from 'react'

const ContactUs = () => {
    return (
        <div>

            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TRJ57"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
  
            <header id="header" className="fixed-top dark-header">
                <div className="container-fluid d-flex">

                    <div className="logo mr-auto">
                        <a href="/"><img src="img/technoyuga-logo.svg" alt="technoyuga logo" className="img-fluid" /></a>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li className="drop-down"><a href="#0">About us</a>
                                <ul>
                                    <li><a href="/about-us">Company</a></li>
                                    <li><a href="about-us.html#our-story">Our Story</a></li>
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
                                            <a href="/contact-us">Lets Connect <span className="ml-2"><img src="img/arrow 2.svg" /></span> </a>
                                            <p>meet the enthusiastic team of developers and designers</p>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
                            <li className="get-started"><a href="/contact-us">Estimate Project</a></li>
                        </ul>
                    </nav>


                </div>
            </header>
            {/* <!-- End Header --> */}


            {/* <!-- ======= Main Section ======= --> */}
            <main id="main">

                {/* <!-- ======= contact us form Section ======= --> */}
                <section className="contact-us">
                    <div className="container">
                        <div className="contact-wrapper">
                            <div className="media">
                                <img src="img/our-ceo.png" className="img-fluid" data-aos="fade-in" />
                                <div className="media-body">
                                    <p className="m-0">Hi, I am Krishna CEO of TechnoYuga. I would love to talk with you about your project or requirements. Send me an email at <a href="mailto:hello@technoyuga.com"> hello@technoyuga.com</a> or fill the below form. Talk to you soon!</p>
                                </div>
                            </div>
                            <form className="contact-form" id="contact-form">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="uname">Your Name *</label>
                                            <input type="text" className="form-control" id="uname" name="uname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Email Id *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="uname">Phone Number *</label>
                                            <input type="text" className="form-control" id="phone" name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="uname">Budget *</label>
                                            <select name="budget" className="custom-select">
                                                <option selected>Choose Budget</option>
                                                <option value="$5000 - $10000">$5000 - $10000</option>
                                                <option value="$10000 - $15000">$10000 - $15000</option>
                                                <option value="$15000 - $20000">$15000 - $20000</option>
                                                <option value="$20000 - $30000">$20000 - $30000</option>
                                                <option value="$30000 or More">$30000 or More</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label for="comment">Discuss your Dream *</label>
                                            <textarea className="form-control" rows="5" id="comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-6 text-right2">
                                        <div className="form-group">
                                            <label className="d-block mb-3">Do you need a NDA ? *</label>
                                            <div className="custom-control custom-radio custom-control-inline m-r">
                                                <input type="radio" className="custom-control-input" id="customRadio" name="example" value="customEx" checked="" />
                                                <label className="custom-control-label" for="customRadio">Yes</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" value="customEx" />
                                                <label className="custom-control-label" for="customRadio2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <a href="#" className="contact-btn">Get in Touch</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= location details Section ======= --> */}
                <section className="locations">
                    <div className="container-fluid">
                        <h4 className="text-center">Your new home for collabration</h4>
                        <p className="text-center">with more that 10+ years of passion for technology we are spreading our footprints with our new workspaces for better innovations and engagement</p>
                    </div>
                </section>

                <section className="cities">
                    <div className="container">
                        <div className="city-wrapper">
                            <div className="row">
                                <div className="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/delhi.png" className="with-border img-fluid" />
                                    <h5>New Delhi</h5>
                                    <p>The Headquarters</p>
                                </div>
                                <div className="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-delay="200">
                                    <img src="img/indore.png" className="with-border img-fluid" />
                                    <h5>Indore</h5>
                                    <p>Web Develpoment Center</p>
                                </div>
                                <div className="col-md-4 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-delay="300">
                                    <img src="img/surat.png" className="with-border img-fluid" />
                                    <h5>Surat</h5>
                                    <p>App Develpoment Center</p>
                                </div>
                            </div>
                            <h3 className="text-center">Hey! Get In touch</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-details" data-aos="fade-up" data-aos-delay="100">
                                        <img src="img/email.svg" />
                                        <a href="mailto:hello@technoyuga.com">hello@technoyuga.com</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-details" data-aos="fade-up" data-aos-delay="200">
                                        <img src="img/address.svg" />
                                        <p className="text-center">512A, IGNOU Main Rd, Maidan Garhi, New Delhi, Delhi 110030</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-details" data-aos="fade-up" data-aos-delay="300">
                                        <img src="img/phone.svg" />
                                        <a href="tel:+918882713156">+91-8882713156</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">

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
            </footer>
            {/* <!-- End Footer --> */}

        </div>
    )
}

export default ContactUs