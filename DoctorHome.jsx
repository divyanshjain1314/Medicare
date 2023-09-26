// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import Health from "../Health";
import Knowledge from "../Knowledge";
import News from "../News";
import Carausel from "../component/Carausel";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
export default function DoctorHome() {
   const uinfo = useSelector(state=>state.Uinfo.value)
    return <>
 {/* <div className="header_section">     
      <div id="main_slider" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="banner_section">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Health <br /><span style={ {color : "#151515"} }>Care</span></h1>
                           <p className="banner_text">Welcome {uinfo.name}</p>
                           <div className="btn_main">
                              {uinfo.type === 'doctor' ? <>
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              <div className="contact_bt"><Link to="/addreception">Add Reception</Link></div>
                              </> : ""}
                              {uinfo.type === 'reception' ? <>
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              <div className="contact_bt"><Link to="/Addpatient">Add Reception</Link></div>
                              </> : ""}
                             
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="image_1"><img src="images/img-1.png" alt='img' /></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
             <div className="carousel-item">
               <div className="banner_section">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Health <br /><span style={{ color: "#151515"}} >Care</span></h1>
                           <p className="banner_text">There are many variations of passages of Lorem Ipsum</p>
                           <div className="btn_main">
                              <div className="more_bt"><Link className="nav-link" to="/contact"> Contact Now</Link></div>
                              <div className="contact_bt"><Link to="">Book Appoinment</Link></div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="image_1"><img src="images/img-1.png" alt='img' /></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           
         </div>
         <Link className="carousel-control-prev" to="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style={{ fontSize :"24px", paddingTop: "4px"}}></i>
         </Link>
         <Link className="carousel-control-next" to="#main_slider" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style={{fontSize:"24px", paddingTop : "4px"}}></i>
         </Link>
      </div>
   </div> */}
   <Carausel/>
   <Health/>
   <Knowledge/>
   <News/>
   {uinfo.type === "reception" ? <>
   <div class="contact_section layout_padding">
      <div class="container">
         <h1 class="contact_taital">What we do</h1>
         <div class="news_section_2">
            <div class="row">
               <div class="col-md-6">
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-7.png" alt="img" /></div>
                     <h4 class="diabetes_text">Diabetes and obesity Counselling </h4>
                  </div>
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-5.png" alt="img" /></div>
                     <h4 class="diabetes_text">Obstetrics and Gynsecology</h4>
                  </div>
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-6.png" alt="img" /></div>
                     <h4 class="diabetes_text">Surgical and medical Oncology</h4>
                  </div>
               </div>
               <div class="col-md-6" style={{zIndex:"1"}} >
                  <div class="contact_box">
                     <h1 class="book_text">Book Appoinment</h1>
                     <input type="text" class="Email_text" placeholder="Name" name="Name" />
                     <input type="text" class="Email_text" placeholder="Name" name="Name" />
                     <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                     <div class="send_bt"><Link to="/bookAppoinment">Book Appoinment</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </> : <>"" </> }
    </>
}