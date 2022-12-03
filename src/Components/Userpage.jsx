import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "./Config";

function Userpage() {
  let navigate = useNavigate();
  let logout = () => {
    window.localStorage.clear();
    toast.info("Logged out successfully")
    navigate("/");
  };


  // Messages
  let formik = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      message: "",
    },
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      
      try {
        let sendMessage = await axios.post(`${env.api}/message`, values, {
            headers: {
              Authorization: window.localStorage.getItem("app-token"),
            },
          });
        console.log(sendMessage);

        if (sendMessage.status === 200) {
          toast.success("Message sent successfully");
          resetForm()
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

 
// Newsletter button

let subscribe = (values) =>{
  if(values !==""){
    values.preventDefault()
    toast.success("Thanks for the subscription")
    document.getElementById("Formres").reset();
  }
}


  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          {/* <!-- Welcome and Logo --> */}
          <img
            src="https://www.jetpunk.com/img/user-photo-library/b0/b085e5f0c7-450.png"
            alt="Superfast-logo"
            style={{ width: "50px", height: "52px" }}
            className="d-inline-block align-text-top"
            loading="lazy"
          />
          <span className="navbar-brand">
            <span className="display-5">SUPERFAST CRM</span>
          </span>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Menu --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#aboutus" className="nav-link active">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link">
                  {" "}
                  Products{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#clients" className="nav-link">
                  {" "}
                  Our Clients{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  {" "}
                  Contact{" "}
                </a>
              </li>
              <button
                onClick={logout}
                type="button"
                className="btn btn-dark btn-sm"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Banner Video --> */}
      <div className="bg-video-wrap">
        <video loop muted autoplay="autoplay" style={{ width: "100%" }}>
          <source src="asset/Banner_Video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container mt-3">
        <p className="display-3 text-center">
          Are you a serious Business owner?
        </p>
        <p className="display-6 text-center">
          Do you really want your potential customers to be with you longtime?
        </p>
        <p className="display-6 text-center">
          Hello, you are at a right place!{" "}
        </p>
        <p className="display-1 text-center des p-1">
          Welcome to SUPERFAST CRM{" "}
        </p>
      </div>

      {/* <!-- About --> */}
      <h3 className="mt-5 mb-md-4 title container" id="aboutus">
        ABOUT US
      </h3>

      <div className="color1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="display-5 mt-2">
                Impacting Customer Expericence with Technology
              </p>
              <p className="lead">
                We are committed to creating a real differences in a customer
                relationship management with advanced technologies. Founded in
                2021. Our <span className="fw-bold">CRM tool specialises</span>{" "}
                in all the frequent Customer relationship problems and gives{" "}
                <span className="fw-bold">
                  solutions instantly through robust automation
                </span>
                . Also we provide many products add-on with our CRM tool to
                sustain your potential customers and grow your businesses
              </p>
            </div>

            <div className="col-md-6 ">
              <img
                src="asset/aboutuspicture.jpg"
                className="img-fluid pt-md-3"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Products --> */}

      <div className="card-deck" id="products">
        <div className="container mt-3 p-4">
          <h3 className="mt-md-4 title">OUR PRODUCTS</h3>
          <div className="row">
            {/* <!-- Card1 --> */}
            <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/Avionte-Laptop-Mockup-TalentResponsive-1.jpg"
                  className="card-img-top mt-4 h-100"
                  alt="CRM"
                />
                <div className="card-body text-center ">
                  <h5 className="card-title fw-bold">
                    SUPERFAST CRM 360{" "}
                    <span className="badge bg-info rounded">Pro</span>
                  </h5>
                  <span className="badge bg-success lead">CRM Tool</span>
                  <span className="badge bg-danger rounded lead">
                    All in one
                  </span>
                  <p className="card-text mt-3">
                    Superfast CRM offers technology that allows more proactive
                    and insight-driven, with all information in a single place.
                    With business under control, your productivity is up by 95%
                    in the customer management phase
                  </p>
                  <button
                    className="btn btn-outline-dark w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#crmpage"
                    type="button"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card2 --> */}
            <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/Marketing tool.jpg"
                  className="card-img-top mt-4 h-100"
                  alt="Marketing tool"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">
                    FAST MARKETER{" "}
                    <span className="badge bg-info rounded">New</span>
                  </h5>
                  <span className="badge bg-success lead">Marketing</span>
                  <span className="badge bg-secondary rounded lead">
                    Marketing Automation
                  </span>
                  <p className="card-text mt-3">
                    Are you are building a business, chances are you’re looking
                    for ways to get your leg up on the competition. To
                    accomplish this, you’ll need a good marketing strategy tool
                    and reach your target customers
                  </p>
                  <button
                    className="btn btn-outline-dark w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#fastmarketer"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card3 --> */}
            <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/help-desk.jpg"
                  className="card-img-top mt-4 h-100"
                  alt="help-desk"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">
                    SUPER HELPDESK
                    <span className="badge bg-info rounded">Expert</span>
                  </h5>
                  <span className="badge bg-success lead">Ticket system</span>
                  <span className="badge bg-warning rounded lead">
                    Online support
                  </span>
                  <p className="card-text mt-3">
                    Super Helpdesk product helps to meet unique needs, while
                    breaking down silos. It’s easy for every team, from IT to HR
                    to legal, to set up projects quickly without losing the
                    agility to work across organizations
                  </p>
                  <button
                    className="btn btn-outline-dark w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#helpdesk"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card4 --> */}
            <div className="col-lg-4 col-md-6 my-4 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/Integration.jpg"
                  className="card-img-top h-100 mt-4"
                  alt="integration"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">
                    SUPER INTEGRATION{" "}
                    <span className="badge bg-info rounded">Premium</span>
                  </h5>
                  <span className="badge bg-success lead">Integration</span>
                  <span className="badge bg-secondary rounded lead">
                    One for all
                  </span>
                  <p className="card-text mt-3">
                    Our integration tool is increasingly necessary for companies
                    that use distinct systems to perform various tasks can
                    include anything from recording sales, keeping track of
                    supplier information, and storing customer data into one
                    system requires virtually zero maintenance.
                  </p>

                  <button
                    className="btn btn-outline-dark w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#integration"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card5 --> */}
            <div className="col-lg-4 col-md-6 my-4 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/Documents tool.jpg"
                  className="card-img-top h-100 mt-4"
                  alt="dcos cloud"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">
                    SUPER CLOUD DOCS{" "}
                    <span className="badge bg-info rounded">Best</span>
                  </h5>
                  <span className="badge bg-success lead">Cloud</span>
                  <span className="badge bg-warning rounded lead">
                    Maintain
                  </span>
                  <p className="card-text mt-3">
                    Super Cloud Docs lets you build scalable, highly-secure,
                    pay-per-use applications without needing a deep knowledge of
                    cloud services. We reduce all complexity by interpreting
                    your code and automatically provisioning the best possible
                    solution to support it.
                  </p>
                  <button
                    className="btn btn-outline-dark w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#docscloud"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card6 --> */}

            <div className="col-lg-4 col-md-6 my-4 d-flex justify-content-center">
              <div
                className="card border border-3 rounded-3 shadow"
                style={{ width: "22rem" }}
              >
                <img
                  src="asset/SalesPipeline.jpg"
                  className="card-img-top mt-4 h-100"
                  alt="sales360"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">
                    SUPER SALES 360
                    <span className="badge bg-info rounded">New</span>
                  </h5>
                  <span className="badge bg-success lead">Sales support</span>
                  <span className="badge bg-danger rounded lead">Remote</span>
                  <p className="card-text mt-3">
                    Super Sales 360 can keep data on your customers readily
                    available so your company can make decisions based on facts,
                    not hopes or guesses. We are the market best sales support
                    tool.Super Sales 360 refer to digital tools used by sales
                    professionals to make their work easier.
                  </p>
                  <button
                    className="btn btn-outline-dark w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#sales360"
                  >
                    <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal Part for all Readmore --> */}

      {/* <!-- Readmore-1 --> */}
      <div
        className="modal fade"
        id="crmpage"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                SUPERFAST CRM 360
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <span className="fw-bold"></span>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/Avionte-Laptop-Mockup-TalentResponsive-1.jpg"
                      className="card-img-top"
                      alt="CRM"
                    />
                    <p className="lead">
                      <span className="fw-bold">Superfast CRM</span> offers
                      technology that allows us to be more proactive and
                      insight-driven, with all information in a single place.
                      With businesses under control, your productivity is up by
                      95% in the customer management phase
                    </p>
                    <p className="lead">
                      Superfast Customer Relationship Management (CRM) software
                      comes with features from{" "}
                      <span className="fw-bold">
                        pipeline management to automation
                      </span>{" "}
                      , all bundled in one package.
                    </p>
                    <p className="lead">
                      You can experience what Superfast CRM can do for you for
                      free, before you commit to adopting it, across your
                      organization.
                    </p>
                    <p className="lead">
                      With{" "}
                      <span className="fw-bold"> 24x5 standard support</span>{" "}
                      and <span className="fw-bold">24x7 premium support</span>{" "}
                      , a team of experts are ready to assist you at any time.
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $450 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Readmore-2 --> */}
      <div
        className="modal fade"
        id="fastmarketer"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                FAST MARKETER
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <span className="fw-bold"></span>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/Marketing tool.jpg"
                      className="card-img-top"
                      alt="marketing"
                    />
                    <p className="lead">
                      Are you are building a business, chances are you’re
                      looking for ways to get your leg up on the competition. To
                      accomplish this, you’ll need a{" "}
                      <span className="fw-bold">
                        good marketing strategy tool
                      </span>{" "}
                      and reach your target customers.
                    </p>
                    <p className="lead">
                      Whether your team holds monthly customer and prospect
                      events, yearly conferences, or just occasional community
                      outreach parties and events, it's important to have the
                      best marketing tool up your sleeve when the time comes to
                      use it.
                      <p className="lead">
                        After all, in-person events are some of the best ways to
                        interact with potential customers and
                        <span className="fw-bold">
                          create a brand experience
                        </span>{" "}
                        that prospects, customers, and your community will
                        remember.
                      </p>
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $360 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Readmore-3 --> */}
      <div
        className="modal fade"
        id="helpdesk"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                SUPER HELPDESK
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <span className="fw-bold"></span>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/help-desk.jpg"
                      className="card-img-top"
                      alt="helpdesk"
                    />
                    <p className="lead">
                      <span className="fw-bold">Super Helpdesk</span> product
                      helps to meet unique needs, while breaking down silos.
                      It’s easy for every team,{" "}
                      <span className="fw-bold">from IT to HR to legal</span>,
                      to set up projects quickly without losing the agility to
                      work across organizations
                    </p>
                    <p className="lead">
                      Manage all of your support requests, convert emails to
                      tickets, automate ticket assignments, customize support
                      forms, and set your own SLA.
                    </p>

                    <p className="lead">
                      <span className="fw-bold">
                        Powerful, user-friendly tools
                      </span>{" "}
                      to help you scale your customer support and improve team
                      collaboration.
                    </p>

                    <p className="lead">
                      Super Helpdesk is a cloud-based,{" "}
                      <span className="fw-bold">
                        modern help desk ticketing software
                      </span>{" "}
                      for serving a wide range of customer support activities.
                      You can organize support requests, collaborate with
                      customers and teammates, automate repetitive tasks, and
                      improve overall customer experience.
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $350 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Readmore-4 --> */}
      <div
        className="modal fade"
        id="integration"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                SUPER INTEGRATION
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <span className="fw-bold"></span>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/Integration.jpg"
                      className="card-img-top"
                      alt="integration"
                    />
                    <p className="lead">
                      Our integration tool is increasingly necessary for
                      companies that use distinct systems to perform various
                      tasks can include anything from{" "}
                      <span className="fw-bold">
                        recording sales, keeping track of supplier information,
                        and storing customer data into one system
                      </span>
                    </p>

                    <p className="lead">
                      Modern data teams across the world{" "}
                      <span className="fw-bold">
                        automate data integration from 150+ sources
                      </span>{" "}
                      using Super Pipeline because it is reliable, intuitive and
                      requires virtually zero maintenance.
                    </p>

                    <p className="lead">
                      Get access to thoughtfully designed automations - big and
                      small - that lets you effortlessly deliver unified,{" "}
                      <span className="fw-bold">
                        accurate and real-time data with zero loss.
                      </span>
                    </p>

                    <p className="lead">
                      Easily integrate Super Intergration into your data
                      workflows and trigger your pipelines or perform any
                      pipeline action without even visiting the dashboard.
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $500 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Readmore-5 --> */}
      <div
        className="modal fade"
        id="docscloud"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                SUPER CLOUD DOCS
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <span className="fw-bold"></span>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/Documents tool.jpg"
                      className="card-img-top"
                      alt="docs cloud"
                    />
                    <p className="lead">
                      Super Cloud Docs lets you build{" "}
                      <span className="fw-bold">
                        scalable, highly-secure, pay-per-use applications
                        without needing a deep knowledge of cloud services.
                      </span>{" "}
                      We reduce all of this complexity by interpreting your code
                      and automatically provisioning the best possible
                      infrastructure to support it.
                    </p>

                    <p className="lead">
                      Our <span className="fw-bold">lightweight CLI</span>{" "}
                      watches your local project directory and instantaneously
                      syncs and deploys changes to your own fully-isolated{" "}
                      <span className="fw-bold">developer sandbox</span> in the
                      cloud.
                    </p>

                    <p className="lead">
                      Writing application code with Serverless Cloud is fast and
                      familiar. Use our intuitive{" "}
                      <span className="fw-bold">
                        SuperCloud Development Kit (SDK)
                      </span>{" "}
                      to access your datastore, schedule tasks, load secrets,
                      process events, serve static assets, and more.{" "}
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $480 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Readmore-6 --> */}
      <div
        className="modal fade"
        id="sales360"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-title display-5 text-center"
                id="exampleModalLabel"
              >
                SUPER SALES 360
              </span>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="asset/SalesPipeline.jpg"
                      className="card-img-top"
                      alt="sales360"
                    />
                    <p className="lead">
                      <span className="fw-bold">Super Sales 360</span> can keep
                      data on your customers readily available so your company
                      can make decisions based on facts, not hopes or guesses.
                      We are <span className="fw-bold"></span>the market best
                      sales support tool.
                    </p>

                    <p className="lead">
                      Super Sales 360 refer to digital tools used by{" "}
                      <span className="fw-bold">
                        sales professionals to make their work easier.
                      </span>{" "}
                    </p>

                    <p className="lead">
                      Sales tools{" "}
                      <span className="fw-bold">
                        help salespeople understand which prospects are most
                        likely to be successful
                      </span>{" "}
                      with their product or service, when to reach out to those
                      prospects, and what they should be talking about with
                      them. Our tool helps to{" "}
                      <span className="fw-bold">
                        save time on tedious and time-consuming
                      </span>{" "}
                      administrative tasks, and can focus on what matters the
                      most{" "}
                      <span className="fw-bold">
                        providing value for people and businesses.
                      </span>
                    </p>

                    <p className="price bg-black text-white fw-bolder text-center display-4">
                      $420 <span className="fs-4">billed annually</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Our Clients --> */}
      <div className="color1" id="clients">
        <div className="container mt-md-3">
          <h1 className="text-center"> Take a look at our clients </h1>

          <div className="row g-5 my-md-1 pt-4 d-flex justify-content-center">
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c1.jpg"
                className="img-fluid  "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c8.jpg"
                className="img-fluid "
                width="160"
                height="160"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c4.jpg"
                className="img-fluid "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c7.jpg"
                className="img-fluid "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
          </div>

          <div className="row g-5 my-md-2 mt-1 d-flex justify-content-center">
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c5.jpg"
                className="img-fluid  "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c6.jpg"
                className="img-fluid "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c3.jpg"
                className="img-fluid "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <img
                src="asset/c2.jpg"
                className="img-fluid "
                width="200"
                height="200"
                loading="lazy"
                alt="aboutus picture"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-md-5 my-1">
          <div className="col">
            <p className="display-4 text-center mt-2">
              We take a client first approach to all that we do.
            </p>
          </div>
        </div>

        <div className="row  pb-md-5">
          <div className="col-md-6">
            <img
              src="asset/client page.jpg"
              className="img-fluid rounded-3"
              loading="lazy"
              alt="aboutus picture"
            />
          </div>
          <div className="col-md-6 ">
            <p className="lead">
              Good client fit is important to us. In order to forge the best
              relationships, we like to take some time to get to know you. It’s
              part of our process. together to achieve your objectives.
            </p>
            <p className="lead">
              Our collaborative approach means that we forget a working
              partnership that ensures we are on the same page and working. We
              work with developers to create highly valuable products that are
              user-friendly to enable end-users to get the most from our
              superfast products.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Contact before --> */}
      <div className="color1">
        <div className="container mt-md-3">
          <p className="display-3 text-center fw-bold">
            Start selling smarter, better and faster
          </p>
          <p className="display-5 text-center">
            30 days risk free fully feature trial
          </p>
          <div className="d-flex justify-content-center">
            <a href="#direct">
              {" "}
              <button
                className="btn btn-danger text-center rounded-pill fw-bolder pill"
                type="button"
              >
                Drop a message below
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Contact Page --> */}
      <div className="container" id="contact">
        <div className="row mb-3">
          <h3 className="mt-5 mb-md-4 title" id="contact">
            GET IN TOUCH
          </h3>
          <div className="col-md-6 d-flex justify-content-center mb-3">
            <iframe
              style={{ width: "90%", height: "473" }}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.177245139838!2d80.17504691477119!3d13.024382290821269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d062596b79%3A0xb459d0198ba6832e!2sDLF%20IT%20SEZ%20Park%20Main%20Entrance%2C%20Ramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600125%2C%20India!5e0!3m2!1sen!2sus!4v1667799709501!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-md-6">
            <p className="display-5 hello text-center fw-bold">
              <i>Say Hello!</i>
            </p>
            <p className="display-5  text-center fw-bold">
              {" "}
              Let's talk business
            </p>

            <form onSubmit={formik.handleSubmit}>
              {/* <!-- Full name --> */}
              <div className="mb-3" id="name">
                <input
                  id="direct"
                  type="text"
                  className="form-control"
                  style={{ height: "50px" }}
                  aria-describedby="emailHelp"
                  value={formik.values.fullName}
                                  onChange={formik.handleChange}
                                  name="fullName"
                  placeholder="Full name"
                  required
                />
              </div>

              {/* <!-- Email --> */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  style={{ height: "50px" }}
                  id="email"
                  aria-describedby="emailHelp"
                  value={formik.values.emailAddress}
                                  onChange={formik.handleChange}
                                  name="emailAddress"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* <!-- Text area --> */}
              <div className="form-floating mb-3">
                <textarea
                value={formik.values.message}
                onChange={formik.handleChange}
                name="message"
                className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "140px" }}
                  required>
                  </textarea>
                
                <label for="floatingTextarea2" className="text-muted">
                  Message 
                </label>
              </div>
              {/* <!-- Submit button --> */}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}


      <footer className="foot">
        <div className="container-fluid pt-3">
          <div className="row ">
            <div className="col-md-3 mb-2">
              <div className="mt-md-3 display-5 text-center text-success">
                <b>SUPERFAST CRM</b>
              </div>
              <div className="text-white text-center fs-4 fst-italic">
                Our Name Says It All!
              </div>
            </div>

            <div className="col-md-3 mt-1 text-white text-md-center mb-2">
              <div className="lead text-success fw-bolder">Contact us</div>
              <a
                href="mailto:hello@superfastcrm.com"
                target="_blank"
                className="inheri"
              >
                <div>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  hello@superfastcrm.com
                </div>
              </a>
              <a href="tel:+1(594)4865-3265" target="_blank" className="inheri">
                <div>
                  <i className="fa-sharp fa-solid fa-phone"></i> +1 (594)
                  4865-3265
                </div>
              </a>

              <div className="lead text-success fw-bolder">Location</div>
              <div>IND|USA|UK</div>
            </div>

            <div className="col-md-2 text-white mt-md-3 text-md-center mb-2">
              <div className="fs-4 text-success fw-bold">Follow us on</div>
              <div>
                <a
                  href="https://twitter.com/"
                  className="inheri"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter fs-1"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="inheri"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fs-1 ms-2"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="inheri"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube fs-1 ms-2 "></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 my-md-3 mb-2">
              <div className="text-white lead">
                Subscribe to our Newsletter to get Important News, Amazing
                Offers & Inside Scoops:
              </div>

            
              <form onSubmit={subscribe} id="Formres">
                <div className="input-group w-md-75 mt-2">
                  <div className="input-group-text">
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Enter your Email"
                    
                  />
                  <button className="btn btn-success" value="" >
                    Subscribe
                  </button>
      

                </div>
              </form> 
              
            </div>
          </div>

          <div className="text-white">
            <hr />
          </div>
          <div className="text-white text-center pt-2 pb-4">
            Copyright <i className="fa-regular fa-copyright"></i> 2022 SuperFast
            CRM. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
  }
export default Userpage;
