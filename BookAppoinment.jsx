import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import WebService, { urls } from './services/WebService'

export default function BookAppoinment() {
    const dinfo = useSelector(state => state.Uinfo.value.msg)
    // console.log(dinfo)
    const [msg, setMsg] = useState("")
    var nameBox = useRef()
    var genBox = useRef()
    var phoneBox = useRef()
    var ageBox = useRef()
    var appointBox = useRef()
    var timeBox = useRef()
    var diseBox = useRef()

    const patient = async (event) => {
        event.preventDefault()
        var ob = {
            name: nameBox.current.value,
            sex: genBox.current.value,
            phoneNumber: phoneBox.current.value,
            age: ageBox.current.value,
            appointmentdate: appointBox.current.value,
            time: timeBox.current.value,
            daignosis: diseBox.current.value
        }
        const response = await WebService.postrecCall( urls.ADDPATIENT, ob, dinfo )
        setMsg(response.data.msg)
        console.log(response)

        console.log(msg)

        if (response.data.status)
            console.log(response.data)
            event.target.reset()


    }

  return <>
      <div className="container" >
         <div className="mt-5 text-center" >
               <h1>What we do</h1>
         </div>
      
            <div className="row mt-4" >
               <div className="col-sm-4 text-center">
                  <img src="images/icon-7.png" className='img-fluid' alt='img' />               
                  <h4 clasName="">Diabetes and obesity Counselling </h4>
               </div>
               <div className="col-sm-4 text-center">
                     <img src="images/icon-5.png" className='img-fluid' alt='img' />
                     <h4 clasName="">Obstetrics and Gynsecology</h4>
               </div>
               <div className="col-sm-4 text-center">
                     <img src="images/icon-6.png" className='img-fluid' alt='img' />
                     <h4 clasName="">Surgical and medical Oncology</h4>
               </div>
            </div>
        
               <div className="display-1 text-center my-5" >
               <h1 clasName="book_text">Book Appoinment</h1>
               </div>

         <div className="row" >
         <form onSubmit={patient}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="text" ref={nameBox} className="form-control bg-light" placeholder="Your Name" style={{ height: "55px" }}  />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <select type="text" required ref={genBox} className="form-control bg-light" placeholder="" style={{ height: "55px" }} >
                                    <option value="">Select Gender</option>
                                    <option >Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="number" ref={ageBox} className="form-control bg-light" placeholder="Your Age" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="number" ref={phoneBox} className="form-control bg-light" maxLength={10} minLength={10} placeholder="Mobile" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="text" ref={diseBox} className="form-control bg-light" placeholder="Your Disease" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="date" ref={appointBox} className="form-control bg-light" placeholder="Appointment Date" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 col-sm-6 my-3" >
                                <input required  type="time" ref={timeBox} className="form-control bg-light" placeholder="" style={{ height: "55px" }} />
                            </div>
                            <div className="col-12 my-3" >
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Reception</button>
                            </div>
                            <div class="alert alert-success" role="alert">
                            <b className='text-success'>{msg}</b>
                            </div>
                           
                            
                        </div>
                    </form>
         </div>
         </div>
      
       {/* <div clasName="col-sm-6">
               <div clasName="contact_box">
                  
                  
                  
                  <textarea clasName="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
               <div clasName="send_bt"><button className='btn btn-outline-primary'>SEND</button></div>
                  </div>
            </div>
         </div> */}
   </> }

           
      
   
   