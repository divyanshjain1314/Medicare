import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Carausel() {
    const uinfo = useSelector(state=>state.Uinfo.value)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item interval={3000}>
<div className="header_section">     
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="banner_section">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Health <br /><span style={ {color : "#151515"} }>Care</span></h1>
                           {uinfo.isLogin? <><p className="banner_text">Welcome {uinfo.name}</p></>:
                           <><p className="banner_text">Welcome</p></>}
                           
                           <div className="btn_main">
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              {uinfo.isLogin ? <>
                                {uinfo.type === "reception" ? <>
                              <div className="contact_bt"><Link to="/bookAppoinment">Book Appoinment</Link></div></>:
                              <></>}
                              {uinfo.type === "doctor" ? <>
                              <div className="contact_bt"><Link to="/addreception">Add Reception</Link></div></>:
                              <></>}
                              </> : <>
                              <div className="contact_bt"><Link to="/login">Book Appoinment</Link></div>
                              </>}
                             
                            
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
    </div>   
</div>   
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
<div className="header_section">     
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="banner_section">
                  <div className="container">
                  <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Health <br /><span style={ {color : "#151515"} }>Care</span></h1>
                           {uinfo.isLogin? <><p className="banner_text">Welcome {uinfo.name}</p></>:
                           <><p className="banner_text">Welcome</p></>}
                           
                           <div className="btn_main">
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              {uinfo.isLogin ? <>
                                {uinfo.type === "reception" ? <>
                              <div className="contact_bt"><Link to="/bookAppoinment">Book Appoinment</Link></div></>:
                              <></>}
                              {uinfo.type === "doctor" ? <>
                              <div className="contact_bt"><Link to="/addreception">Add Reception</Link></div></>:
                              <></>}
                              </> : <>
                              <div className="contact_bt"><Link to="/login">Book Appoinment</Link></div>
                              </>}
                             
                            
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
    </div>   
</div>   
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
<div className="header_section">     
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="banner_section">
                  <div className="container">
                  <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Health <br /><span style={ {color : "#151515"} }>Care</span></h1>
                           {uinfo.isLogin? <><p className="banner_text">Welcome {uinfo.name}</p></>:
                           <><p className="banner_text">Welcome</p></>}
                           
                           <div className="btn_main">
                              <div className="more_bt"><Link className="nav-link" to=""> Contact Now</Link></div>
                              {uinfo.isLogin ? <>
                                {uinfo.type === "reception" ? <>
                              <div className="contact_bt"><Link to="/bookAppoinment">Book Appoinment</Link></div></>:
                              <></>}
                              {uinfo.type === "doctor" ? <>
                              <div className="contact_bt"><Link to="/addreception">Add Reception</Link></div></>:
                              <></>}
                              </> : <>
                              <div className="contact_bt"><Link to="/login">Book Appoinment</Link></div>
                              </>}
                             
                            
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
    </div>   
</div>   
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
  );
}

export default Carausel;