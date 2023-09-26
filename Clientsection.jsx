import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

export default function Clientsection() {
  return (
   <>
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
  )
}
