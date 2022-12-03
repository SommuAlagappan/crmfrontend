import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Authetication/Signup';
import Userpage from './Components/Userpage';
import Adminportal from './Components/Admin/Adm&Mess/Adminportal';
import UserTable from './Components/Admin/users/UserTable';
import CreateUser from './Components/Admin/users/CreateUser';
import EmployeesTable from './Components/Admin/employees/EmployeesTable';
import CreateEmployee from './Components/Admin/employees/CreateEmployee';
import MessagesTable from './Components/Admin/Adm&Mess/MessagesTable';
import ViewUser from './Components/Admin/users/ViewUser';
import EditUser from './Components/Admin/users/EditUser';
import ViewEmployee from './Components/Admin/employees/ViewEmployee';
import EditEmployee from './Components/Admin/employees/EditEmployee';
import Login from './Components/Authetication/Login';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './Components/Authetication/ProtectedRoutes';



function App() {
  return(<>
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<Signup/>}/>
  <Route path='login' element={<Login/>}/>
  

  <Route element={<ProtectedRoutes/>}>
  <Route path='userpage' element={<Userpage/>}/>
  <Route path='adminportal' element={<Adminportal />}/>

  <Route path='users' element={<UserTable />}/>
  <Route path='createuser' element={<CreateUser/>}/>
  <Route path='user/:id' element={<ViewUser />}/>
  <Route path='edituser/:id' element={<EditUser />}/>

  <Route path='employees' element={<EmployeesTable />}/>
  <Route path='createemployee' element={<CreateEmployee />}/>
  <Route path='employee/:id' element={<ViewEmployee />}/>
  <Route path='editemployee/:id' element={<EditEmployee />}/>

  <Route path='messages' element={<MessagesTable />}/>

  </Route>
  </Routes>
  <ToastContainer />
  </BrowserRouter>
    
    
    </> )
 
}

export default App;
