import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/banner/pexels-photo-417074.jpeg'
import { MDBMask, MDBView } from "mdbreact";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

import author from '../../static/author/main_author.jpg'

import '../assets/scss/upper-main.scss'

import Book1 from '../../static/books/Book1.png'
import Book2 from '../../static/books/Book2.png'
import Book3 from '../../static/books/Book3.png'
import Book4 from '../../static/books/Book4.png'
import Book5 from '../../static/books/Book5.png'
import Book6 from '../../static/books/Book6.png'

import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const UpperMain = () => {
    const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


      console.log(mobState);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 4,
        slidesToScroll: 1,
     };

    return (
            <div className="content-section z-depth-5 hoverable">
                <section className="upper-main">
                    <div className="container-gt">

                        <div className="content-wrapper">
                            <h1>Books</h1>
                            
                            <p className="middle-params">
                                Sometimes, fiction isn't a far cry from reality.
                            </p>
                        </div>

                        <Slider {...settings}>
                            <div className="book-wrapper-slider">
                                <img src={Book2}/>
                                <h3>Alaskan Wilderness</h3>
                            </div>
                            
                            <div className="book-wrapper-slider">
                                <img src={Book3}/>
                                <h3>Alaskan Wilderness 2</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book4}/>
                                <h3>Alaskan Wilderness 3</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book6}/>
                                <h3>Ancient Art of Dowsing</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book5}/>
                                <h3>Marriage of the Heart</h3>
                            </div>

                            <div className="book-wrapper-slider">
                                <img src={Book1}/>
                                <h3>Visited by Star Travelers</h3>
                            </div>
                    </Slider>
                    </div>
                    <div className="container-gt">
                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <h2 className="h1-responsive font-weight-bold my-5 about-the-author">
                                    AUTHOR
                                </h2>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={author} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Duane Arthur Ose</h1>
                                        <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6>
                                        <p className="white-text">
                                            Duane Arthur Ose was born and raised in Minnesota. He enlisted in 
                                            the army in 1964 at the age of twenty-one and spent one of his three 
                                            years of service in Korea as a US Army engineer. Duane met Rena, his 
                                            second wife, through the mail-order bride system, and she moved to the 
                                            Alaskan homestead to live in a hole in the ground (called a dugout) for 
                                            nine years while she and Duane built their three-story log home. <Link to="/about-the-author">Read More</Link>
                                        </p>
                                        <a href="https://www.facebook.com/Duane-Arthur-Ose-104025487773453/" target="_blank" className="p-2 fa-lg fb-ic">
                                            <MDBIcon fab icon="facebook-f" />
                                        </a>
                                        <a href="https://twitter.com/strattonpress/" target="_blank" className="p-2 fa-lg tw-ic">
                                            <MDBIcon fab icon="twitter" />
                                        </a>
                                        <a href="https://www.instagram.com/strattonpress/" target="_blank" className="p-2 fa-lg tw-ic">
                                            <MDBIcon fab icon="instagram" />
                                        </a>
                                        <a href="https://www.goodreads.com/author/show/7753543.Duane_Arthur_Ose" target="_blank" className="p-2 fa-lg dribbble-ic">
                                            <MDBIcon fab icon="goodreads-g" />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="mid-main z-depth-5">
                        <div className="container-gt">
                            <div className="content-wrapper">
                                <h1>FEATURED</h1>
                                
                                <p className="middle-params">
                                    Duane Arthur Ose has been featured numerous times on...
                                </p>
                            </div>
                            <div className="grid-template-four-col" id="logos-col">
                                <li>
                                    <img src={Logo1}/>
                                </li>

                                <li>
                                    <img src={Logo2}/>  
                                </li>

                                <li>
                                    <img src={Logo3}/>
                                </li>

                                <li>
                                    <img src={Logo4}/>
                                </li>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default UpperMain