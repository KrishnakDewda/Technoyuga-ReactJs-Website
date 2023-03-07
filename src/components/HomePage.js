import React from 'react'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
    const width = window.innerWidth
    console.log(width, typeof (width))

    return (
        <div className="home">

            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TRJ57" height="0" width="0"
                style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

            <Header />

            <section id="hero">
                <div className="banner-video">
                    <div className="banner-video">
                        {/* <video autoPlay muted loop id="myVideo" poster="img/poster.jpeg">
                            <source src="video/banner-bg-video.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video> */}
                        <img src="img/banner.jpg" className='banner-image' alt="banner-image" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
                <div className="container-fluid banner-area">
                    <div className="banner-wrapper">
                        <div className="home-banner-text">
                            <div className="banner-content">
                                <h3>The new-age agency focus on</h3>
                                {/* <!-- <h1 className="typewrite" data-period="500" data-type='[ "Innovation", "Mobile Apps", "Web Apps", "emerging tech", "Client Success" ]'>
              <span className="wrap"></span>
            </h1> --> */}

                                <h1 className="typewriter">
                                    <span className="text_1">Innovation</span>
                                    <span className="text_2">Mobile apps</span>
                                    <span className="text_3">Web apps</span>
                                    <span className="text_4">Emerging Tech</span>
                                    <span className="text_5">Client Success</span>

                                </h1>
                            </div>
                        </div>
                        <div className="banner-callaction">
                            <a href="/contact-us"
                                className="btn-get-started scrollto"
                            >Consult Our Strategist</a>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-overlay"></div> */}
            </section>

            <main id="main">

                <section className="brands clients">
                    <div className="container">
                        {/* <p>More than <span className="blue">50+ Startups,</span> Brands & Enterprise Companies around the globe chose
                            <span>Techno Yuga</span> for their mobile app and website project.
                        </p> */}

                        {/* changes A */}
                        <p>Over <span className="blue">50+ Startups,</span> brands and enterprise companies have chosen <span>Technoyuga</span> for their mobile app and website projects.
                        </p>





                        {/* <div className="owl-carousel clients-carousel" data-aos="fade-up" data-aos-delay="100"> */}
                        <OwlCarousel className="owl-dots "
                            items={width > 420 ? 5 : 2}
                            loop
                            margin={10}
                            autoplay
                            animateIn="fadeInUp"
                            animateOut="fadeOutUp"
                            autoplayTimeout={3000}
                            nav={false}
                        >
                            <img src="img/clients/eu.png" alt="eu logo" />
                            <img src="img/clients/bleusix.png" alt="bleusix logo" />
                            {/* <img src="img/clients/decath.png" alt="decath logo" /> */}
                            <img src="img/clients/decath.png" alt="decath logo" />
                            <img src="img/clients/gfacility.png" alt="gfacility logo" />
                            <img src="img/clients/jaku.png" alt="jaku logo" />
                            <img src="img/clients/ordeno.png" alt="ordeno logo" />
                            {/* chnage A */}
                            {/* <img src="img/clients/club-grub.png" alt="club gurb logo" /> */}
                            <img src="img/clients/cloud-menu.png" alt="cloud menu logo" />
                            <img src="img/clients/imwow.png" alt="imwow logo" />
                            <img src="img/clients/kairo.png" alt="kairo logo" />
                            <img src="img/clients/volly-point-logo.png" alt="volly point logo" />
                            <img src="img/clients/moom.png" alt="moom logo" />
                            <img src="img/clients/e2-hospitality.svg" alt="e2 hospitality logo" />
                            <img src="img/clients/10XNEWLOGO.png" alt="10x new logo" />
                        </OwlCarousel>
                        {/* </div> */}
                    </div>
                </section>


                <section className="approach">
                    <div className="container">
                        <h3 className="text-center" data-aos="fade-up">Transparency, Integrity & Empathy</h3>
                        <p className="text-center" data-aos="fade-up" data-aos-delay="100">We approach every project as true partners in
                            your success. We are not a team of “yes-men” who will let you follow the wrong path. Our product managers and
                            engineers are trained in a culture that promotes 100% transparency. Moreover, we are always on the lookout for
                            our client’s best interests. Your success is our success.</p>
                    </div>
                </section>

                <section className="services section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Services</h2>
                            <p>Everything your custom app needs under one roof</p>
                        </div>
                        <div className="service-wrapper">
                            <div className="row">
                                <div className="col-md-4 mb-pad" data-aos="fade-up">
                                    <a href="/ios-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/ios.png" alt="ios app development" />
                                            <div className="service-heading">
                                                <img src="img/ios.svg" alt="ios logo" />
                                                <h4>iOS App Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="100">
                                    <a href="/android-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/android.png" alt="android app developemnet" />
                                            <div className="service-heading">
                                                <img src="img/android.svg" alt="android logo" />
                                                <h4>Android App Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                    <a href="/flutter-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/flutter-service.png" alt="flutter app developemnet" />
                                            <div className="service-heading">
                                                <img src="img/flutter-service-icon.svg" alt="flutter logo" />
                                                <h4>Flutter App Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="w-100 mb-5"></div>

                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="300">
                                    <a href="/web-app-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/web-design.png" alt="web app developemnet" />
                                            <div className="service-heading">
                                                <img src="img/web-design.svg" alt="website logo" />
                                                <h4>Website Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="400">
                                    <a href="/augmented-reality-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/imerging.png" alt="augument reality development" />
                                            <div className="service-heading">
                                                <img src="img/ar-vr-service-icon.svg" alt="ar logo" />
                                                <h4>AR/VR</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="500">
                                    <div className="service-area">
                                        <img src="img/ui-ux.png" alt="ui/ux designing" />
                                        <div className="service-heading">
                                            <img src="img/ui-ux.svg" alt="ui/ux logo" />
                                            <h4>Digital Product UI/UX Designing</h4>
                                        </div>
                                    </div>
                                </div> */}


                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="300">
                                    <a href="/react-native-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/reactnative-service.png" alt="react native app development" />
                                            <div className="service-heading">
                                                <img src="img/reactnative-service-icon.svg" alt="react native logo" />
                                                <h4>React Native Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-100 mb-5"></div>
                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="400">
                                    <a href="/iot-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/iot-service.png" alt="iot app development" />
                                            <div className="service-heading">
                                                <img src="img/imerging.svg" alt="iot logo" />
                                                <h4>IoT Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 mb-pad" data-aos="fade-up" data-aos-delay="500">
                                    <a href="/blockchain-application-development">
                                        <div className="service-area">
                                            <img className="img-fluid" src="img/blockchain-service.png" alt="blockchain app development" />
                                            <div className="service-heading">
                                                <img src="img/blockchain-service-icon.svg" alt="blockchain logo" />
                                                <h4>Blockchain Development</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div className="get-quote">
                                <a href="/contact-us">Get Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="bubble2"><img src="img/bubbles2.svg" alt="big two circle" /></div>
                    <div className="bubble1"><img src="img/bubbles1.svg" alt="small two circle" /></div>
                </section>

                <section className="what-we-do">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>What We Do Best</h2>
                            <p>We provide technology solution as per your industry</p>
                            <p className="title-para">At Techno Yuga we truly believe in the power of domain expertise. By choosing a partner
                                with experience in an industry, the product is better, while timelines and cost are kept low. We are experts
                                in:</p>
                        </div>
                        {window.innerWidth < 420 ?
                            <div className="outsource-wrapper">
                                <OwlCarousel
                                    loop
                                    margin={10}
                                    autoplay
                                    autoplayTimeout={3000}
                                    responsive={{ 0: { items: 1 }, 1000: { items: 10 } }}
                                >
                                    <div className="outsource-content mb-3 mb-md-4">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/ecomm.jpg" />

                                        <div className="outsource-title">
                                            <h5>E-COMMERCE</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content mb-3 mb-md-4">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/on-demand.jpg" />

                                        <div className="outsource-title">
                                            <h5>ON DEMAND SOLUTIONS</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content mb-3 mb-md-4">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/social.jpg" />

                                        <div className="outsource-title">
                                            <h5>SOCIAL NETWORKING</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content mb-3 mb-md-4">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/health.jpg" />

                                        <div className="outsource-title">
                                            <h5>HEALTHCARE</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content mb-3 mb-md-4">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/emerging.jpg" />

                                        <div className="outsource-title">
                                            <h5>Emerging Tech</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/tour.jpg" />

                                        <div className="outsource-title">
                                            <h5>TOURS AND TRAVEL</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/trans.jpg" />

                                        <div className="outsource-title">
                                            <h5>TRANSPORT AND LOGISTICS</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/fintech.jpg" />

                                        <div className="outsource-title">
                                            <h5>FINTECH</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/edu.jpg" />

                                        <div className="outsource-title">
                                            <h5>Education</h5>
                                        </div>
                                    </div>

                                    <div className="outsource-content mb-0">
                                        <div className="img-overlay"></div>
                                        <img className="content-image" src="img/outsource/wellness.jpg" />

                                        <div className="outsource-title">
                                            {/* <h5>welness and fitness</h5> */}

                                            {/* change A */}
                                            <h5>wellness and fitness</h5>

                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            :
                            <div className="outsource-wrapper">

                                <div className="outsource-content mb-3 mb-md-4">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/ecomm.jpg" />

                                    <div className="outsource-title">
                                        <h5>E-COMMERCE</h5>
                                    </div>
                                </div>

                                <div className="outsource-content mb-3 mb-md-4">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/on-demand.jpg" />

                                    <div className="outsource-title">
                                        <h5>ON DEMAND SOLUTIONS</h5>
                                    </div>
                                </div>

                                <div className="outsource-content mb-3 mb-md-4">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/social.jpg" />

                                    <div className="outsource-title">
                                        <h5>SOCIAL NETWORKING</h5>
                                    </div>
                                </div>

                                <div className="outsource-content mb-3 mb-md-4">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/health.jpg" />

                                    <div className="outsource-title">
                                        <h5>HEALTHCARE</h5>
                                    </div>
                                </div>

                                <div className="outsource-content mb-3 mb-md-4">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/emerging.jpg" />

                                    <div className="outsource-title">
                                        <h5>Emerging Tech</h5>
                                    </div>
                                </div>

                                <div className="outsource-content">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/tour.jpg" />

                                    <div className="outsource-title">
                                        <h5>TOURS AND TRAVEL</h5>
                                    </div>
                                </div>

                                <div className="outsource-content">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/trans.jpg" />

                                    <div className="outsource-title">
                                        <h5>TRANSPORT AND LOGISTICS</h5>
                                    </div>
                                </div>

                                <div className="outsource-content">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/fintech.jpg" />

                                    <div className="outsource-title">
                                        <h5>FINTECH</h5>
                                    </div>
                                </div>

                                <div className="outsource-content">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/edu.jpg" />

                                    <div className="outsource-title">
                                        <h5>Education</h5>
                                    </div>
                                </div>

                                <div className="outsource-content mb-0">
                                    <div className="img-overlay"></div>
                                    <img className="content-image" src="img/outsource/wellness.jpg" />

                                    <div className="outsource-title">
                                        {/* <h5>welness and fitness</h5> */}

                                        {/* change A */}
                                        <h5>wellness and fitness</h5>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="bubble2"><img src="img/bubbles2.svg" alt="big two circle" /></div>
                </section>

                <section className="tech-stack">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Technology Stack</h2>
                            <p>At TechoYuga we use the scalable and trending frameworks and technologies to build Mobile Apps , Backend
                                and Web applications for our clients.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tech-tab-section">
                                    <ul className="tect-stack-list nav nav-tabs" role="tablist">
                                        <li>
                                            <a data-toggle="tab" href="#web-stack" className="active d-block">
                                                <h5 className="tech-name">Web Development Stack</h5>
                                                {/* <p className="mb-0">We follow the agile methodology and technology framework to develop web applications
                                                    that meets your expectations..</p> */}
                                                {/* change A */}
                                                <p className="mb-0">We follow the agile methodology and technology framework to develop web applications
                                                    that meets your expectations.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#mobile-stack" className="d-block">
                                                <h5 className="tech-name">Mobile Development Stack</h5>
                                                <p className="mb-0">Technoyuga’s Mobile App Development teams follow the trending tech frameworks for
                                                    your dream Mobile apps.</p>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 tech-tab-content">
                                <div className="tech-tab-wrapper">
                                    <div id="web-stack" className="tech-content tab-pane fade show active" role="tabpanel">
                                        <div className="skills-list">
                                            <p className="tech-skillset">Frontend</p>
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
                                        <div className="skills-list">
                                            <p className="tech-skillset">Backend</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/node-js.svg" alt="node-js logo" />
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
                                                        <p>Python</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="skills-list">
                                            <p className="tech-skillset">Frameworks</p>
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
                                    <div id="mobile-stack" className="tech-content tab-pane fade" role="tabpanel">
                                        <div className="skills-list">
                                            <p className="tech-skillset">Languages</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/swift.svg" alt="swift logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Swift</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/kotlin.svg" alt="kotlin logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Kotlin</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/java.svg" alt="java logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Java</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/dart.svg" alt="dart" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Dart</p>
                                                    </figcaption>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="skills-list">
                                            <p className="tech-skillset">Frameworks</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/flutter.svg" alt="flutter	logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Flutter</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/react-native.svg" alt="react native logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>React Native</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/rx-java.svg" alt="rx java logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Rx Java</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/junit.svg" alt="junit logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>JUnit</p>
                                                    </figcaption>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="skills-list">
                                            <p className="tech-skillset">Database</p>
                                            <ul>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/firebase.svg" alt="firebase logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Firebase</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/realm.svg" alt="realm logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Realm</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/sw-lite.svg" alt="sw lite logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>SQLite</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/mongo-db.svg" alt="mongo db logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>Mongo DB</p>
                                                    </figcaption>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img className="img-fluid" src="img/icon/my-sql.svg" alt="my sql logo" />
                                                    </figure>
                                                    <figcaption>
                                                        <p>My SQL</p>
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

                <section className="achievements">
                    <div className="container">
                        <div className="section-title white" data-aos="fade-up">
                            <h2>Achievements</h2>
                            <p>When Our Work Got Recognized </p>
                            <p className="title-para">We are firm believers that the best apps and websites come from small, agile, highly
                                skilled teams and the following achievements confirm this statement.</p>
                        </div>
                        <div className="achievement-list">
                            <div className="achievement-item mb-md-4" data-aos="fade-up" data-aos-delay="100">
                                <h5>5/5</h5>
                                <p>Top Flutter App Developers</p>
                                <img src="img/upwork.png" alt="upwork logo" />
                            </div>

                            <div className="achievement-item mb-md-4" data-aos="fade-up" data-aos-delay="200">
                                <h5>5/5</h5>
                                <p>Top Mobile App Developers</p>
                                <img src="img/gf.png" alt="good firms logo" />
                            </div>

                            <div className="achievement-item" data-aos="fade-up" data-aos-delay="300">
                                <h5>5/5</h5>
                                <p>Top App Development Company</p>
                                <img src="img/clutch.png" alt="clutch logo" />
                            </div>

                            <div className="achievement-item mb-0" data-aos="fade-up" data-aos-delay="400">
                                <h5>5/5</h5>
                                <p>Top Food Tech Developer</p>
                                <img src="img/supersourcing.png" alt="super sourcing logo" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="platforms">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Platforms</h2>
                            <p>Reach your customers across the entire spectrum of digital devices </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <img src="img/platform-services.png" className="img-fluid" />
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
                                        <img data-aos="fade-down" className="img-fluid" src="img/portfolio/slider1/1.png"
                                            alt="e-commerce app developemnet" />
                                    </div>

                                    <div className="app-area">
                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/slider1/bling.png" alt="biling logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Bling App</h5>
                                                <p>Maldives First e-commerce App</p>
                                            </div>
                                        </div>

                                        <div className="app-tags" data-aos="fade-down" data-aos-delay="200">
                                            <ul>
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/maldives.svg" />
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
                                                <p>Bling is a women lead startup high fashion and accessories for young womens and girls from
                                                    Maldives.</p>
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
                                        <img data-aos="fade-down" className="slider-img img-fluid"
                                            src="img/portfolio/gfacility/gfacility-project.png" alt="saas app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/gfacility/Gfacility.svg" alt="gf logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Gfacility</h5>
                                                <p>Visitor Management Kiosk App used by PWC belgium</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/begim-flag.jpg" />
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
                                                <p>Gfacility is Belgium based SaaS startup. We have helped them streamline visitor management. This
                                                    app helps businesses simplify visitor check-in, pre-visit informative emails, automatic arrival,
                                                    and confirmation notifications. </p>
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
                                        <img data-aos="fade-down" className="slider-img img-fluid"
                                            src="img/portfolio/gfacility/project-image2.png" alt="develop visitor management app" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/gfacility/Gfacility.svg" alt="gf logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Conference Room App</h5>
                                                <p>Visitor Management Kiosk App used by PWC belgium</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/begim-flag.jpg" />
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
                                                <p>Smart Room and Conference management solution which helps enterprises to manage all meetings and
                                                    meeting room availability distinctly signaled through LED lighting and ensure the smooth signage
                                                    process.</p>
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
                                {/* club grub Change A */}
                                {/* <div className="folio-item">
                                    <div className="gradient-bg gradient2">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/clubgrub/club-grub.png"
                                            alt="develop delivery app" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/clubgrub/clubgrub.png" alt="clubgrub logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Club Grub</h5>
                                                <p>World’s #1 on-course food delivery platform</p>
                                            </div>
                                        </div>

                                        <div className="app-tags" data-aos="fade-down" data-aos-delay="200">
                                            <ul>
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/usa.png" />
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
                                                <p>Clubgrub Golfer app allows golfers to get On-demand food & beverage ordering with on-course
                                                    delivery. This app is changing the dynamics of the food and beverages ordering for the Golf
                                                    Industry in the United States.</p>
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
                                </div> */}

                                <div className="folio-item">
                                    <div className="gradient-bg gradient8">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/slider2/jaku-img.png"
                                            alt="iot development" />
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
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/south-america.png" />
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
                                                <p>Jaku is a South American startup which deals with enterprises to help them through IoT devices
                                                    and sensors to collect information on activities relevant to their operation and planning.</p>
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
                                        <img data-aos="fade-down" className="slider-img img-fluid"
                                            src="img/portfolio/ordeno/project-image.png" alt="order management app" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/ordeno/ordeno-logo.svg" alt="ordeno logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Ordeno App</h5>
                                                {/* <p>In-restaurant food ordering and Order management System</p> */}
                                                {/* change A */}
                                                <p>In-restaurant food ordering and order management System</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag" style={{ width: "46px" }}>
                                                    <img src="img/flags/spain.png" />
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
                                                <p>Ordeno is a startup based out in Spain and Peru. They are focused on making the food ordering
                                                    simple when you are in a restaurant and make the life easier for restaurants to manage their
                                                    orders, tables and loyalty and promotions from a single system.</p>
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
                    <div className="bubble2"><img src="img/bubbles3.svg" alt="circle" /></div>
                </section>

                <section className="testimonial">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Testimonials</h2>
                            <p>See why our clients see us as a reliable long-term partner</p>
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
                                    <p>Gfacility is Belgium based SaaS startup. We have helped them streamline visitor management. This app
                                        helps businesses simplify visitor check-in, pre-visit informative emails, automatic arrival, and
                                        confirmation notifications.</p>
                                    <img className="country-flag" src="img/flags/begim-flag.jpg" alt="belgium flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/Gfacility-client.jpeg" alt="man image" />
                                        <img className="play-btn" data-toggle="modal" data-target="#ep1" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>Awesome work culture. Requested some difficult and specific SDK integrations in my flutter application.
                                        Even Though it was complex, they made sure to understand it properly and to integrate it. Thanks to the
                                        dedication and overtime this difficult project was delivered within time and budget. Without a doubt one
                                        of my best experiences until now. Well done!</p>
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
                                    <p>Pantaya is the Spanish language movie platform and users can stream 100’s of movies at one platform.
                                    </p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/pantaya-client.jpeg" alt="person smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client2" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>Krishna and Team were an integral part of our MVP development. They demonstrated good skills in MERN
                                        Stack and AWS and delivered our MVP product. I would work with him and his team again on a future
                                        project.</p>
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
                                    <p>Topline mobile tour is Arizona based gaming platform which offers self guided mobile tours and digital
                                        games throughout the United states.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/andrew.jpeg" alt="man wear coat" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client3" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>Technoyuga and Krishna did an AWESOME Job on our two projects Bubble Battle and
                                        https://toplinemobiletours.com in last 2 years and we are very happy with the end results. They provided
                                        exceptional support even after delivery of the project.</p>
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
                                    <p>10X partners is a parent company of Foodio, a food tech community for consumers, industries and food
                                        suppliers across the globe. It helps industries and consumers to directly connect with food producers
                                        and they can sell their product anywhere in the world without any hustle.</p>
                                    <img className="country-flag" src="img/flags/germany.jpg" alt="germany flag" />

                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/thiago.png" alt="man smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client5" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>We did MVP with them last year and worked with them for more than 6 months. The team has goodwill and
                                        is dedicated towards the project they workon. I highly recommend their services.</p>
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
                                    <img className="client-logo" src="img/clients/e2-hospitality.svg" alt="e2 hospitality logo" />
                                    <p>E2 hospitality is a finance consulting agency based out of Germany and they provide end to end
                                        accounting, finance planning and consulting services to the hospitality industry</p>
                                    <img className="country-flag" src="img/flags/germany.jpg" alt="germany flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/thomas.jpeg" alt="man in coat" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client4" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>As a finance consultant based out of Germany, I acquired the support of Technoyuga developing a
                                        financial services app. Krishna and his team were able to convert my vision into an easy to use app well
                                        within the agreed deadline. Now they are supporting me in marketing and social media efforts. I can
                                        recommend Krishna and Technoyuga to any business needing IT support.</p>
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
                                    <p>Booksamaze a digital content creator company based out in the United states.They produce quality
                                        content around the publishing and book industry.</p>
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/awani-sharma.jpeg" alt="girl smiling" />
                                        <img className="play-btn" data-toggle="modal" data-target="#client6" title="Play this video"
                                            src="img/play.svg" alt="play button" />
                                    </div>
                                    <p>From the day one when I spoke to them I felt very comfortable, they came with detailed requirements
                                        specs based on my requirement and their understanding was better than mine. The most I like about them
                                        is their Flexibility, ability to come up with solutions as needed, provide proper reasoning for why
                                        things need to be built in a certain way. They have a good product development process, highly
                                        recommended.</p>
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
                                    <p>Heavy Equipment Auction Transport (HEAT Freight) specializes in transporting construction and
                                        agricultural equipment nationwide.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/mason.jpeg" alt="man in shirt" />
                                    </div>
                                    <p>Excellent work and a helpful team. Always willing to go the extra mile for our project and we
                                        appreciate the dedication that you’ve shown in our project! Krishna and his team went above and beyond
                                        to ensure this website was completed to our specifications. I would highly recommend him and his company
                                        and will use them again in the future!</p>
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
                                    <p>Laksa Solutions Ltd is a UK based tech company. They offers Business Intelligence, Data Warehousing,
                                        Data Visualization, and Information Management solutions provider.</p>
                                    <img className="country-flag" src="img/flags/england.jpg" alt="uk flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/siva.jpg" alt="man image" />
                                    </div>
                                    <p>Krishna and the team did a decent job and delivered our project on time and budget. They are a very
                                        humble and hardworking team. I'm happy to recommend them.</p>
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
                                    <p>KairosXR is a 3D design and development creative agency based in San Francisco. They design and build
                                        XR experiences, emphasizing learning design, 3D development, behavioral analytics, and storytelling.</p>
                                    <img className="country-flag" src="img/flags/usa.png" alt="usa flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/tim.jpeg" alt="man image  background tree" />
                                    </div>
                                    <p>Couldn't recommend Krish and his team enough. Very professional, very high-quality work. Very
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
                                    <p>MooMenn, is an E-commerce marketplace platform for all Islamic Dresses , Accessories and Items.</p>
                                    <img className="country-flag" src="img/flags/england.jpg" alt="uk flag" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="client-tent-video">
                                        <img className="client-img" src="img/client-img/moom-client.jfif" alt="man in car" />
                                    </div>
                                    <p>Very swift and eloquent communication, following up daily on the progress of the project and robust
                                        reactivity on each step of the way. very satisfied with the professionalism and work they have done. I
                                        would highly recommend it.</p>
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

                <section className="process">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>How It Works</h2>
                            <p>Work with groundbreakers who create top-notch mobile and web apps on time & on budget</p>
                        </div>
                        {window.innerWidth < 420 ?
                            <div id="process-content" className="tab-content tab-wrapper" role="tablist">
                                <OwlCarousel
                                    loop
                                    nav
                                    margin={10}
                                    responsive={{ 0: { items: 1 } }}
                                >
                                    <div id="process-idea" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-A" className="no-collapse show" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-A">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/idea.svg" alt="idea" />
                                                <h2>Project Discovery</h2>
                                                <p>We provide no obligation free consultation to our clients related to their project and The purpose of
                                                    this call is to understand challenges they are trying to solve, industry, competitors, USP’s,
                                                    brainstorm and map your idea to develop it into a one kind of Product.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="process-wireframe" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-b" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-b">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/wireframe.svg" alt="wireframe" />
                                                <h2>Technical Documentation</h2>
                                                <p>Once we have a thorough understanding of the project idea , we begin capturing all of the
                                                    requirements in a technical specification document (Project Scope) and revise it a few times as per
                                                    your feedback. Based on your approval we will share the detailed proposal and agreement.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="process-design" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-c" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-c">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/design.svg" alt="design" />
                                                <h2>UI and UX Design</h2>
                                                <p>When it comes to first impressions, it’s all UI and user experience (UX) they get while using your
                                                    app. As part of this process, our clients work with our digital product design team to bring your
                                                    project concept to live. We also provide clickable prototypes so you can experience the app flow
                                                    without even getting this developed.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="process-development" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-d" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-d">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/development.svg" alt="development" />
                                                <h2>Development</h2>
                                                <p>Since now we have captured the Functionality and UI/CX. Our Development team begins coding the entire
                                                    Mobile apps and Backend/API. The development process is broken down into multiple sprints. Our
                                                    agile-based development process will allow you to regularly review and assess what we’re building and
                                                    you also get regular builds/Apk and URL to test the features on a weekly basis.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="process-test" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-e" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-e">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/test.svg" alt="test" />
                                                <h2>Quality Assurance</h2>
                                                <p>Technoyuga integrated Mobile apps quality assurance process ensures that Apps are properly-tested and
                                                    market-ready before the launch. We test all use cases, critical case scenarios, and all functional and
                                                    real time device testing on IOS and Android Devices and Desktop.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="process-launch" className="process-content tab-pane fade show active" role="tabpanel">
                                        <div id="collapse-f" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                            aria-labelledby="heading-f">
                                            <div className="card-body">
                                                <img className="mobile-visible" src="img/process/launch.svg" alt="launch" />
                                                <h2>Deployment and Maintenance</h2>
                                                <p>After passing through a final round of QA and client approval. We manage the submission of the app to
                                                    the Google and Apple stores and get your app guaranteed approved. We will also help in any bug or
                                                    issues come after live and will provide the free 90 Days extended support after going live.</p>
                                                <div className="big-circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            :
                            <div id="process-content" className="tab-content tab-wrapper" role="tablist">
                                <div id="process-idea" className="process-content tab-pane fade show active" role="tabpanel">
                                    <div id="collapse-A" className="no-collapse show" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-A">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/idea.svg" alt="idea" />
                                            <h2>Project Discovery</h2>
                                            <p>We provide no obligation free consultation to our clients related to their project and The purpose of
                                                this call is to understand challenges they are trying to solve, industry, competitors, USP’s,
                                                brainstorm and map your idea to develop it into a one kind of Product.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="process-wireframe" className="process-content tab-pane fade" role="tabpanel">
                                    <div id="collapse-b" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-b">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/wireframe.svg" alt="wireframe" />
                                            <h2>Technical Documentation</h2>
                                            <p>Once we have a thorough understanding of the project idea , we begin capturing all of the
                                                requirements in a technical specification document (Project Scope) and revise it a few times as per
                                                your feedback. Based on your approval we will share the detailed proposal and agreement.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="process-design" className="process-content tab-pane fade" role="tabpanel">
                                    <div id="collapse-c" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-c">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/design.svg" alt="design" />
                                            <h2>UI and UX Design</h2>
                                            <p>When it comes to first impressions, it’s all UI and user experience (UX) they get while using your
                                                app. As part of this process, our clients work with our digital product design team to bring your
                                                project concept to live. We also provide clickable prototypes so you can experience the app flow
                                                without even getting this developed.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="process-development" className="process-content tab-pane fade" role="tabpanel">
                                    <div id="collapse-d" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-d">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/development.svg" alt="development" />
                                            <h2>Development</h2>
                                            <p>Since now we have captured the Functionality and UI/CX. Our Development team begins coding the entire
                                                Mobile apps and Backend/API. The development process is broken down into multiple sprints. Our
                                                agile-based development process will allow you to regularly review and assess what we’re building and
                                                you also get regular builds/Apk and URL to test the features on a weekly basis.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="process-test" className="process-content tab-pane fade" role="tabpanel">
                                    <div id="collapse-e" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-e">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/test.svg" alt="test" />
                                            <h2>Quality Assurance</h2>
                                            <p>Technoyuga integrated Mobile apps quality assurance process ensures that Apps are properly-tested and
                                                market-ready before the launch. We test all use cases, critical case scenarios, and all functional and
                                                real time device testing on IOS and Android Devices and Desktop.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="process-launch" className="process-content tab-pane fade" role="tabpanel">
                                    <div id="collapse-f" className="no-collapse" data-parent="#process-content" role="tabpanel"
                                        aria-labelledby="heading-f">
                                        <div className="card-body">
                                            <img className="mobile-visible" src="img/process/launch.svg" alt="launch" />
                                            <h2>Deployment and Maintenance</h2>
                                            <p>After passing through a final round of QA and client approval. We manage the submission of the app to
                                                the Google and Apple stores and get your app guaranteed approved. We will also help in any bug or
                                                issues come after live and will provide the free 90 Days extended support after going live.</p>
                                            <div className="big-circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        <ul className="ps-timeline nav nav-tabs" role="tablist">
                            <li>
                                <a data-toggle="tab" href="#process-idea"><img src="img/process/idea.svg" alt="idea" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#process-wireframe"><img src="img/process/wireframe.svg"
                                    alt="wireframe" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#process-design"><img src="img/process/design.svg" alt="design" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#process-development"><img src="img/process/development.svg"
                                    alt="development process" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#process-test"><img src="img/process/test.svg" alt="test" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#process-launch"><img src="img/process/launch.svg" alt="launch" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="bubble1"><img src="img/circle1.svg" alt="pink circle" /></div>
                </section>

                <section className="ios-process">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Your Mobile app project in the safe hands</h2>
                            <p className="title-para">We believe in long-term results and stay away from ‘quick wins’ that don’t last. We
                                approach every project as true technology partners along with delivering the required technology solution,
                                we work hard with our clients to understand their business domain, and revenue model.  We emphasize on areas
                                that could be enhanced and optimized to get more customers and get them better ROI</p>
                        </div>
                        <div className="row border-b">
                            <div className="col-md-4 hover-dark" data-aos="fade-in" data-aos-delay="100">
                                <div className="ios-process-inner">
                                    <svg width="82" height="60" viewBox="0 0 82 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="52" cy="30" r="30" fill="#E0F9FF" />
                                        <path
                                            d="M45.2969 8.0625H40.625V5.625C40.625 4.72759 39.8975 4 39 4C38.1025 4 37.375 4.72759 37.375 5.625V8.0625H14.625V5.625C14.625 4.72759 13.8975 4 13 4C12.1025 4 11.375 4.72759 11.375 5.625V8.0625H6.70312C3.00696 8.0625 0 11.0695 0 14.7656V49.2969C0 52.993 3.00696 56 6.70312 56H45.2969C48.993 56 52 52.993 52 49.2969V14.7656C52 11.0695 48.993 8.0625 45.2969 8.0625ZM6.70312 11.3125H11.375V12.9375C11.375 13.8349 12.1025 14.5625 13 14.5625C13.8975 14.5625 14.625 13.8349 14.625 12.9375V11.3125H37.375V12.9375C37.375 13.8349 38.1025 14.5625 39 14.5625C39.8975 14.5625 40.625 13.8349 40.625 12.9375V11.3125H45.2969C47.201 11.3125 48.75 12.8615 48.75 14.7656V18.625H3.25V14.7656C3.25 12.8615 4.79903 11.3125 6.70312 11.3125ZM45.2969 52.75H6.70312C4.79903 52.75 3.25 51.201 3.25 49.2969V21.875H48.75V49.2969C48.75 51.201 47.201 52.75 45.2969 52.75Z"
                                            fill="#3D3D3D" />
                                    </svg>
                                    <h5>1st Demo in 8 Days</h5>
                                    <p>Get your first working Demo within 8 working days of the project kickoff.</p>
                                </div>
                            </div>

                            <div className="col-md-4 hover-dark border-right-left" data-aos="fade-in" data-aos-delay="200">
                                <div className="ios-process-inner">
                                    <svg width="87" height="60" viewBox="0 0 87 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="57" cy="30" r="30" fill="#E0F9FF" />
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M41.0967 36.2122C40.0321 35.1037 38.748 34.5111 37.3871 34.5111C36.0372 34.5111 34.7422 35.0927 33.6337 36.2012L30.1656 39.6583C29.8802 39.5047 29.5949 39.362 29.3205 39.2193C28.9254 39.0218 28.5523 38.8352 28.234 38.6376C24.9854 36.5743 22.0332 33.8855 19.2016 30.4064C17.8297 28.6724 16.9079 27.2127 16.2384 25.7311C17.1383 24.908 17.9724 24.0519 18.7846 23.2288C19.0919 22.9215 19.3992 22.6032 19.7065 22.2959C22.0112 19.9912 22.0112 17.006 19.7065 14.7013L16.7103 11.7051C16.3701 11.3649 16.0189 11.0137 15.6896 10.6625C15.0311 9.98203 14.3397 9.27963 13.6263 8.62113C12.5618 7.56754 11.2887 7.00781 9.94973 7.00781C8.61079 7.00781 7.31574 7.56754 6.21825 8.62113C6.20727 8.63211 6.20727 8.63211 6.1963 8.64308L2.46481 12.4075C1.06002 13.8123 0.258846 15.5244 0.0832463 17.5108C-0.180153 20.7155 0.763693 23.7007 1.48804 25.6543C3.26598 30.4503 5.92192 34.8952 9.88388 39.6583C14.6909 45.3982 20.4747 49.9309 27.0816 53.1246C29.6059 54.3208 32.9752 55.7366 36.7396 55.9781C36.9701 55.989 37.2115 56 37.431 56C39.9662 56 42.0954 55.0891 43.7636 53.2782C43.7745 53.2563 43.7965 53.2453 43.8075 53.2234C44.3782 52.5319 45.0367 51.9064 45.7281 51.2369C46.2 50.7869 46.6829 50.315 47.1548 49.8211C48.2414 48.6907 48.812 47.3737 48.812 46.0238C48.812 44.6629 48.2304 43.3569 47.1219 42.2594L41.0967 36.2122ZM45.0257 47.7688C45.0147 47.7688 45.0147 47.7798 45.0257 47.7688C44.5977 48.2297 44.1587 48.6468 43.6867 49.1077C42.9734 49.7882 42.249 50.5016 41.5686 51.3027C40.4601 52.488 39.1541 53.0478 37.442 53.0478C37.2774 53.0478 37.1018 53.0478 36.9371 53.0368C33.6776 52.8283 30.6485 51.5552 28.3767 50.4686C22.1649 47.4615 16.7103 43.1922 12.1776 37.7816C8.43519 33.2709 5.9329 29.1004 4.27568 24.6226C3.25501 21.8899 2.88186 19.7607 3.04648 17.7523C3.15623 16.4682 3.65011 15.4037 4.56103 14.4927L8.30349 10.7503C8.84126 10.2454 9.41196 9.97105 9.97168 9.97105C10.6631 9.97105 11.2228 10.3881 11.574 10.7393C11.585 10.7503 11.596 10.7612 11.6069 10.7722C12.2764 11.3978 12.913 12.0453 13.5824 12.7367C13.9227 13.0879 14.2739 13.4391 14.6251 13.8013L17.6212 16.7975C18.7846 17.9608 18.7846 19.0364 17.6212 20.1997C17.303 20.518 16.9957 20.8363 16.6774 21.1436C15.7555 22.0874 14.8775 22.9654 13.9227 23.8214C13.9007 23.8434 13.8788 23.8544 13.8678 23.8763C12.9239 24.8202 13.0995 25.7421 13.2971 26.3676C13.3081 26.4006 13.319 26.4335 13.33 26.4664C14.1092 28.3541 15.2067 30.132 16.8749 32.2502L16.8859 32.2612C19.915 35.9927 23.1087 38.901 26.6317 41.129C27.0816 41.4143 27.5426 41.6448 27.9816 41.8643C28.3767 42.0618 28.7498 42.2484 29.0681 42.4459C29.112 42.4679 29.1559 42.5008 29.1998 42.5228C29.573 42.7093 29.9242 42.7971 30.2863 42.7971C31.1972 42.7971 31.7679 42.2264 31.9545 42.0399L35.708 38.2864C36.0811 37.9133 36.6737 37.4633 37.3652 37.4633C38.0456 37.4633 38.6053 37.8913 38.9456 38.2645C38.9565 38.2755 38.9565 38.2755 38.9675 38.2864L45.0147 44.3336C46.1451 45.4531 46.1451 46.6055 45.0257 47.7688Z"
                                                fill="#3D3D3D" />
                                            <path
                                                d="M28.1024 16.3693C30.9778 16.8522 33.5898 18.2131 35.6751 20.2984C37.7603 22.3836 39.1102 24.9957 39.6041 27.8711C39.7248 28.5955 40.3504 29.1003 41.0638 29.1003C41.1516 29.1003 41.2284 29.0893 41.3162 29.0783C42.1283 28.9466 42.6661 28.1784 42.5344 27.3663C41.9418 23.8872 40.2955 20.7154 37.7823 18.2022C35.269 15.6889 32.0972 14.0427 28.6182 13.45C27.806 13.3183 27.0488 13.8561 26.9061 14.6573C26.7634 15.4584 27.2902 16.2377 28.1024 16.3693Z"
                                                fill="#3D3D3D" />
                                            <path
                                                d="M51.9404 26.9383C50.9636 21.2094 48.2638 15.9963 44.1152 11.8477C39.9667 7.6992 34.7536 4.99936 29.0247 4.02259C28.2235 3.87991 27.4662 4.42866 27.3235 5.22983C27.1918 6.04198 27.7296 6.79925 28.5418 6.94193C33.6561 7.80895 38.3204 10.2344 42.03 13.933C45.7395 17.6425 48.154 22.3069 49.021 27.4212C49.1417 28.1455 49.7673 28.6504 50.4807 28.6504C50.5685 28.6504 50.6453 28.6394 50.7331 28.6284C51.5343 28.5077 52.083 27.7395 51.9404 26.9383Z"
                                                fill="#3D3D3D" />
                                        </g>
                                    </svg>
                                    <h5>Weekly Project Scrum Calls</h5>
                                    <p>We ensure that you are updated with the project status on a weekly basis.</p>
                                </div>
                            </div>

                            <div className="col-md-4 hover-dark" data-aos="fade-in" data-aos-delay="300">
                                <div className="ios-process-inner">
                                    <svg width="84" height="61" viewBox="0 0 84 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="53.334" cy="30.7832" r="30" fill="#E0F9FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M25.6711 11.5283C26.2922 11.7364 26.9497 11.7265 27.5866 11.8494C32.1784 12.7362 35.9573 14.9953 38.8759 18.6309C42.1125 22.663 43.4651 27.2989 42.9309 32.4378C42.4388 37.1739 40.4011 41.1672 36.9181 44.4272C34.7414 46.4645 32.6847 48.6246 30.5685 50.724C28.8173 52.4616 27.0754 54.2088 25.3358 55.958C25.0459 56.2493 24.7493 56.5164 24.3493 56.6423C24.1437 56.6423 23.9381 56.6423 23.7326 56.6423C23.321 56.438 23.0134 56.1081 22.6951 55.7896C19.1982 52.2917 15.6982 48.797 12.2037 45.2968C11.5714 44.6634 10.8837 44.0901 10.2711 43.4341C7.71133 40.6927 6.05005 37.4765 5.44947 33.7905C4.38982 27.2874 6.18186 21.6266 10.8471 16.9487C13.7404 14.0474 17.2767 12.3546 21.3225 11.7244C21.6869 11.6677 22.0662 11.6944 22.4109 11.5283C23.4977 11.5283 24.5844 11.5283 25.6711 11.5283ZM24.549 14.1772C21.4682 14.2127 18.9903 14.7803 16.6703 15.9827C13.6395 17.5535 11.3007 19.8427 9.70294 22.8554C8.07613 25.9228 7.49379 29.194 7.95114 32.6454C8.3167 35.4043 9.33901 37.8927 10.9676 40.1441C11.8262 41.3311 12.9188 42.2886 13.9511 43.3108C17.2482 46.5757 20.5216 49.8644 23.7932 53.1548C24.0396 53.4028 24.1669 53.3985 24.4009 53.1517C25.0272 52.4915 25.6792 51.8552 26.327 51.2157C29.305 48.2761 32.2013 45.2539 35.2381 42.3736C38.0062 39.748 39.6961 36.5556 40.2188 32.7732C40.8342 28.3188 39.8103 24.2532 37.0852 20.6789C33.8248 16.4025 29.4252 14.3143 24.549 14.1772Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M22.224 31.5309C22.224 30.2247 22.2203 28.9184 22.2253 27.612C22.2289 26.6599 22.7401 26.1517 23.6967 26.1494C25.2232 26.1459 26.7505 26.118 28.2759 26.1582C30.917 26.2279 32.4505 28.9813 31.1089 31.2508C30.4433 32.3767 29.3907 32.8841 28.0886 32.8824C27.1345 32.8812 26.1803 32.894 25.2266 32.8752C24.9321 32.8695 24.8563 32.9585 24.8637 33.245C24.8835 34.0077 24.8767 34.7713 24.8687 35.5345C24.8597 36.3823 24.3034 36.9838 23.5426 36.9855C22.7729 36.9871 22.2292 36.397 22.2256 35.538C22.2201 34.2022 22.224 32.8666 22.224 31.5309ZM26.6548 30.2337C27.1237 30.2337 27.5924 30.2386 28.061 30.2325C28.6522 30.2249 28.956 29.9687 28.9462 29.4987C28.9368 29.0502 28.63 28.7991 28.0708 28.7954C27.3677 28.7909 26.6647 28.7943 25.9614 28.7943C24.7823 28.7943 24.7879 28.794 24.8646 29.9917C24.877 30.1822 24.9276 30.2415 25.1168 30.2374C25.6293 30.2263 26.1422 30.2337 26.6548 30.2337Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20.9405 31.5626C20.9405 32.9266 20.9614 34.2911 20.9336 35.6546C20.9133 36.6549 19.9549 37.2667 19.0844 36.8635C18.5136 36.5991 18.2952 36.1103 18.2951 35.5044C18.2951 34.4043 18.295 33.3044 18.295 32.2042C18.295 30.6788 18.289 29.1533 18.2975 27.628C18.3021 26.8255 18.7406 26.2663 19.4149 26.1617C20.2338 26.0346 20.9246 26.6272 20.9372 27.5147C20.9564 28.8637 20.9422 30.2133 20.9422 31.5627C20.9417 31.5626 20.9411 31.5626 20.9405 31.5626Z"
                                            fill="#2D2D2D" />
                                    </svg>
                                    {/* <h5>Transfer Of IP</h5> */}
                                    {/* change A */}
                                    <h5>Transfer of IP</h5>

                                    <p>You are the owner of the product Intellectual Property Rights.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 hover-dark" data-aos="fade-in" data-aos-delay="400">
                                <div className="ios-process-inner">
                                    <svg width="82" height="60" viewBox="0 0 82 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="52" cy="30" r="30" fill="#E0F9FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M27.5726 53.805C26.5845 53.805 25.5965 53.805 24.6083 53.805C24.505 53.7798 24.4031 53.7462 24.2984 53.7309C23.2163 53.5728 22.1237 53.4684 21.0529 53.2541C11.8588 51.4137 4.24746 43.513 2.74663 34.2693C2.60124 33.374 2.49849 32.4717 2.37598 31.5726C2.37598 30.5845 2.37598 29.5965 2.37598 28.6083C2.5273 27.5581 2.64086 26.5009 2.83566 25.4588C4.60064 16.0144 12.4866 8.29883 21.9575 6.74081C22.8374 6.59614 23.7245 6.49651 24.6083 6.37598C25.5964 6.37598 26.5845 6.37598 27.5726 6.37598C27.6916 6.40187 27.8095 6.4339 27.9297 6.45252C29.1467 6.64149 30.3813 6.75381 31.579 7.02764C40.7125 9.11575 47.8976 16.7604 49.4453 26.0024C49.5902 26.8669 49.6862 27.7396 49.805 28.6084C49.805 29.5965 49.805 30.5846 49.805 31.5727C49.7788 31.692 49.7451 31.8102 49.7273 31.9308C49.5662 33.0281 49.4642 34.1373 49.2398 35.2214C47.3379 44.4167 39.4771 51.9384 30.2221 53.4395C29.3422 53.582 28.4559 53.6841 27.5726 53.805ZM26.0712 50.8402C37.4886 50.8576 46.8008 41.5728 46.8402 30.1322C46.8795 18.7052 37.5588 9.35734 26.1091 9.34081C14.6911 9.32417 5.37752 18.6104 5.3407 30.0479C5.30399 41.4735 14.6253 50.8228 26.0712 50.8402Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M24.6087 18.3804C24.6087 17.8557 24.6026 17.332 24.6101 16.8086C24.623 15.9123 25.2669 15.2573 26.1131 15.2697C26.9354 15.2817 27.5576 15.9344 27.5711 16.8097C27.5789 17.3185 27.5725 17.8275 27.5725 18.376C27.7296 18.4258 27.8839 18.4769 28.0396 18.524C30.7577 19.3457 32.708 21.9146 32.7563 24.7371C32.7723 25.6747 32.1691 26.3631 31.3138 26.3829C30.4563 26.4029 29.8327 25.7571 29.7935 24.8085C29.7069 22.7116 28.0175 21.132 25.936 21.2012C23.9109 21.2687 22.3154 23.0098 22.3901 25.071C22.4613 27.0392 24.077 28.5465 26.135 28.6124C28.8598 28.6996 30.8891 29.9644 32.0933 32.4017C33.8948 36.048 31.9302 40.4647 28.0379 41.6551C27.8921 41.6996 27.7457 41.7423 27.5725 41.794C27.5725 42.3249 27.5791 42.8484 27.571 43.3717C27.557 44.2653 26.9081 44.9236 26.0651 44.9099C25.243 44.8965 24.622 44.2421 24.6101 43.3667C24.603 42.8433 24.6088 42.3198 24.6088 41.7835C23.1854 41.4217 21.9919 40.7226 21.0469 39.6244C20.0124 38.4222 19.4739 37.0229 19.4269 35.4398C19.3989 34.4989 20.0089 33.8158 20.8677 33.7966C21.7261 33.7773 22.3485 34.4222 22.3876 35.3712C22.4739 37.4658 24.1687 39.0505 26.2457 38.9785C28.2736 38.9082 29.8683 37.1669 29.7912 35.1074C29.7172 33.1356 28.1058 31.6385 26.0453 31.5663C23.2229 31.4676 21.1567 30.1321 19.9923 27.5658C18.3248 23.8908 20.3889 19.5951 24.2807 18.4965C24.3828 18.4677 24.4816 18.4258 24.6087 18.3804Z"
                                            fill="#2D2D2D" />
                                    </svg>
                                    <h5>On Time. On Budget</h5>
                                    <p>Set your project delivery when expected and within your budget.</p>
                                </div>
                            </div>

                            <div className="col-md-4 hover-dark border-right-left" data-aos="fade-in" data-aos-delay="500">
                                <div className="ios-process-inner">
                                    <svg width="94" height="64" viewBox="0 0 94 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="63.334" cy="30.2578" r="30" fill="#E0F9FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M32.1403 61.3827C30.9489 61.1274 29.8117 60.7559 28.8155 60.0111C26.3766 58.1874 25.3867 55.0925 26.3614 52.2633C27.3513 49.39 30.0661 47.5238 33.1444 47.6004C36.0646 47.6731 38.7008 49.7272 39.5326 52.5779C39.5788 52.7365 39.624 52.8954 39.6694 53.0532C42.291 53.5828 47.0739 51.2004 48.6377 48.5152C48.1555 48.5152 47.7295 48.5205 47.3033 48.5141C46.322 48.4993 45.822 47.9935 45.8216 47.0057C45.8199 41.3815 45.8174 35.7571 45.8294 30.1328C45.8302 29.7747 45.9032 29.3986 46.0288 29.0633C46.2254 28.54 46.6175 28.2402 47.2172 28.265C47.654 28.283 48.0922 28.2685 48.4943 28.2685C48.5489 28.1854 48.5845 28.1565 48.5855 28.1262C48.7237 24.5259 48.6117 20.98 47.0381 17.612C44.0664 11.2516 37.3766 7.25332 30.3983 7.75713C22.1664 8.35147 15.6217 14.4182 14.5472 22.5655C14.3036 24.4129 14.3851 26.3033 14.3137 28.2682C14.8211 28.2682 15.2345 28.2666 15.6481 28.2685C16.5059 28.2728 17.0098 28.7062 17.1309 29.565C17.1666 29.8183 17.1605 30.0786 17.1605 30.3356C17.1621 35.8681 17.162 41.4006 17.1618 46.933C17.1618 48.0491 16.7093 48.5135 15.5961 48.5135C13.8686 48.5135 12.1385 48.5576 10.414 48.4811C7.66967 48.3593 5.39316 46.0914 5.32855 43.3381C5.25403 40.1604 5.28863 36.9792 5.32223 33.8C5.35087 31.0936 7.60991 28.1016 11.0564 28.2661C11.2009 28.2731 11.3469 28.2538 11.5866 28.2422C11.5866 27.9983 11.5848 27.7679 11.5868 27.5376C11.6053 25.3897 11.486 23.2349 11.9375 21.1102C13.4246 14.1097 17.4747 9.20508 24.0311 6.37478C25.8455 5.5916 27.7611 5.1602 29.7346 5.00111C29.8398 4.99268 29.9414 4.94407 30.0447 4.91406C31.0006 4.91406 31.9564 4.91406 32.9123 4.91406C33.617 5.02132 34.3231 5.12003 35.0262 5.23696C42.8864 6.54578 49.4593 12.9619 51.01 20.799C51.4527 23.036 51.4296 25.2912 51.4246 27.5503C51.4241 27.7789 51.4246 28.0076 51.4246 28.2561C52.442 28.2651 53.2953 28.5123 54.0493 29.0518C55.8552 30.344 56.8625 32.1468 56.944 34.3197C57.0623 37.4757 57.0279 40.64 56.972 43.7992C56.9331 45.998 55.6324 47.6703 53.4827 48.1008C52.3279 48.332 51.622 48.8631 51.1275 49.8374C51.1108 49.87 51.0877 49.8992 51.0664 49.9292C48.9713 52.896 46.1506 54.7812 42.6003 55.5376C41.6392 55.7423 40.6498 55.814 39.6738 55.9466C39.1342 58.5108 37.5399 60.1398 35.1163 61.0115C34.6542 61.1777 34.1625 61.261 33.6845 61.3826C33.1697 61.3827 32.6552 61.3827 32.1403 61.3827ZM14.3525 31.0529C13.2593 31.0529 12.1987 31.0528 11.1382 31.0529C9.31205 31.0534 8.10913 32.2243 8.0976 34.072C8.07887 37.065 8.08334 40.058 8.09537 43.051C8.1007 44.379 9.06157 45.5619 10.3798 45.6726C11.6867 45.7824 13.0099 45.6966 14.3527 45.6966C14.3525 40.8258 14.3525 35.9842 14.3525 31.0529ZM48.6535 31.0583C48.6535 35.979 48.6535 40.8346 48.6535 45.7063C49.793 45.7063 50.8974 45.7657 51.9925 45.6915C53.3883 45.5966 54.1908 44.819 54.197 43.63C54.213 40.6369 54.2213 37.6436 54.1903 34.651C54.1788 33.5531 53.784 32.5437 52.9896 31.7758C52.643 31.4409 52.1327 31.1393 51.6686 31.09C50.6892 30.9862 49.6912 31.0583 48.6535 31.0583ZM37.0097 54.5502C36.9884 52.1398 35.1952 50.3287 32.8489 50.3474C30.612 50.3654 28.7667 52.2134 28.7784 54.4237C28.7905 56.672 30.7467 58.6061 32.9925 58.5901C35.2143 58.5741 37.029 56.7489 37.0097 54.5502Z"
                                            fill="#2D2D2D" />
                                    </svg>
                                    <h5>Free Support</h5>
                                    <p>We provide free 90 Days Technical Support to ensure the stability of the product.</p>
                                </div>
                            </div>

                            <div className="col-md-4 hover-dark" data-aos="fade-in" data-aos-delay="600">
                                <div className="ios-process-inner">
                                    <svg width="87" height="61" viewBox="0 0 87 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="56.334" cy="30.2578" r="30" fill="#E0F9FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.0911 44.6513C27.0056 44.6513 27.9204 44.6598 28.8347 44.6488C29.6811 44.6385 30.2587 44.0575 30.2759 43.2122C30.2859 42.7164 30.2591 42.219 30.29 41.7249C30.2992 41.5796 30.4159 41.3934 30.5399 41.3117C30.9527 41.0401 31.3822 40.7894 31.8246 40.5698C31.9692 40.4981 32.2039 40.4833 32.3445 40.5515C32.8168 40.7814 33.2561 41.0782 33.7249 41.3163C34.3987 41.6583 35.1344 41.4929 35.5184 40.8486C36.5013 39.1998 37.4605 37.536 38.3926 35.858C38.7475 35.2191 38.5269 34.5156 37.9235 34.102C37.6306 33.9011 37.3273 33.7017 37.0021 33.5647C36.4518 33.3326 36.1821 32.9983 36.31 32.3668C36.373 32.0552 36.3412 31.7144 36.2977 31.3943C36.2587 31.1089 36.3698 30.9763 36.6032 30.8532C37.0274 30.6296 37.4445 30.3894 37.849 30.1317C38.5429 29.6898 38.7599 28.9525 38.3575 28.2352C37.4483 26.6149 36.5182 25.0059 35.5724 23.4067C35.1433 22.6811 34.3891 22.5041 33.6388 22.9039C33.2701 23.1005 32.898 23.2972 32.5557 23.5347C32.2363 23.7564 31.9853 23.7835 31.6573 23.5275C31.3311 23.273 30.9519 23.0759 30.5729 22.9038C30.3312 22.7941 30.2641 22.6579 30.2732 22.4103C30.2905 21.9303 30.2857 21.4492 30.276 20.9688C30.2587 20.1231 29.6808 19.5376 28.8346 19.5333C27.0056 19.5241 25.1764 19.5241 23.3474 19.5333C22.5015 19.5377 21.9224 20.1248 21.9066 20.969C21.8973 21.4649 21.9235 21.9622 21.8927 22.4563C21.8837 22.6019 21.7674 22.7886 21.6434 22.8703C21.2309 23.1422 20.8014 23.3929 20.3588 23.6124C20.2146 23.6839 19.98 23.6978 19.8395 23.6295C19.381 23.4066 18.9554 23.1175 18.5016 22.8837C17.7844 22.5142 17.0428 22.6865 16.6374 23.3689C15.6729 24.993 14.7285 26.6295 13.8068 28.2782C13.4294 28.9536 13.6488 29.6767 14.2958 30.1043C14.6054 30.3087 14.9213 30.5153 15.26 30.6613C15.7455 30.8707 15.9798 31.1579 15.8748 31.7205C15.8105 32.0641 15.8411 32.4347 15.8852 32.7861C15.9209 33.071 15.8136 33.2068 15.582 33.33C15.1585 33.5555 14.7408 33.7938 14.3352 34.0499C13.6415 34.4881 13.4228 35.2298 13.8242 35.9446C14.7342 37.5645 15.664 39.1736 16.6095 40.7731C17.0297 41.4837 17.7661 41.6713 18.5014 41.2983C18.8599 41.1165 19.2181 40.925 19.5462 40.6948C19.9169 40.4348 20.2207 40.3741 20.6036 40.7035C20.891 40.9508 21.259 41.1153 21.6103 41.2738C21.8487 41.3814 21.9201 41.5206 21.9099 41.7703C21.8906 42.2344 21.8998 42.7 21.9055 43.1651C21.9165 44.067 22.4898 44.6421 23.3939 44.6494C24.2929 44.6571 25.192 44.6516 26.0911 44.6513Z"
                                            fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M42.1868 8.27344C43.0735 8.58804 43.3699 9.22473 43.3495 10.1453C43.3064 12.0975 43.3389 14.0515 43.3351 16.0047C43.3329 17.0996 42.8021 17.6353 41.7104 17.638C39.6642 17.643 37.6179 17.6478 35.5719 17.6361C34.4445 17.6297 33.7486 16.7276 34.0995 15.7635C34.308 15.1909 34.7937 14.8588 35.4724 14.8512C36.2884 14.8422 37.1045 14.8491 38.0415 14.8491C37.8605 14.6981 37.7806 14.6169 37.6875 14.556C33.6887 11.9395 29.2998 10.7069 24.5398 11.1534C16.2434 11.9314 10.2462 16.1608 6.8442 23.7404C4.06781 29.9259 4.49286 36.1297 7.6242 42.1443C7.79351 42.4694 7.97904 42.8112 8.0352 43.1646C8.13972 43.8226 7.73319 44.4127 7.1302 44.6181C6.48706 44.8372 5.773 44.612 5.46297 43.9654C4.76867 42.5169 4.06573 41.0652 3.49966 39.5645C2.81981 37.762 2.48774 35.8655 2.35119 33.9398C2.34256 33.8189 2.2995 33.7003 2.27246 33.5807C2.27246 32.5882 2.27246 31.5958 2.27246 30.6034C2.4244 29.5486 2.53849 28.4868 2.73401 27.4401C4.5069 17.9529 12.426 10.205 21.9397 8.63983C22.8234 8.49444 23.7145 8.39449 24.6021 8.27344C25.5635 8.27344 26.5249 8.27344 27.4863 8.27344C27.622 8.29923 27.7567 8.33844 27.8936 8.34873C32.0621 8.65917 35.8791 9.98528 39.3497 12.3118C39.7288 12.5658 40.1003 12.8311 40.5451 13.1397C40.5451 12.0768 40.5776 11.1022 40.5356 10.1308C40.4958 9.20861 40.8274 8.57441 41.7215 8.27354C41.8767 8.27344 42.0317 8.27344 42.1868 8.27344Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.99487 55.91C9.1092 55.5945 8.81145 54.959 8.83204 54.0376C8.87572 52.0847 8.84296 50.1302 8.8465 48.1763C8.84848 47.0805 9.37794 46.5479 10.4736 46.5453C12.5204 46.5407 14.5673 46.5358 16.6142 46.5474C17.7417 46.5537 18.4428 47.4605 18.0775 48.4231C17.8576 49.0029 17.4179 49.3152 16.797 49.3294C16.0996 49.3453 15.4015 49.3332 14.7037 49.3359C14.5557 49.3366 14.4076 49.349 14.2185 49.463C14.8325 49.8339 15.4342 50.2271 16.0623 50.5723C28.3914 57.3488 44.0284 50.0151 46.7141 36.1815C47.693 31.1394 46.9199 26.351 44.4475 21.8414C44.3224 21.6133 44.1958 21.3693 44.1494 21.118C44.0224 20.4321 44.4185 19.7779 45.0453 19.566C45.7061 19.3426 46.3781 19.6021 46.7504 20.2502C48.1283 22.65 49.065 25.2128 49.5351 27.9402C49.6874 28.8231 49.7864 29.7151 49.9098 30.6029C49.9098 31.5954 49.9098 32.5878 49.9098 33.5802C49.8833 33.7 49.8495 33.8188 49.8318 33.9399C49.6699 35.0421 49.5675 36.1562 49.3423 37.245C47.433 46.4791 39.5362 54.0351 30.2409 55.5428C29.3574 55.6862 28.467 55.7886 27.5799 55.91C26.6185 55.91 25.6571 55.91 24.6957 55.91C24.5605 55.8841 24.4263 55.8446 24.29 55.8341C19.8158 55.4964 15.7666 54.0011 12.1311 51.3765C11.9901 51.2747 11.8458 51.1776 11.637 51.0324C11.637 52.0937 11.6036 53.0536 11.6465 54.01C11.6882 54.9409 11.3771 55.6016 10.4605 55.91C10.305 55.91 10.1498 55.91 9.99487 55.91Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10.46 55.9089C11.3766 55.6005 11.6877 54.9399 11.646 54.0089C11.6031 53.0525 11.6365 52.0926 11.6365 51.0312C11.8452 51.1764 11.9897 51.2736 12.1306 51.3754C15.7661 54 19.8153 55.4952 24.2895 55.833C24.4259 55.8434 24.5601 55.8829 24.6952 55.9089C19.9502 55.9089 15.2051 55.9089 10.46 55.9089Z"
                                            fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M41.7215 8.27256C40.8273 8.57354 40.4958 9.20773 40.5356 10.1298C40.5775 11.1013 40.5451 12.0758 40.5451 13.1387C40.1003 12.8302 39.7287 12.5649 39.3497 12.3108C35.8791 9.9843 32.0621 8.6582 27.8936 8.34776C27.7567 8.33746 27.622 8.29825 27.4863 8.27246C32.2313 8.27256 36.9764 8.27256 41.7215 8.27256Z"
                                            fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.0901 44.6518C25.191 44.652 24.2919 44.6577 23.3929 44.6504C22.4889 44.6431 21.9155 44.0679 21.9045 43.1661C21.8989 42.701 21.8898 42.2354 21.9089 41.7712C21.9192 41.5215 21.8478 41.3824 21.6093 41.2747C21.258 41.1162 20.89 40.9518 20.6026 40.7045C20.2197 40.375 19.9159 40.4358 19.5452 40.6958C19.2171 40.9259 18.8589 41.1175 18.5004 41.2993C17.765 41.6722 17.0287 41.4847 16.6085 40.7741C15.663 39.1746 14.7331 37.5655 13.8232 35.9456C13.4217 35.2308 13.6405 34.4891 14.3342 34.0509C14.7396 33.7948 15.1575 33.5565 15.581 33.331C15.8126 33.2077 15.9199 33.072 15.8842 32.7871C15.8402 32.4357 15.8096 32.065 15.8738 31.7215C15.9788 31.1589 15.7445 30.8716 15.259 30.6623C14.9203 30.5163 14.6044 30.3097 14.2948 30.1053C13.6479 29.6777 13.4284 28.9546 13.8058 28.2792C14.7275 26.6305 15.6719 24.994 16.6364 23.3699C17.0418 22.6875 17.7834 22.5151 18.5006 22.8846C18.9544 23.1184 19.38 23.4076 19.8385 23.6304C19.979 23.6988 20.2136 23.6849 20.3578 23.6134C20.8004 23.3938 21.2299 23.1432 21.6424 22.8712C21.7664 22.7896 21.8827 22.6028 21.8917 22.4573C21.9225 21.9632 21.8962 21.4659 21.9056 20.97C21.9214 20.1257 22.5005 19.5387 23.3464 19.5343C25.1754 19.525 27.0046 19.525 28.8336 19.5343C29.6799 19.5385 30.2577 20.1241 30.275 20.9698C30.2847 21.4502 30.2895 21.9313 30.2722 22.4112C30.2631 22.6589 30.3302 22.795 30.5719 22.9048C30.9509 23.0768 31.3301 23.274 31.6563 23.5285C31.9842 23.7844 32.2352 23.7574 32.5547 23.5357C32.897 23.2981 33.2691 23.1015 33.6378 22.9049C34.3881 22.505 35.1423 22.6821 35.5714 23.4077C36.5174 25.0068 37.4473 26.6158 38.3565 28.2362C38.7589 28.9535 38.5419 29.6908 37.848 30.1327C37.4435 30.3904 37.0265 30.6306 36.6022 30.8542C36.3688 30.9773 36.2577 31.1098 36.2967 31.3953C36.3402 31.7154 36.3721 32.0562 36.309 32.3678C36.1812 32.9992 36.4508 33.3335 37.0011 33.5656C37.3263 33.7027 37.6296 33.9021 37.9225 34.103C38.5259 34.5166 38.7465 35.2201 38.3916 35.8589C37.4595 37.5371 36.5003 39.2008 35.5174 40.8496C35.1334 41.4939 34.3976 41.6592 33.7239 41.3173C33.255 41.0792 32.8158 40.7823 32.3435 40.5525C32.2029 40.4842 31.9682 40.499 31.8236 40.5708C31.3812 40.7903 30.9517 41.041 30.5389 41.3127C30.4149 41.3943 30.2982 41.5805 30.289 41.7259C30.2581 42.22 30.2849 42.7173 30.2749 43.2132C30.2577 44.0585 29.68 44.6395 28.8337 44.6497C27.9194 44.6603 27.0046 44.6517 26.0901 44.6518ZM18.3265 38.1817C18.73 37.9504 19.0919 37.7451 19.4517 37.536C20.0577 37.1839 20.6422 37.217 21.1737 37.6715C21.937 38.324 22.7891 38.8119 23.7316 39.1529C24.3745 39.3855 24.6839 39.8646 24.6933 40.5406C24.6992 40.9694 24.6943 41.3983 24.6943 41.8276C25.6542 41.8276 26.5584 41.8276 27.4859 41.8276C27.4859 41.4241 27.4845 41.0535 27.4862 40.6829C27.4897 39.8195 27.8029 39.4522 28.5674 39.0837C29.3833 38.6906 30.1742 38.2283 30.9226 37.7179C31.5884 37.2641 32.059 37.1692 32.7652 37.56C33.1247 37.7589 33.4821 37.9615 33.8592 38.173C34.332 37.3531 34.779 36.5778 35.2444 35.7705C34.8457 35.5377 34.4698 35.3272 34.103 35.1018C33.4968 34.7294 33.3328 34.2241 33.3803 33.5251C33.4438 32.5894 33.4574 31.6427 33.3903 30.7081C33.3341 29.9248 33.4926 29.4398 34.1766 29.0337C34.5211 28.8293 34.8695 28.632 35.2466 28.4138C34.776 27.5988 34.3224 26.8138 33.8544 26.0036C33.4403 26.241 33.0685 26.4604 32.6909 26.6688C32.0968 26.9968 31.5241 26.9552 31.0086 26.5122C30.2469 25.8577 29.3948 25.3698 28.4512 25.03C27.8103 24.7991 27.4949 24.3219 27.4871 23.6438C27.482 23.2149 27.4862 22.7859 27.4862 22.3549C26.5273 22.3549 25.6231 22.3549 24.6945 22.3549C24.6945 22.7733 24.6968 23.1592 24.6941 23.5451C24.6883 24.3506 24.3687 24.7278 23.6556 25.0782C22.8286 25.4845 22.0218 25.9482 21.2598 26.4659C20.5831 26.9257 20.1021 27.0141 19.3737 26.602C19.0296 26.4072 18.686 26.2122 18.3245 26.0073C17.8866 26.7648 17.4758 27.4741 17.0665 28.1842C17.0288 28.2498 17.0004 28.3208 16.9539 28.4178C17.337 28.643 17.7112 28.8563 18.0786 29.0806C18.6798 29.4476 18.8447 29.9593 18.7998 30.6583C18.7387 31.6093 18.7382 32.57 18.7994 33.5208C18.8444 34.2213 18.6831 34.7295 18.081 35.1003C17.7138 35.3263 17.3384 35.5384 16.9387 35.7734C17.4007 36.575 17.8476 37.3505 18.3265 38.1817Z"
                                            fill="#2D2D2D" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.0921 26.9756C28.9068 26.9765 31.2066 29.2778 31.2059 32.0929C31.2052 34.9064 28.9021 37.2083 26.0886 37.2073C23.2771 37.2063 20.9735 34.9008 20.9746 32.0892C20.9756 29.2763 23.2791 26.9747 26.0921 26.9756ZM26.1526 29.7671C24.8642 29.7376 23.7891 30.7615 23.7661 32.0401C23.7432 33.3099 24.7467 34.3744 26.0046 34.4148C27.2914 34.4562 28.3791 33.4404 28.4138 32.165C28.4488 30.8759 27.4308 29.7964 26.1526 29.7671Z"
                                            fill="#2D2D2D" />
                                    </svg>
                                    <h5>Risk Free Trial</h5>
                                    <p>Try our developer for 2 weeks, retaining the rights of your code, if you cancel the partnership. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="call-to-action">
                    <div className="container">
                        <div className="call-content">
                            <h2>Do you have an Idea?</h2>

                            <p>Book a discovery call to validate your idea and get a free roadmap document of your product development,
                                marketing and revenue model.</p>
                            <a href="/contact-us">schedule a call</a>
                        </div>
                    </div>
                </section>

            </main>

            {/* <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-nav">
                            <img src="img/technoyuga-logo-w.svg" alt="techno yuga logo" />
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
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
                                <li><a target="_blank" href="https://www.linkedin.com/company/technoyuga-pvt-ltd"><i className="fa fa-linkedin"
                                    aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/techno_yuga"><i className="fa fa-instagram"
                                    aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com/TechnoYuga"><i className="fa fa-twitter"
                                    aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> */}
            <Footer />
            <div className="modal fade" id="ep1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/IUdD-rRJPPw" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/9WBFOyI3M5U" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client3">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/eGxasloU0BQ" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client4">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/i8Mc4J3MiSc" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client5">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MtIOQp5SnH0" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="client6">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Lh63IlWwQn4" title="YouTube video player"
                            frameborder="0"
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

export default HomePage