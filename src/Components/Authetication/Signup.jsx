import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { env } from "../Config";


function Signup() {

  
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      fullName:"",
      companyName: "",
      mobileNumber:"",
      emailAddress: "",
      password: "",
    },
    onSubmit: async (values) => {
      // console.log(values);

      try {
        let registerData = await axios.post(`${env.api}/register`, values)
        // console.log(registerData)

        if(registerData.status === 200) {
          toast.success("User registered successfully")
          navigate("/login");
        }
         
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        
      }
    },
  });

  

  return (<>
  <ToastContainer/>
    <div className="bodycolor">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* <!-- Welcome and Logo --> */}
          <img
            src="https://www.jetpunk.com/img/user-photo-library/b0/b085e5f0c7-450.png"
            alt="Superfast-logo"
            style={{ width: "50px", height: "52px" }}
            className="d-inline-block align-text-top"
            loading="lazy"
          ></img>
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
                <Link
                  to={'/login'}
                  className="nav-link active"
              
                >
                  Member's Login{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <div className="display-1 fw-bold text-white">
              HIGHLY ENERGETIC CRM FOR BUSINESSES.
            </div>
            <br />
            <div className="lead fw-bold text-white">
              Bring the very best out of your customer-facing teams with robust
              automation, comprehensive analytics, personalized solutions, and
              more. Sign up and get started in no time—the fastest
              implementation in the enterprise CRM market.
            </div>
          </div>

          <div className="col-md-6 mt-3 text-white">
            <div className="d-flex justify-content-center">
              <h3>Get start with your free trial</h3>
            </div>
            <div>
              <div className="container mt-2">
                <div className="row justify-content-center">
                  <div className="col-md-7">
                  <form onSubmit={formik.handleSubmit}>
                      {/* <!-- Full name --> */}
                      <div className="mb-2">
                        <label for="name" className="form-label">
                          Full name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={formik.values.fullName}
                                  onChange={formik.handleChange}
                                  name="fullName"

                          aria-describedby="emailHelp"
                          placeholder="Enter your fullname"
                          required
                        />
                      </div>

                       {/* <!-- Company name --> */}
                       <div className="mb-2">
                        <label for="coname" className="form-label">
                        Company name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="coname"
                          value={formik.values.companyName}
                                  onChange={formik.handleChange}
                                  name="companyName"

                          aria-describedby="emailHelp"
                          placeholder="Enter your company's name"
                          required
                        />
                      </div>


                      {/* <!-- Mobile number --> */}
                      <div className="mb-2">
                        <label for="number" className="form-label">
                          Mobile number<span className="text-danger">*</span>
                        </label>
                        <input
                          maxlength="13"
                          className="form-control"
                          id="number"

                          value={formik.values.mobileNumber}
                                  onChange={formik.handleChange}
                                  name="mobileNumber"
                                  type="number"
                          
                          aria-describedby="emailHelp"
                          placeholder="Enter your mobile number"
                          required
                        />
                      </div>
                      {/* <!-- Email --> */}
                      <div className="mb-2">
                        <label for="email" className="form-label">
                          Email address<span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={formik.values.emailAddress}
                          onChange={formik.handleChange}
                          name="emailAddress"

                          aria-describedby="emailHelp"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      {/* <!-- Password --> */}
                      <div className="my-2">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Password<span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"

                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name="password"

                          placeholder="Enter your password"
                          required
                        />
                      </div>

                  
                      {/* <!-- Terms and Condition checkbox --> */}
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          required
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          I agree to the terms and conditions
                        </label>
                      </div>

                      {/* <!-- Submit button --> */}
                      <div className="d-grid gap-2 mb-2">
                        <button
                          type="submit"
                          className="btn btn-success fw-bold"
                        >
                          Get Started
                        </button>
                      </div>

                      {/* <!-- Already login --> */}
                      <div className="d-flex justify-content-center mb-4">
                        Already a member, click here for
                        <Link
                          to={"/login"}
                          className="ms-1 fw-bold"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}

export default Signup;
