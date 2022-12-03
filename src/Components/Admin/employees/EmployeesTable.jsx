import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Config";


import AdminNav from "../Adm&Mess/AdminNav";
import AdminSidebar from "../Adm&Mess/AdminSidebar";

function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let employees = await axios.get(`${env.api}/employees`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    // console.log(employees) array is inside the data, so we are putting (employees.data)
    setEmployees(employees.data);
    setLoading(false);
  };

  let employeeDelete = async (id) => {
    try {
      let ask = window.confirm("Are you sure want to delete this employee?");
      if (ask) {
        let employee = await axios.delete(`${env.api}/employee/${id}`, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        loadData()
        toast.success("Employee deleted successfully")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <!-- employee Table --> */}
      <AdminSidebar />
      <AdminNav />
      <div className="container">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/createemployee"} className="btn btn-success btn-sm">
            Create employee
          </Link>
        </div>
        <div class="table-responsive mt-5" id="Employees">
          {loading ? (
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
                  <th>Employee Name</th>
                  <th>Mobile Number</th>
                  <th>Email address</th>
                  <th>Location</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{employee.employeeName}</td>
                      <td>{employee.mobileNumber}</td>
                      <td>{employee.emailAddress}</td>
                      <td>{employee.location}</td>
                      <td>{employee.position}</td>

                      <td>
                        <Link
                          to={`/employee/${employee._id}`}
                          className="btn btn-sm btn-primary me-2"
                        >
                          View
                        </Link>
                        {/* Above use panni iruka employee.id employee-map la get pandra employee, id array of objects la vara id */}

                        <Link
                          to={`/editemployee/${employee._id}`}
                          className="btn btn-sm btn-warning me-2"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => employeeDelete(employee._id)}
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

export default EmployeesTable;
