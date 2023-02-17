import React from 'react'

const Header = () => {
  return (
    <div>
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
                                            <a href="/contact-us">Lets Connect <span className="ml-2"><img src="img/arrow 2.svg" /></span> </a>
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


                </div>
            </header>
    </div>
  )
}

export default Header