import { configureStore } from "@reduxjs/toolkit";
import receptionlistReducer from "./reducer/RecSlice";
import  doctorReducer  from "./reducer/DoctorSlice";
import userReducer from "./reducer/Slice"
import addPatient from "./reducer/PatientSlice"
import UpdateSlice from "./reducer/UpdateSlice";
import updatepslice from "./reducer/UpdatePatient";

const store = configureStore({
     reducer : {
        Uinfo : userReducer,
        reception : receptionlistReducer,
        patient: addPatient,
        doctor: doctorReducer,
        updaterecp : UpdateSlice,
        updatep : updatepslice
     }
});

store.subscribe(()=>{
   const { name, msg, isLogin, type} = store.getState().Uinfo.value
   const savedata = JSON.stringify({ name, msg, isLogin, type})
   localStorage.setItem('mydata', savedata)
})
export default store;