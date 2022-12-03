import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Config";


import AdminNav from "../Adm&Mess/AdminNav";
import AdminSidebar from "../Adm&Mess/AdminSidebar";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);


  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(`${env.api}/users`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    // console.log(users) array is inside the data, so we are putting (users.data)
    setUsers(users.data);
    setLoading(false);
  };

  let userDelete = async (id) => {
    try {
      let ask = window.confirm("Are you sure want to delete this user?");
      if (ask) {
        let user = await axios.delete(`${env.api}/user/${id}`, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        toast.success("User deleted successfully")
        loadData()
        
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {/* <!-- User Table --> */}
      <AdminSidebar />
      <AdminNav />
      <div className="container">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/createuser"} className="btn btn-success btn-sm">
            Create User
          </Link>
        </div>
        <div class="table-responsive mt-5" id="Users">
          {loading ?  (
            <div className="mx-auto" style={{ width: "200px" }}>
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table class="table table-hover shadow">
              <thead>
                <tr>
                  <th>#SI</th>
                  <th>Full name</th>
                  <th>Company Name</th>
                  <th>Mobile number</th>
                  <th>Email address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                {users.map((user, index) => {
                 
                 if(user.fullName)
                                 
                  return (
                  
                    <tr>
                      <td>{index}</td>
                      <td>{user.fullName}</td>
                      <td>{user.companyName}</td>
                      <td>{user.mobileNumber}</td>
                      <td>{user.emailAddress}</td>
                      <td>
                        <Link
                          to={`/user/${user._id}`}
                          className="btn btn-sm btn-primary me-2"
                        >
                          View
                        </Link>
                        {/* Above use panni iruka user.id user-map la get pandra user, id array of objects la vara id */}

                        <Link
                          to={`/edituser/${user._id}`}
                          className="btn btn-sm btn-warning me-2"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => userDelete(user._id)}
                          className="btn btn-sm btn-danger me-2 "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default UserTable;
