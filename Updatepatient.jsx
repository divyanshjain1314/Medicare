import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WebService, { urls } from './services/WebService'
import { updatep } from './reducer/UpdatePatient'

export default function Updatepatient() {
    const dinfo = useSelector(state => state.Uinfo.value.msg)
    const datatoupdate = useSelector(state => state.updatep.value)
    const dispatch = useDispatch()
    console.log(datatoupdate)

    console.log("storedata", dinfo)
    const [msg, setMsg] = useState("")

    var nameBox = useRef()
    var genBox = useRef()
    var ageBox = useRef()
    var diseBox = useRef()
    var appointBox = useRef()
    var phoneBox = useRef()
    var timeBox = useRef()
   
    const updatepatient = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            sex: genBox.current.value,
            age: ageBox.current.value,
            daignosis: diseBox.current.value,
            appointmentdate: appointBox.current.value,
            phoneNumber: phoneBox.current.value,
            time: timeBox.current.value
        }
        console.log(ob)

        const URL = urls.UPDATEPATIENT + datatoupdate.id
        const response = await WebService.PutApiCall(URL, ob, dinfo)
        setMsg(response.data.msg)
        console.log(response)
        if (response.data.status) {
            dispatch(updatep(response.data.data))
        }
        event.target.reset() 
    }
  return (
    <>
     <div className="container" >        
               <div className="display-1 text-center my-5" >
               <h1 clasName="book_text">Update Patient</h1>
               </div>

         <div className="row" >
         <form onSubmit={updatepatient}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="text" ref={nameBox} defaultValue={datatoupdate.name} className="form-control bg-light" placeholder="Your Name" style={{ height: "55px" }}  />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <select type="text" required ref={genBox} defaultValue={datatoupdate.sex} className="form-control bg-light" placeholder="" style={{ height: "55px" }} >
                                    <option value="">Select Gender</option>
                                    <option >Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input disabled type="number" ref={ageBox} defaultValue={datatoupdate.age} className="form-control bg-light" placeholder="Your Age" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="text" ref={phoneBox} defaultValue={datatoupdate.phoneNumber} className="form-control bg-light" maxLength={10} minLength={10} placeholder="Mobile" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input disabled type="text" ref={diseBox} defaultValue={datatoupdate.daignosis} className="form-control bg-light" placeholder="Your Disease" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="date" ref={appointBox} defaultValue={datatoupdate.appointmentdate } className="form-control bg-light" placeholder="Appointment Date" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input disabled  type="time" ref={timeBox} defaultValue={datatoupdate.time} className="form-control bg-light" placeholder="" style={{ height: "55px" }} />
                            </div>
                            <div className="my-3" >
                                <button className="btn btn-primary w-100 py-3" type="submit">Update  Patient</button>
                            </div>
                            
                            
                        </div>
                        <div className='my-4 ml-auto' >
                            <b >{msg}</b>
                            </div>
                    </form>
         </div>
         </div>
   </>
  )
}
