import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UpdateUinfo } from './reducer/Slice';

export default function Nav() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const uinfo = useSelector(state=>state.Uinfo.value)
   let Logout = () => {
      var confir = window.confirm("Are You Sure You want to logout ?")
      if (confir) {
         dispatch(UpdateUinfo({
            name : undefined,
            token : undefined,
            isLogin : false,
            type : undefined
         }))
         navigate("/")
         }
   }
  return <div>     
    <nav className="navbar navbar-expand-lg bg-light" >
         <div className="logo w-25"><Link to="/home"><img src="images/logo.png" alt='logo' /></Link></div>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {uinfo.isLogin ? <>
            {uinfo.type === 'doctor'?<>
               <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="health">Health</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="addreception">Addreception</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="receptionlist">Receptionlist</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="patientlist">Patientlist</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="news">News</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="client">Client</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to=""><img src="images/search-icon.png" alt='search icon' /></Link>
               </li> 
               <li className="nav-item">
               <b onClick={Logout} className="nav-link btn">Logout</b>
               </li>
            </> : "" }
            {uinfo.type === 'reception'?<>
            <li className="nav-item active">
                  <Link className="nav-link" to="/home">Home</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="health">Health</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="patientlist">Patientlist</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="news">News</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="client">Client</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="bookAppoinment">BookAppoinment</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to=""><img src="images/search-icon.png" alt='search icon' /></Link>
               </li> 
               <li className="nav-item">
               <b onClick={Logout} className="nav-link btn btn-outline-primary">Logout</b>
               </li>
            </> : <></> }
</> : <>       
               <li className="nav-item">
               <Link to="/" className=" nav-link ">Home</Link>
               </li>&nbsp;
               <li className="nav-item">
               <Link to="/health" className=" nav-link ">Health</Link>
               </li>&nbsp;
               <li className="nav-item">
               <Link to="/news" className=" nav-link ">News</Link>
               </li>&nbsp;
               <li className="nav-item">
               <Link to="/login" className=" nav-link ">Login</Link>
               </li>&nbsp;
               <li className="nav-item">
               <Link to="/register" className="nav-link ">Register</Link>
               </li>
               
               </> }
            </ul>
         </div>
      </nav>
  
    </div>
  
}
