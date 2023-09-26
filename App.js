import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Nav from './Nav';
import Health from './Health'
import News from './News'
import Clientsection from './Clientsection'
import BookAppoinment from './BookAppoinment'
import { useDispatch, useSelector } from 'react-redux';
import { Addreception } from './Doctor/Addreception';
import Wrongpage from './Wrongpage';
import { Receptionlist } from './Receptionlist';
import DoctorHome from './Doctor/DoctorHome';
import PatientLists from './Doctor/PatientLists';
import { Updatereception } from './Updatereception';
import Updatepatient from './Updatepatient';
import Footer from './Footer';
import { useEffect } from 'react';
import WebService, { urls } from './services/WebService';
import { addReception } from './reducer/RecSlice';


export default function App() {
   useEffect(() => {
      // window.location.reload()
      loadReception()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatch = useDispatch()
  const loadReception = async () => {
   
   const response = await WebService.GetApiCall(urls.GETReception , Uinfo.msg)
   if (response.data.status) {
       // setReception(response.data.data)
       dispatch(addReception(response.data.data))
   }
   console.log(response.data)
}


   const Uinfo = useSelector(state=>state.Uinfo.value)
   return <>
   <Nav/>    
        <Routes >
            {Uinfo.isLogin ? <>
            <Route exact path='/' element = {<DoctorHome/>} />
            <Route exact path='/home' element = {<DoctorHome/>} />
            <Route exact path='/health' element = {<Health/>} />
            <Route exact path='/addreception' element = {<Addreception/>} />
            <Route exact path='/receptionlist' element = {<Receptionlist/>} />
            <Route exact path='/patientlist'  element = {<PatientLists/>} />
            <Route exact path='/updatereception' element = {<Updatereception/>} />
            <Route exact path='/updatepatient' element = {<Updatepatient/>} />

            <Route exact path='/news' element = {<News/>} />
            <Route exact path='/client' element = {<Clientsection/>} />
            <Route exact path='/BookAppoinment' element = {<BookAppoinment/>} />

         </> :
         <>
            <Route exact path='/' element = {<Home/>} />
            <Route exact path='/home' element = {<Home/>} />
            <Route exact path='/health' element = {<Health/>} />
            <Route exact path='/news' element = {<News/>} />
            <Route exact path='/login' element = {<Login/>} />
            <Route exact path='/register' element = {<Register/>} />
         </> }  

         <Route exact path='*' element = {<Wrongpage/>} />
                        
         </Routes>
   <Footer/>
   </>


};
