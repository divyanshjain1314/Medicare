import { useRef, useState } from "react"
import WebService, { urls } from "../services/WebService"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { UpdateUinfo } from "../reducer/Slice"

export default function Login() {
    // doctor login 
    // email :  jain.divyansh3113@gmail.com
    // pass  :  12345
    // reception login 
    // email :  atishay@gmail.com
    // pass  :  12345
            const dispatch = useDispatch()
            const EmailBox = useRef()
            const PasswordBox =useRef()
            const navigate = useNavigate()

            const [ message, setMessage] = useState();

            const Login = async (event)=> {
                event.preventDefault()
                let ob = {
                    email : EmailBox.current.value,
                    password : PasswordBox.current.value
                }
                const response = await WebService.postApiCall(urls.LOGIN,ob);
                setMessage(response.data.msg)
                console.log(response.data)
                console.log(response.data.type)
                console.log(response.data.msg)
                if(response.data.status){
                    var info = { name: response.data.data.name , msg : response.data.msg ,isLogin : true,type : response.data.type}
                    console.log(info)
                    dispatch(UpdateUinfo(info))
                    event.target.reset() 
                    navigate("/Home")
                }    
            }
            
    return <>

    <div className="container-fluid py-5 my-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}}>Login</h1>
                <h2 className="position-absolute text-uppercase text-primary">User Login</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form onSubmit={Login} name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-12">
                                    <input type="email" ref={EmailBox} className="form-control p-4" id="email" placeholder="Your Email"
                                        required data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-12">
                                    <input type="password" ref={PasswordBox} className="form-control p-4" id="name" placeholder="Please enter your password"
                                        required data-validation-required-message="Please enter your password" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Login</button>
                                &nbsp;&nbsp;<b>{message}</b><br />
                                <div className="mt-2">
                                <b>D'ont have an account?<Link className="nav-link" to="/register">Sign up.</Link></b>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}