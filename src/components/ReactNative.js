import React, { useRef } from 'react'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';
import Footer from './Footer';
import Header from './Header';
import Consultant from './Consultant';

const ReactNative = () => {

    const price = useRef();

    const width = window.innerWidth
    console.log(width, typeof (width))

    return (
        <div>

            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TRJ57" height="0" width="0"
                style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

            {/* <!-- ======= Header ======= --> */}
            {/* <header id="header" className="fixed-top dark-header">
                <div className="container-fluid d-flex">

                    <div className="logo mr-auto">
                        <a href="/"><img src="img/technoyuga-logo.svg" alt="technoyuga logo"
                            className="img-fluid" /></a>
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
                                                <a href="services/iot-application-development.html">IOT App Development</a>
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
                            <li><a href="/contact-us">Contact us</a></li>
                            <li><a href="/career">Careers</a></li>
                            <li className="get-started"><a href="/contact-us">Estimate Project</a></li>
                        </ul>
                    </nav>
              

                </div>
            </header> */}

            <Header />

            {/* <!-- End Header --> */}

            <main>

                {/* <!-- Hire Section Start --> */}
                <section className="hire-section">
                    <div className="container">
                        <div className="hire-content">
                            <div className="row">
                                <div className="col col-12 col-lg-6">
                                    <div className="hire-details">
                                        <h2 className="hire-details-title">Hire React Native</h2>
                                        <h2 className="hire-details-subtitle">Developers</h2>
                                        {/* <!-- <ul className="hire-details-point-list">
                            <li className="hire-details-point-item">You are at the right place if you are looking for hiring flutter </li>
                            <li className="hire-details-point-item">developers. At Technoyuga we have a team of over 15+ flutter </li>
                            <li className="hire-details-point-item">developers who are working on flutter since it was in beta phase back </li>
                            <li className="hire-details-point-item">in 2017-18 also we have been working on all flutter versions.. Having </li>
                            <li className="hire-details-point-item">worked over multiple Flutter App Development projects, building </li>
                            <li className="hire-details-point-item">several apps for iOS, android, Desktop and web platform. Flutter </li>
                            <li className="hire-details-point-item">developers at Technoyuga are a right mix of skill and experience and </li>
                            <li className="hire-details-point-item">the result speaks in the words of our clients in their testimonials. </li>
                        </ul> --> */}
                                        <p className="hire-details-point-item">Are you looking to hire a react native developer for
                                            your dream project? Well, you are at the right place because at Technoyuga we
                                            provide dedicated react-native developers who are highly efficient and experienced
                                            with their job. We have a team of over 15+ react native developers who are working
                                            on the technology since it was rolled out in 2015 by facebook. They have worked on
                                            several projects in developing applications for android, ios, windows, mac and
                                            linux. We can confidently say that developers at technoyuga are a right mixture of
                                            skill, experience and talent.
                                        </p>
                                        <ul className="hire-details-check-point mt-0">
                                            <li className="hire-details-check-pitem"><img src="img/hire_check.png" alt=""
                                                className="img-fluid" /> Maintenance Of your Existing React Native App</li>
                                            <li className="hire-details-check-pitem"><img src="img/hire_check.png" alt=""
                                                className="img-fluid" /> React Native App Development From Scratch</li>
                                            <li className="hire-details-check-pitem"><img src="img/hire_check.png" alt=""
                                                className="img-fluid" />MVP Development</li>
                                            <li className="hire-details-check-pitem"><img src="img/hire_check.png" alt=""
                                                className="img-fluid" /> React Native Web App Development</li>
                                            <li className="hire-details-check-pitem"><img src="img/hire_check.png" alt=""
                                                className="img-fluid" /> Front End Development</li>
                                        </ul>
                                        <div className="hire-details-btn">
                                            <button className="btn btn-info hire-trial-btn" onClick={() => price.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Start Risk Free Trial</button>
                                            <a href="#" className="btn btn-info">Check our Pricing</a>
                                        </div>
                                    </div>
                                </div>
                                <Consultant />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Hire Section End --> */}

                {/* <!-- Startup Section Start --> */}
                <section className="startup-section">
                    <div className="container">
                        <div className="startup-content">
                            <h2 className="startup-heading">More than <span>50+ Startups,</span> Brands & Enterprise Companies
                                around
                                the globe chose <strong>Techno Yuga</strong> for their Technology Work.</h2>
                            <div className="startup-slider">
                                <OwlCarousel
                                    items={width > 420 ? 5 : 1}
                                    loop
                                    margin={10}
                                    autoplay
                                    autoplayTimeout={3000}
                                    nav={false}
                                >
                                    <div className="startup-img">
                                        <img src="img/startup_2.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_3.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_4.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_5.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_6.svg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_7.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_8.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="startup-img">
                                        <img src="img/startup_1.png" alt="" className="img-fluid" />
                                    </div>
                                </OwlCarousel>
                            </div>
                            {/* <!-- <div className="row align-items-center">
                <div className="col col-6 col-md-4 col-lg-4 col-xl ">
                    <div className="startup-img">
                        <img src="img/startup_1.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_2.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_3.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_4.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_5.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_6.svg" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_7.png" alt="" className="img-fluid">
                    </div>
                </div>
                <div className="col col-6 col-md-4 col-lg-4 col-xl">
                    <div className="startup-img">
                        <img src="img/startup_8.png" alt="" className="img-fluid">
                    </div>
                </div>
            </div> --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- Startup Section End --> */}

                {/* <!-- Stories Section Start --> */}
                <section className="stories-section section-padding">
                    <div className="container">
                        <div className="stories-content">
                            <h2 className="stories-title">Our Success Stories</h2>
                            <p className="stories-discription">Following are some of our React Native Projects that have been a
                                great
                                success in the market.</p>
                            <div className="stories-slider-list">

                                <OwlCarousel
                                    items={1}
                                    loop
                                    margin={10}
                                    nav
                                    animateIn="fadeIn"
                                    animateOut="fadeOut"
                                >
                                    <div className="stories-slider-item">
                                        <div className="stories-slider-link">
                                            <div className="stories-slider-first-img">
                                                <img src="img/storie_1.png" alt="" className="img-fluid" />
                                            </div>
                                            {/* <!-- <div className="stories-slider-second-img">
                                <img src="img/storie_2.png" alt="" className="img-fluid">
                            </div> --> */}
                                            <div className="stories-slider-details medizen-app-details">
                                                <div className="stories-details-heading">
                                                    <div className="stories-details-logo">
                                                        <img src="img/storie_emsi_2.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="stories-details-title">
                                                        <h2>EMSI App</h2>
                                                        <p className="stories-details-platform section-description">Maldives First
                                                            e-commerce App</p>
                                                    </div>
                                                </div>
                                                <div className="stories-details-pills">
                                                    <span>Fashion</span>
                                                </div>
                                                <h4 className="stories-details-subtitle">About Project</h4>
                                                <p className="stories-details-discription">Ordeno is a startup based out in Spain and
                                                    Peru.
                                                    They are focused on making the food ordering simple when you are in a restaurant
                                                    and
                                                    make the life easier for restaurants to manage their orders, tables and loyalty
                                                    and
                                                    promotions from a single system.</p>

                                                <div className="stories-team stories-techology-stack bg-transparent p-0">
                                                    <p className="stories-stack-title">Technology Stack</p>
                                                    <div className="stories-team-member">
                                                        <img src="img/mongo.png" alt="" className="img-fluid" />
                                                        <img src="img/node.png" alt="" className="img-fluid" />
                                                        <img src="img/flutter.png" alt="" className="img-fluid" />
                                                        <img src="img/stack_5.svg" alt="" className="img-fluid" />
                                                        <img src="img/qrcode.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                {/* <!-- <div className="stories-other-details">
                                <div className="stories-review">
                                    <p><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFD600" />
                                        </svg>
                                        4.6</p>
                                </div>
                                <div className="stories-download">
                                    <p>500K <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_78_226)">
                                                <path d="M29.7 19.0391V13.5379H31.8V19.0391C31.8 19.6282 31.4346 20.1886 30.7907 20.6112C30.1486 21.0326 29.2504 21.3 28.25 21.3H3.75C2.74961 21.3 1.85144 21.0326 1.20933 20.6112C0.565383 20.1886 0.2 19.6282 0.2 19.0391V13.5379H2.3V19.0391C2.3 19.3546 2.49537 19.6145 2.7568 19.786C3.02006 19.9588 3.37189 20.0594 3.75 20.0594H28.25C28.6281 20.0594 28.9799 19.9588 29.2432 19.786C29.5046 19.6145 29.7 19.3546 29.7 19.0391Z" fill="#3D3C3C" stroke="white" stroke-width="0.4" />
                                                <path d="M23.4034 11.3281L16.0002 16.1865L8.59695 11.3281L10.0002 10.4073L14.6404 13.4524L14.9502 13.6557V13.2852V0.7H17.0502V13.2852V13.6557L17.3599 13.4524L22.0002 10.4073L23.4034 11.3281Z" fill="#3D3C3C" stroke="white" stroke-width="0.4" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_78_226">
                                                    <rect width="32" height="21" fill="white" transform="translate(0 0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </p>
                                </div>
                                <div className="stories-apps">
                                    <img src="img/apple_store.png" alt="" className="img-fluid">
                                    <img src="img/playstore.png" alt="" className="img-fluid">
                                </div>
                            </div> --> */}
                                                {/* <!-- <div className="stories-team">
                                <p className="stories-details-discription">Our team on this project</p>
                                <div className="stories-team-member">
                                    <img src="img/member_1.png" alt="" className="img-fluid">
                                    <img src="img/member_2.png" alt="" className="img-fluid">
                                    <img src="img/member_3.png" alt="" className="img-fluid">
                                    <img src="img/member_4.png" alt="" className="img-fluid">
                                    <img src="img/member_5.png" alt="" className="img-fluid">
                                </div>
                            </div> --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="stories-slider-item">
                    <div className="stories-slider-link storie-clubbrub-link">
                        <div className="stories-slider-first-img">
                            <img src="img/storie_5.png" alt="" className="img-fluid">
                        </div>
                        <div className="stories-slider-details medizen-app-details">
                            <div className="stories-details-heading">
                                <div className="stories-details-logo">
                                    <img src="img/clubgrub.png" alt="" className="img-fluid">
                                </div>
                                <div className="stories-details-title">
                                    <h2>Club Grub</h2>
                                    <p className="stories-details-platform section-description">World’s #1 on-course food delivery platform</p>
                                </div>
                            </div>
                            <div className="stories-details-pills">
                                <span>Mobile App</span>
                                <span>Food Delivery</span>
                                <span>Food</span>
                            </div>
                            <h4 className="stories-details-subtitle">About Project</h4>
                            <p className="stories-details-discription">Clubgrub Golfer app allows golfers to get On-demand food & beverage ordering with on-course delivery. This app is changing the dynamics of the food and beverages ordering for the Golf Industry in the United States.
                            </p>
                            <div className="stories-team stories-techology-stack bg-transparent p-0">
                                <p className="stories-stack-title">Technology Stack</p>
                                <div className="stories-team-member">
                                    <img src="img/club_1.png" alt="" className="img-fluid">
                                    <img src="img/laravel.png" alt="" className="img-fluid">
                                    <img src="img/flutter.png" alt="" className="img-fluid">
                                    <img src="img/cloud.png" alt="" className="img-fluid">
                                    <img src="img/figma.png" alt="" className="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> --> */}
                                    <div className="stories-slider-item">
                                        <div className="stories-slider-link storie-ordeno-link">
                                            <div className="stories-slider-first-img">
                                                <img src="img/storie_7.png" alt="" className="img-fluid" />
                                            </div>
                                            {/* <!-- <div className="stories-slider-second-img">
                                <img src="img/storie_8.png" alt="" className="img-fluid">
                            </div> --> */}
                                            <div className="stories-slider-details medizen-app-details">
                                                <div className="stories-details-heading">
                                                    <div className="stories-details-logo">
                                                        <svg width="127" height="86" viewBox="0 0 127 86" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M0.00113957 76.4999C-0.0196715 75.1553 0.244774 73.8216 0.776853 72.5878C1.27626 71.4537 2 70.4337 2.904 69.5898C3.83107 68.7459 4.91421 68.0937 6.0917 67.6703C8.62182 66.7766 11.3793 66.7766 13.9094 67.6703C15.0844 68.0951 16.1653 68.7472 17.0911 69.5898C17.9984 70.4321 18.7244 71.4524 19.2243 72.5878C19.7364 73.8278 20 75.1573 20 76.4999C20 77.8426 19.7364 79.172 19.2243 80.412C18.7244 81.5474 17.9984 82.5678 17.0911 83.41C16.1666 84.2529 15.0852 84.9032 13.9094 85.3234C11.3807 86.2255 8.62039 86.2255 6.0917 85.3234C4.9134 84.9046 3.82978 84.2542 2.904 83.41C2 82.5662 1.27626 81.5461 0.776853 80.412C0.244774 79.1782 -0.0196715 77.8445 0.00113957 76.4999V76.4999ZM5.55234 76.4999C5.50062 77.7155 5.91991 78.9038 6.72197 79.8148C7.14674 80.2493 7.65914 80.5872 8.22467 80.8058C8.79021 81.0244 9.39576 81.1187 10.0006 81.0823C10.6054 81.1187 11.2109 81.0244 11.7765 80.8058C12.342 80.5872 12.8544 80.2493 13.2792 79.8148C14.0318 78.8757 14.4422 77.706 14.4422 76.4999C14.4422 75.2939 14.0318 74.1241 13.2792 73.185C12.8544 72.7506 12.342 72.4127 11.7765 72.194C11.2109 71.9754 10.6054 71.8811 10.0006 71.9175C9.39576 71.8811 8.79021 71.9754 8.22467 72.194C7.65914 72.4127 7.14674 72.7506 6.72197 73.185C5.91991 74.096 5.50062 75.2843 5.55234 76.4999V76.4999Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M24 67.4666H29.7038V70.4492H29.7785C30.2822 69.4254 31.0248 68.5394 31.9431 67.8667C32.8823 67.263 33.9826 66.9619 35.0966 67.0039C35.4263 67.0039 35.756 67.0039 36.0856 67.0476C36.3944 67.0692 36.7005 67.1194 37 67.1977V72.4688C36.6129 72.3399 36.2182 72.2355 35.8182 72.1562C35.4066 72.0924 34.9906 72.061 34.5742 72.0624C33.689 72.0261 32.8065 72.1818 31.9866 72.5189C31.3916 72.7884 30.8847 73.2221 30.5249 73.7694C30.1644 74.3701 29.9373 75.042 29.8593 75.7391C29.7563 76.5687 29.7064 77.4041 29.71 78.2402V86H24V67.4666Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M58 85.5418H52.7822V83.1263H52.7079C52.4467 83.4901 52.148 83.8255 51.8166 84.1271C51.426 84.486 50.9938 84.7971 50.5292 85.0538C50.0138 85.3404 49.4677 85.5683 48.9013 85.7333C48.2986 85.9116 47.6731 86.0011 47.0445 85.999C45.7716 86.0176 44.5081 85.778 43.3307 85.2947C42.2515 84.8507 41.279 84.1832 40.4774 83.3363C39.6602 82.472 39.0284 81.4503 38.6205 80.3339C38.1894 79.1078 37.9798 77.8151 38.0015 76.5159C38.0052 75.255 38.2143 74.0031 38.6205 72.8092C38.9921 71.6911 39.5555 70.6459 40.2855 69.7203C41.0005 68.8215 41.8967 68.0827 42.916 67.5518C44.0029 66.9956 45.2105 66.7155 46.4317 66.7363C47.5591 66.7273 48.6794 66.9133 49.7431 67.2862C50.7489 67.6367 51.625 68.2828 52.2561 69.1395H52.3365V57H58V85.5418ZM52.7822 76.3677C52.8376 75.1349 52.4091 73.9292 51.5876 73.0069C50.6706 72.1795 49.4784 71.7213 48.2422 71.7213C47.0059 71.7213 45.8138 72.1795 44.8967 73.0069C44.1237 73.957 43.7018 75.1437 43.7018 76.3677C43.7018 77.5916 44.1237 78.7783 44.8967 79.7284C45.8138 80.5559 47.0059 81.014 48.2422 81.014C49.4784 81.014 50.6706 80.5559 51.5876 79.7284C52.4001 78.8024 52.8197 77.5971 52.7574 76.3677H52.7822Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M80.1262 82.423C79.2068 83.5662 78.0166 84.4738 76.6582 85.0675C75.2884 85.6817 73.7991 85.9997 72.2919 85.9998C70.9205 86.0084 69.5583 85.7794 68.2687 85.3234C67.0579 84.9045 65.9446 84.254 64.994 83.4101C64.0601 82.5679 63.3129 81.5475 62.7984 80.4122C62.2713 79.1722 62 77.8428 62 76.5003C62 75.1577 62.2713 73.8283 62.7984 72.5883C63.3129 71.453 64.0601 70.4327 64.994 69.5904C65.9459 68.7466 67.0586 68.0944 68.2687 67.671C69.5595 67.2199 70.9211 66.9931 72.2919 67.0007C73.5276 66.9852 74.7538 67.2132 75.8972 67.671C76.948 68.1013 77.886 68.7574 78.6417 69.5904C79.4163 70.4683 80.0056 71.4871 80.3757 72.5883C80.8013 73.8502 81.012 75.1717 80.9995 76.5003V78.249H67.7385C67.9209 79.2405 68.4447 80.1413 69.223 80.8021C70.012 81.4454 71.0152 81.7837 72.0424 81.7527C72.8805 81.7814 73.7089 81.5696 74.4251 81.1434C75.0867 80.7231 75.6621 80.1858 76.1217 79.5591L80.1262 82.423ZM75.2859 74.4529C75.3092 74.0041 75.2363 73.5556 75.072 73.1359C74.9076 72.7162 74.6555 72.3346 74.3316 72.0156C74.0025 71.6819 73.6054 71.4194 73.166 71.2451C72.7265 71.0709 72.2545 70.9888 71.7804 71.0041C71.2065 70.9949 70.6363 71.0963 70.1025 71.3026C69.6438 71.4851 69.2216 71.745 68.855 72.0704C68.5167 72.3733 68.2451 72.7402 68.0566 73.1489C67.8651 73.5532 67.755 73.9897 67.7323 74.4346L75.2859 74.4529Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M85 67.486H90.5383V69.9778H90.6139C90.8184 69.589 91.0768 69.2305 91.3817 68.9126C91.7339 68.5417 92.1363 68.221 92.5774 67.9595C93.0711 67.6672 93.5996 67.437 94.1508 67.2742C94.7762 67.0929 95.425 67.0027 96.0767 67.0063C97.2916 66.958 98.5016 67.1861 99.6136 67.6729C100.475 68.09 101.201 68.7374 101.709 69.5417C102.236 70.3899 102.583 71.3351 102.729 72.3201C102.917 73.4651 103.007 74.6237 103 75.7837V85.9875H97.2284V76.9423C97.2284 76.4066 97.2284 75.8522 97.1717 75.2853C97.1421 74.743 97.0252 74.2089 96.8256 73.703C96.6468 73.2361 96.3421 72.8267 95.9445 72.5194C95.4387 72.1884 94.838 72.0288 94.2326 72.0647C93.6038 72.0399 92.9792 72.1772 92.4201 72.4634C91.9759 72.716 91.6101 73.0845 91.3628 73.5286C91.1139 73.9989 90.9519 74.5094 90.8845 75.0361C90.8075 75.6165 90.7697 76.2013 90.7712 76.7866V86H85V67.486Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M106.001 76.4999C105.982 75.1555 106.26 73.8225 106.815 72.5878C107.34 71.4524 108.103 70.4321 109.055 69.5898C110.026 68.746 111.162 68.0937 112.396 67.6703C115.053 66.7766 117.948 66.7766 120.605 67.6703C121.841 68.0937 122.979 68.7459 123.952 69.5898C124.901 70.4337 125.661 71.4537 126.185 72.5878C126.723 73.8278 127 75.1573 127 76.4999C127 77.8426 126.723 79.172 126.185 80.412C125.661 81.5461 124.901 82.5662 123.952 83.41C122.98 84.2542 121.842 84.9046 120.605 85.3234C117.95 86.2255 115.051 86.2255 112.396 85.3234C111.161 84.9045 110.025 84.254 109.055 83.41C108.103 82.5678 107.34 81.5474 106.815 80.412C106.26 79.1773 105.982 77.8443 106.001 76.4999V76.4999ZM111.836 76.4999C111.78 77.7146 112.218 78.9029 113.058 79.8148C114.002 80.6301 115.229 81.0814 116.5 81.0814C117.772 81.0814 118.999 80.6301 119.943 79.8148C120.738 78.8776 121.171 77.7072 121.171 76.4999C121.171 75.2927 120.738 74.1222 119.943 73.185C118.999 72.3697 117.772 71.9185 116.5 71.9185C115.229 71.9185 114.002 72.3697 113.058 73.185C112.218 74.0969 111.78 75.2852 111.836 76.4999V76.4999Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M60.0522 10.9253C60.3927 11.099 60.7199 11.292 61.0538 11.4979C61.1673 11.5751 61.4611 11.7102 61.5279 11.826C61.5279 11.7874 61.1205 11.5108 61.3609 11.7038L61.628 11.9161C61.9081 12.1517 62.1755 12.4008 62.4293 12.6625C62.5629 12.7976 62.6964 12.9391 62.8233 13.0871C62.8927 13.1541 62.9553 13.2274 63.0102 13.3059C62.9635 13.1965 62.6964 12.907 62.9168 13.1965C63.1377 13.4907 63.3428 13.7956 63.5311 14.1101C63.7535 14.438 63.9351 14.79 64.0719 15.1589C64.0319 15.0174 63.885 14.715 64.0118 15.0367C64.0519 15.1267 64.0853 15.2233 64.1187 15.3133C64.1855 15.5064 64.2522 15.6929 64.3057 15.886C64.3591 16.079 64.4258 16.3042 64.4726 16.5294C64.4726 16.6452 64.526 16.761 64.546 16.8768C64.5661 16.9926 64.6395 17.4816 64.546 16.8768C64.5757 17.4392 64.8125 17.973 65.2138 18.3824C65.6288 18.7781 66.1891 19 66.7729 19C67.3568 19 67.9171 18.7781 68.3321 18.3824C68.546 18.19 68.7158 17.9567 68.8308 17.6975C68.9458 17.4382 69.0033 17.1587 68.9999 16.8768C68.7676 14.7959 67.9961 12.8046 66.7563 11.0861C65.5951 9.51172 64.0764 8.21339 62.3158 7.28999C62.0659 7.14931 61.7897 7.05744 61.5029 7.01962C61.2161 6.9818 60.9245 6.99877 60.6445 7.06957C60.3645 7.14037 60.1018 7.26361 59.8713 7.43225C59.6408 7.60089 59.447 7.81163 59.301 8.05244C59.155 8.29325 59.0596 8.5594 59.0204 8.83572C58.9811 9.11203 58.9987 9.39309 59.0722 9.66284C59.1457 9.9326 59.2736 10.1858 59.4486 10.4079C59.6236 10.63 59.8423 10.8168 60.0922 10.9574L60.0522 10.9253Z"
                                                                fill="#ED564C" />
                                                            <path
                                                                d="M62.7101 30.9276C62.3204 31.0371 61.9239 31.1329 61.5274 31.215L61.0489 31.304C60.3106 31.4545 61.4522 31.304 60.7002 31.3587C59.9194 31.4443 59.1334 31.4717 58.3485 31.4408C57.9999 31.4408 57.6649 31.3998 57.3094 31.3656C56.9539 31.3314 57.829 31.4614 57.1043 31.3656L56.6531 31.2903C55.901 31.1475 55.1606 30.9485 54.4382 30.695C53.1182 30.2144 51.8765 29.5411 50.7534 28.6969C50.9858 28.868 50.3227 28.3411 50.227 28.2589C49.9672 28.0331 49.7143 27.8005 49.475 27.5747C49.2357 27.3488 48.9418 27.0272 48.6888 26.733C48.5034 26.5354 48.3321 26.325 48.1761 26.1035C47.7467 25.4957 47.354 24.8628 47.0003 24.208C46.6481 23.5731 46.3684 22.9005 46.1662 22.2031C45.9507 21.5019 45.7749 20.7891 45.6398 20.0681C45.4963 19.3222 45.6398 20.2802 45.6398 19.8423C45.6125 19.6461 45.592 19.4477 45.5783 19.247C45.5783 18.8569 45.5305 18.46 45.5305 18.07C45.4849 16.6464 45.7027 15.2265 46.1731 13.8822C46.5613 12.6108 47.1498 11.4097 47.9163 10.3239L48.2445 9.85179C48.4974 9.50281 47.9163 10.2418 48.3812 9.67388C48.6 9.40473 48.8278 9.1447 49.0648 8.8938C49.6079 8.29759 50.2002 7.74823 50.8354 7.25153C50.6235 7.40891 51.3003 6.92307 51.4097 6.8478C51.7036 6.6562 52.0044 6.46461 52.3052 6.29354C52.606 6.12247 52.9889 5.91034 53.3512 5.73927L53.7887 5.54083C53.4879 5.67084 54.0827 5.43134 54.1374 5.40397C54.8644 5.13789 55.6091 4.92296 56.366 4.76075C56.4959 4.76075 57.3709 4.57599 57.0496 4.62389C57.5187 4.55769 57.9912 4.51885 58.4647 4.50756C59.811 4.4161 61.1627 4.56438 62.4572 4.9455C63.8165 5.27087 65.1079 5.83377 66.2718 6.6083C67.4033 7.32171 68.4179 8.20573 69.2798 9.2291C71.0467 11.3728 72.1408 13.9916 72.4245 16.7562C72.4963 17.6123 72.4963 18.473 72.4245 19.3291C72.4245 19.2743 72.3493 20.0134 72.3903 19.726C72.3903 19.5549 72.3219 20.1297 72.3083 20.2255C72.2331 20.6361 72.1374 21.0466 72.028 21.4572C71.6564 22.9746 70.9999 24.4074 70.0933 25.6792C69.6926 26.2809 69.2348 26.8423 68.726 27.3557C68.4594 27.6294 68.1791 27.8963 67.8988 28.1563C67.6186 28.4163 67.2562 28.7037 67.0922 28.8406C66.4223 29.3177 65.7186 29.7454 64.9866 30.1202C64.2653 30.4912 63.5068 30.7848 62.7238 30.9961C59.9482 31.8104 61.1309 36.1692 63.9201 35.3481C67.4977 34.3305 70.6724 32.2287 73.008 29.3316C75.3436 26.4345 76.7253 22.8844 76.9631 19.1693C77.201 15.4542 76.2833 11.7566 74.3363 8.58484C72.3892 5.41304 69.5084 2.92281 66.0899 1.4565C62.6714 -0.00980454 58.883 -0.380191 55.2457 0.396268C51.6083 1.17273 48.3005 3.05791 45.7771 5.79263C43.2537 8.52734 41.6385 11.9773 41.1536 15.6683C40.6688 19.3592 41.338 23.1098 43.0694 26.4045C46.9387 33.9316 55.8601 37.5857 63.9201 35.3481C66.7025 34.5064 65.5198 30.1476 62.7101 30.9276Z"
                                                                fill="#ED564C" />
                                                        </svg>
                                                    </div>
                                                    <div className="stories-details-title">
                                                        <h2>Ordeno App
                                                        </h2>
                                                        <p className="stories-details-platform section-description">In-restaurant food
                                                            ordering and Order managementSystem</p>
                                                    </div>
                                                </div>
                                                <div className="stories-details-pills">
                                                    <span>Mobile App</span>
                                                    <span>Food Ordering</span>
                                                    <span>Restaurant</span>
                                                </div>
                                                <h4 className="stories-details-subtitle">About Project</h4>
                                                <p className="stories-details-discription">Ordeno is a startup based out in Spain and
                                                    Peru.
                                                    They are focused on making the food ordering simple when you are in a restaurant
                                                    and
                                                    make the life easier for restaurants to manage their orders, tables and loyalty
                                                    and
                                                    promotions from a single system.</p>
                                                {/* <!-- <div className="stories-design">
                                <h4 className="stories-details-subtitle">What we done</h4>
                                <p className="stories-details-discription">UI/UX consultancy and Product Discovery</p>
                                <p className="stories-details-discription">iOS and Android apps</p>
                                <p className="stories-details-discription">Backend Development</p>
                                <p className="stories-details-discription">Promotion & Loyalty Management</p>
                                <p className="stories-details-discription">Tablet Management System</p>
                            </div> --> */}
                                                <div className="stories-team stories-techology-stack bg-transparent p-0">
                                                    <p className="stories-stack-title">Technology Stack</p>
                                                    <div className="stories-team-member">
                                                        <img src="img/mongo.png" alt="" className="img-fluid" />
                                                        <img src="img/node.png" alt="" className="img-fluid" />
                                                        <img src="img/flutter.png" alt="" className="img-fluid" />
                                                        <img src="img/stack_5.svg" alt="" className="img-fluid" />
                                                        <img src="img/qrcode.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stories-slider-item">
                                        <div className="stories-slider-link storie-akasa-link">
                                            <div className="stories-slider-first-img">
                                                <img src="img/storie_9.png" alt="" className="img-fluid" />
                                            </div>
                                            {/* <!-- <div className="stories-slider-second-img">
                                <img src="img/storie_10.png" alt="" className="img-fluid">
                            </div> --> */}
                                            <div className="stories-slider-details medizen-app-details">
                                                <div className="stories-details-heading">
                                                    <div className="stories-details-logo">
                                                        <img src="img/akasa.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="stories-details-title">
                                                        <h2>Akasa Air</h2>
                                                        <p className="stories-details-platform section-description">World’s #1 on-course
                                                            food delivery platform</p>
                                                    </div>
                                                </div>

                                                <div className="stories-details-pills">
                                                    <span>Mobile App</span>
                                                    <span>Food Ordering</span>
                                                    <span>Restaurant</span>
                                                </div>
                                                <h4 className="stories-details-subtitle">About Project</h4>
                                                <p className="stories-details-discription">Ordeno is a startup based out in Spain and
                                                    Peru.
                                                    They are focused on making the food ordering simple when you are in a restaurant
                                                    and
                                                    make the life easier for restaurants to manage their orders, tables and loyalty
                                                    and
                                                    promotions from a single system.</p>
                                                {/* <!-- <div className="stories-design">
                                <h4 className="stories-details-subtitle">What we done</h4>
                                <p className="stories-details-discription">Product UI/UX Designing</p>
                                <p className="stories-details-discription">App Development</p>
                                <p className="stories-details-discription">Backend Development</p>
                            </div> --> */}
                                                <div className="stories-team stories-techology-stack bg-transparent p-0">
                                                    <p className="stories-stack-title">Technology Stack</p>
                                                    <div className="stories-team-member">
                                                        <img src="img/firebase.png" alt="" className="img-fluid" />
                                                        <img src="img/laravel.png" alt="" className="img-fluid" />
                                                        <img src="img/flutter.png" alt="" className="img-fluid" />
                                                        <img src="img/cloud.png" alt="" className="img-fluid" />
                                                        <img src="img/figma.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stories-slider-item">
                                        <div className="stories-slider-link storie-medizen-app">
                                            <div className="stories-slider-first-img">
                                                <img src="img/storie_3.png" alt="" className="img-fluid" />
                                            </div>
                                            {/* <!-- <div className="stories-slider-second-img">
                                <img src="img/storie_4.png" alt="" className="img-fluid">
                            </div> --> */}
                                            <div className="stories-slider-details medizen-app-details">
                                                <div className="stories-details-heading">
                                                    <div className="stories-details-logo">
                                                        <img src="img/medizen.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="stories-details-title">
                                                        <h2>Medizen App</h2>
                                                        <p className="stories-details-platform section-description">Hipaa Compliance
                                                            Pill
                                                            Reminder App</p>
                                                    </div>
                                                </div>
                                                <div className="stories-details-pills">
                                                    <span>Mobile App</span>
                                                    <span>Healthcare</span>
                                                    <span>Wellness</span>
                                                </div>
                                                <h4 className="stories-details-subtitle">About Project</h4>
                                                <p className="stories-details-discription">Medizen App is a smart tool to improve
                                                    medication
                                                    compliance and improve medication safety. This app helps users to manage and
                                                    keep
                                                    track of their own and family members medication reminders and health updates.
                                                </p>
                                                {/* <!-- <div className="stories-design">
                                <h4 className="stories-details-subtitle">What we done</h4>
                                <p className="stories-details-discription">Design Workshop</p>
                                <p className="stories-details-discription">360 degree transformation of UI/UX</p>
                                <p className="stories-details-discription">Flutter App Development</p>
                            </div> --> */}
                                                <div className="stories-team stories-techology-stack bg-transparent p-0">
                                                    <p className="stories-stack-title">Technology Stack</p>
                                                    <div className="stories-team-member">
                                                        <img src="img/stack_1.png" alt="" className="img-fluid" />
                                                        <img src="img/stack_2.png" alt="" className="img-fluid" />
                                                        <img src="img/stack_3.png" alt="" className="img-fluid" />
                                                        <img src="img/stack_5.svg" alt="" className="img-fluid" />
                                                        <img src="img/stack_4.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            {/* <div className="stories-slider-tabs">
                                <h5 className="stories-tabs-link">
                                    EMSI APP
                                </h5>
                                 <h5 className="stories-tabs-link">
                    CLUB GRUB
                </h5> 
                                <h5 className="stories-tabs-link">
                                    ORDENO APP
                                </h5>
                                <h5 className="stories-tabs-link">
                                    AKASHA AIRLINE
                                </h5>
                                <h5 className="stories-tabs-link">
                                    Medizen
                                </h5>
                            </div> */}

                        </div>
                    </div>
                </section>
                {/* <!-- Stories Section End --> */}

                {/* <!-- Development Section Start --> */}
                <section className="development-section p-0">
                    <div className="container">
                        <div className="development-content">
                            <h2 className="stories-title">React Native Development Stack</h2>
                            <p className="stories-discription">At TechoYuga we use the scalable and trending frameworks and
                                technologies
                                to build Mobile
                                Apps , Backend and Web applications for our clients.</p>
                            <div className="development-tools-list">
                                <div className="row justify-content-between">
                                    <div className="col col-12 col-lg-5">
                                        <div className="development-tools text-center">
                                            <h2 className="development-tools-title">Development Technology & Tools</h2>
                                            <div className="row">
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/adroid_studio.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Android Studio</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/vs_code.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">VS Code</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/dart.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Dart</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/flutter_sdk.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Flutter SDK</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-lg-7">
                                        <div className="development-tools text-center">
                                            <h2 className="development-tools-title">Database</h2>
                                            <div className="row justify-content-end">
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-2">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/fiebase.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Firebase</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-2">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/realm.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Realm</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-2">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/sw_lite.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">SW Lite</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-2">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/MongoDB.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">MongoDB</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-2">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/my_sql.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">My SQL</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-lg-5">
                                        <div className="development-tools text-center">
                                            <h2 className="development-tools-title">Design Tools</h2>
                                            <div className="row">
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/figma_2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Figma</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/sketch.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Sketch</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/xd.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Adobe XD</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/photoshop.png" alt="" className="img-fluid" style={{ width: "80%" }} />
                                                        </div>
                                                        <h5 className="development-tools-name">Photoshop</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-lg-5">
                                        <div className="development-tools text-center">
                                            <h2 className="development-tools-title">Cloud Services</h2>
                                            <div className="row">
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/aws.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">AWS</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/heroku.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Heroku</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/cloud_2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Google cloud</h5>
                                                    </div>
                                                </div>
                                                <div className="col col-6 col-md-6 col-lg-6 col-xl-3">
                                                    <div className="development-tools-img">
                                                        <div className="development-tools-icon">
                                                            <img src="img/digital_ocean.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <h5 className="development-tools-name">Digital ocean</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Development Section End --> */}

                {/* <!-- hiring Section Start --> */}
                <section className="hiring-section section-padding">
                    <div className="container">
                        <div className="hiring-content">
                            <h2 className="stories-title">Hiring As Easy As Three Steps</h2>
                            <div className="hiring-steps">
                                <div className="row m-0">
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4 p-0">
                                        <div className="hiring-steps-item">
                                            <div className="hiring-steps-img">
                                                <svg width="120" height="120" viewBox="0 0 151 150" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M68.0574 150C58.7632 150 50.0291 148.148 41.855 144.444C33.6762 140.741 26.5868 135.741 20.5868 129.444C14.5868 123.148 9.82206 115.709 6.29265 107.126C2.76324 98.5481 0.998535 89.3827 0.998535 79.6296C0.998535 69.8765 2.76324 60.7086 6.29265 52.1259C9.82206 43.5481 14.5868 36.1111 20.5868 29.8148C26.5868 23.5185 33.6762 18.5185 41.855 14.8148C50.0291 11.1111 58.7632 9.25926 68.0574 9.25926C72.8809 9.25926 77.5868 9.78272 82.175 10.8296C86.7632 11.8815 91.175 13.3951 95.4103 15.3704V27.7778C91.2926 25.4321 86.9397 23.6099 82.3515 22.3111C77.7632 21.0173 72.9985 20.3704 68.0574 20.3704C52.4103 20.3704 39.0879 26.1407 28.0903 37.6815C17.0879 49.2272 11.5868 63.2099 11.5868 79.6296C11.5868 96.0494 17.0879 110.032 28.0903 121.578C39.0879 133.119 52.4103 138.889 68.0574 138.889C83.7044 138.889 97.0291 133.119 108.031 121.578C119.029 110.032 124.528 96.0494 124.528 79.6296C124.528 75.8025 124.206 72.1284 123.561 68.6074C122.911 65.0914 121.94 61.6667 120.646 58.3333H132.116C133.057 61.7901 133.794 65.2469 134.326 68.7037C134.853 72.1605 135.116 75.8025 135.116 79.6296C135.116 89.3827 133.351 98.5481 129.822 107.126C126.293 115.709 121.528 123.148 115.528 129.444C109.528 135.741 102.441 140.741 94.2668 144.444C86.088 148.148 77.3515 150 68.0574 150ZM126.293 40.7407V25.9259H112.175V14.8148H126.293V0H136.881V14.8148H150.999V25.9259H136.881V40.7407H126.293ZM92.0574 70.7407C94.6456 70.7407 96.8221 69.8148 98.5868 67.963C100.351 66.1111 101.234 63.8272 101.234 61.1111C101.234 58.3951 100.351 56.1111 98.5868 54.2593C96.8221 52.4074 94.6456 51.4815 92.0574 51.4815C89.4691 51.4815 87.2927 52.4074 85.5279 54.2593C83.7632 56.1111 82.8809 58.3951 82.8809 61.1111C82.8809 63.8272 83.7632 66.1111 85.5279 67.963C87.2927 69.8148 89.4691 70.7407 92.0574 70.7407ZM44.0574 70.7407C46.6456 70.7407 48.8221 69.8148 50.5868 67.963C52.3515 66.1111 53.2338 63.8272 53.2338 61.1111C53.2338 58.3951 52.3515 56.1111 50.5868 54.2593C48.8221 52.4074 46.6456 51.4815 44.0574 51.4815C41.4691 51.4815 39.2927 52.4074 37.5279 54.2593C35.7632 56.1111 34.8809 58.3951 34.8809 61.1111C34.8809 63.8272 35.7632 66.1111 37.5279 67.963C39.2927 69.8148 41.4691 70.7407 44.0574 70.7407ZM68.0574 118.148C75.4691 118.148 82.2056 115.988 88.2668 111.667C94.3232 107.346 98.8221 101.605 101.763 94.4444H34.3515C37.2927 101.605 41.7938 107.346 47.855 111.667C53.9115 115.988 60.6456 118.148 68.0574 118.148Z"
                                                        fill="#003262" />
                                                </svg>
                                            </div>
                                            <h4 className="hiring-steps-title">Get Expert Assistance</h4>
                                            <p className="hiring-discription">After you fill the contact form you would be contacted
                                                by
                                                an expert to assist you through the hiring process and interview.</p>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4 p-0">
                                        <div className="hiring-steps-item">
                                            <div className="hiring-steps-img">
                                                <svg width="120" height="120" viewBox="0 0 150 150" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_18_2697" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="150" height="150">
                                                        <rect width="150" height="150" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_18_2697)">
                                                        <path
                                                            d="M75 134.375C66.7708 134.375 59.0625 132.812 51.875 129.688C44.6875 126.562 38.4104 122.344 33.0438 117.031C27.6813 111.719 23.4375 105.442 20.3125 98.2C17.1875 90.9625 15.625 83.2292 15.625 75C15.625 66.7708 17.1875 59.0354 20.3125 51.7937C23.4375 44.5562 27.6563 38.2813 32.9688 32.9688C38.2813 27.6563 44.5583 23.4375 51.8 20.3125C59.0375 17.1875 66.7708 15.625 75 15.625C81.5625 15.625 87.7875 16.6146 93.675 18.5937C99.5583 20.5729 104.948 23.3333 109.844 26.875L103.125 33.75C99.0625 31.0417 94.6604 28.9062 89.9188 27.3438C85.1813 25.7812 80.2083 25 75 25C61.1458 25 49.35 29.8687 39.6125 39.6062C29.8708 49.3479 25 61.1458 25 75C25 88.8542 29.8708 100.652 39.6125 110.394C49.35 120.131 61.1458 125 75 125C78.5417 125 81.9542 124.635 85.2375 123.906C88.5167 123.177 91.6667 122.188 94.6875 120.938L101.719 128.125C97.6562 130.104 93.3854 131.642 88.9063 132.738C84.4271 133.829 79.7917 134.375 75 134.375ZM120.312 123.438V104.688H101.562V95.3125H120.312V76.5625H129.688V95.3125H148.438V104.688H129.688V123.438H120.312ZM66.0937 101.562L41.7188 77.1875L48.2812 70.625L66.0937 88.4375L127.813 26.7188L134.375 33.2812L66.0937 101.562Z"
                                                            fill="#003262" />
                                                    </g>
                                                </svg>


                                            </div>
                                            <h4 className="hiring-steps-title">Select the Hiring Plan</h4>
                                            <p className="hiring-discription">Choose any of the available plans that are favorable
                                                to
                                                your needs. Or you can simply start with a risk free trial to evaluate the
                                                developer
                                                working style.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4 p-0">
                                        <div className="hiring-steps-item">
                                            <div className="hiring-steps-img">
                                                <svg width="120" height="120" viewBox="0 0 151 150" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_18_2700" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                                        x="0" y="0" width="151" height="150">
                                                        <rect x="0.780273" width="150" height="150" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_18_2700)">
                                                        <path
                                                            d="M75.7803 90.7793L83.4365 73.2793L100.937 65.623L83.4365 57.9668L75.7803 40.4668L68.124 57.9668L50.624 65.623L68.124 73.2793L75.7803 90.7793ZM27.6553 110.779C24.5303 110.779 21.874 109.686 19.6865 107.498C17.499 105.311 16.4053 102.654 16.4053 99.5293V34.6855C16.4053 31.4564 17.499 28.748 19.6865 26.5605C21.874 24.373 24.5303 23.2793 27.6553 23.2793H123.905C127.03 23.2793 129.687 24.373 131.874 26.5605C134.062 28.748 135.155 31.4564 135.155 34.6855V99.5293C135.155 102.654 134.062 105.311 131.874 107.498C129.687 109.686 127.03 110.779 123.905 110.779H27.6553ZM27.6553 101.404H123.905C124.322 101.404 124.739 101.223 125.155 100.861C125.572 100.494 125.78 100.05 125.78 99.5293V34.6855C125.78 34.1647 125.572 33.696 125.155 33.2793C124.739 32.8626 124.322 32.6543 123.905 32.6543H27.6553C27.2386 32.6543 26.8219 32.8626 26.4053 33.2793C25.9886 33.696 25.7803 34.1647 25.7803 34.6855V99.5293C25.7803 100.05 25.9886 100.494 26.4053 100.861C26.8219 101.223 27.2386 101.404 27.6553 101.404ZM14.0615 126.404C12.8115 126.404 11.7178 125.963 10.7803 125.079C9.84277 124.192 9.37402 123.071 9.37402 121.717C9.37402 120.363 9.84277 119.244 10.7803 118.361C11.7178 117.473 12.8115 117.029 14.0615 117.029H137.499C138.749 117.029 139.843 117.473 140.78 118.361C141.718 119.244 142.187 120.363 142.187 121.717C142.187 123.071 141.718 124.192 140.78 125.079C139.843 125.963 138.749 126.404 137.499 126.404H14.0615Z"
                                                            fill="#003262" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h4 className="hiring-steps-title">Hire the Developer</h4>
                                            <p className="hiring-discription">Hire the developer and get started with <br
                                                className="d-none d-lg-block" /> your project.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- hiring Section End --> */}

                {/* <!-- Schedule Section Start  --> */}
                <section className="schedule-section p-0">
                    <div className="container">
                        <div className="schedule-content">
                            <h2 className="stories-title">Why You Should Hire React Native Developer from Technoyuga</h2>
                            <div className="row">
                                <div className="col col-12 col-md-12 col-lg-12 col-xl-5">
                                    <div className="schedule-details">
                                        <span className="schedule-details-dot"></span>
                                        <h2 className="schedule-details-discription">This is the opinion of our previous clients who
                                            hired developers from Technoyuga. They say that the amount of transparency and
                                            honesty
                                            that we offer throughout the process is unmatched. At technoyuga you get to have
                                            highly
                                            efficient, cost-effective flutter developers who are experienced at developing apps
                                            for
                                            iOS, Android, Web, and Windows/Mac platforms.</h2>
                                        <h2 className="schedule-details-discription">We add the following features that make it easy
                                            for
                                            turning your dream project into a reality.</h2>
                                        <a href="#" className="btn schedule-btn">SCHEDULE INTERVIEW</a>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-12 col-lg-12 col-xl-7">
                                    <div className="schedule-points-list" data-scrollbar style={{ overflow: "auto" }}>

                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Experienced Developers:</h2>
                                            <p className="schedule-point-discription">We have developers with experience of about
                                                2-8
                                                years. They are highly skilled and can easily turn your visionary project into a
                                                mobile application.</p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Easy Management:</h2>
                                            <p className="schedule-point-discription">The management is made easy with the
                                                introduction
                                                of certain tools like trello,jira and github.</p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Source-Code Authorization:</h2>
                                            <p className="schedule-point-discription">You are provided with the complete authority
                                                of
                                                the code and the source code is updated timely on your server and code
                                                repository.
                                            </p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Version Controlling:</h2>
                                            <p className="schedule-point-discription">The different versions of your app are
                                                maintained
                                                over github. So that in any critical case we can easily rollback to the stable
                                                versions.</p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">On-Time Delivery:</h2>
                                            <p className="schedule-point-discription">We believe on-time delivery is one of the most
                                                important factors for a projects’ success. So rest assured, our developers would
                                                ensure timely delivery of milestones created by you.</p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Transparent Working Model:</h2>
                                            <p className="schedule-point-discription">By participating in the daily scrum of 15
                                                minutes,
                                                you get informed about the next target the developers would work for the day and
                                                you
                                                can also set the order of modules to be completed.</p>
                                        </div>
                                        <div className="schedule-points-link">
                                            <h2 className="schedule-point-title">Detailed Weekly Review:</h2>
                                            <p className="schedule-point-discription">We also have a detailed weekly review meeting.
                                                Where you share your feedback with the designated authority about the progress
                                                made
                                                and your thoughts on improving our process so that you can get a perfect mobile
                                                application in said time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Schedule Section End --> */}

                {/* <!-- Requirement Section Start --> */}
                <section className="requirement-section section-padding" ref={price}>
                    <div className="container">
                        <div className="requirement-content">
                            <h2 className="stories-title">Hire React Native Developers As Per Your Project Requirement</h2>
                            <div className="requirement-card-list">
                                <div className="row align-items-center">
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="requirement-card-item">
                                            <h2 className="requirement-card-title">Risk free Trial Starts <br
                                                className="d-none d-md-block" />
                                                from</h2>
                                            <h2 className="reqirement-card-price">$499</h2>
                                            <p className="requirement-card-discription">Dedicated developer</p>
                                            <p className="requirement-card-discription"> One week trial</p>
                                            <p className="requirement-card-discription">Get an idea about our <br />process.</p>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="requirement-card-item requirement-bg-grediant">
                                            <h2 className="requirement-card-title">Part time hiring starts from</h2>
                                            <h2 className="reqirement-card-price">$899</h2>
                                            <p className="requirement-card-discription">Suitable for short term engagement.</p>
                                            <p className="requirement-card-discription">Dedicated developer.</p>
                                            <p className="requirement-card-discription">Ideal for maintenance <br />related job.</p>

                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="requirement-card-item">
                                            <h2 className="requirement-card-title">Full time Hiring starts from</h2>
                                            <h2 className="reqirement-card-price">$1499</h2>
                                            <p className="requirement-card-discription">Suitable for long term engagement.</p>
                                            <p className="requirement-card-discription">Dedicated team.</p>
                                            <p className="requirement-card-discription">Service for 40 hours a <br />week.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="requirement-btn text-center">
                                    <a href="#" className="btn btn-info">SCHEDULE AN INTERVIEW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Requirement Section End --> */}

                {/* <!-- Industry Section Start --> */}
                <section className="industry-section">
                    <div className="container">
                        <div className="industry-content">
                            <h2 className="stories-title">Industry We Serve</h2>
                            {window.innerWidth < 420 ?
                                <div className="industry-list">
                                    <OwlCarousel
                                        loop
                                        margin={10}
                                        autoplay
                                        autoplayTimeout={3000}
                                        responsive={{ 0: { items: 1 }, 1000: { items: 10 } }}
                                    >
                                        <div className="industry-item">
                                            <img src="img/industry_1.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">E-COMMERCE</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_2.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">ON DEMAND SOLUTIONS</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_3.png" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">SOCIAL NETWORKING</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_4.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">HEALTHCARE</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_5.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">Emerging Tech</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_6.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">TOURS AND TRAVEL</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_7.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">TRANSPORT AND LOGISTICS</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_8.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">FINTECH</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_9.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">Education</h4>
                                            </div>
                                        </div>
                                        <div className="industry-item">
                                            <img src="img/industry_10.jpg" alt="" className="img-fluid" />
                                            <div className="industry-item-details">
                                                {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                                <h4 className="industry-item-name">welness and fitness</h4>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                :
                                <div className="industry-list">

                                    <div className="industry-item">
                                        <img src="img/industry_1.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">E-COMMERCE</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_2.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">ON DEMAND SOLUTIONS</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_3.png" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">SOCIAL NETWORKING</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_4.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">HEALTHCARE</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_5.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">Emerging Tech</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_6.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">TOURS AND TRAVEL</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_7.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">TRANSPORT AND LOGISTICS</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_8.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">FINTECH</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_9.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">Education</h4>
                                        </div>
                                    </div>
                                    <div className="industry-item">
                                        <img src="img/industry_10.jpg" alt="" className="img-fluid" />
                                        <div className="industry-item-details">
                                            {/* <!-- <p className="industry-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore</p> --> */}
                                            <h4 className="industry-item-name">welness and fitness</h4>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                {/* <!-- Industry Section End --> */}

                {/* <!-- Testimonials Section Start --> */}
                {/* <!-- <section className="testimonial-section">
    <div className="container">
        <div className="testimonial-box">
            <h2 className="stories-title m-0">Testimonials</h2>
            <h2 className="testimonial-main-title">See why our clients see us as a reliable <br className="d-none d-xl-block">long-term technology partner. </h2>
            <div className="testimonial-slider-list">
                <div className="testimonial-slider-item">
                    <div className="testimonial-slider-link">
                        <div className="testimonial-details">
                            <img src="img/clubgrub_2.png" alt="" className="img-fluid">
                            <p className="testimonial-details-discription">company that seeks to make available for decision making the information obtained from your assets using immersive technologies (AR-VR), IoT</p>
                            <img src="img/Ellipse 3.svg" alt="" className="img-fluid">
                        </div>
                        <div className="testimonial-reviews">
                            <div className="testimonial-client-img">
                                <img src="img/client_profile.png" alt="" className="img-fluid rounded-circle">
                            </div>
                            <p className="testimonial-review-discription">
                                <img src="img/quote.png" alt="" className="img-fluid">
                                Technoyuga team is the perfect tech partner for Flutter apps and other tech needs. We originally hired them for UI work and later contracted them to develop our delivery app. They managed everything from start to finish and ultimately into both app stores
                            </p>
                            <h2 className="testimonial-client-name">Spencer </h2>
                            <p className="testimonial-client-fild">Founder, Clubgrub App</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider-item">
                    <div className="testimonial-slider-link">
                        <div className="testimonial-details">
                            <img src="img/emsi.png" alt="" className="img-fluid">
                            <p className="testimonial-details-discription">company that seeks to make available for decision making the information obtained from your assets using immersive technologies (AR-VR), IoT</p>
                            <img src="img/Ellipse 3.svg" alt="" className="img-fluid">
                        </div>
                        <div className="testimonial-reviews">
                            <div className="testimonial-client-img">
                                <img src="img/client_profile.png" alt="" className="img-fluid rounded-circle">
                            </div>
                            <p className="testimonial-review-discription">
                                <img src="img/quote.png" alt="" className="img-fluid">
                                It was a great Pleasure to work with Team Technoyuga. They have delivered an amazing quality app. Definitely surpassed my expectations. I am looking to stay and work long time with this team for sure. Happy to recommend to anyone looking for a flutter app development. Thank you!"
                            </p>
                            <h2 className="testimonial-client-name">Mehdi</h2>
                            <p className="testimonial-client-fild">Founder, EMSI</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider-item">
                    <div className="testimonial-slider-link">
                        <div className="testimonial-details">
                            <img src="img/emede.png" alt="" className="img-fluid">
                            <p className="testimonial-details-discription">company that seeks to make available for decision making the information obtained from your assets using immersive technologies (AR-VR), IoT</p>
                            <img src="img/Ellipse 3.svg" alt="" className="img-fluid">
                        </div>
                        <div className="testimonial-reviews">
                            <div className="testimonial-client-img">
                                <img src="img/client_profile.png" alt="" className="img-fluid rounded-circle">
                            </div>
                            <p className="testimonial-review-discription">
                                <img src="img/quote.png" alt="" className="img-fluid">
                                Krishna delivers exceptional quality work on our Flutter App. The communication was near flawless and it was a pleasure to work with him. When it comes to Flutter Development, He is the best. His understanding and communication is really good. These guys deliver more than what we were promised.
                            </p>
                            <h2 className="testimonial-client-name">Van</h2>
                            <p className="testimonial-client-fild">President, Emdecare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --> */}

                <section className="testimonial">
                    <div className="container">
                        <div className="text-center">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Testimonials</h2>
                                <p>See why our clients see us as a reliable long-term partner</p>
                            </div>
                        </div>

                        {/* <div className="testimonial-wrapper owl-carousel testimonial-carousel"> */}
                        <OwlCarousel
                            items={1}
                            loop
                            margin={10}
                            autoplay
                            autoplayTimeout={7000}
                            nav={false}
                        >
                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/gfacility.png" alt="gfacility logo" />
                                    <p>Gfacility is Belgium based SaaS startup. We have helped them streamline visitor
                                        management.
                                        This app helps businesses simplify visitor check-in, pre-visit informative emails,
                                        automatic
                                        arrival, and confirmation notifications.</p>
                                    <img className="country-flag" src="img/flags/begim-flag.jpg" alt="belgium flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/Gfacility-client.jpeg"
                                            alt="man image" />
                                        <img className="play-btn" data-toggle="modal" data-target="#ep1" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>Awesome work culture. Requested some difficult and specific SDK integrations in my
                                        flutter
                                        application. Even Though it was complex, they made sure to understand it properly and to
                                        integrate it. Thanks to the dedication and overtime this difficult project was delivered
                                        within time and budget. Without a doubt one of my best experiences until now. Well done!
                                    </p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Valon Miski</h3>
                                    <h6>Founder Gfacility, Belgium</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/pantaya.png" alt="pantaya logo" />
                                    <p>Pantaya is the Spanish language movie platform and users can stream 100’s of movies at
                                        one
                                        platform.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/pantaya-client.jpeg"
                                            alt="person smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client2" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>Krishna and Team were an integral part of our MVP development. They demonstrated good
                                        skills
                                        in MERN Stack and AWS and delivered our MVP product. I would work with him and his team
                                        again on a future project.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Eric Liang</h3>
                                    <h6>Senior Product Manager, PANTAYA</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/tlmt.png" alt="tlmt logo" />
                                    <p>Topline mobile tour is Arizona based gaming platform which offers self guided mobile
                                        tours
                                        and digital games throughout the United states.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/andrew.jpeg" alt="man wear coat" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client3" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>TechnoYuga and Krishna did an AWESOME Job on our two projects Bubble Battle and
                                        https://toplinemobiletours.com in last 2 years and we are very happy with the end
                                        results.
                                        They provided exceptional support even after delivery of the project.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Andrew Garcia</h3>
                                    <h6>Co-Owner Bubble Battle and Operating Partner at Puzzling Adventures</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/10XNEWLOGO.png" alt="10x new logo" />
                                    <p>10X partners is a parent company of Foodio, a food tech community for consumers,
                                        industries
                                        and food suppliers across the globe. It helps industries and consumers to directly
                                        connect
                                        with food producers and they can sell their product anywhere in the world without any
                                        hustle.</p>
                                    <img className="country-flag" src="img/flags/germany.jpg" alt="germany flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/thiago.png" alt="man smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client5" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>We did MVP with them last year and worked with them for more than 6 months. The team has
                                        goodwill and is dedicated towards the project they workon. I highly recommend their
                                        services.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Thiago Garcia</h3>
                                    <h6>CEO & Founder 10X Partners</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/e2-hospitality.svg"
                                        alt="e2 hospitality logo" />
                                    <p>E2 hospitality is a finance consulting agency based out of Germany and they provide end
                                        to
                                        end accounting, finance planning and consulting services to the hospitality industry</p>
                                    <img className="country-flag" src="img/flags/germany.jpg" alt="germany flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/thomas.jpeg" alt="man in coat" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client4" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>As a finance consultant based out of Germany, I acquired the support of Technoyuga
                                        developing
                                        a financial services app. Krishna and his team were able to convert my vision into an
                                        easy
                                        to use app well within the agreed deadline. Now they are supporting me in marketing and
                                        social media efforts. I can recommend Krishna and Technoyuga to any business needing IT
                                        support.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Thomas Jerphanion</h3>
                                    <h6>Founder : E2- Hospitality</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <h5>Booksamaze</h5>
                                    <p>Booksamaze a digital content creator company based out in the United states.They produce
                                        quality content around the publishing and book industry.</p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/awani-sharma.jpeg"
                                            alt="girl smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client6" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>From the day one when I spoke to them I felt very comfortable, they came with detailed
                                        requirements specs based on my requirement and their understanding was better than mine.
                                        The
                                        most I like about them is their Flexibility, ability to come up with solutions as
                                        needed,
                                        provide proper reasoning for why things need to be built in a certain way. They have a
                                        good
                                        product development process, highly recommended.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Awani Sharma</h3>
                                    <h6>Creator Booksamaze</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/heat.png" alt="heat logo" />
                                    <p>Heavy Equipment Auction Transport (HEAT Freight) specializes in transporting construction
                                        and
                                        agricultural equipment nationwide.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/mason.jpeg" alt="man in shirt" />
                                    </div>
                                    <p>Excellent work and a helpful team. Always willing to go the extra mile for our project
                                        and we
                                        appreciate the dedication that you’ve shown in our project! Krishna and his team went
                                        above
                                        and beyond to ensure this website was completed to our specifications. I would highly
                                        recommend him and his company and will use them again in the future!</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Mason Lavallet</h3>
                                    <h6>Owner Heavy Equipment Auction Transport</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/laksa-logo.jpg" alt="laksa logo" />
                                    <p>Laksa Solutions Ltd is a UK based tech company. They offers Business Intelligence, Data
                                        Warehousing, Data Visualization, and Information Management solutions provider.</p>
                                    <img className="country-flag" src="img/flags/england.jpg" alt="uk flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/siva.jpg" alt="man image" />
                                    </div>
                                    <p>Krishna and the team did a decent job and delivered our project on time and budget. They
                                        are
                                        a very humble and hardworking team. I'm happy to recommend them.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Siva Rama Krishna BANDLAMUDI</h3>
                                    <h6>Founder Laksa Solutions Ltd</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/kairo.png" alt="kairo logo" />
                                    <p>KairosXR is a 3D design and development creative agency based in San Francisco. They
                                        design
                                        and build XR experiences, emphasizing learning design, 3D development, behavioral
                                        analytics,
                                        and storytelling.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/tim.jpeg"
                                            alt="man image  background tree" />
                                    </div>
                                    <p>Couldn't recommend Krish and his team enough. Very professional, very high-quality work.
                                        Very
                                        transparent as well. Thanks again guys!"</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Tim Kanellitsas</h3>
                                    <h6>Director of Design, KairoXR</h6>
                                </div>
                            </div>

                            <div className="testimonial-item">
                                <div className="company-info">
                                    <img className="client-logo" src="img/clients/moom.png" alt="moon logo" />
                                    <p>MooMenn, is an E-commerce marketplace platform for all Islamic Dresses , Accessories and
                                        Items.</p>
                                    <img className="country-flag" src="img/flags/england.jpg" alt="uk flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/moom-client.jfif" alt="man in car" />
                                    </div>
                                    <p>Very swift and eloquent communication, following up daily on the progress of the project
                                        and
                                        robust reactivity on each step of the way. very satisfied with the professionalism and
                                        work
                                        they have done. I would highly recommend it.</p>
                                    {/* <!-- <div className="star-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div> --> */}
                                    <h3>Aziz H L</h3>
                                    <h6>Director, MooMenn</h6>
                                </div>
                            </div>
                        </OwlCarousel>
                        {/* </div> */}
                    </div>
                    <div className="bubble2"><img src="img/bubbles2.svg" alt="big two circle" /></div>
                </section>

                {/* <!-- Testimonials Section End --> */}

                {/* <!-- Frequently Section Start --> */}
                <section className="frequently-section section-padding">
                    <div className="container">
                        <div className="frequently-content">
                            <h2 className="stories-title">Frequently Asked Questions :</h2>
                            <div className="frequently-accordion">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead1">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#frecol1"
                                                    aria-expanded="true" aria-controls="frecol1">
                                                    How many React Native developers do you have?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol1" className="panel-collapse collapse in" role="tabpanel"
                                            aria-labelledby="frehead1">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead2">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol2" aria-expanded="false"
                                                    aria-controls="frecol2">
                                                    What is technoyuga Risk-Free Trial Plan?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol2" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead2">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead3">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol3" aria-expanded="false"
                                                    aria-controls="frecol3">
                                                    Do I get support after the project is developed?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol3" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead3">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead4">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol4" aria-expanded="false"
                                                    aria-controls="frecol4">
                                                    What if I don't get a good developer?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol4" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead4">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead5">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol5" aria-expanded="false"
                                                    aria-controls="frecol5">
                                                    Can I change the developer in the middle?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol5" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead5">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead6">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol6" aria-expanded="false"
                                                    aria-controls="frecol6">
                                                    How can I transfer my project to Technoyuga from an existing service
                                                    provider?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol6" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead6">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead7">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol7" aria-expanded="false"
                                                    aria-controls="frecol7">
                                                    What other services do you provide?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol7" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead7">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead8">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol8" aria-expanded="false"
                                                    aria-controls="frecol8">
                                                    Do you follow agile methodology?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol8" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead8">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead9">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol9" aria-expanded="false"
                                                    aria-controls="frecol9">
                                                    What tools do you use for source code management?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol9" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead9">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead10">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol10" aria-expanded="false"
                                                    aria-controls="frecol10">
                                                    How can I trust Technoyuga with the information I shared?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol10" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead10">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="frehead11">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse"
                                                    data-parent="#accordion" href="#frecol11" aria-expanded="false"
                                                    aria-controls="frecol11">
                                                    What is the difference between react native and flutter?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="frecol11" className="panel-collapse collapse" role="tabpanel"
                                            aria-labelledby="frehead11">
                                            <div className="panel-body">
                                                <p className="frequently-discription">We have 15+ flutter developers with experience
                                                    of
                                                    over 2-8+ years and are ready to build your dream project most
                                                    cost-effectively.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Frequently Section End --> */}

                {/* <!-- Help Section Satrt --> */}
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
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-12 col-md-4">
                                                <div className="help-input">
                                                    <label className="form-label">Email Id</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-12 col-md-4">
                                                <div className="help-input">
                                                    <label className="form-label">Phone Number</label>
                                                    {/* <div className="hire-form-country help-form-country"> */}
                                                    <input type="number" className="form-control" />
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
                                                    <textarea className="form-control" cols="30" rows="7"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="help-btn text-right">
                                            <a href="#" className="btn schedule-btn">GET IN TOUCH</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Help Section End --> */}
            </main>


            {/* <!-- ======= Footer ======= --> */}
            {/* <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="footer-nav">
                            <img src="img/footer-tech-logo.png" alt="techno yuga logo" />
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/career">Careers</a></li>
                                <li><a href="/">Story</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copy">
                        <div className="copyright">
                            © 2021 Technoyuga. All rights reserved
                        </div>

                        <div className="social-media">
                            <ul>
                                <li><a target="_blank" href="https://www.instagram.com/techno_yuga"><i className="fa fa-instagram"
                                    aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="#"><i className="icofont-dribble" aria-hidden="true"></i></a>
                                </li>
                                <li><a target="_blank" href="https://twitter.com/TechnoYuga"><i className="fa fa-twitter"
                                    aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="#"><i className="icofont-youtube-play"
                                    aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> */}

            <Footer />

            {/* <!-- End Footer --> */}
            {/* <!-- The Modal --> */}
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

            {/* <!-- after popup modal --> */}
            <div className="modal fade" id="afterpopup" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-content-wrapper">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 pr-0 dnm">
                                    <img className="img-fluid" src="img/modal-img.png" />
                                </div>
                                <div className="col-lg-6 col-md-6 pl-0">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <img src="img/close-icon.svg" />
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
                                <img src="img/modal-bubble.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactNative