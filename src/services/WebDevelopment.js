import React from 'react'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Discuss from '../components/Discuss';

const WebDevelopment = () => {
    return (
        <div>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TRJ57"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

            {/* <header id="header" className="fixed-top dark-header">
                <div className="container-fluid d-flex">

                    <div className="logo mr-auto">
                        <a href="/"><img src="img/technoyuga-logo.svg" alt="technoyuga logo" className="img-fluid" /></a>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li className="drop-down"><a href="#0">About us</a>
                                <ul>
                                    <li><a href="/aboutus">Company</a></li>
                                    <li><a href="../about-us.html#our-story">Our Story</a></li>
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
            </header> */}

            <Header />

            <section className="ar-vr-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-in" data-aos-delay="100">
                            <div className="ios-banner">
                                <img className="img-fluid" src="img/web-dev-banner.png" alt="web app development" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ar-vr-banner-text">
                                <h3>Web</h3>
                                <h2>Development</h2>
                            </div>
                            <div className="ar-vr-banner--sub-text">
                                <p className="mt-5 first-p">TechnoYuga is a top rated Website and Web app development company that is helping startups, small businesses and growing enterprises around the world. We build bespoke websites and web applications</p>
                                <a href="/contact-us" className="cta mt-3 d-inline-block">Request a call back</a>
                                <p className="note banner-dis">*No Spam. 100% Privacy Guaranteed.</p>
                            </div>
                        </div>
                        <div className="separator"></div>
                    </div>
                </div>

            </section>


            <main id="main">

                <section className="description-block" data-aos="fade-up" data-aos-delay="100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 d-flex flex-column justify-content-center">
                                <p className="text-center">We have experienced full-stack web development teams with experience in <strong>Open-Source technologies, JS freamwork, PHP framework and Microsoft technologies, and DevOps</strong> services to offer affordable solutions for your business.</p>

                                <p className="text-center">Whether it's Custom Web Development from scratch, Revamp your existing website, or developing a web based SaaS product. We can help you in end to end custom web development and provide the cost efficient solution.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="custom-web-dev">
                    <div className="container">
                        <div className="section-title white" data-aos="fade-up">
                            <h2>What we do</h2>
                            <p className="title-para">We provide a wide range of web development services. Based on our discussion with our clients on their business objective ,problem statement, expansion plan we propose the right web development solution and start with the project accordingly.</p>
                        </div>
                        <div className="web-dev-wrapper mt-5">
                            <ul className="d-flex">
                                <li className="d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="100">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="img/web-dev.svg" alt='' />
                                    </div>
                                    <p>Custom Website Development</p>
                                </li>
                                <li className="d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="200">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="img/custom-e-com.svg" alt='' />
                                    </div>
                                    <p>Custom eCommerce <br />Website Development</p>
                                </li>
                                <li className="d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="300">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="img/custom-web-portal.svg" />
                                    </div>
                                    <p>Backend and API developement</p>
                                </li>
                                <li className="d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="400">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="img/custom-saas.svg" />
                                    </div>
                                    <p>Custom Web based SaaS Product Development.</p>
                                </li>
                                <li className="d-flex justify-content-center align-items-center" data-aos="fade-in" data-aos-delay="500">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="img/custom-backend.svg" />
                                    </div>
                                    <p>Custom Backend Development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="web-dev-description">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h4>E-Commerce Web Development</h4>
                                <p>TechnoYuga is a leading ecommerce website development company. We help startups and mid sized businesses to crafting beautiful e-commerce solution for great shopping experiences. We provide end to end E-commerce development from UI/UX design, to development, inventory management, shipping management and payment gateway integration or Revamping of an existing E-commerce website.</p>
                                <ul>
                                    <li>Secured E-commerce website Development</li>
                                    <li>Woo-commerce based Websites</li>
                                    <li>Shopify E-commerce website development</li>
                                    <li>Magento E-commerce website development</li>
                                    <li>Multi-vendor E-commerce website Development</li>
                                    <li>Re-selling E-commerce Portal Development</li>
                                    <li>Custom Ecommerce Website Development</li>
                                    <li>Mobile Commerce Solution</li>
                                </ul>
                            </div>
                            <div className="col-lg-5" data-aos="fade-in" data-aos-delay="100">
                                <img className="img-fluid" src="img/e-com-web-devlop.png" />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-5 order-lg-1 order-2" data-aos="fade-in" data-aos-delay="100">
                                <img className="img-fluid" src="img/mobile-app-dev.png" />
                            </div>
                            <div className="col-lg-7 order-md-1">
                                <h4>Mobile Apps Backend Systems and API’s Development</h4>
                                <p>When you have tried to build a mobile app or web apps, you probably have heard about Backend and API’s development. Being a top rated App development company we offer a complete backend solution for mobile apps. Our talented backend architecture develops custom REST API services to make web and mobile apps interactive.</p>
                                <p>When you have tried to build a mobile app or web apps, you probably have heard about Backend and API’s development. Being a top rated App development company we offer a complete backend solution for mobile apps. Our talented backend architecture develops custom REST API services to make web and mobile apps interactive.</p>
                                <ul>
                                    <li>API/Web Services</li>
                                    <li>Authentication Services</li>
                                    <li>Push Notifications</li>
                                    <li>Custom Backend Development (using Laravel, PHP, MEAN Stack and ASP.net)</li>
                                    <li>Mobile Backend As a Service (Firebase)</li>
                                    <li>Third Party API Integration</li>
                                    <li>IoT</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h4>Custom Web Development</h4>
                                <p>We have experienced full-stack web development teams with experience in Open-Source technologies, Microsoft technologies and PHP framework, scripting languages and DevOps services to offer affordable solutions for your business.</p>
                                <p>Whether it's Custom Web Development from scratch, Revamp your existing website, or developing a web based SaaS product. We can help you in end to end custom web development and provide the cost efficient solution.</p>
                                <ul>
                                    <li>Custom Website Development</li>
                                    <li>Custom eCommerce Website Development</li>
                                    <li>Custom Web based SaaS Product Development</li>
                                    <li>Custom Backend Developmentt</li>
                                </ul>
                            </div>
                            <div className="col-lg-5" data-aos="fade-in" data-aos-delay="100">
                                <img className="img-fluid" src="img/e-com-web-devlop.png" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="development-stack">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Tools & Technologies</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tech-tab-wrapper">
                                    <div className="tech-content">
                                        <div className="skills-list">
                                            <p className="tech-skillset text-center">Frontend</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/react.svg" alt="react logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>React</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/angular.svg" alt="angular logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Angular</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/javascript.svg" alt="javascript logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>JavaScript</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/html5.svg" alt="html5 logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>HTML 5</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tech-tab-wrapper">
                                    <div className="tech-content">
                                        <div className="skills-list">
                                            <p className="tech-skillset text-center">Backend</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/node-js.svg" alt="nodejs logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Node js</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/php.svg" alt="php logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>PHP</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/csharp.svg" alt="csharp logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>C#</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/python.svg" alt="python logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Pythno</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tech-tab-wrapper">
                                    <div className="tech-content">
                                        <div className="skills-list">
                                            <p className="tech-skillset text-center">Frameworks</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/express.png" alt="express logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Express</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/laravel.svg" alt="laravel logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Laravel</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/dotnet.svg" alt="dotnet logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>.NET</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/django.svg" alt="django logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Django</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tech-tab-wrapper">
                                    <div className="tech-content">
                                        <div className="skills-list">
                                            <p className="tech-skillset text-center">Cloud Services</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/aws-tech.png" alt="aws logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>AWS</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/heroku.png" alt="heroku logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Heroku</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/google-cloud.png" alt="google cloud logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Google cloud</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/digi-ocean.png" alt="digi ocean logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Digital ocean</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="potrfolio">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Our Portfolio</h2>
                            <p>Work with groundbreakers who create top-notch mobile and web apps on time & on budget</p>
                        </div>
                        <div className="our-work">
                            {/* <div className="owl-carousel portfolio-carousel"> */}
                            <OwlCarousel
                                items={1}
                                loop
                                margin={10}
                                nav
                                animateIn="fadeIn"
                                animateOut="fadeOut"
                            >
                                <div className="folio-item">
                                    <div className="gradient-bg gradient1">
                                        <img data-aos="fade-down" className="img-fluid" src="img/portfolio/slider1/1.png" alt="ecommerce app development" />
                                    </div>

                                    <div className="app-area">
                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/slider1/bling.png" alt="bling logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Bling App</h5>
                                                <p>Maldives First e-commerce App</p>
                                            </div>
                                        </div>

                                        <div className="app-tags" data-aos="fade-down" data-aos-delay="200">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/maldives.svg" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Mobile App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>E-commerce</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Fashion</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="300">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Bling is a women lead startup high fashion and accessories for young womens and girls from Maldives.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Product UI/UX Designing</li>
                                                    <li>App Development</li>
                                                    <li>Backend Development</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="technology-stack" data-aos="fade-down" data-aos-delay="400">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/firebase.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/laravel.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/flutter.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/figma.svg" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient4">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/gfacility/gfacility-project.png" alt="gfacility app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/gfacility/Gfacility.svg" alt="gfacility logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Gfacility</h5>
                                                <p>Visitor Management Kiosk App used by PWC belgium</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/begim-flag.jpg" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Tablet App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Enterprise</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Kiosk</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Gfacility is Belgium based SaaS startup. We have helped them streamline visitor management. This app helps businesses simplify visitor check-in, pre-visit informative emails, automatic arrival, and confirmation notifications. </p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Ipad and tablet Apps</li>
                                                    <li>Google Workspace and Office 365 Integration</li>
                                                    <li>Integration with Laravel</li>
                                                    <li>Printer SDK Integration</li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/swift.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/laravel.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/flutter.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/kotlin.png" />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/google-workspace.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/office365.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient5">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/gfacility/project-image2.png" alt="conference room app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/gfacility/Gfacility.svg" alt="gfacility logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Conference Room App</h5>
                                                <p>Visitor Management Kiosk App used by PWC belgium</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/begim-flag.jpg" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Tablet App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Enterprise</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Kiosk</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Smart Room and Conference management solution which helps enterprises to manage all meetings and meeting room availability distinctly signaled through LED lighting and ensure the smooth signage process.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Ipad and tablet Apps</li>
                                                    <li>Google Workspace</li>
                                                    <li>Integration with Laravel</li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/flutter.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/figma.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/laravel.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/office365.png" />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/google-workspace.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient2">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/clubgrub/club-grub.png" alt="delivery app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/clubgrub/clubgrub.png" alt="club grub logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Club Grub</h5>
                                                <p>World’s #1 on-course food delivery platform</p>
                                            </div>
                                        </div>

                                        <div className="app-tags" data-aos="fade-down" data-aos-delay="200">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Web App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Food Delivery</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Food</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="300">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Clubgrub Golfer app allows golfers to get On-demand food & beverage ordering with on-course delivery. This app is changing the dynamics of the food and beverages ordering for the Golf Industry in the United States.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Product UI/UX Designing</li>
                                                    <li>App Development</li>
                                                    <li>Backend Development</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="technology-stack" data-aos="fade-down" data-aos-delay="400">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/firebase.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/laravel.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/flutter.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/figma.svg" />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/google-cloud.svg" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient8">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/slider2/jaku-img.png" alt="iot app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/slider2/jaku.png" alt="jaku logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Jaku</h5>
                                                <p>IoT enabled asset maintenance and management software.</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/south-america.png" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Web App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Enterprise</p>
                                                </li>
                                                <li className="industry">
                                                    <p>IoT</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Jaku is a South American startup which deals with enterprises to help them through IoT devices and sensors to collect information on activities relevant to their operation and planning.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>UI/UX Design</li>
                                                    <li>IoT Device Integration</li>
                                                    <li>Real Time Reporting Dashboard</li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/firebase.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/node.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/angular.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/rdtm.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient6">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/ordeno/project-image.png" alt="order management system development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/ordeno/ordeno-logo.svg" alt="ordeno logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Ordeno App</h5>
                                                <p>In-restaurant food ordering and Order management System</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/spain.png" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Mobile App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Food Ordering</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Restaurant</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Ordeno is a startup based out in Spain and Peru. They are focused on making the food ordering simple when you are in a restaurant and make the life easier for restaurants to manage their orders, tables and loyalty and promotions from a single system.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>UI/UX consultancy and Product Discovery</li>
                                                    <li>iOS and Android apps</li>
                                                    <li>Backend Development</li>
                                                    <li>Promotion & Loyalty Management</li>
                                                    <li>Tablet Management System</li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/mongodb.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/node.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/flutter.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/qr-code.png" />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/aws.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="bubble2"><img src="img/bubbles3.svg" alt="two big circle" /></div>
                </section>


                <section className="how-we-implement web-dev">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>How we approach web development projects</h2>
                            <p className="title-para"> We have been involved in IoT development since early days. We understand the wide spectrum of IoT industry and challenges during the development and testing and considering that we provide our IoT development services to our clients and help them build secure and scalable IoT solutions.</p>
                        </div>
                        <div className=" how-we-wrapper">
                            <ul className="implement-timeline">
                                <li>
                                    <img src="img/process/discovery.svg" alt="discovery" />
                                    <p>Requirements Gatherings </p>
                                </li>
                                <li>
                                    <img src="img/process/idea.svg" alt="idea" />
                                    <p>Research and Wireframing</p>
                                </li>
                                <li>
                                    <img src="img/process/web-design.svg" alt="web design" />
                                    <p>Web Design</p>
                                </li>
                                <li>
                                    <img src="img/process/development.svg" alt="development process" />
                                    <p>Web Development</p>
                                </li>
                                <li>
                                    <img src="img/testing1.svg" alt="testing" />
                                    <p>Testing</p>
                                </li>
                                <li>
                                    <img src="img/process/launch.svg" alt="launch" />
                                    <p>Real Time testing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* <section className="idea-discussion">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="discusion-inner">
                            <h3> Let's Discuss Your Idea</h3>
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
                                        <h2> Let's Discuss Your Idea</h2>
                                    </div>
                                    <h5>At Techno Yuga, we don't just develop apps. We build Dreams. <span>Lets Build yours!</span></h5>
                                    <form className="contact-form" id="contact-form">
                                        <div className="row mb-3">
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="uname">Your Name</label>
                                                    <input type="text" className="form-control" id="uname" name="uname" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="email">Email Id</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="uname">Phone Number</label>
                                                    <input type="text" className="form-control" id="phone" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="uname">Budget</label>
                                                    <select name="budget" className="custom-select">
                                                        <option selected>Choose Budget</option>
                                                        <option value="$5000 - $10000">Less $5000</option>
                                                        <option value="$5000 - $10000">$5000 - $10000</option>
                                                        <option value="$10000 - $15000">$10000 - $15000</option>
                                                        <option value="$15000 - $20000">$15000 - more</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label for="comment">Discuss your Dream</label>
                                                    <textarea className="form-control" rows="5" id="comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-lg-5 mt-xl-5">
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label className="d-block mb-3">Do you need a NDA ?</label>
                                                    <div className="custom-control custom-radio custom-control-inline m-r">
                                                        <input type="radio" className="custom-control-input" id="customRadio" name="example" value="customEx" />
                                                        <label className="custom-control-label" for="customRadio">Yes</label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" id="customRadio2" name="example" value="customEx" />
                                                        <label className="custom-control-label" for="customRadio2">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 text-center text-md-right">
                                                <a href="#" className="contact-btn">Get in Touch</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Discuss h3={"Let's Discuss Your Idea"} />

                <br /><br /><br /><br /><br /><br />

                {/* <section className="faqs">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Frequently Asked Questions :</h2>
                        </div>
                        <div id="accordion" className="faq-accordian" data-aos="fade-up" data-aos-delay="100">
                            <div className="card mb-0">
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <a className="card-title">
                                            Can you build web applications using flutter?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="card-body collapse" data-parent="#accordion" >
                                        <p>Yes We can help you with Flutter Web application. Flutter allows developers to compile flutter application source code to web browsers like Chrome, Firefox etc. We can deploy your mobile app code for the web version without modifying it
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                        <a className="card-title">
                                            Does flutter really reduce the development cost of Mobile app development?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="card-body collapse" data-parent="#accordion" >
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                        <a className="card-title">
                                            Is Flutter good for building the minimum Viable Product development ?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion" >
                                        <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                        <a className="card-title">
                                            Can you share some of the top apps built using flutter?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="card-body collapse" data-parent="#accordion" >
                                        <p>Yes We can help you with Flutter Web application. Flutter allows developers to compile flutter application source code to web browsers like Chrome, Firefox etc. We can deploy your mobile app code for the web version without modifying it
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                        <a className="card-title">
                                            Why should you hire our flutter developers from Technoyuga?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="card-body collapse" data-parent="#accordion" >
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                                        <a className="card-title">
                                            Is Flutter good for building the minimum Viable Product development ?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion" >
                                        <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

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

            {/* <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a> */}


        </div>
    )
}

export default WebDevelopment