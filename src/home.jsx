import React, { useState } from 'react';
import axios from 'axios';


function Home(){

    


    return (
        <div>
        <div className="banner_bg_main">
      
        <div className="container">
           <div className="header_section_top">
              <div className="row">
                 <div className="col-sm-12">
                    <div className="custom_menu">
                       <ul>
                          <li><a href="#">Best Sellers</a></li>
                          <li><a href="#">Gift Ideas</a></li>
                          <li><a href="#">New Releases</a></li>
                          <li><a href="#">Today's Deals</a></li>
                          <li><a href="#">Customer Service</a></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    
        <div className="logo_section">
           <div className="container">
              <div className="row">
                 <div className="col-sm-12">
                    <div className="logo"><a href="index.html"><img src="./logo.png"/></a></div>
                 </div>
              </div>
           </div>
        </div>
       
        <div className="header_section">
           <div className="container">
              <div className="containt_main">
                 <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                    <a href="index.html">Home</a>
                    <a href="fashion.html">Fashion</a>
                    <a href="electronic.html">Electronic</a>
                    <a href="jewellery.html">Jewellery</a>
                 </div>
                 <span className="toggle_icon" onclick="openNav()"><img src="images/toggle-icon.png"/></span>
                 <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <a className="dropdown-item" href="#">Action</a>
                       <a className="dropdown-item" href="#">Another action</a>
                       <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                 </div>
                 <div className="main">
          
                    <div className="input-group">
                       <input type="text" className="form-control" placeholder="Search this blog"/>
                       <div className="input-group-append">
                          <button className="btn btn-secondary" type="button"  style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}>
                          <i className="fa fa-search"></i>
                          </button>
                       </div>
                    </div>
                 </div>
                 <div className="header_box">
                    <div className="lang_box ">
                       <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                       <img src="images/flag-uk.png" alt="flag" className="mr-2 " title="United Kingdom"/> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                       </a>
                       <div className="dropdown-menu ">
                          <a href="#" className="dropdown-item">
                          <img src="images/flag-france.png" className="mr-2" alt="flag"/>
                          French
                          </a>
                       </div>
                    </div>
                    <div className="login_menu">
                       <ul>
                          <li><a href="#">
                             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                             <span className="padding_10">Cart</span></a>
                          </li>
                          <li><a href="#">
                             <i className="fa fa-user" aria-hidden="true"></i>
                             <span className="padding_10">Cart</span></a>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     
        <div className="banner_section layout_padding">
           <div className="container">
              <div id="my_slider" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                    <div className="carousel-item active">
                       <div className="row">
                          <div className="col-sm-12">
                             <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                             <div className="buynow_bt"><a href="./dist/index.html">Buy Now</a></div>
                          </div>
                       </div>
                    </div>
                    <div className="carousel-item">
                       <div className="row">
                          <div className="col-sm-12">
                             <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                             <div className="buynow_bt"><a href="./dist/index.html">Buy Now</a></div>
                          </div>
                       </div>
                    </div>
                    <div className="carousel-item">
                       <div className="row">
                          <div className="col-sm-12">
                             <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                             <div className="buynow_bt"><a href="./dist/index.html">Buy Now</a></div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                 <i className="fa fa-angle-left"></i>
                 </a>
                 <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                 <i className="fa fa-angle-right"></i>
                 </a>
              </div>
           </div>
        </div>
  
     </div>
  
     <div className="fashion_section">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <div className="container">
                    <h1 className="fashion_taital">Man & Woman Fashion</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man T -shirt</h4>
                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/tshirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man -shirt</h4>
                                <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/dress-shirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Woman Scart</h4>
                                <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Man & Woman Fashion</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man T -shirt</h4>
                                <p className="price_text">Price  <span style={{color: "#262626;"}}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/tshirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man -shirt</h4>
                                <p className="price_text">Price  <span style={{color: "#262626;"}}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/dress-shirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Woman Scart</h4>
                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Man & Woman Fashion</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man T -shirt</h4>
                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/tshirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Man -shirt</h4>
                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/dress-shirt-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Woman Scart</h4>
                                <p className="price_text">Price  <span style={{ color: "#262626" }}>$ 30</span></p>
                                <div className="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
           <i className="fa fa-angle-left"></i>
           </a>
           <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
           <i className="fa fa-angle-right"></i>
           </a>
        </div>
     </div>
   
     <div className="fashion_section">
        <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Laptop</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/laptop-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Mobile</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/mobile-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Computers</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/computer-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Laptop</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/laptop-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Mobile</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/mobile-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Computers</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/computer-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Laptop</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/laptop-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Mobile</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/mobile-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Computers</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="electronic_img"><img src="images/computer-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
           <i className="fa fa-angle-left"></i>
           </a>
           <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
           <i className="fa fa-angle-right"></i>
           </a>
        </div>
     </div>

     <div className="jewellery_section">
        <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <div className="container">
                    <h1 className="fashion_taital">Jewellery Accessories</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Jumkas</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/jhumka-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Necklaces</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/neklesh-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Kangans</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/kangan-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Jewellery Accessories</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Jumkas</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/jhumka-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Necklaces</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/neklesh-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Kangans</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/kangan-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="carousel-item">
                 <div className="container">
                    <h1 className="fashion_taital">Jewellery Accessories</h1>
                    <div className="fashion_section_2">
                       <div className="row">
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Jumkas</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/jhumka-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Necklaces</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/neklesh-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                          <div className="col-lg-4 col-sm-4">
                             <div className="box_main">
                                <h4 className="shirt_text">Kangans</h4>
                                <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                <div className="jewellery_img"><img src="images/kangan-img.png"/></div>
                                <div className="btn_main">
                                   <div className="buy_bt"><a href="./dist/index.html">Buy Now</a></div>
                                   <div className="seemore_bt"><a href="#">See More</a></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
           <i className="fa fa-angle-left"></i>
           </a>
           <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
           <i className="fa fa-angle-right"></i>
           </a>
           <div className="loader_main">
              <div className="loader"></div>
           </div>
        </div>
     </div>
    
     <div className="footer_section layout_padding">
        <div className="container">
           <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png"/></a></div>
           <div className="input_bt">
              <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email"/>
              <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
           </div>
           <div className="footer_menu">
              <ul>
                 <li><a href="#">Best Sellers</a></li>
                 <li><a href="#">Gift Ideas</a></li>
                 <li><a href="#">New Releases</a></li>
                 <li><a href="#">Today's Deals</a></li>
                 <li><a href="#">Customer Service</a></li>
              </ul>
           </div>
           <div className="location_main">Help Line  Number : <a href="#">+1 1800 1200 1200</a></div>
        </div>
     </div>
  
     <div className="copyright_section">
        <div className="container">
           <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
        </div>
     </div>
    
    </div>


    )
}


export default  Home;