import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { env } from "../../Config";


function ViewEmployee() {
  const params = useParams();
  // console.log(params)
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    loadEmployee();
  }, []);

  let loadEmployee= async () => {
    try {
      let employee = await axios.get(`${env.api}/employee/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      setEmployeeData(employee.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-light sticky-top">
        <span className="navbar-brand text-black fs-2 fw-bold mx-auto">
          SUPERFAST ADMIN
        </span>
      </nav>

      <form className="p-5 col-lg-3 container">
        <p className="h2 text-center desb p-1 mb-3">Employee Details</p>

        <label>
          <b>Employee Name</b>
        </label>
        <div className="form-control mb-2 hei">{employeeData.employeeName}</div>

        <label>
          <b>Location</b>
        </label>
        <div className="form-control mb-2 hei">{employeeData.location}</div>

        <label>
          <b>Email address</b>
        </label>
        <div className="form-control mb-2 hei">{employeeData.emailAddress}</div>

        <label>
          <b>Mobile Number</b>
        </label>
        <div className="form-control mb-2 hei">{employeeData.mobileNumber}</div>

        <label>
          <b>Position</b>
        </label>
        <div className="form-control mb-2 hei">{employeeData.position}</div>

      </form>

    
    </>
  );
}



export default ViewEmployee;