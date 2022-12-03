import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { env } from "../Config";

function Login() {

  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },

    onSubmit: async (values) => {
      // console.log(values);

      try {
        let loginData = await axios.post(`${env.api}/login`, values)
        // console.log(values)

        if(loginData.status === 200) {

          if(values.emailAddress === "admin123@gmail.com"){
            window.localStorage.setItem("app-token", loginData.data.token)
              navigate("/adminportal")
              toast.success("Admin logged in successfully")

          }
          else{
            window.localStorage.setItem("app-token", loginData.data.token)
            navigate("/userpage")
            toast.success("Logged in successfully")
          }
          
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
        
      }
    },
  });

  return (
    <> 
      <div className="modalBackground">
        <div className="container">
          <div className="row">
            <div className="mt-5 col-md-6 container">
              <div className="size">
                <div className="modalcolor">
                  <span className="mt-4 display-5 text-white d-flex justify-content-center">
                    Login
                  </span>

                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <form onSubmit={formik.handleSubmit}>
                            {/* <!-- Username --> */}
                            <div>
                              <label
                                for="emailAddress"
                                className="form-label text-white"
                              >
                                Email<span className="text-danger">*</span>
                              </label>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="emailAddress">
                                  <i className="fa-solid fa-envelope"></i>
                                </span>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter your email"
                                  value={formik.values.emailAddress}
                                  onChange={formik.handleChange}
                                  name="emailAddress"
                                  aria-label="email"
                                  aria-describedby="email"
                                />
                              </div>
                            </div>

                            {/* <!-- Password --> */}
                            <div className="my-2">
                              <label
                                for="exampleInputPassword1"
                                className="form-label text-white"
                              >
                                Password<span className="text-danger">*</span>
                              </label>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="password"
                                >
                                  <i className="fa-solid fa-key"></i>
                                </span>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Enter your password"
                                  value={formik.values.password}
                                  onChange={formik.handleChange}
                                  name="password"
                                  aria-label="password"
                                  aria-describedby="password"
                                  maxlength="15"
                                  required
                                />
                              </div>
                            </div>

                            {/* <!-- Submit button --> */}
                            <div className="d-grid gap-2 pb-3">
                              <button
                                type="submit"
                                className="btn btn-success text-white"
                              >
                                <i className="fa-solid fa-lock"></i> Login
                              </button>
                              {/* <Link
                                to={"/forgotpassword"}
                                className="fw-bolder mx-auto p-2"
                              >
                                Forgot Password?
                              </Link> */}
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
        </div>
        <div></div>
      </div>
    </>
  );
 
}

export default Login;
