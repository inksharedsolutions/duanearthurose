import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

import author from '../../../static/author/main_author.jpg'

import '../../assets/scss/author.scss'

const UpperMain = () => {

    return (
            <div className="author-content-section">
                <section className="upper-main">
                    <div className="container-gt">
                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
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
                                            Duane Arthur Ose was born and raised in Minnesota. 
                                            He enlisted in the army in 1964 at the age of twenty-one 
                                            and spent one of his three years of service in Korea as a 
                                            US Army engineer. Duane met Rena, his second wife, through 
                                            the mail-order bride system, and she moved to the Alaskan 
                                            homestead to live in a hole in the ground (called a dugout) 
                                            for nine years while she and Duane built their three-story log 
                                            home. They live off the land for the most part, gardening, using 
                                            solar power, and trapping. (Rena does the skinning.) Duane is a 
                                            survival expert, skilled at living and thriving under extreme 
                                            conditions. A sought-after public speaker, Duane gives presentations 
                                            on rural living, homesteading, survival, Alaskan living, and the art 
                                            of dowsing. He is also the author of Alaskan Wilderness Adventure: 
                                            Join Duane and His Son Daniel on a Journey Deep in the Alaskan Wilderness 
                                            in Search of Finding a New Home.
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
                </section>
            </div>
    )
}

export default UpperMain