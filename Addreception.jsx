import React, { useRef, useState } from 'react'
import WebService, { urls } from '../services/WebService'
import { useSelector } from 'react-redux'

export const Addreception = () => {
    const dinfo = useSelector(state=>state.Uinfo.value.msg)
    const val = useSelector(state=>state.reception.value)
    console.log(val)
    const [msg, setMsg] = useState("")

    var namebox = useRef()
    var phonebox = useRef()
    var mailbox = useRef()
    var passbox = useRef()
    var addBox = useRef()
    const addreception = async (event)=> {
    event.preventDefault()
    const ob = {
            name: namebox.current.value,
            email: mailbox.current.value,
            phoneNumber: phonebox.current.value,
            password: passbox.current.value,
            raddress: addBox.current.value
    }
    
    var recstatus = val.every((ob1)=>ob1.email !== ob.email)
    console.log(recstatus)
    if(recstatus){
    var response = await WebService.postrecCall(urls.AddReception,ob , dinfo) 
    setMsg(response.data.msg)
    console.log(response)
    console.log(ob)
    
    if(response.data.status) {
        console.log(response.data)
        event.target.reset() } 
    } else {
        setMsg("email id is already exits") 
    }
            

    }
  return (
    <>
    <div className="container-fluid py-5 my-2" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center my-4">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}} >New Reception</h1>
                <h1 className="position-absolute text-uppercase text-primary">Reception</h1>
            </div>
            <div className="row justify-content-center my-3">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form onSubmit={addreception}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                      ref={namebox}  required />
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="number" className="form-control p-4" minLength={10} maxLength={10} id="phone" placeholder="Your phone"
                                     ref={phonebox} required />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                      ref={mailbox}  required />
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="password" className="form-control p-4" id="password" placeholder="Your password"
                                      ref={passbox}  required />
                                </div>
                            </div> 
                            <div className="form-row mt-3">
                            <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" placeholder="Your Adderess"
                                      ref={addBox}  required />
                                </div>
                                <div className="control-group col-sm-6 p-4">
                              
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Add Reception</button>
                                </div>
                            </div>
                              <div className="mt-3">
                              <b>{msg}</b><br />
                              </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
