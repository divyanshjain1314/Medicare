import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WebService, { urls } from './services/WebService'
import { updateRecp } from './reducer/UpdateSlice'


export const Updatereception = () => {
    const dinfo = useSelector(state => state.Uinfo.value.msg)
    const datatoupdate = useSelector(state => state.updaterecp.value)
    const dispatch = useDispatch()
    console.log(datatoupdate)

    console.log("storedata", dinfo)
    const [msg, setMsg] = useState("")

    var nameBox = useRef()
    var phoneBox = useRef()
    var passBox = useRef()
    var newpassBox = useRef()
   
    const updaterecp = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            oldPassword: passBox.current.value,
            password: newpassBox.current.value
        }
        console.log(ob)

        const URL = urls.UPDATERECEP + datatoupdate.id
        const response = await WebService.PutApiCall(URL, ob, dinfo)
        setMsg(response.data.msg)
        console.log(response)
        if (response.data.status) {
            dispatch(updateRecp(response.data.data))
        }
        event.target.reset()



    }
  return (
    
    <>
     <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}} >Update Reception</h1>
                <h1 className="position-absolute text-uppercase text-primary">Reception</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form onSubmit={updaterecp}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" defaultValue={datatoupdate.name} className="form-control p-4" id="name" placeholder="Your Name"
                                      ref={nameBox}   />
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="text" defaultValue={datatoupdate.phoneNumber} className="form-control p-4" id="phone" placeholder="Your phone"
                                     ref={phoneBox}     />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="control-group col-sm-6">
                                    <input type="password" defaultValue={datatoupdate.password} className="form-control p-4" id="password" placeholder="Old password"
                                      ref={passBox}    />
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="password" className="form-control p-4" id="password" placeholder="New password"
                                      ref={newpassBox}    />
                                </div>
                            </div> 
                            <div className="form-row mt-3">
                            <div className="control-group col-sm-6">
                                </div>
                                <div className="control-group col-sm-6 p-4">
                              
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Update Reception</button>
                               
                                </div>
                                <b>{msg}</b>
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
