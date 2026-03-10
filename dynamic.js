const basePath =
  document.querySelector('meta[name="base-path"]')?.content || "";

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const requestQuote = document.querySelector("requestQuote");
const mobileMenu = document.querySelector("mobileMenu");
const awards = document.querySelector("awards");
const reviews = document.querySelector("reviews");
const blogSidebar = document.querySelector("blogSidebar");
const trends = document.querySelector("trends");

if (header)
  header.innerHTML = `
<div class="header-area header-area--absolute">
      <div class="header-top-bar-info">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="top-bar-wrap">
                <div class="top-bar-right">
                  <ul class="top-bar-info">
                    <li class="info-item">
                      <a href="mailto:sales@earthh2Odag.com" class="info-link text-white">
                        <i class="info-icon fa-regular fa-envelope"></i>
                        <span class="info-text">sales@earthh2Odag.com</span>
                      </a>
                    </li>

                    <li class="info-item">
                      <a href="tel:+14123884236" class="info-link text-white">
                        <i class="info-icon fa-solid fa-phone"></i>
                        <span class="info-text">+1 (412) 388-4236</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-bottom-wrap header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header position-relative">
                <!-- brand logo -->
                <div class="header__logo">
                  <a href="${basePath}.">
                    <img src="${basePath}assets/images/earth-logo-white.png" aria-label="Earth H2O DAG Logo" class="img-fluid light-logo" alt="" />
                    <img src="${basePath}assets/images/earth-logo-color.png" aria-label="Earth H2O DAG Logo" class="img-fluid dark-logo" alt="" />
                  </a>
                </div>

                <div class="header-right">
                  <!-- navigation menu -->
                  <div class="header__navigation menu-style-four d-none d-lg-block" id="navbarNav">
                    <nav class="navigation-menu navbar navbar-expand-lg">
                      <ul class="navbar-nav">
                        <li id="liAbout" class="">
                          <a href="${basePath}about.html"><span>About</span></a>
                        </li>

                        <li class="nav-item dropdown megamenu-new">
                          <a class="nav-link dropdown-toggle" href="${basePath}services.html" id="navbarDropdown" role="button">Services</a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="mega-menu-container">
                              <!-- Left Side: Tabs for Creative Services and Specialized Services -->
                              <div class="mega-menu-left">
                                <div class="tab-container">
                                  <div class="tab" id="creativeServicesTab">
                                    <img src="${basePath}assets/images/menu-icon-creative.png" alt="" />Creative Services
                                  </div>
                                  <div class="tab" id="specializedServicesTab">
                                    <img src="${basePath}assets/images/menu-icon-specialized.png" alt="" />Specialized Services
                                  </div>
                                  <div class="tab" id="CoreITServicesTab">
                                    <img src="${basePath}assets/images/menu-icon-core.png" alt="" />Core IT Services
                                  </div>
                                  <div class="tab" id="IndustrySpecificServicesTab">
                                    <img src="${basePath}assets/images/menu-icon-industry.png" alt="" />Industry-Specific Services
                                  </div>
                                </div>
                              </div>

                              <!-- Right Side: Empty for now, it's populated when tabs are hovered -->
                              <div class="mega-menu-right">
                                <!-- Tab Content for Creative Services -->
                                <div class="tab-content" id="creativeServicesContent">
                                  <h6>Creative Services</h6>
                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/web-design-development.html">Web Design & Development</a>

                                    <ul>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#custom-website" class="hover-style-link">Custom Website</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#responsive-website" class="hover-style-link">Responsive Website</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#ui-ux-design" class="hover-style-link">UI/UX Design</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#cms-website" class="hover-style-link">CMS Website</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#e-commerce-website" class="hover-style-link" >Ecommerce Website</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/web-design-development.html#website-maintenance" class="hover-style-link" >Website Maintenance</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/design-branding.html">Design & Branding</a>

                                    <ul>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#logo-design" class="hover-style-link">Logo Design</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#animations" class="hover-style-link">Animations</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#illustrations" class="hover-style-link">Illustrations</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#packaging-design" class="hover-style-link">Packaging Design</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#social-media-branding" class="hover-style-link">Social Media Branding</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/design-branding.html#marketing-collaterals">Marketing Collaterals</a>

                                    <ul>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#corporate-stationery" class="hover-style-link">Corporate Stationary</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#promotional-materials" class="hover-style-link">Promotional Materials</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/design-branding.html#event-marketing-materials" class="hover-style-link">Event Marketing Materials</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/book-publishing-services.html">Book Publishing Services</a>

                                    <ul>
                                      <li>
                                        <a href="${basePath}services/book-publishing-services.html#book-publishing" class="hover-style-link">Book Publishing</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/book-publishing-services.html#audiobook-services" class="hover-style-link">Audiobook Services</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/book-publishing-services.html#book-marketing" class="hover-style-link">Book Marketing</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <!-- Tab Content for Specialized Services -->
                                <div class="tab-content" id="specializedServicesContent" >
                                  <h6>Specialized Services</h6>
                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/digital-marketing.html">Digital Marketing Services</a>

                                    <ul>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#search-engine-optimization" class="hover-style-link">Search Engine Optimization (SEO)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#social-media-marketing" class="hover-style-link">Social Media Marketing</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#email-marketing-automation" class="hover-style-link">Email Marketing Automation</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#content-creation-and-management" class="hover-style-link">Content Creation and Management</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#search-engine-marketing" class="hover-style-link">Search Engine Marketing (SEM)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#pay-per-click" class="hover-style-link">Pay Per Click (PPC)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#social-media-optimization" class="hover-style-link">Social Media Optimization (SMO)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/digital-marketing.html#online-reputation-management" class="hover-style-link">Online Reputation Management (ORM)</a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/data-analytics-ai.html">Data Analytics and AI</a>
                                    <ul>
                                      <li>
                                        <a href="${basePath}services/data-analytics-ai.html#business-intelligence-solutions" class="hover-style-link">Business Intelligence Solutions</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/data-analytics-ai.html#data-visualization-services" class="hover-style-link">Data Visualization Services</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/data-analytics-ai.html#machine-learning-and-ai-integration" class="hover-style-link">Machine Learning and AI Integration</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/data-analytics-ai.html#big-data-analytics" class="hover-style-link">Big Data Analytics</a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/enterprise-solutions.html">Enterprise Solutions</a>
                                    <ul>
                                      <li>
                                        <a href="${basePath}services/enterprise-solutions.html#erp-implementation" class="hover-style-link">ERP Implementation (SAP, Oracle)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/enterprise-solutions.html#crm-solutions" class="hover-style-link">CRM Solutions (Salesforce, HubSpot)</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/enterprise-solutions.html#hrms-implementation" class="hover-style-link">HRMS Implementation</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/enterprise-solutions.html#enterprise-mobility-solutions" class="hover-style-link">Enterprise Mobility Solutions</a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="dropdown-submenu">
                                    <a class="menu-child" href="${basePath}services/artificial-intelligence.html">Artificial Intelligence</a>
                                    <ul>
                                      <li>
                                        <a href="${basePath}services/artificial-intelligence.html#custom-ai-video-clone" class="hover-style-link">Custom AI Video Clone</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/artificial-intelligence.html#professional-voice-clone" class="hover-style-link">Professional Voice Clone</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/artificial-intelligence.html#ai-powered-content-creation" class="hover-style-link">AI-Powered Content Creation</a>
                                      </li>
                                      <li>
                                        <a href="${basePath}services/artificial-intelligence.html#ai-chatbots-marketing-automation" class="hover-style-link">AI Chatbots & Marketing Automation</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <!-- Tab Content for Core IT Services -->
                                <div
                                  class="tab-content"
                                  id="CoreITServicesTabContent"
                                >
                                  <h6>Core IT Services</h6>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/software-development.html"
                                      >Software & Mobile Application
                                      Development</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/software-development.html#custom-software-development"
                                          class="hover-style-link"
                                          >Custom software development</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/software-development.html#mobile-app-development"
                                          class="hover-style-link"
                                          >Mobile app development (iOS,
                                          Android)</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/software-development.html#content-management-system"
                                          class="hover-style-link"
                                          >Content Management System (CMS)</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/software-development.html#api-integration-services"
                                          class="hover-style-link"
                                          >API integration services</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/it-infrastructure-solutions.html#it-infrastructure-services"
                                      >IT Infrastructure Services</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#network-design-implementation-management"
                                          class="hover-style-link"
                                          >Network design, implementation, and
                                          management</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#cloud-colutions"
                                          class="hover-style-link"
                                          >Cloud solutions (AWS, Azure, Google
                                          Cloud)</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#data-center-setup-management"
                                          class="hover-style-link"
                                          >Data center setup and management</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#it-hardware-procurement-maintenance"
                                          >IT hardware procurement and
                                          maintenance</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/it-infrastructure-solutions.html#managed-it-services"
                                      >Managed IT Services</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#remote-it-support"
                                          class="hover-style-link"
                                          >Remote IT support</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#on-site-it-services"
                                          class="hover-style-link"
                                          >On-site IT services</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#system-monitoring-maintenance"
                                          class="hover-style-link"
                                          >System monitoring and maintenance</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#backup-disaster-recovery"
                                          class="hover-style-link"
                                          >Backup and disaster recovery</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#troubleshooting-technical-support"
                                          class="hover-style-link"
                                          >Troubleshooting and technical
                                          support</a
                                        >
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/it-infrastructure-solutions.html#it-consulting"
                                      >IT Consulting</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#digital-transformation-consulting"
                                          class="hover-style-link"
                                          >Digital transformation consulting</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#it-strategy-planning"
                                          class="hover-style-link"
                                          >IT strategy and planning</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#it-audits-assessments"
                                          class="hover-style-link"
                                          >IT audits and assessments</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/it-infrastructure-solutions.html#technology-roadmap-development"
                                          class="hover-style-link"
                                          >Technology roadmap development</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <!-- Tab Content for Core IT Services -->
                                <div
                                  class="tab-content"
                                  id="IndustrySpecificServicesTabContent"
                                >
                                  <h6>Industry-Specific Services</h6>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/industry-solutions.html#healthcare-it-services"
                                      >Healthcare IT Service</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#electronic-health-records-systems"
                                          class="hover-style-link"
                                          >Electronic health records (EHR)
                                          systems</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#telemedicine-platforms"
                                          class="hover-style-link"
                                          >Telemedicine platforms</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#healthcare-data-analytics"
                                          class="hover-style-link"
                                          >Healthcare data analytics</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/industry-solutions.html#retail-e-commerce-services"
                                      >Retail and E-commerce Services</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#e-commerce-platforms"
                                          class="hover-style-link"
                                          >E-commerce platforms</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#inventory-management-systems"
                                          class="hover-style-link"
                                          >Inventory management systems</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#customer-experience-optimization"
                                          class="hover-style-link"
                                          >Customer experience optimization</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/industry-solutions.html#education-it-services"
                                      >Education IT Services</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#learning-management-systems"
                                          class="hover-style-link"
                                          >Learning management systems (LMS)</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#student-information-systems"
                                          class="hover-style-link"
                                          >Student Information Systems (SIS)</a
                                        >
                                      </li>
                                    </ul>
                                  </div>

                                  <div class="dropdown-submenu">
                                    <a
                                      class="menu-child"
                                      href="${basePath}services/industry-solutions.html#automotive-it-services"
                                      >Automotive IT Services</a
                                    >
                                    <ul>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#connected-vehicle-solutions"
                                          class="hover-style-link"
                                          >Connected Vehicle Solutions</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#automotive-software-development"
                                          class="hover-style-link"
                                          >Automotive Software Development</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          href="${basePath}services/industry-solutions.html#customer-experience-platforms"
                                          class="hover-style-link"
                                          >Customer Experience Platforms</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </li>

                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <a href="${basePath}industries.html"
                            ><span>Industries We Serve</span></a
                          >
                          <!-- multilevel submenu -->

                          <ul class="submenu mega-menu-img">
                            <div class="mega-menu">
                              <!-- Left Side Menu (2 columns) -->
                              <ul class="left-menu">
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="healthcare"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-healthcare.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Healthcare</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="finance"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-finance.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Financial Services</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="manufacturing"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-manufacturing.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Manufacturing</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="media"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-media.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Media & Entertainment</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="professional"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-professional.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Professional Services</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="transportation"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-transportation.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Transportation & Logistics</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="telecommunications"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-telecommunications.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Telecommunications</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="energy"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-energy.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Energy</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="construction"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-construction.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Construction</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="travel"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-travel.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Travel & Hospitality</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="education"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-education.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Education</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="real-estate"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-real.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Real Estate</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="retail"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-retail.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Retail</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="government"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-government.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Government</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="ecom"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-ecom.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />E-commerce</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}industries.html#IndustriesWeServe"
                                    data-target="automotive"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-industries-automotive.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Automotive</a
                                  >
                                </li>
                              </ul>

                              <!-- Default Placeholder Content (Visible at first) -->
                              <div class="default-content">
                                <h3>
                                  Cutting-Edge Solutions for Every Industry
                                </h3>
                                <p>
                                  Specialized software services designed to
                                  address industry-specific challenges, optimize
                                  operations, and drive growth.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-default.webp"
                                  alt="Default Image"
                                  class="border-radus-20"
                                />
                              </div>

                              <!-- Right Side Content (hidden by default) -->
                              <div class="right-content" id="healthcare">
                                <h3>Healthcare</h3>
                                <p>
                                  Improve patient care and operational
                                  efficiency with secure, scalable healthcare
                                  solutions, ensuring compliance, data security,
                                  and seamless digital experiences.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-health.jpg"
                                  alt="Healthcare"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="finance">
                                <h3>Financial Services</h3>
                                <p>
                                  Empower financial institutions with secure,
                                  data-driven solutions that enhance customer
                                  trust, streamline operations, and drive
                                  long-term profitability.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-finance.jpg"
                                  alt="Finance"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="manufacturing">
                                <h3>Manufacturing</h3>
                                <p>
                                  Optimize production workflows and supply
                                  chains with smart manufacturing solutions,
                                  increasing efficiency, reducing costs, and
                                  enhancing scalability.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-manufacturing.png"
                                  alt="manufacturing"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="retail">
                                <h3>Retail</h3>
                                <p>
                                  Enhance customer experiences and drive
                                  engagement with innovative retail solutions,
                                  boosting sales, optimizing operations, and
                                  maximizing profitability.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-retail.jpg"
                                  alt="retail"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="professional">
                                <h3>Professional Services</h3>
                                <p>
                                  Elevate client interactions and business
                                  efficiency with tailored digital solutions,
                                  improving collaboration, productivity, and
                                  service delivery.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-professional.jpg"
                                  alt="professional"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="transportation">
                                <h3>Transportation & Logistics</h3>
                                <p>
                                  Enable seamless logistics and real-time
                                  tracking with intelligent solutions,
                                  optimizing fleet management, reducing delays,
                                  and improving efficiency.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-transportation.jpg"
                                  alt="Transportation & Logistics"
                                  class="border-radus-20"
                                />
                              </div>

                              <div
                                class="right-content"
                                id="telecommunications"
                              >
                                <h3>Telecommunications</h3>
                                <p>
                                  Enhance connectivity and network management
                                  with advanced telecom solutions, ensuring
                                  seamless communication and superior customer
                                  experiences.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-telecommunications.jpg"
                                  alt="Telecommunications"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="energy">
                                <h3>Energy</h3>
                                <p>
                                  Drive innovation and sustainability with smart
                                  energy solutions, optimizing resource
                                  management, reducing costs, and improving
                                  operational efficiency.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-energy.jpg"
                                  alt="Energy"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="construction">
                                <h3>Construction</h3>
                                <p>
                                  Streamline project management and site
                                  operations with cutting-edge digital
                                  solutions, improving efficiency, safety, and
                                  overall project execution.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-construction.jpg"
                                  alt="Construction"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="travel">
                                <h3>Travel & Hospitality</h3>
                                <p>
                                  Enhance guest experiences and streamline
                                  bookings with innovative digital solutions,
                                  increasing customer satisfaction and business
                                  growth.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-travel.jpg"
                                  alt="Travel & Hospitality"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="education">
                                <h3>Education</h3>
                                <p>
                                  Revolutionize learning with scalable digital
                                  solutions, enabling seamless e-learning,
                                  student engagement, and efficient
                                  administration.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-education.jpg"
                                  alt="Education"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="real-estate">
                                <h3>Real Estate</h3>
                                <p>
                                  Boost property sales and client interactions
                                  with smart digital solutions, offering virtual
                                  tours, automated workflows, and real-time
                                  insights.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-real.jpg"
                                  alt="Real Estate"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="media">
                                <h3>Media & Entertainment</h3>
                                <p>
                                  Engage audiences with dynamic content
                                  solutions, optimizing content distribution,
                                  digital streaming, and audience engagement.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-media.jpg"
                                  alt="Media & Entertainment"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="government">
                                <h3>Government</h3>
                                <p>
                                  Modernize public services with secure,
                                  efficient digital solutions, improving citizen
                                  engagement, operational transparency, and
                                  service delivery.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-government.jpg"
                                  alt="Government"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="ecom">
                                <h3>E-commerce</h3>
                                <p>
                                  Scale your online business with seamless
                                  e-commerce solutions, integrating secure
                                  payments, personalized shopping, and
                                  data-driven insights.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-ecom.jpg"
                                  alt="E-commerce"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="automotive">
                                <h3>Automotive</h3>
                                <p>
                                  Transform mobility with advanced digital
                                  solutions, improving vehicle tracking,
                                  customer experiences, and connected automotive
                                  services.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-industries-img-automotive.jpg"
                                  alt="Automotive"
                                  class="border-radus-20"
                                />
                              </div>
                            </div>
                          </ul>
                        </li>

                        <li
                          class="has-children has-children--multilevel-submenu"
                        >
                          <a href="${basePath}solutions.html"><span>Solutions</span></a>
                          <!-- multilevel submenu -->

                          <ul class="submenu mega-menu-img-solutions">
                            <div class="mega-menu">
                              <!-- Left Side Menu (2 columns) -->
                              <ul class="left-menu">
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="human"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-human.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Human Resource Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="financial"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-financial.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Financial Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="reservation"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-reservation.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Reservation & Booking Systems</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="operations"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-operation.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Operations Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="projects"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-predictive.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Project Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="supply"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-supply.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Supply Chain Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="cybersecurity"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-cyber.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Cybersecurity Solutions</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="automation"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-automation.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Automation Solutions</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="predictive"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-predictive.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Predictive Analytics Solutions</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="workflow"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-workflow.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Workflow Automation Tools</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="cloud"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-cloud.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Cloud Infrastructure</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="network"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-network.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Network Infrastructure Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="asset"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-asset.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Asset & Fleet Management</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="building"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-building.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Building Information Modeling (BIM)</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="${basePath}solutions.html#OurCoreSolutions"
                                    data-target="video"
                                  >
                                    <img
                                      src="${basePath}assets/images/nav-icon-solution-stream.png"
                                      alt=""
                                      class="mega-menu-icon"
                                    />Video Streaming Solutions</a
                                  >
                                </li>
                              </ul>

                              <!-- Default Placeholder Content (Visible at first) -->
                              <div class="default-content-sol">
                                <h3>
                                  Smart, Scalable Solutions for Modern
                                  Businesses
                                </h3>
                                <p>
                                  Advanced software and technology solutions
                                  tailored to streamline operations, enhance
                                  efficiency, and accelerate business success.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-default.webp"
                                  alt="Default Image"
                                  class="border-radus-20"
                                />
                              </div>

                              <!-- Right Side Content (hidden by default) -->
                              <div class="right-content" id="human">
                                <h3>Human Resource Management</h3>
                                <p>
                                  Streamline hiring, payroll, and employee
                                  engagement with smart HR solutions, improving
                                  productivity and workforce efficiency.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-human.jpg"
                                  alt="Human Resource Managemen"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="financial">
                                <h3>Financial Management</h3>
                                <p>
                                  Optimize budgeting, accounting, and financial
                                  planning with advanced solutions, ensuring
                                  accuracy, compliance, and profitability.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-financial.jpg"
                                  alt="Financial Management"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="reservation">
                                <h3>Reservation & Booking Systems</h3>
                                <p>
                                  Enhance customer experiences with seamless
                                  booking solutions, automating reservations,
                                  payments, and scheduling.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-reservation.jpg"
                                  alt="Reservation & Booking Systems"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="operations">
                                <h3>Operations Management</h3>
                                <p>
                                  Improve business efficiency with real-time
                                  operations management tools, streamlining
                                  workflows and decision-making.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-operations.jpg"
                                  alt="Operations Management"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="projects">
                                <h3>Project Management</h3>
                                <p>
                                  Boost team collaboration and efficiency with
                                  powerful project management solutions,
                                  ensuring deadlines and goals are met.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-projects.jpg"
                                  alt="Project Management"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="supply">
                                <h3>Supply Chain Management</h3>
                                <p>
                                  Optimize logistics, inventory, and procurement
                                  with data-driven supply chain solutions,
                                  reducing costs and delays.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-supply.jpg"
                                  alt="Supply Chain Management"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="cybersecurity">
                                <h3>Cybersecurity Solutions</h3>
                                <p>
                                  Protect critical data and systems with
                                  advanced cybersecurity solutions, preventing
                                  threats and ensuring compliance.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-cyber.jpg"
                                  alt="Cybersecurity Solutions"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="automation">
                                <h3>Automation Solutions</h3>
                                <p>
                                  Increase efficiency with intelligent
                                  automation tools, reducing manual tasks and
                                  improving operational performance.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-automation.jpg"
                                  alt="Automation Solutions"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="predictive">
                                <h3>Predictive Analytics Solutions</h3>
                                <p>
                                  Leverage data-driven insights with predictive
                                  analytics, enhancing decision-making,
                                  forecasting, and strategy.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-predictive.jpg"
                                  alt="Predictive Analytics Solutions"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="workflow">
                                <h3>Workflow Automation Tools</h3>
                                <p>
                                  Eliminate bottlenecks and optimize business
                                  processes with workflow automation, increasing
                                  speed and accuracy.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-workflow.jpg"
                                  alt="Workflow Automation Tools"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="cloud">
                                <h3>Cloud Infrastructure</h3>
                                <p>
                                  Scale your business with secure,
                                  high-performance cloud infrastructure,
                                  enabling flexibility, storage, and remote
                                  access.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-cloud.jpg"
                                  alt="Cloud Infrastructure"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="network">
                                <h3>Network Infrastructure Management</h3>
                                <p>
                                  Ensure seamless connectivity and security with
                                  expert network infrastructure management,
                                  reducing downtime.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-network.jpg"
                                  alt="v"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="asset">
                                <h3>Asset & Fleet Management</h3>
                                <p>
                                  Track, monitor, and optimize asset and fleet
                                  performance with smart management solutions,
                                  reducing costs.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-asset.jpg"
                                  alt="Asset & Fleet Management"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="building">
                                <h3>Building Information Modeling (BIM)</h3>
                                <p>
                                  Improve construction planning and execution
                                  with BIM solutions, enhancing collaboration
                                  and efficiency.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-building.jpg"
                                  alt="Building Information Modeling (BIM)"
                                  class="border-radus-20"
                                />
                              </div>

                              <div class="right-content" id="video">
                                <h3>Video Streaming Solutions</h3>
                                <p>
                                  Deliver high-quality, seamless video
                                  experiences with robust streaming solutions,
                                  maximizing audience engagement.
                                </p>
                                <img
                                  src="${basePath}assets/images/nav-solutions-img-video.jpg"
                                  alt="Video Streaming Solutions"
                                  class="border-radus-20"
                                />
                              </div>
                            </div>
                          </ul>
                        </li>

                        <li class="">
                          <a href="${basePath}portfolio.html"><span>Portfolio</span></a>
                        </li>
                        <li class="">
                          <a href="${basePath}blog.html"><span>Blog</span></a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <!-- header actions -->
                  <div class="header__actions--preview">
                    <div class="header__actions">
                      <div
                        class="header__icons-wrapper header-right-inner"
                        id="hidden-icon-wrapper"
                      >
                        <div class="header-button downlode-btn ml-4">
                          <a href="${basePath}contact.html" class="ht-btn ht-btn-sm"
                            >Contact Us</a
                          >
                        </div>

                        <!-- Search -->
                        <div
                          class="search-form-top-active"
                          style="display: none"
                        >
                          <div
                            class="search-icon"
                            id="search-overlay-trigger"
                            style="display: none"
                          >
                            <a href="javascript:void(0)">
                              <i class="fa fa-search"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <a
                        href="tel:+1 214-306-7825"
                        class="top-call d-block d-lg-none"
                      >
                        <i class="fa-solid fa-phone-volume"></i>
                      </a>

                      <!-- mobile menu -->
                      <div
                        class="mobile-navigation-icon d-block d-lg-none"
                        id="mobile-menu-trigger"
                      >
                        <i></i>
                      </div>
                      <!-- hidden icons menu -->
                      <div
                        class="hidden-icons-menu d-block d-md-none"
                        id="hidden-icon-trigger"
                      >
                        <a href="javascript:void(0)">
                          <i class="far fa-ellipsis-h-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

if (footer)
  footer.innerHTML = `
<div class="footer-area-wrapper footer-section">
  <div class="footer-section-icon">
    <div class="footer-area section-space--ptb_80">
      <div id="divFooter" class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-md-3 col-sm-6 footer-widget">
            <h5 class="footer-widget__title text-white">Services</h5>

            <h6 class="footer-widget__title text-white">
              Creative Services
            </h6>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Web Design & Development
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#custom-website"
                          class="hover-style-link text-white"
                          >Custom Website</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#responsive-website"
                          class="hover-style-link text-white"
                          >Responsive Website</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#ui-ux-design"
                          class="hover-style-link text-white"
                          >UI/UX Design</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#cms-website"
                          class="hover-style-link text-white"
                          >CMS Website</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#e-commerce-website"
                          class="hover-style-link text-white"
                          >Ecommerce Website</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/web-design-development.html#website-maintenance"
                          class="hover-style-link text-white"
                          >Website Maintenance</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsedesign"
                    aria-expanded="true"
                    aria-controls="collapsedesign"
                  >
                    Design & Branding
                  </button>
                </h2>
                <div
                  id="collapsedesign"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#logo-design"
                          class="hover-style-link text-white"
                          >Logo Design</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#animations"
                          class="hover-style-link text-white"
                          >Animations</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#illustrations"
                          class="hover-style-link text-white"
                          >Illustrations</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#packaging-design"
                          class="hover-style-link text-white"
                          >Packaging Design</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#social-media-branding"
                          class="hover-style-link text-white"
                          >Social Media Branding</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsemarketing"
                    aria-expanded="true"
                    aria-controls="collapsemarketing"
                  >
                    Marketing Collaterals
                  </button>
                </h2>
                <div
                  id="collapsemarketing"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#corporate-stationery"
                          class="hover-style-link text-white"
                          >Corporate Stationary
                        </a>
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#promotional-materials"
                          class="hover-style-link text-white"
                          >Promotional Materials</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/design-branding.html#event-marketing-materials"
                          class="hover-style-link text-white"
                          >Event Marketing Materials</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="accordion mb-20" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsebook"
                    aria-expanded="true"
                    aria-controls="collapsebook"
                  >
                    Book Publishing Services
                  </button>
                </h2>
                <div
                  id="collapsebook"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/book-publishing-services.html#book-publishing"
                          class="hover-style-link text-white"
                          >Book Publishing
                        </a>
                      </li>
                      <li>
                        <a
                          href="${basePath}services/book-publishing-services.html#audiobook-services"
                          class="hover-style-link text-white"
                          >Audiobook Services</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/book-publishing-services.html#book-marketing"
                          class="hover-style-link text-white"
                          >Book Marketing</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h6 class="footer-widget__title text-white border-top pt-2">
              Specialized Services
            </h6>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsetwo"
                    aria-expanded="true"
                    aria-controls="collapsetwo"
                  >
                    Digital Marketing Services
                  </button>
                </h2>
                <div
                  id="collapsetwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#search-engine-optimization"
                          class="hover-style-link text-white"
                          >Search Engine Optimization(SEO)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#social-media-marketing"
                          class="hover-style-link text-white"
                          >Social media marketing</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#email-marketing-automation"
                          class="hover-style-link text-white"
                          >Email marketing automation</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#content-creation-and-management"
                          class="hover-style-link text-white"
                          >Content creation and management</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#search-engine-marketing"
                          class="hover-style-link text-white"
                          >Search Engine Marketing(SEM)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#pay-per-click"
                          class="hover-style-link text-white"
                          >Pay Per Click(PPC)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#social-media-optimization"
                          class="hover-style-link text-white"
                          >Social Media Optimization(SMO)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/digital-marketing.html#online-reputation-management"
                          class="hover-style-link text-white"
                          >Online Reputation Management(ORM)</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsethree"
                    aria-expanded="true"
                    aria-controls="collapsethree"
                  >
                    Data Analytics and AI
                  </button>
                </h2>
                <div
                  id="collapsethree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/data-analytics-ai.html#business-intelligence-solutions"
                          class="hover-style-link text-white"
                          >Business intelligence solutions</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/data-analytics-ai.html#data-visualization-services"
                          class="hover-style-link text-white"
                          >Data visualization services</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/data-analytics-ai.html#machine-learning-and-ai-integration"
                          class="hover-style-link text-white"
                          >Machine learning and AI integration</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/data-analytics-ai.html#big-data-analytics"
                          class="hover-style-link text-white"
                          >Big data analytics</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true"
                    aria-controls="collapsefour">Enterprise Solutions
                  </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a href="${basePath}services/enterprise-solutions.html#erp-implementation" class="hover-style-link text-white">ERP implementation (SAP, Oracle)</a>
                      </li>
                      <li>
                        <a href="${basePath}services/enterprise-solutions.html#crm-solutions" class="hover-style-link text-white">CRM solutions (Salesforce, HubSpot)</a>
                      </li>
                      <li>
                        <a href="${basePath}services/enterprise-solutions.html#hrms-implementation" class="hover-style-link text-white">HRMS implementation</a>
                      </li>
                      <li>
                        <a href="${basePath}services/enterprise-solutions.html#enterprise-mobility-solutions" class="hover-style-link text-white">Enterprise Mobility Solutions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseai" aria-expanded="true"
                    aria-controls="collapseai">Artificial Intelligence
                  </button>
                </h2>
                <div id="collapseai" class="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a href="${basePath}services/artificial-intelligence.html#custom-ai-video-clone" class="hover-style-link text-white">Custom AI Video Clone</a>
                      </li>
                      <li>
                        <a href="${basePath}services/artificial-intelligence.html#professional-voice-clone" class="hover-style-link text-white">Professional Voice Clone</a>
                      </li>
                      <li>
                        <a href="${basePath}services/artificial-intelligence.html#ai-powered-content-creation" class="hover-style-link text-white">AI-Powered Content Creation</a>
                      </li>
                      <li>
                        <a href="${basePath}services/artificial-intelligence.html#ai-chatbots-marketing-automation" class="hover-style-link text-white">AI Chatbots & Marketing Automation</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 footer-widget">
            <h5 class="footer-widget__title text-white empty">&nbsp</h5>

            <h6
              class="footer-widget__title text-white border-top pt-2 mobile-core"
            >
              Core IT Services
            </h6>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="true"
                    aria-controls="collapsefive"
                  >
                    Software & Mobile Application Development
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/software-development.html#custom-software-development"
                          class="hover-style-link text-white"
                          >Custom software development</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/software-development.html#mobile-app-development"
                          class="hover-style-link text-white"
                          >Mobile app development (iOS, Android)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/software-development.html#content-management-system"
                          class="hover-style-link text-white"
                          >Content Management System (CMS)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/software-development.html#api-integration-services"
                          class="hover-style-link text-white"
                          >API integration services</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="true"
                    aria-controls="collapsesix"
                  >
                    IT Consulting
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#digital-transformation-consulting"
                          class="hover-style-link text-white"
                          >Digital transformation consulting</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#it-strategy-planning"
                          class="hover-style-link text-white"
                          >IT strategy and planning</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#it-audits-assessments"
                          class="hover-style-link text-white"
                          >IT audits and assessments</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#technology-roadmap-development"
                          class="hover-style-link text-white"
                          >Technology roadmap development</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesift"
                    aria-expanded="true"
                    aria-controls="collapsesift"
                  >
                    IT Infrastructure Services
                  </button>
                </h2>
                <div
                  id="collapsesift"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#network-design-implementation-management"
                          class="hover-style-link text-white"
                          >Network design, implementation, and
                          management</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#cloud-solutions"
                          class="hover-style-link text-white"
                          >Cloud solutions (AWS, Azure, Google Cloud)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#data-center-setup-management"
                          class="hover-style-link text-white"
                          >Data center setup and management</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#it-hardware-procurement-maintenance"
                          class="hover-style-link text-white"
                          >IT hardware procurement and maintenance</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mb-20" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesmanaged"
                    aria-expanded="true"
                    aria-controls="collapsesmanaged"
                  >
                    Managed IT Services
                  </button>
                </h2>
                <div
                  id="collapsesmanaged"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#remote-it-support"
                          class="hover-style-link text-white"
                          >Remote IT support</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#on-site-it-services"
                          class="hover-style-link text-white"
                          >On-site IT services</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#system-monitoring-maintenance"
                          class="hover-style-link text-white"
                          >System monitoring and maintenance</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#backup-disaster-recovery"
                          class="hover-style-link text-white"
                          >Backup and disaster recovery</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/it-infrastructure-solutions.html#troubleshooting-technical-support"
                          class="hover-style-link text-white"
                          >Troubleshooting and technical support</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h6 class="footer-widget__title text-white border-top pt-2">
              Industry-Specific Services
            </h6>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseseven"
                    aria-expanded="true"
                    aria-controls="collapseseven"
                  >
                    Healthcare IT
                  </button>
                </h2>
                <div
                  id="collapseseven"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#electronic-health-records-systems"
                          class="hover-style-link text-white"
                          >Electronic health records (EHR) systems</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#telemedicine-platforms"
                          class="hover-style-link text-white"
                          >Telemedicine platforms</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#healthcare-data-analytics"
                          class="hover-style-link text-white"
                          >Healthcare data analytics</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeight"
                    aria-expanded="true"
                    aria-controls="collapseeight"
                  >
                    Retail and E-commerce
                  </button>
                </h2>
                <div
                  id="collapseeight"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#e-commerce-platforms"
                          class="hover-style-link text-white"
                          >E-commerce platforms</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#inventory-management-systems"
                          class="hover-style-link text-white"
                          >Inventory management systems</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#customer-experience-optimization"
                          class="hover-style-link text-white"
                          >Customer experience optimization</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsenine"
                    aria-expanded="true"
                    aria-controls="collapsenine"
                  >
                    Education IT Services
                  </button>
                </h2>
                <div
                  id="collapsenine"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#learning-management-systems"
                          class="hover-style-link text-white"
                          >Learning management systems (LMS)</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#student-information-systems"
                          class="hover-style-link text-white"
                          >Student Information Systems (SIS)</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseten"
                    aria-expanded="true"
                    aria-controls="collapseten"
                  >
                    Automotive IT Services
                  </button>
                </h2>
                <div
                  id="collapseten"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div class="accordion-body">
                    <ul class="footer-widget__list">
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#connected-vehicle-solutions"
                          class="hover-style-link text-white"
                          >Connected Vehicle Solutions</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#automotive-software-development"
                          class="hover-style-link text-white"
                          >Automotive Software Development</a
                        >
                      </li>
                      <li>
                        <a
                          href="${basePath}services/industry-solutions.html#customer-experience-platforms"
                          class="hover-style-link text-white"
                          >Customer Experience Platforms</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 footer-widget sol-indus">
            <!-- Footer Widget -->
            <div class="footer-widget">
              <!-- Collapse Wrapper for Mobile -->
              <div class="d-block d-md-none">
                <!-- Clickable Heading to Toggle List -->
                <h5
                  class="footer-widget__title text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#footerList"
                  aria-expanded="false"
                  aria-controls="footerList"
                >
                  Industries We Serve
                  <!-- Down Arrow (FontAwesome) -->
                  <i
                    class="fas fa-chevron-down toggle-arrow"
                    id="toggle-arrow-1"
                  ></i>
                </h5>

                <!-- Collapsible List -->
                <ul class="collapse footer-widget__list" id="footerList">
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Healthcare</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Financial Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Manufacturing</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Retail</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Professional Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Transportation & Logistics</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Telecommunications</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Energy</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Construction</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Travel & Hospitality</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Education</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Real Estate</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Media & Entertainment</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Government</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >E-commerce</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Automotive</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Static List for Desktop -->
              <div class="d-none d-md-block desktop-v">
                <h5 class="footer-widget__title text-white">
                  Industries We Serve
                </h5>
                <ul class="footer-widget__list">
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Healthcare</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Financial Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Manufacturing</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Retail</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Professional Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Transportation & Logistics</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Telecommunications</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Energy</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Construction</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Travel & Hospitality</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Education</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Real Estate</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Media & Entertainment</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Government</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >E-commerce</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}industries.html#IndustriesWeServe"
                      class="hover-style-link text-white"
                      >Automotive</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 footer-widget sol-indus">
            <!-- Footer Widget -->
            <div class="footer-widget">
              <!-- Collapse Wrapper for Mobile -->
              <div class="d-block d-md-none">
                <!-- Clickable Heading to Toggle List -->
                <h5
                  class="footer-widget__title text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#footerList2"
                  aria-expanded="false"
                  aria-controls="footerList2"
                >
                  Solutions
                  <!-- Down Arrow (FontAwesome) -->
                  <i
                    class="fas fa-chevron-down toggle-arrow"
                    id="toggle-arrow-2"
                  ></i>
                </h5>

                <!-- Collapsible List -->
                <ul class="collapse footer-widget__list" id="footerList2">
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Human Resource Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Financial Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Reservation & Booking Systems</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Operations Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Project Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Supply Chain Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Cybersecurity Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Automation Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Predictive Analytics Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Workflow Automation Tools</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Cloud Infrastructure</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Network Infrastructure Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Asset & Fleet Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Building Information Modeling (BIM)</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Video Streaming Solutions</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Static List for Desktop -->
              <div class="d-none d-md-block desktop-v">
                <h5 class="footer-widget__title text-white">Solutions</h5>
                <ul class="footer-widget__list">
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Human Resource Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Financial Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Reservation & Booking Systems</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Operations Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Project Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Supply Chain Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Cybersecurity Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Automation Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Predictive Analytics Solutions</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Workflow Automation Tools</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Cloud Infrastructure</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Network Infrastructure Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Asset & Fleet Management</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Building Information Modeling (BIM)</a
                    >
                  </li>
                  <li>
                    <a
                      href="${basePath}solutions.html#OurCoreSolutions"
                      class="hover-style-link text-white"
                      >Video Streaming Solutions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row footer-widget-wrapper mt-5" style="display: none">
          <div class="col-md-12">
            <div
              class="modern-it-newsletters-wrap text-center mt-40 text-white"
            >
              <div class="section-title">
                <h5 class="heading text-white mb-1">Newsletter Signup</h5>
                <p>
                  A brief form to allow visitors to sign up for updates,
                  offers, or newsletters.
                </p>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                  />
                  <button class="ht-btn ht-btn-sm" type="button" id="">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row align-items-center footer-contact mb-20">
        <div class="col-md-12 mobile-footer-info">
          <a
            href="#"
            class="info-link text-white hover-style-link"
            ><i class="info-icon fa-solid fa-phone"></i></a
          ><a
            href="mailto:sales@earthh2Odag.com"
            class="info-link text-white hover-style-link"
            ><i class="info-icon fa-regular fa-envelope"></i
          ></a>

          <a href="${basePath}contact.html#contact-info" class="hover-style-link">
            <img src="${basePath}assets/images/flag-usa.jpg" alt=""
          /></a>
          <a href="${basePath}contact.html#contact-info" class="hover-style-link">
            <img src="${basePath}assets/images/flag-uae.jpg" alt=""
          /></a>
          <a href="${basePath}contact.html#contact-info" class="hover-style-link">
            <img src="${basePath}assets/images/flag-malysia.jpg" alt=""
          /></a>
        </div>

        <div class="col-md-4 text-center text-md-start info">
          <a href="#" class="info-link text-white">
            <i class="info-icon fa-solid fa-phone"></i>
            <span class="hover-style-link">+1 (412) 360-8469</span>
          </a>
        </div>

        <div class="col-md-4 text-center info">
          <a
            href="mailto:sales@earthh2Odag.com"
            class="info-link text-white"
          >
            <i class="info-icon fa-regular fa-envelope"></i>
            <span class="hover-style-link"
              >sales@earthh2Odag.com</span
            >
          </a>
        </div>
        <div class="col-md-4 text-center text-md-end info">
          <span class="info-link text-white">
            <i class="info-icon fa-solid fa-location-dot"></i>
            <span class="info-text">
            <a href="${basePath}contact.html#contact-info" class="hover-style-link">US Office</a>
          </span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row quick-links">
        <div class="col-md-12 text-center text-md-center">
          <a href="${basePath}" class="hover-style-link">Home</a> |
          <a href="${basePath}about.html" class="hover-style-link">About</a> |
          <a href="${basePath}portfolio.html" class="hover-style-link">Portfolio</a>
          |
          <a href="${basePath}contact.html" class="hover-style-link">Contact Us</a>
          | <a href="${basePath}blog.html" class="hover-style-link">Blog</a> |
          <a href="${basePath}faqs.html" class="hover-style-link">FAQs</a> |
          <a
            href="${basePath}privacy-policy.html"
            class="hover-style-link"
            target="_blank"
            >Privacy Policy</a
          >
          |
          <a
            href="${basePath}terms-of-service.html"
            class="hover-style-link"
            target="_blank"
            >Terms of Service</a
          >
          |
          <a href="${basePath}refund.html" class="hover-style-link" target="_blank"
            >Refund Policy</a
          >
        </div>
      </div>
    </div>

    <div class="footer-copyright-area section-space--pb_30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-start">
            <a href="${basePath}">
              <img
                src="${basePath}assets/images/Earth-h2o-Logo-footer.png"
                alt=""
              />
            </a>
          </div>

          <div class="col-md-4 text-center">
            <span class="copyright-text text-white"
              >Copyright 2026 Earth H2O DAG. All Rights
              Reserved.</span
            >
          </div>
          <div class="col-md-4 text-center text-md-end">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li class="item">
                <a
                  href="#"
                  target="_blank"
                  aria-label="Facebook"
                  class="social-link hint--bounce hint--top hint--primary"
                >
                  <i class="fab fa-facebook-f text-white link-icon"></i>
                </a>
              </li>
              <li class="item">
                <a
                  href="#"
                  target="_blank"
                  aria-label="Instagram"
                  class="social-link hint--bounce hint--top hint--primary"
                >
                  <i class="fab fa-instagram text-white link-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

if (requestQuote)
  requestQuote.innerHTML = `
<div class="demo-option-container">
        <!-- Start Toolbar -->
        <div class="aeroland__toolbar">
          <div class="inner btn--gradient orange-gradient">
            <a
              class="quick-option hint--bounce hint--left hint--black primary-color-hover-important"
              href="#"
              aria-label="Request A Quote"
            >
              <i class="fas fa-pen-to-square"></i>Request A Quote
            </a>
          </div>
        </div>
        <!-- End Toolbar -->
        <!-- Start Quick Link -->
        <div class="demo-option-wrapper">
          <div class="demo-panel-header">
            <a
              class="quick-option hint--bounce hint--left hint--black primary-color-hover-important"
              href="#"
              aria-label="Close"
              ><i class="fa-solid fa-xmark"></i
            ></a>

            <div class="title border-bottom pb-4 mb-3 pt-2">
              <h4 class="heading">Start Your Digital Transformation Journey</h4>
              <!-- <h5 class="heading">Earth H2O DAG</h5> -->
              <h6>Your Vision, Our Architecture</h6>
            </div>

            <script type="text/javascript">
              function validatePhoneCountry(oSrc, args) {
                hdnCountryCode = document.getElementById("hdnCountryCode");
                if (hdnCountryCode != null) {
                  if (hdnCountryCode.value == "") {
                    args.IsValid = false;
                  } else {
                    args.IsValid = true;
                  }
                }
              }
              function ValidateFileSize(source, arguments) {
                var input, file;
                if (!window.FileReader) {
                  return;
                }

                input = document.getElementById(
                  "RequestAQuoteControl_fuDocument",
                );
                if (!input) {
                } else if (!input.files) {
                } else if (!input.files[0]) {
                } else {
                  var fileSize = parseInt(52428800);

                  file = input.files[0];
                  if (file.size == 0) {
                    alert("Please browse a valid file");
                    arguments.IsValid = false;
                  } else if (file.size > fileSize) {
                    alert("File length should not exceed 50MB");
                    arguments.IsValid = false;
                  } else {
                    arguments.IsValid = true;
                  }
                }
              }
              function chkreqCheck_ClientValidate(oSrc, args) {
                chkAgree = document.getElementById("reqCheck");
                if (chkAgree != null) {
                  if (!chkAgree.checked) {
                    args.IsValid = false;
                  } else {
                    args.IsValid = true;
                  }
                }
              }
            </script>
            <div
              id="RequestAQuoteControl_frmRequestAQuote"
              class="contact-form"
            >
              <div
                id="RequestAQuoteControl_valSummary"
                class="failureNotification"
                style="display: none"
              ></div>

              <div class="contact-form__two">
                <div class="contact-inner">
                  <input
                    name="ctl00$RequestAQuoteControl$txtName"
                    type="text"
                    maxlength="25"
                    id="RequestAQuoteControl_txtName"
                    placeholder="Full Name *"
                  />
                  <span
                    id="RequestAQuoteControl_rfvName"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                </div>
                <div class="contact-inner">
                  <input
                    name="ctl00$RequestAQuoteControl$txtEmail"
                    maxlength="50"
                    id="RequestAQuoteControl_txtEmail"
                    type="email"
                    placeholder="Email Address *"
                  />
                  <span
                    id="RequestAQuoteControl_rfvEmail"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                  <span
                    id="RequestAQuoteControl_revEmail"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                </div>
                <div class="contact-inner">
                  <input
                    name="ctl00$RequestAQuoteControl$telField"
                    type="text"
                    maxlength="12"
                    id="telField"
                    onkeyup="numberMobile(event)"
                    oncopy="return false;"
                    onpaste="return false;"
                    onkeypress="return isNumberKey(event);"
                    placeholder="Phone*"
                    style="margin-bottom: 15px !important"
                  />
                  <span
                    id="RequestAQuoteControl_rfvPhone"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                  <input
                    name="ctl00$RequestAQuoteControl$hdnCountryCode"
                    type="hidden"
                    id="hdnCountryCode"
                  />
                  <input
                    name="ctl00$RequestAQuoteControl$hdnCountryName"
                    type="hidden"
                    id="hdnCountryName"
                  />
                  <span
                    id="RequestAQuoteControl_cvPhoneCountry"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                  <span
                    id="RequestAQuoteControl_cvPhoneNumber"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                </div>
                <div class="contact-select">
                  <div class="form-item contact-inner">
                    <span class="inquiry">
                      <select
                        name="ctl00$RequestAQuoteControl$ddlService"
                        id="RequestAQuoteControl_ddlService"
                      >
                        <option selected="selected" value="">
                          Select a Service
                        </option>
                        <option value="1">Web Design &amp; Development</option>
                        <option value="2">Design &amp; Branding</option>
                        <option value="3">Digital Marketing Services</option>
                        <option value="4">Data Analytics and AI</option>
                        <option value="5">Enterprise Solutions</option>
                        <option value="6">
                          Software &amp; Mobile App Development
                        </option>
                        <option value="7">
                          IT Infrastructure, Managed Services &amp; Consulting
                        </option>
                        <option value="8">Industry-Specific Services</option>
                      </select>
                      <span
                        id="RequestAQuoteControl_rfvService"
                        class="msg msg-error"
                        style="
                          font-size: 0px;
                          display: none;
                          visibility: hidden;
                        "
                        >*</span
                      >
                    </span>
                  </div>
                </div>
                <div class="contact-inner contact-message">
                  <textarea
                    name="ctl00$RequestAQuoteControl$txtCustomerComment"
                    rows="2"
                    cols="20"
                    id="RequestAQuoteControl_txtCustomerComment"
                    placeholder="Message"
                  ></textarea>
                  <span
                    id="RequestAQuoteControl_rfvCustomerComment"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                </div>
                <div class="contact-inner input-group">
                  <input
                    type="file"
                    multiple="multiple"
                    name="ctl00$RequestAQuoteControl$fuDocument"
                    id="RequestAQuoteControl_fuDocument"
                    class="form-control upload-file"
                    ValidationGroup="Form"
                  />
                  <p style="color: #fff; font-size: 12px">
                    (File type: doc, docx, pdf, jpg, jpeg ; Max files size:
                    50MB)<span style="color: #f00; font-size: 12px">
                      (Optional)
                    </span>
                  </p>
                  <span
                    id="RequestAQuoteControl_revDocument"
                    style="font-size: 0px; display: none"
                    >Please Browse Files With .doc, .docx, .pdf, .jpg, .jpeg
                    Extensions Only</span
                  >
                  <span
                    id="RequestAQuoteControl_cvDocument"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >Please Browse A Valid File (File Is Empty)</span
                  >
                </div>
                <div class="contact-inner text-left" style="display: none">
                  <img
                    src="${basePath}assets/images/captcha.jpg"
                    width="263"
                    height="71"
                    alt=""
                  />
                </div>
                <p class="small text-white text-left">
                  <span class="custom-control-input"
                    ><input
                      id="reqCheck"
                      type="checkbox"
                      name="ctl00$RequestAQuoteControl$reqCheck"
                  /></span>
                  <span
                    id="RequestAQuoteControl_cvreqCheck"
                    class="msg msg-error"
                    style="font-size: 0px; display: none; visibility: hidden"
                    >*</span
                  >
                  I agree to receive communications by text message regarding IT
                  Services and Offers from Earth H2O DAG.
                  <br />
                  You may opt-out by replying STOP or ask for more information
                  by replying HELP. Message frequency varies. Message and data
                  rates may apply.
                  <br />
                  You may review our
                  <a
                    href="${basePath}privacy-policy.html"
                    target="_blank"
                    class="hover-style-link"
                    >Privacy Policy</a
                  >
                  to learn how your data is used.
                </p>
                <div class="comment-submit-btn mt-4">
                  <input
                    type="submit"
                    name="ctl00$RequestAQuoteControl$lbSave"
                    value="Request a Quote"
                    onclick="
                      javascript: WebForm_DoPostBackWithOptions(
                        new WebForm_PostBackOptions(
                          'ctl00$RequestAQuoteControl$lbSave',
                          '',
                          true,
                          'Form',
                          '',
                          false,
                          false,
                        ),
                      );
                    "
                    id="RequestAQuoteControl_lbSave"
                    class="ht-btn ht-btn-sm ht-btn-full"
                  />
                  <p class="form-messege-2"></p>
                </div>
              </div>
            </div>
            <script type="text/javascript">
              $(document).ready(function () {
                $("[id$=lbSave]").click(function () {
                  $("[id$=txtName]").prop("required", true);
                  $("[id$=txtEmailAddress]").prop("required", true);
                  $("[id$=telField]").prop("required", true);
                  $("[id$=ddlService]").prop("required", true);

                  $("[id$=txtName2]").removeAttr("required");
                  $("[id$=txtEmail2]").removeAttr("required");
                  $("[id$=ddlService2]").removeAttr("required");
                  $("[id$=telField2]").removeAttr("required");
                  $("[id$=txtCustomerComment2]").removeAttr("required");
                });
              });
            </script>
          </div>
        </div>
        <!-- End Quick Link -->
      </div>
`;

if (mobileMenu)
  mobileMenu.innerHTML = `
<div class="mobile-menu-overlay" id="mobile-menu-overlay">
      <div class="mobile-menu-overlay__inner">
        <div class="mobile-menu-overlay__header">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-12 col-12">
                <!-- mobile menu content -->
                <div class="mobile-menu-content text-start">
                  <span class="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-overlay__body">
          <nav class="offcanvas-navigation">
            <ul>
              <li class="">
                <a href="${basePath}">Home</a>
              </li>
              <li class="">
                <a href="${basePath}about.html">About</a>
              </li>
              <li class="has-children">
                <a href="${basePath}services.html">Services</a>
                <ul class="sub-menu">
                  <li class="has-children">
                    <a href="#.html"><span>Creative Services</span></a>
                    <ul class="sub-menu">
                      <li class="has-children">
                        <a href="${basePath}services/web-design-development.html"><span>Web Design & Development</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/web-design-development.html#custom-website" class="hover-style-link">Custom Website</a>
                          </li>
                          <li>
                            <a href="${basePath}services/web-design-development.html#responsive-website" class="hover-style-link">Responsive Website</a>
                          </li>
                          <li>
                            <a href="${basePath}services/web-design-development.html#ui-ux-design" class="hover-style-link">UI/UX Design</a>
                          </li>
                          <li>
                            <a href="${basePath}services/web-design-development.html#cms-website" class="hover-style-link">CMS Website</a>
                          </li>
                          <li>
                            <a href="${basePath}services/web-design-development.html#e-commerce-website" class="hover-style-link">Ecommerce Website</a>
                          </li>
                          <li>
                            <a href="${basePath}services/web-design-development.html#website-maintenance" class="hover-style-link">Website Maintenance</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/design-branding.html"><span>Design & Branding</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/design-branding.html#logo-design" class="hover-style-link">Logo Design</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#animations" class="hover-style-link">Animations</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#illustrations" class="hover-style-link">Illustrations</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#packaging-design" class="hover-style-link">Packaging Design</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#social-media-branding" class="hover-style-link">Social Media Branding</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/design-branding.html#marketing-collaterals"><span>Marketing Collaterals</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/design-branding.html#corporate-stationery" class="hover-style-link">Corporate Stationary</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#promotional-materials" class="hover-style-link">Promotional Materials</a>
                          </li>
                          <li>
                            <a href="${basePath}services/design-branding.html#event-marketing-materials" class="hover-style-link">Event Marketing Materials</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/book-publishing-services.html"><span>Book Publishing Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/book-publishing-services.html#book-publishing" class="hover-style-link">Book Publishing</a>
                          </li>
                          <li>
                            <a href="${basePath}services/book-publishing-services.html#audiobook-services" class="hover-style-link">Audiobook Services</a>
                          </li>
                          <li>
                            <a href="${basePath}services/book-publishing-services.html#book-marketing" class="hover-style-link">Book Marketing</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-children">
                    <a href="#.html"><span>Specialized Services</span></a>
                    <ul class="sub-menu">
                      <li class="has-children">
                        <a href="${basePath}services/digital-marketing.html"><span>Digital Marketing Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/digital-marketing.html#search-engine-optimization" class="hover-style-link">Search Engine Optimization (SEO)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#social-media-marketing" class="hover-style-link">Social Media Marketing</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#email-marketing-automation" class="hover-style-link">Email Marketing Automation</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#content-creation-and-management" class="hover-style-link">Content Creation and Management</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#search-engine-marketing" class="hover-style-link">Search Engine Marketing (SEM)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#pay-per-click" class="hover-style-link">Pay Per Click (PPC)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#social-media-optimization" class="hover-style-link">Social Media Optimization (SMO)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/digital-marketing.html#online-reputation-management" class="hover-style-link">Online Reputation Management (ORM)</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/data-analytics-ai"><span>Data Analytics and AI</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/data-analytics-ai.html#business-intelligence-solutions" class="hover-style-link">Business Intelligence Solutions</a>
                          </li>
                          <li>
                            <a href="${basePath}services/data-analytics-ai.html#data-visualization-services" class="hover-style-link">Data Visualization Services</a>
                          </li>
                          <li>
                            <a href="${basePath}services/data-analytics-ai.html#machine-learning-and-ai-integration" class="hover-style-link">Machine Learning and AI Integration</a>
                          </li>
                          <li>
                            <a href="${basePath}services/data-analytics-ai.html#big-data-analytics" class="hover-style-link">Big Data Analytics</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/enterprise-solutions.html"><span>Enterprise Solutions</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/enterprise-solutions.html#erp-implementation" class="hover-style-link">ERP Implementation (SAP, Oracle)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/enterprise-solutions.html#crm-solutions" class="hover-style-link">CRM Solutions (Salesforce, HubSpot)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/enterprise-solutions.html#hrms-implementation" class="hover-style-link">HRMS Implementation</a>
                          </li>
                          <li>
                            <a href="${basePath}services/enterprise-solutions.html#enterprise-mobility-solutions" class="hover-style-link">Enterprise Mobility Solutions</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/artificial-intelligence.html"><span>Artificial Intelligence</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/artificial-intelligence.html#custom-ai-video-clone" class="hover-style-link">Custom AI Video Clone</a>
                          </li>
                          <li>
                            <a href="${basePath}services/artificial-intelligence.html#professional-voice-clone" class="hover-style-link">Professional Voice Clone</a>
                          </li>
                          <li>
                            <a href="${basePath}services/artificial-intelligence.html#ai-powered-content-creation" class="hover-style-link">AI-Powered Content Creation</a>
                          </li>
                          <li>
                            <a href="${basePath}services/artificial-intelligence.html#ai-chatbots-marketing-automation" class="hover-style-link">AI-Chatbots & Marketing Automation</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-children">
                    <a href="#.html"><span>Core IT Services</span></a>
                    <ul class="sub-menu">
                      <li class="has-children">
                        <a href="${basePath}services/software-development.html"><span>Software & Mobile Application Development</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/software-development.html#custom-software-development" class="hover-style-link">Custom software development</a>
                          </li>
                          <li>
                            <a href="${basePath}services/software-development.html#mobile-app-development" class="hover-style-link">Mobile app development (iOS, Android)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/software-development.html#content-management-system" class="hover-style-link">Content Management System (CMS)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/software-development.html#api-integration-services" class="hover-style-link">API integration services</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/it-infrastructure-solutions.html#it-consulting"><span>IT Consulting</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#digital-transformation-consulting" class="hover-style-link">Digital transformation consulting</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#it-strategy-planning" class="hover-style-link">IT strategy and planning</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#it-audits-assessments" class="hover-style-link">IT audits and assessments</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#technology-roadmap-development" class="hover-style-link">Technology roadmap development</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/it-infrastructure-solutions.html#it-infrastructure-services"><span>IT Infrastructure Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#network-design-implementation-management" class="hover-style-link">Network design, implementation, and management</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#cloud-colutions" class="hover-style-link">Cloud solutions (AWS, Azure, Google Cloud)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#data-center-setup-management" class="hover-style-link">Data center setup and management</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#it-hardware-procurement-maintenance" >IT hardware procurement and maintenance</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/it-infrastructure-solutions.html#managed-it-services"><span>Managed IT Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#remote-it-support" class="hover-style-link">Remote IT support</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#on-site-it-services" class="hover-style-link">On-site IT services</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#system-monitoring-maintenance" class="hover-style-link">System monitoring and maintenance</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#backup-disaster-recovery" class="hover-style-link">Backup and disaster recovery</a>
                          </li>
                          <li>
                            <a href="${basePath}services/it-infrastructure-solutions.html#troubleshooting-technical-support" class="hover-style-link">Troubleshooting and technical support</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-children">
                    <a href="#.html"><span>Industry-Specific Services</span></a>
                    <ul class="sub-menu">
                      <li class="has-children">
                        <a href="${basePath}services/industry-solutions.html#healthcare-it-services"><span>Healthcare IT</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/industry-solutions.html#electronic-health-records-systems" class="hover-style-link">Electronic health records (EHR) systems</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#telemedicine-platforms" class="hover-style-link">Telemedicine platforms</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#healthcare-data-analytics" class="hover-style-link">Healthcare data analytics</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/industry-solutions.html#retail-e-commerce-services"><span>Retail and E-commerce</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/industry-solutions.html#e-commerce-platforms" class="hover-style-link">E-commerce platforms</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#inventory-management-systems" class="hover-style-link">Inventory management systems</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#customer-experience-optimization" class="hover-style-link">Customer experience optimization</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/industry-solutions.html#education-it-services"><span>Education IT Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/industry-solutions.html#learning-management-systems" class="hover-style-link">Learning management systems (LMS)</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#student-information-systems" class="hover-style-link">Student Information Systems (SIS)</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="${basePath}services/industry-solutions.html#automotive-it-services"><span>Automotive IT Services</span></a>
                        <ul class="sub-menu">
                          <li>
                            <a href="${basePath}services/industry-solutions.html#connected-vehicle-solutions" class="hover-style-link">Connected Vehicle Solutions</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#automotive-software-development" class="hover-style-link">Automotive Software Development</a>
                          </li>
                          <li>
                            <a href="${basePath}services/industry-solutions.html#customer-experience-platforms" class="hover-style-link">Customer Experience Platforms</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="${basePath}industries.html">Industries We Serve</a>
                <ul class="sub-menu">
                  <li>
                    <a href="${basePath}industries.html"><span>Financial Services</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Manufacturing</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Retail</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Professional Services</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Transportation & Logistics</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Telecommunications</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Energy</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Construction</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Travel & Hospitality</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Education</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Real Estate</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Media & Entertainment</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Government</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>E-commerce</span></a>
                  </li>
                  <li>
                    <a href="${basePath}industries.html#IndustriesWeServe"><span>Automotive</span></a>
                  </li>
                </ul>
              </li>

              <li class="has-children">
                <a href="${basePath}solutions.html">Solutions</a>
                <ul class="sub-menu">
                  <li>
                    <a href="${basePath}solutions.html"><span>Human Resource Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Financial Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Reservation & Booking Systems</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Operations Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Project Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Supply Chain Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Cybersecurity Solutions</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Automation Solutions</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Predictive Analytics Solutions</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Workflow Automation Tools</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Cloud Infrastructure</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Network Infrastructure Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Asset & Fleet Management</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Building Information Modeling (BIM)</span></a>
                  </li>
                  <li>
                    <a href="${basePath}solutions.html#OurCoreSolutions"><span>Video Streaming Solutions</span></a>
                  </li>
                </ul>
              </li>

              <li class="">
                <a href="${basePath}faqs.html">FAQs</a>
              </li>
              <li class="">
                <a href="${basePath}contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div class="col-md-12">
            <div class="top-bar-right">
              <ul class="top-bar-info">
                <li class="info-item">
                  <a href="mailto:sales@earthh2Odag.com" class="info-link text-white">
                    <i class="info-icon fa-regular fa-envelope"></i>
                    <span class="info-text">sales@earthh2Odag.com</span>
                  </a>
                </li>

                <li class="info-item">
                  <a href="#" class="info-link text-white">
                    <i class="info-icon fa-brands fa-whatsapp"></i>
                    <span class="info-text">+1 (215) 939-7130</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="header-sub-menu-search-wrap">
              <p>Find exactly what you need:</p>
              <div class="header-sub-menu-search-inner js-track-search">
                <input type="text" name="search" placeholder="Search.." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of mobile menu overlay -->

    <!-- search overlay -->
    <div class="search-overlay" id="search-overlay">
      <div class="search-overlay__header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 ms-auto col-4">
              <!-- search content -->
              <div class="search-content text-end">
                <span class="mobile-navigation-close-icon" id="search-close-trigger"></span>
              </div>

              <div class="search-overlay__inner">
                <div class="search-overlay__body">
                  <div class="search-overlay__form">
                    <p>What you are looking for?</p>
                    <div>
                      <input type="text" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

if (awards)
  awards.innerHTML = `
<div class="feature-icon-wrapper section-space--ptb_100">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title-wrap text-center section-space--mb_30">
          <h3 class="heading">Achievements, Recognitions & Certifications</h3>
          <h6 class="section-sub-title mb-20">
            Our commitment to excellence is reflected in industry certifications, professional recognition, and a consistent record of delivering high-quality, secure IT services. We uphold rigorous standards of compliance, reliability, and performance to ensure trusted partnerships.
          </h6>
        </div>
      </div>
    </div>
  </div>
</div>
`;

if (reviews)
  reviews.innerHTML = `
<div class="testimonial-slider-area section-space--ptb_60 bg-review">
  <div class="container-fluid container-fluid--cp-80">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title-wrap section-space--mb_60">
          <h3 class="heading text-white">Hear from Our Clients</h3>
        </div>

        <div class="flexible-image-slider-wrap">
          <div class="swiper-container three-flexible__container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-slider__single wow move-up animated" style="visibility: visible">
                  <div class="author-info">
                    <div class="testimonial-slider__media">
                      <img src="assets/images/review-logo-01.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="testimonial-slider__author">
                      <h6 class="name">Emily R.</h6>
                      <p>President</p>
                      <span>Future Tech Innovators</span>
                    </div>
                  </div>
                  <div class="testimonial-slider__dsfdsatext">
                    Collaborating with Earth H20 DAG has transformed our operations. Their team crafted a bespoke website that truly reflects our brand identity, and their continuous support guarantees everything functions seamlessly. Since the launch, we've noticed a remarkable boost in user engagement and sales.
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial-slider__single wow move-up animated" style="visibility: visible">
                  <div class="author-info">
                    <div class="testimonial-slider__media">
                      <img src="assets/images/review-logo-02.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="testimonial-slider__author">
                      <h6 class="name">David K.</h6>
                      <p>Digital Marketing Manager</p>
                      <span>Worldwide Retail Group</span>
                    </div>
                  </div>
                  <div class="testimonial-slider__dsfdsatext">
                    The experts at Earth H20 DAG played a crucial role in overhauling our online shopping platform. Their technical skills and meticulous attention to detail allowed us to streamline our processes and enhance customer satisfaction. Their digital marketing strategies have significantly increased our online visibility.
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial-slider__single wow move-up animated" style="visibility: visible">
                  <div class="author-info">
                    <div class="testimonial-slider__media">
                      <img src="assets/images/review-logo-04.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="testimonial-slider__author">
                      <h6 class="name">Dr Laura P.</h6>
                      <p>Medical Advisor</p>
                      <span>HealthSecure Systems</span>
                    </div>
                  </div>
                  <div class="testimonial-slider__dsfdsatext">
                    As a healthcare organization, ensuring data security and operational efficiency is paramount for us. Earth H20 DAG developed a comprehensive healthcare IT infrastructure for us, featuring a secure electronic health record (EHR) system and telehealth options.
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-slider__single wow move-up animated" style="visibility: visible">
                  <div class="author-info">
                    <div class="testimonial-slider__media">
                      <img src="assets/images/review-logo-03.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="testimonial-slider__author">
                      <h6 class="name">James H.</h6>
                      <p>Chief Technology Officer</p>
                      <span>Learning Path Academy</span>
                    </div>
                  </div>
                  <div class="testimonial-slider__dsfdsatext">
                    Earth H20 DAG delivered outstanding IT services for our educational institution. They assisted us in implementing a user-friendly learning management system (LMS) that improved both teaching and administrative workflows. Their team was always responsive and ready to help with any issues.
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-slider__single wow move-up animated" style="visibility: visible" >
                  <div class="author-info">
                    <div class="testimonial-slider__media">
                      <img src="assets/images/review-logo-05.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="testimonial-slider__author">
                      <h6 class="name">Sophia G.</h6>
                      <p>Logistics Director</p>
                      <span>Auto Dynamics Corp</span>
                    </div>
                  </div>
                  <div class="testimonial-slider__dsfdsatext">
                    We were struggling with operational inefficiencies in our automotive business, and Earth H20 DAG provided customized IT solutions that optimized our logistics and manufacturing processes. Their expertise in the automotive sector made a significant impact. The results truly speak for themselves.
                  </div>
                </div>
              </div>
            </div>

            <!-- Add Arrows -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

          <div class="swiper-pagination swiper-pagination-3 section-space--mt_50"></div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

if (blogSidebar)
  blogSidebar.innerHTML = `
<div class="page-sidebar-content-wrapper page-sidebar-right small-mt__40 tablet-mt__40">
  <!--=== Sidebar Widget Start ===-->
  <div class="sidebar-widget search-post wow move-up">
    <div class="widget-title">
      <h4 class="sidebar-widget-title">Search</h4>
    </div>
    <form action="#" method="post">
      <div class="widget-search">
        <input type="text" placeholder="Enter search keyword…" />
        <button type="submit" class="search-submit">
          <span class="search-btn-icon fa fa-search"></span>
        </button>
      </div>
    </form>
  </div>
  <!--=== Sidebar Widget End ===-->

  <!-- === Sidebar Widget Start === -->
  <div class="sidebar-widget widget-blog-recent-post wow move-up">
    <h4 class="sidebar-widget-title">Recent Posts</h4>
    <ul>
      <li>
        <a href="../blog/the-future-of-ai-in-business.html">
          <img src="../assets/images/blog-post-01.webp" class="img-fluid w-25 d-block" alt="" />
          The Future of AI in Business: How Artificial Intelligence Is Transforming Industries in 2026
        </a>
      </li>
      <li>
        <a href="../blog/why-every-business-needs-a-custom-website-in-2026.html">
          <img src="../assets/images/blog-post-02.webp" class="img-fluid w-25 d-block" alt="" />
          Why Every Business Needs a Custom Website in 2026
        </a>
      </li>
      <li>
        <a href="../blog/the-power-of-data-analytics.html">
          <img src="../assets/images/blog-post-03.webp" class="img-fluid w-25 d-block" alt="" />
          The Power of Data Analytics: How Businesses Use Data to Make Smarter Decisions
        </a>
      </li>
      <li>
        <a href="../blog/cybersecurity-in-the-digital-age.html">
          <img src="../assets/images/blog-post-04.webp" class="img-fluid w-25 d-block" alt="" />
          Cybersecurity in the Digital Age: Protecting Businesses from Modern Threats
        </a>
      </li>
    </ul>
  </div>
  <!-- === Sidebar Widget End === -->

  <!-- === Sidebar Widget End === -->

  <!-- === Sidebar Widget Start === -->
  <div class="sidebar-widget widget-tag wow move-up">
    <h4 class="sidebar-widget-title">Tags</h4>
    <a href="#" class="ht-btn ht-btn-xs">Health Care</a>
    <a href="#" class="ht-btn ht-btn-xs">Automotive</a>
    <a href="#" class="ht-btn ht-btn-xs">IT Security</a>
    <a href="#" class="ht-btn ht-btn-xs">IT Services</a>
  </div>
  <!-- === Sidebar Widget End === -->
</div>
`;

if (trends)
  trends.innerHTML = `
<div class="feature-icon-wrapper trends-section section-space--pt_60">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title-wrap text-center section-space--mb_30 pb-5">
          <h3 class="heading">
            Industry Intelligence & Thought Leaderships
          </h3>
          <h6 class="section-sub-title mb-20">
            Stay connected to emerging technologies and market shifts
            shaping the digital future. Our resources help decision-makers
            simplify complexity, evaluate innovation trends, and implement
            strategies for measurable business outcomes.
          </h6>
        </div>

        <div class="flexible-image-slider-wrap">
          <div class="swiper-container auto--per-flexible__container">
            <div class="swiper-wrapper auto-plexible-row trend">
              <div class="swiper-slide">
                <!-- Single flexible slider Start -->
                <div class="single-flexible-slider">
                  <img class="img-fluid img-shadow border-radus-20" src="assets/images/about-pic-trend-healthcare.jpg" alt="" />
                  <div class="trend-box">
                    <h5>The Future of AI in Business: How Artificial Intelligence Is Transforming Industries in 2026</h5>
                    <p>Artificial Intelligence (AI) is no longer a concept limited to science fiction or experimental laboratories.</p>
                    <a href="blog/the-future-of-ai-in-business.html"><i class="fa-solid fa-circle-chevron-right"></i>Read More</a>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <!-- Single flexible slider Start -->
                <div class="single-flexible-slider">
                  <img class="img-fluid img-shadow border-radus-20" src="assets/images/about-pic-trend-cloud.jpg" alt="" />
                  <div class="trend-box">
                    <h5>Why Every Business Needs a Custom Website in 2026</h5>
                    <p>Custom websites are essential for brand visibility and customer engagement, surpassing templates in meeting modern business needs.</p>
                    <a href="blog/why-every-business-needs-a-custom-website-in-2026.html"><i class="fa-solid fa-circle-chevron-right"></i>Read More</a>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <!-- Single flexible slider Start -->
                <div class="single-flexible-slider">
                  <img class="img-fluid img-shadow border-radus-20" src="assets/images/about-pic-trend-data.jpg" alt="" />
                  <div class="trend-box">
                    <h5>The Power of Data Analytics: How Businesses Use Data to Make Smarter Decisions</h5>
                    <p>Data analytics turns raw data into insights, enhancing operations and optimizing marketing through analysis of patterns and behaviors.</p>
                    <a href="blog/the-power-of-data-analytics.html"><i class="fa-solid fa-circle-chevron-right"></i>Read More</a>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <!-- Single flexible slider Start -->
                <div class="single-flexible-slider">
                  <img class="img-fluid img-shadow border-radus-20" src="assets/images/about-pic-trend-mobile.jpg" alt="" />
                  <div class="trend-box">
                    <h5>Cybersecurity in the Digital Age: Protecting Businesses from Modern Threats</h5>
                    <p>Cybercriminals are evolving their tactics to exploit business vulnerabilities, leading to increased data breaches, ransomware, and phishing, which result in financial losses and reputational damage.</p>
                    <a href="blog/cybersecurity-in-the-digital-age.html"><i class="fa-solid fa-circle-chevron-right"></i>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="swiper-pagination swiper-pagination-5 section-space--mt_50"
        ></div>
      </div>
    </div>
  </div>
</div>
`;
