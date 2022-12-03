import axios from "axios";
import { useFormik } from "formik";
import React, { isValidElement } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Config";


function CreateEmployee() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      employeeName: "",
      mobileNumber: "",
      emailAddress: "",
      location:"",
      position: ""
    },

    validate: (values) => {
        let errors = {};
  
        if (values.employeeName === "" && values.employeeName.length < 5) {
          errors.employeeName = "Please enter the full name";
        }
        if (values.mobileNumber === "") {
          errors.mobileNumber = "Provide a valid mobile number";
        }
        if (values.emailAddress === "") {
          errors.emailAddress = "Provide a valid email address";
        }
        if (values.location === "") {
          errors.location = "Provide your location";
        }
        if (values.position === "") {
          errors.position = "Choose a position";
        }
        return errors;
      },


    onSubmit: async (values) => {
   console.log(values)
    let employees = await axios.post(`${env.api}/employee`, values, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        toast.success("Employee added successfully");
        navigate("/employees");
      },
    })

  return (
    <>
      <nav className="navbar navbar-dark bg-light sticky-top">
        <span className="navbar-brand text-black fs-2 fw-bold mx-auto">
          SUPERFAST ADMIN
        </span>
      </nav>

      <form onSubmit={formik.handleSubmit} className="p-5 col-lg-3 container">
        <p className="h1 text-center desb mb-3 p-1">Add Employee</p>
        <div className="mt-1">
        <label for="employeeName">Employee Name</label>
        <input
          className="form-control"
          id="employeeName"

          name="employeeName"
          onChange={formik.handleChange}
          value={formik.values.employeeName}
        />
        <span style={{ color: "red" }}>{formik.errors.employeeName}</span>
        </div>
  
        <div className="mt-2">
        <label for="mobileNumber">Mobile number</label>
        <input
          className="form-control"
          type={"number"}
          id="mobileNumber"
          name="mobileNumber"
          minLength={10}
          onChange={formik.handleChange}
          value={formik.values.mobileNumber}
        />
        <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>
        </div>

        <div className="mt-2">
        <label for="emailAddress">Email address</label>
        <input
          className="form-control"
          id="emailAddress"
          type={"email"}
          name="emailAddress"
        
          onChange={formik.handleChange}
          value={formik.values.emailAddress}
        />
        <span style={{ color: "red" }}>{formik.errors.emailAddress}</span>
        </div>

        <div className="mt-2">
        <label for="location">Location</label>
        <input
          className="form-control"
          id="location"
          name="location"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
        <span style={{ color: "red" }}>{formik.errors.location}</span>
        </div>

        <div className="mt-2">
        <label for="position">Position</label>
        <select
          
          className="form-select"
          aria-label="Default select example"
         
          
          name="position"
          onChange={formik.handleChange}
          value={formik.values.position}>

          <option value="">Open this to select position</option>
          <option value="Testing">Testing</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="UI/UX Desginer">UI/UX Desginer</option>
          <option value="Node.js developer">Node.js developer</option>
          <option value="Devops">Devops</option>
          <option value="React developer">React developer</option>
        </select>
        <span style={{ color: "red" }}>{formik.errors.position}</span>
        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-success" disabled={!formik.isValid} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateEmployee;
