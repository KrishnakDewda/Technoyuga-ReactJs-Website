import React from 'react'

const Portfolio = () => {
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
                                    <li><a href="#">Our Story</a></li>
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

                {/* <!-- ======= Potrfolio Section ======= --> */}
                <section className="potrfolio listing">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Our Portfolio</h2>
                            <p>Work with groundbreakers who create top-notch mobile and web apps on time & on budget</p>
                        </div>
                        <div className="our-work">
                            <div className="">
                                <div className="folio-item">
                                    <div className="gradient-bg gradient1">
                                        <img data-aos="fade-down" className="img-fluid" src="img/portfolio/slider1/1.png" alt="ecommerce app design" />
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
                                    <div className="gradient-bg gradient2">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/clubgrub/club-grub.png"
                                            alt="delivery app design" />
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
                                    <div className="gradient-bg gradient3">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/medizent/project-image.png"
                                            alt="health care app design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/medizent/medizent-vert.png" alt="medizent logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Medizen App</h5>
                                                <p>Hipaa Compliance Pill Reminder App</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/south-africa.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Mobile App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Healthcare</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Wellness</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Medizen App is a smart tool to improve medication compliance and improve medication safety. This app helps users to manage and keep track of their own and family members medication reminders and health updates.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Design Workshop</li>
                                                    <li>360 degree transformation of UI/UX</li>
                                                    <li>Flutter App Development</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/django.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/python.png" />
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
                                                    <img src="img/technologies/aws.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient4">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/gfacility/gfacility-project.png"
                                            alt="management app design" />
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
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/gfacility/project-image2.png" alt="conference room app design" />
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
                                    <div className="gradient-bg gradient6">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/ordeno/project-image.png" alt="ordeno app design" />
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

                                <div className="folio-item">
                                    <div className="gradient-bg gradient7">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/cloud-menu/project-image.png"
                                            alt="Cloud Menu Web App Design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/cloud-menu/cloudmenu-logo.svg" alt="cloudmenu logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Cloud Menu Web App</h5>
                                                <p>QR Code based contactless food ordering system</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/saudi.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Web App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Food Ordering</p>
                                                </li>
                                                <li className="industry">
                                                    <p>QR Code</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>CloudMenu is a SaaS based startup from Saudi Arabia which offers cloud based digital menu to restaurants and contact less ordering to customers.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>UI/UX Design</li>
                                                    <li>Browser App</li>
                                                    <li>Digital Menu</li>
                                                    <li>Restaurant Panel Development</li>
                                                    <li>Backend Development</li>
                                                    <li>SaaS System</li>
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
                                                    <img src="img/technologies/react.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/figma.svg" />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/aws.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/qr-code.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient8">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/slider2/jaku-img.png" alt="iot" app design="" />
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
                                    <div className="gradient-bg gradient9">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/volly-point/project-image.png" alt="ecommerce app development" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/volly-point/volly-point-logo.png" alt="volly point logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Volley-Point</h5>
                                                <p>Worlds #1 dedicated E-commerce store for volleyball products</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/slovenia.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Web App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>E-commerce</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Sports</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p> Volley-Point is Slovenia based business, they are into traditional sports products providers and deal with volleyball wholesaler and national teams in Europe and the whole world. They wanted to transform their traditional way of doing business and we helped them transform their business digitally and build an E-commerce portal and integrate with their CRM and inventory management system.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Branding</li>
                                                    <li>UI/UX Design</li>
                                                    <li>Web Portal Development</li>
                                                    <li>Integration with CRM and Inventory management</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/mysql.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/php.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/woocom.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/figma.svg" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient10">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/superfruit/project-img.png" alt="ecommerce marketPlace design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/superfruit/superfruit-logo.png" alt="superfruit logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Superfruit Inc</h5>
                                                <p>Reselling E-commerce marketPlace for Small businesses.</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Web App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>E-commerce</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Reselling</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Superfruit Inc. is LA based startup founded by Eric Liang, this helps small business, house wifes and students to sell online without worrying about inventory, shipping and with minimum commission.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Customer Portal Development</li>
                                                    <li>Integration with Stripe Connect</li>
                                                    <li>Web Portal Development</li>
                                                    <li>Seller portal development</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/react.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/mongodb.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/node.png" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/stripe.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient11">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/bawangcart/project-image.png" alt="grocery delivery app design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/superfruit/superfruit-logo.png" alt="superfruit logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Grocery Delivery System</h5>
                                                <p>Best Grocery Delivery System</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Mobile App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>E-commerce</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Grocery</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>This is a Grocery ordering and delivery system developed for a couple of startups based out in Malaysia and USA. It allows users to order products from multiple stores and deliver them at their door steps.  </p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>UI/UX Design</li>
                                                    <li>Admin panel development</li>
                                                    <li>Store panel development</li>
                                                    <li>Delivery Boy Application</li>
                                                    <li>Shopper website and Apps</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="technology-stack">
                                            <h4>Technology Stack</h4>
                                            <ul>
                                                <li>
                                                    <img src="img/technologies/mysql.png" />
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
                                                    <img src="img/technologies/aws.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient12">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/brud/project-image.png" alt="order management app design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/brud/brud-logo.png" alt="brud logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Brud App</h5>
                                                <p>To find your perfect place to eat, meet and get rewards.</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" />
                                                </li>
                                                <li className="app">
                                                    <p>Mobile App</p>
                                                </li>
                                                <li className="platform">
                                                    <p>Food Ordering</p>
                                                </li>
                                                <li className="industry">
                                                    <p>Cafe</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="app-desc" data-aos="fade-down" data-aos-delay="200">
                                            <div className="desc">
                                                <h4>About Project</h4>
                                                <p>Brud is a startup founded by a young entrepreneur from Los Angeles with a vision of helping small coffee shops to get more orders and customers to get rewards and gift cards for every order they make through the Brud app. Additionally we are also researching and developing a one click payment through QR code and POS integration.</p>
                                            </div>
                                            <div className="desc">
                                                <h4>What we done</h4>
                                                <ul>
                                                    <li>Branding</li>
                                                    <li>UI/UX Design</li>
                                                    <li>R&D on one click payment</li>
                                                    <li>Pos Integration</li>
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
                                                    <img src="img/technologies/firebase.svg" />
                                                </li>
                                                <li>
                                                    <img src="img/technologies/square.png" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="folio-item">
                                    <div className="gradient-bg gradient13">
                                        <img data-aos="fade-down" className="slider-img img-fluid" src="img/portfolio/dragon-fly/project-image.png" alt="crypto wallet app design" />
                                    </div>

                                    <div className="app-area">

                                        <div className="app-iden" data-aos="fade-down" data-aos-delay="100">
                                            <div className="app-logo">
                                                <img src="img/portfolio/dragon-fly/dragonfly-logo.svg" alt="dragonfly logo" />
                                            </div>
                                            <div className="app-name">
                                                <h5>Dragonfly App</h5>
                                                <p>Crypto Wallet and Portfolio Management App</p>
                                            </div>
                                        </div>

                                        <div className="app-tags">
                                            <ul>
                                                <li className="flag">
                                                    <img src="img/flags/usa.png" />
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

export default Portfolio