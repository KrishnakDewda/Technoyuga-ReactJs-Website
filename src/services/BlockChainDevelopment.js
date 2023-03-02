import React from 'react'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Discuss from '../components/Discuss';

const BlockChainDevelopment = () => {
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
                                    <li><a href="/about-us">Company</a></li>
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

            <section className="ar-vr-hero block-chain-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ios-banner">
                                <img className="img-fluid" src="img/block-chain-hero.png" alt="blockchain app developement" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-in" data-aos-delay="100">
                            <div className="ar-vr-banner-text">
                                <h3>Blockchain</h3>
                                <h2>Development</h2>
                            </div>
                            <div className="ar-vr-banner--sub-text">
                                <p className="mt-5 first-p">Technoyuga strategize and develop Blockchain Services including secure and Scalable ICO creation, Decentralized Applications (DApp) solutions, Crypto Wallet Development, Crypto Exchange Development and Crypto-Token Development with Blockchain App Consultation</p>
                                <a href="/contact-us" className="cta mt-3 d-inline-block">Request a call back</a>
                                <p className="mt-4 banner-dis"><b>*No Spam. 100% Privacy Guaranteed.</b></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section className="description-block bubble-bg" data-aos="fade-up" data-aos-delay="100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="text-center big-p">We provide a wide range of Blockchain Development Services. Based on our discussion with our clients on their business objective, problem statement and expansion plan we propose the right Blockchain and
                                    <br />Crypto solution and start with the project accordingly.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="blockchain-dev-services">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Blockchain Development Services We Offer</h2>
                        </div>
                        <div className="dev-services">
                            <div className="row">
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="100">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/tech-consultant.svg" />
                                        <h5>Blockchain Tech Consultation</h5>
                                        <p>The goal of blockchain consulting is to translate business targets into technology roadmaps that clients can follow to achieve desired outcomes.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="200">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/crypto-wallet.svg" />
                                        <h5>Crypto Wallet Development</h5>
                                        <p>Crypto wallets function like a traditional wallet, but instead of regular paper currency, it holds proof of your crypto/digital cash, which contains private and public keys of wallet.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="300">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/daapp-dev.svg" />
                                        <h5>DApp Development</h5>
                                        <p>DApps is a computer application or program that exists and runs on a decentralized network of computers and not a centralized server.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="400">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/crypto-exchange.svg" />
                                        <h5>Cryptocurrency Exchange Development</h5>
                                        <p>We provide secured and hack-proof Crypto Exchange development solutions for multiple crypto currencies exchanging , buying and selling for different blockchain platforms.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="500">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/ico-dev.svg" />
                                        <h5>ICO (Initial Coin Offering) Development</h5>
                                        <p>ICO is a mechanism with the help of funds raised for a newly launched cryptocurrency offering. It is quite similar to IPO (Initial Public Offerings) when a company is registered in stock exchange.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="600">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/white-paper.svg" />
                                        <h5>White paper writing</h5>
                                        <p>ICO is a mechanism with the help of funds raised for a newly launched cryptocurrency offering. It is quite similar to IPO (Initial Public Offerings) when a company is registered in stock exchange.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="700">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/token-dev.svg" />
                                        <h5>Token Development</h5>
                                        <p>We provide secured and hack-proof Crypto Exchange development solutions for multiple crypto currencies exchanging , buying and selling for different blockchain platforms.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="800">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/smart-contract.svg" />
                                        <h5>Smart Contract Development</h5>
                                        <p>ICO is a mechanism with the help of funds raised for a newly launched cryptocurrency offering. It is quite similar to IPO (Initial Public Offerings) when a company is registered in stock exchange.</p>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-in" data-aos-delay="900">
                                    <div className="inner-wrapper">
                                        <img src="img/blockchain-services/admin-panel.svg" />
                                        <h5>Admin Panel Development</h5>
                                        <p>ICO is a mechanism with the help of funds raised for a newly launched cryptocurrency offering. It is quite similar to IPO (Initial Public Offerings) when a company is registered in stock exchange.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="development-stack">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>The Blockchain Platforms and Technology</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="fade-in" data-aos-delay="100">
                                <p className="tech-skillset text-center">Blockchain Platforms</p>
                                <div className="dev-stack-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/ethereum.svg" alt="ethereum logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Ethereum</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/hypledger.svg" alt="hypledger logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Hypwrledger</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/corda.svg" alt="corda logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Corda</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/binace.svg" alt="binace logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Binance  Smart Chain</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/eos.svg" alt="eos logo" />
                                            </figure>
                                            <figcaption>
                                                <p>EOS</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/tron.svg" alt="tron logo" />
                                            </figure>
                                            <figcaption>
                                                <p>TRON</p>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <p className="tech-skillset text-center">Programming Language</p>
                                <div className="dev-stack-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/java.svg" alt="java logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Java</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/node-js.png" alt="node js logo" />
                                            </figure>
                                            <figcaption>
                                                <p>node js</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/solidity.png" alt="solidity logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Solidity</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/firebase.svg" alt="firebase logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Firebase</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/reactjs.png" alt="reactjs logo" />
                                            </figure>
                                            <figcaption>
                                                <p>React.Js</p>
                                            </figcaption>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                            <figure>
                                                <img className="img-fluid" src="img/icon/flutter.svg" alt="flutter logo" />
                                            </figure>
                                            <figcaption>
                                                <p>Flutter</p>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="how-we-implement-blockchain">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <div className="section-title white" data-aos="fade-up">
                                    <h2>How we implement <br /><span>Blockchain</span> Services</h2>
                                    <p className="title-para">We at Technoyuga have quite solid <br />Agile Methodology for the Blockchain <br />projects we work on</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="implement-services">
                                    <div className="media">
                                        <img src="img/initial-aim.svg" className="align-self-center" />
                                        <div className="media-body" data-aos="fade-in" data-aos-delay="100">
                                            <p>Initial Discovery and Project Objective DIscussion</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="img/dev-testinng.svg" className="align-self-center" />
                                        <div className="media-body" data-aos="fade-in" data-aos-delay="200">
                                            <p>Development and Testing</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="img/solution.svg" className="align-self-center" />
                                        <div className="media-body" data-aos="fade-in" data-aos-delay="300">
                                            <p>Solution and Strategizing the Concept</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="img/testing.svg" className="align-self-center" />
                                        <div className="media-body" data-aos="fade-in" data-aos-delay="400">
                                            <p>Development and Testing</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="img/launch.svg" className="align-self-center" />
                                        <div className="media-body" data-aos="fade-in" data-aos-delay="500">
                                            <p>Launch and Support</p>
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
                                    <div className="gradient-bg gradient13">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/dragon-fly/project-image.png" alt="crypto wallet app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/dragon-fly/dragonfly-logo.svg" alt="deagonfly logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Dragonfly App</h5>
                                                <p>Crypto Wallet and Portfolio Management App</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" style={{ width: "46px" }} />
                                                </li>
                                                <li className="app">
                                                    <p>Blockchain</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Enterprise</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Crypto</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Dragonfly is founded and sposperd by the pioneer company in the blockchain domain from the United States and Europe. They have launched multiple crypto currencies like Versacoin and Equity pay coin. They were looking to develop the Crypto wallet and portfolio management.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Product UI/UX Designing</li>
                                                    <li>iOS and Android apps</li>
                                                    <li>Backend Development</li>
                                                    <li>Integration of multiple blockchains</li>
                                                    <li>Security Optimisation</li>
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
                                                    <img src="img/technologies/coinbase.png" />
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
                                                    <img src="img/technologies/blockchain.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

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

                {/* <section className="idea-discussion">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="discusion-inner">
                            <h3>Speak to our Blockchain Developer</h3>
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
                                        <h2>Speak to our Blockchain Developer</h2>
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
                <Discuss h3={"Speak to our Blockchain Developer"} />
                <br /><br /><br /><br />

                <section className="faqs">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Frequently Asked Questions :</h2>
                        </div>
                        <div id="accordion" className="faq-accordian" data-aos="fade-up" data-aos-delay="100">
                            <div className="card mb-0">
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <a className="card-title">
                                            What is blockchain technology and how does it work?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="card-body collapse" data-parent="#accordion" >
                                        <p>constantly growing File or ledger that keeps the record of all the transactions or information in a secure way that makes it impossible to manipulate in any way. Each block in this constant growing chain contains a number of transactions, and every time a new transaction happens on the blockchain, a record of that transaction is added to every participant's ledger/file.</p>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                        <a className="card-title">
                                            Where can blockchain be used?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="card-body collapse" data-parent="#accordion" >
                                        <p>Blockchain can be used where we need is:</p>
                                        <ul>
                                            <li>Transfer of money</li>
                                            <li>Medical records </li>
                                            <li>Contracts</li>
                                            <li>Property data</li>
                                            <li>Tracking of Music Royalties</li>
                                            <li>Supply chain system</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                        <a className="card-title">
                                            Which technology is suitable for blockchain development?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion" >
                                        <div className="card-body">
                                            <ul>
                                                <li>Hyperledger</li>
                                                <li>Ethereum</li>
                                                <li>Corda</li>
                                                <li>EOS</li>
                                                <li>Tron</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                        <a className="card-title">
                                            What all blockchain services do you offer?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="card-body collapse" data-parent="#accordion" >
                                        <ul>
                                            <li>Crypto Wallet App Development</li>
                                            <li>Crypto Exchange Platform Development</li>
                                            <li>ICO Development</li>
                                            <li>DApp Development</li>
                                            <li>Smart Contract Development</li>
                                            <li>Token Development</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                        <a className="card-title">
                                            How can I hire Blockchain developers for my project?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="card-body collapse" data-parent="#accordion" >
                                        <p>We can provide you with a full-stack team for your blockchain solution which includes backend developer, Mobile App developer, Product designer and Blockchain consultant cum developer OR if you need our services for a certain part then we can discuss it according to your need and can provide you the right developer.</p>
                                    </div>
                                </div>
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


        </div>
    )
}

export default BlockChainDevelopment