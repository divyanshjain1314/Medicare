import { Link } from "react-router-dom";
import Carausel from "./Carausel";
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
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
                           <p className="banner_text">Welcome</p>
                           <div className="btn_main">
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              <div className="contact_bt"><Link to="/login">Book Appoinment</Link></div>
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

   <div className="health_section layout_padding">
      <div className="container">
         <h1 className="health_taital">Best Of Health care for you</h1>
         <p className="health_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
         <div className="health_section layout_padding">
            <div className="row">
               <div className="col-sm-7">
                  <div className="image_main">
                     <div className="main">
                        <img src="images/img-2.png" alt="Avatar" className="image" style={{width:"100%"}} />
                     </div>
                     <div className="middle">
                        <div className="text"><img src="images/icon-1.png" style={{width:"40px"}} alt="img" /></div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-5">
                  <div className="image_main_1">
                     <div className="main">
                        <img src="images/img-3.png" alt="Avatar" className="image" style={{width:"100%"}} />
                     </div>
                     <div className="middle">
                        <div className="text"><img src="images/icon-1.png" style={{width:"40px"}} alt="img"/></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="getquote_bt_1"><Link to="/">Read More <span><img src="images/right-arrow.png" alt="img" /></span></Link></div>
         </div>
      </div>
   </div>

   <div className="knowledge_section layout_padding">
      <div className="container">
         <div className="knowledge_main">
            <div className="left_main">
               <h1 className="knowledge_taital">Knowledge of center</h1>
               <p className="knowledge_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="right_main">
               <div className="play_icon"><Link to="/"><img src="images/play-icon.png" alt="img" /></Link></div>
            </div>
         </div>
      </div>
   </div>

   <div className="news_section layout_padding">
         <div className="container">
            <h1 className="health_taital">Why choose 24hr home care</h1>
            <p className="health_text">labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="news_section_2 layout_padding">
               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="box_main">
                        <div className="icon_1"><img src="images/icon-2.png" alt="img" /></div>
                        <h4 className="daily_text">Daily care experts</h4>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                     <div className="box_main active">
                        <div className="icon_1"><img src="images/icon-3.png" alt="img" /></div>
                        <h4 className="daily_text_1">Available 24/7</h4>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                     <div className="box_main">
                        <div className="icon_1"><img src="images/icon-4.png" alt="img" /></div>
                        <h4 className="daily_text_1">Balanced care</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div className="getquote_bt"><Link to='/'>Get A Quote <span><img src="images/right-arrow.png" alt="img" /></span></Link></div>
         </div>
      </div>

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
                     <div class="send_bt"><Link to="/login">SEND</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

      <Carousel>
         <Carousel.Item interval={1000}>
      <div className="client_section layout_padding">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="container">
                  <h1 className="client_taital">What People Say</h1>
                  <p className="client_text">It is a long established fact that a reader will be distracted </p>
                  <div className="client_section_2">
                     <div className="client_left">
                        <div><img src="images/client-img.png" className="client_img" alt="img" /></div>
                     </div>
                     <div className="client_right">
                        <h3 className="distracted_text">Distracted by</h3>
                        <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <div className="quote_icon"><img src="images/quote-icon.png" alt="img" /></div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            <Link className="carousel-control-prev" to="/" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
         <Link className="carousel-control-next" to="/" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
            </div>
            </div>
            </Carousel.Item>
         <Carousel.Item interval={1000}>
      <div className="client_section layout_padding">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="container">
                  <h1 className="client_taital">What People Say</h1>
                  <p className="client_text">It is a long established fact that a reader will be distracted </p>
                  <div className="client_section_2">
                     <div className="client_left">
                        <div><img src="images/client-img.png" className="client_img" alt="img" /></div>
                     </div>
                     <div className="client_right">
                        <h3 className="distracted_text">Distracted by</h3>
                        <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <div className="quote_icon"><img src="images/quote-icon.png" alt="img" /></div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            <Link className="carousel-control-prev" to="/" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
         <Link className="carousel-control-next" to="/" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
            </div>
            </div>
            </Carousel.Item>
         <Carousel.Item interval={1000}>
      <div className="client_section layout_padding">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="container">
                  <h1 className="client_taital">What People Say</h1>
                  <p className="client_text">It is a long established fact that a reader will be distracted </p>
                  <div className="client_section_2">
                     <div className="client_left">
                        <div><img src="images/client-img.png" className="client_img" alt="img" /></div>
                     </div>
                     <div className="client_right">
                        <h3 className="distracted_text">Distracted by</h3>
                        <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <div className="quote_icon"><img src="images/quote-icon.png" alt="img" /></div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            <Link className="carousel-control-prev" to="/" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
         <Link className="carousel-control-next" to="/" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style= {{fontSize:"24px",paddingTop:"4px"}} ></i>
         </Link>
            </div>
            </div>
            </Carousel.Item>
           
   </Carousel>
  
    </>
}


