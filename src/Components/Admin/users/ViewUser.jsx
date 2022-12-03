import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { env } from "../../Config";



function ViewUser() {
  const params = useParams();
  // console.log(params)
  const [userData, setUserData] = useState({});

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
      // console.log(user.data)
      setUserData(user.data);
    } catch (error) {}
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-light sticky-top">
        <span className="navbar-brand text-black fs-2 fw-bold mx-auto">
          SUPERFAST ADMIN
        </span>
      </nav>

      <form className="p-5 col-lg-3 container">
        <p className="h1 text-center desb p-1 mb-3">User Details</p>

        <label>
          <b>Full Name</b>
        </label>
        <div className="form-control mb-2 hei">{userData.fullName}</div>
        <label>
          <b>Company Name</b>
        </label>
        <div className="form-control mb-2 hei">{userData.companyName}</div>

        <label>
          <b>Mobile Number</b>
        </label>
        <div className="form-control mb-2 hei">{userData.mobileNumber}</div>

        <label>
          <b>Email address</b>
        </label>
        <div className="form-control mb-2 hei">{userData.emailAddress}</div>

      </form>

      {/* Here we cant map, because inga irukathe ore object than.. like one object for one user information */}
    </>
  );
}

export default ViewUser;
