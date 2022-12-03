import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Config";



function EditUser() {
  const params = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName:"",
      mobileNumber: "",
      emailAddress: "",
    },

    validate: (values) => {
      let errors = {};

      if (values.fullName === "") {
        errors.fullName = "Please enter your Full name";
      }
      if (values.companyName === "") {
        errors.companyName = "Please enter your company name";
      }
      if (values.mobileNumber === "") {
        errors.mobileNumber = "Please enter your Mobile number";
      }
      if (values.emailAddress === "") {
        errors.emailAddress = "Please enter your Email address";
      }

      return errors;
    },
    // Only when the validate function is Success, onSumit will call

    onSubmit: async (values) => {
      // console.log(values);
      let user = await axios.put(`${env.api}/user/${params.id}`, values, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      toast.success("User details updated")
      navigate("/users");
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/user/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });

      formik.setValues({
        fullName: user.data.fullName,
        companyName: user.data.companyName,
        mobileNumber: user.data.mobileNumber,
        emailAddress: user.data.emailAddress,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-light sticky-top">
        <span className="navbar-brand text-black fs-2 fw-bold mx-auto">
          SUPERFAST ADMIN
        </span>
      </nav>

      <form onSubmit={formik.handleSubmit} className="p-5 col-lg-3 container">
        {/* handleSubmit is calling the onSubmit  */}
        <p className="h2 text-center desb p-1 mb-3"> Edit User Details</p>

        <label for="fn" className="form-label">
          Full Name<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-user"></i>
          </span>
          <input
            className="form-control"
            id="fn"
            type={"text"}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            name="fullName"
          />
        </div>
        <span style={{ color: "red" }}>{formik.errors.fullName}</span>
        {/* here name la given value yum, initial value la fullname should be same,ony then formik will update  */}
        
        <label for="companyName" className="form-label mt-2">
          Company Name<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-user"></i>
          </span>
          <input
            className="form-control"
            id="companyName"
            type={"text"}
            value={formik.values.companyName}
            onChange={formik.handleChange}
            name="companyName"
          />
        </div>
        <span style={{ color: "red" }}>{formik.errors.companyName}</span>

        <label for="mn" className="form-label mt-2">
          Mobile Number<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </span>
          <input
            className="form-control"
            id="mn"
            type={"number"}
            maxlength="13"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            name="mobileNumber"
          />
        </div>
        <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>

        <label for="email" className="form-label mt-2">
          Email Address<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <input
            className="form-control"
            id="email"
            type={"email"}
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            name="emailAddress"
          />
        </div>
        <span style={{ color: "red" }}>{formik.errors.emailAddress}</span>

        <div className="d-grid gap-2 mt-4">
          <button
            className="btn btn-success"
            type={"submit"}
            value="Submit"
            disabled={!formik.isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditUser;
