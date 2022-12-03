import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { env } from '../../Config';

import AdminNav from './AdminNav'
import AdminSidebar from './AdminSidebar'

function MessagesTable() {

    const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let messages = await axios.get(`${env.api}/messages`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    // console.log(employees) array is inside the data, so we are putting (employees.data)
    setMessages(messages.data);
    setLoading(false);
  };


  return (<>
  <AdminSidebar/>
   <AdminNav/>
  
  <div className="container">
    <div class="table-responsive mt-5"  id="Messages">
           {
            loading ? (
                <div className="mx-auto" style={{ width: "200px" }}>
                <div class="spinner-grow text-primary" role="status">
                 <span class="visually-hidden">Loading...</span>
                </div>
                </div>
              ) : ( <table class="table table-hover shadow">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Email address</th>
                      <th>Message</th>
              
                  </tr>
              </thead>
              <tbody>
              {messages.map((message, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{message.fullName}</td>
                    <td>{message.emailAddress}</td>
                    <td>{message.message}</td>
              
                  </tr>
               );
              })}
              </tbody>
              
              </table>
           )}
                   </div>
  </div>
  </>)
}

export default MessagesTable


