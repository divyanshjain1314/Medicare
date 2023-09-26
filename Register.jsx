import { useRef, useState } from "react"
import WebService, {urls} from "../services/WebService"


export default function Register() {
    var namebox = useRef()
    var phonebox = useRef()
    var mailbox = useRef()
    var passbox = useRef()
    const [msg,setMsg] = useState()
    var register = async (event) => {
        event.preventDefault()
       var ob = {
        name : namebox.current.value,
        phoneNumber : phonebox.current.value,
        email : mailbox.current.value,
        password : passbox.current.value,
       } 
       const response = await WebService.postApiCall(urls.REGISTER,ob);
       setMsg(response.data.msg)
       console.log(response.data)
       console.log(msg)
      
       event.target.reset()
    }


    return <>
    <div className="container-fluid py-5 my-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}} >Registeration</h1>
                <h1 className="position-absolute text-uppercase text-primary">User Register</h1>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form onSubmit={register}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                      ref={namebox}  required />
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="number" maxLength={10} minLength={10} className="form-control p-4" id="phone" placeholder="Your phone"
                                     ref={phonebox}   required />
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
                            
                                <div className="control-group col-sm-12 p-4">
                              
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Register</button>
                               
                                </div>
                            </div> 
                            
                            <b className="text-success"> {msg} </b>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}