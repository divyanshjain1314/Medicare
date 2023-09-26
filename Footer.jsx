import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return ( 
  <>
   <div className="footer_section layout_padding">
      <div className="container">
         <div className="row">
            <div className="col-lg-3 col-sm-6">
               <div className="footer_logo"><Link to='/'><img src="images/footer-logo.png" alt='img' /></Link></div>
               <h1 className="adderss_text">Contact Us</h1>
               <div className="map_icon"><img src="images/map-icon.png" alt='img' /><span className="paddlin_left_0">Indore (mp)</span></div>
               <div className="map_icon"><img src="images/call-icon.png" alt='img' /><span className="paddlin_left_0">+918305216438</span></div>
               <div className="map_icon"><img src="images/mail-icon.png" alt='img' /><span className="paddlin_left_0">jain.divyansh3113@gmail.com</span></div>
            </div>
            <div className="col-lg-3 col-sm-6">
               <h1 className="adderss_text">Doctors</h1>
               <div className="hiphop_text_1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</div>
            </div>
            <div className="col-lg-3 col-sm-6">
               <h1 className="adderss_text">Useful Links</h1>
               <div className="Useful_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered ,</div>
            </div>
            <div className="col-lg-3 col-sm-6">
               <h1 className="adderss_text">Newsletter</h1>
               <input type="text" className="Enter_text" placeholder="Enter your Email" name="Enter your Emil" />
               <div className="subscribe_bt"><Link to='/'>Subscribe</Link></div>
               <div className="social_icon">
                  <ul>
                     <li><Link to='/'><img src="images/fb-icon.png" alt='img' /></Link></li>
                     <li><Link to='/'><img src="images/twitter-icon.png" alt='img' /></Link></li>
                     <li><Link to='/'><img src="images/linkedin-icon.png" alt='img' /></Link></li>
                     <li><Link to='/'><img src="images/instagram-icon.png" alt='img' /></Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="copyright_section">
      <div className="container">
         <p className="copyright_text">2023 All Rights Reserved. Design and Develope by <Link to="/">Divyansh jain </Link></p>
      </div>
   </div>
   </>
  )
}
