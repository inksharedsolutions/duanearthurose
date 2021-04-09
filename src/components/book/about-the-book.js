import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import '../../assets/scss/book.scss'
import {Link} from 'gatsby'

import Book1 from '../../../static/books/Book1.png'
import Book2 from '../../../static/books/Book2.png'
import Book3 from '../../../static/books/Book3.png'
import Book4 from '../../../static/books/Book4.png'
import Book5 from '../../../static/books/Book5.png'
import Book6 from '../../../static/books/Book6.png'

import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBMedia } from "mdbreact";

const AboutTheBook = (props) => {
    // const slug =(props.location.href);
    const disqusConfig = {
        shortname: 'duane-arthur-ose',
        config: { identifier:  12}
    }

    return(
        <main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >
                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book2} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Alaskan Wilderness</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text">
                                            At the Fairbanks International Airport’s main terminal, we went to the ticket counter to pay for our plane trip. The young lady working asked us if we were going to Lake Minchumina for trophy fishing. She continued to tell us that a lot of people go there for the big fish. I made the mistake of telling her that we were going on a hike to the federal land settlement area to find land to stake a claim. Her mouth said nothing, but her eyes screamed “crazy person.” I resisted the urge to try and explain further because it was obvious her mind was made up. I said no more and walked away with my dignity (somewhat) intact. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/gp/product/B082VLS2LC?notRedirectToSDP=1&ref_=dbs_mng_calw_0&storeType=ebooks">Amazon</a></li>
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/alaskan-wilderness-adventure-book-1/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1135622817?ean=9781643458380">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Alaskan-Wilderness-Adventure-Book-1/dp/1643456725/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1135622817?ean=9781643456720">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Alaskan-Wilderness-Adventure/Duane-Arthur-Ose/9781643456720?id=8009965417365">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book3} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Alaskan Wilderness 2</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                         <p className="white-text">
                                            Homesteading in the wilderness of Alaska…
                                        </p>
                                        <p className="white-text">
                                            Duane Ose moved to Alaska on a whim nearly thirty years ago, after surviving a gunshot wound to the head. He and his wife Rena were the very last persons to file a claim under the Federal Homestead Act of 1862—for a piece of property Duane describes as “a giant, fertile garden bowl, cupped warmly in God’s loving hands.” His new book, Alaskan Wilderness Adventure II, is part biography, part adventure, recounting how he and his young friend Jeff Peterson established Duane’s homestead in the center of Alaska. With humor and vivid imagery, Duane has chronicled the trials and tribulations of building trails, constructing a home, and turning this five-acre slice of heaven into a habitable piece of property—a homestead Duane and Rena call Ose Mountain. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Alaskan-Wilderness-Adventure-Book-2-ebook/dp/B082VLD2LY/ref=sr_1_1?keywords=9781643458373&qid=1576687927&sr=8-1">Amazon</a></li>
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/alaskan-wilderness-adventure-book-2/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1135622816?ean=9781643458373">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Alaskan-Wilderness-Adventure-Book-2/dp/1643456687/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576687927&sr=8-1">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1135622816?ean=9781643456683">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Alaskan-Wilderness-Adventure/Duane-Arthur-Ose/9781643456683?id=8009965417365">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book4} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Alaskan Wilderness 3</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text">
                                        This book is about 1987 and is the third book in a continuing series of the life adventures of the last federal homesteader in America to have filed on the Federal Homestead Act of 1862. This act was closed in October 1986, never to reopen. Read to view parts of 1987’s construction stage, struggles, hardships, accomplishments, bears, and up close encounters with what I come to call the Hairy Ones. The Hairy Ones are peaceful beings and not the scary monsters that they’re made out to be. The Hairy Ones are bashful, elusive, and friendly beings. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Alaskan-Wilderness-Adventure-Book-3-ebook/dp/B084D5SVWR/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=">Amazon</a></li>
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/alaskan-wilderness-adventure-book-3/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1136287284?ean=9781643458410">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Alaskan-Wilderness-Adventure-Book-3/dp/1643456628/ref=pd_bxgy_3/131-9860968-1309444?_encoding=UTF8&pd_rd_i=1643456628&pd_rd_r=f353238a-2433-4442-acf0-c914a7651e0e&pd_rd_w=TfZm9&pd_rd_wg=zEpBu&pf_rd_p=ce6c479b-ef53-49a6-845b-bbbf35c28dd3&pf_rd_r=G4JSJXSH0RR7BHAV4QN2&psc=1&refRID=G4JSJXSH0RR7BHAV4QN2">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/alaskan-wilderness-adventure-duane-arthur-ose/1136287284?ean=9781643456621">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Alaskan-Wilderness-Adventure/Duane-Arthur-Ose/9781643456621?id=8009965417365">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book6} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Ancient Art of Dowsing</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text">
                                            This book answers all the questions on dowsing, informing the reader as to why and how dowsing works. Moreover, it has the instructions to test oneself to become a dowser. Dowsing locates all objects that I refer to as targets, then to also measure the depths no matter how deep it is to the targets. Targets can be mapped or traced from the surface, enabling the dowser to determine what the target is. Dowsing works better than ground-penetrating radar, which is limited to a shallow depth and requires electrical power. I’ve been a proficient dowser for sixty-five years. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Ancient-Art-Dowsing-Duane-Arthur-ebook/dp/B082MT37J2/ref=sr_1_1?keywords=9781643457994&qid=1576165735&sr=8-1">Amazon</a></li>
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/ancient-art-of-dowsing/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/ancient-art-of-dowsing-duane-ose/1123233797?ean=9781643457994">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Ancient-Art-Dowsing-Duane-Arthur/dp/1643456741/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576165735&sr=8-1">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/ancient-art-of-dowsing-duane-ose/1123233797?ean=9781643456744">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Ancient-Art-Dowsing/Duane-Arthur-Ose/9781643456744?id=8009965417365&_ga=2.205450576.1904462625.1602048182-1770015116.1600996550">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book1} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Visited by Star Travelers</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text ">
                                            I intend not to leave out a single detail of my account. 
                                            While my memory is still fully functional, I want the readers 
                                            of today and the readers of tomorrow to read and see my encounter.
                                        </p>
                                        <p className="white-text ">
                                            Nor will I make this encounter into a fictional best-selling novel of which I could certainly do. I am merely reporting the facts of what I was privileged to be shown and welcomed aboard by our distant universe space explorers. 
                                        </p>
                                        <p className="white-text ">
                                            I do however hope earth’s space explorers are able to glean vital information and think of the different technologies from the encounter. What I saw impressed me greatly and made a lasting imprint in my mind. 
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Visited-Star-Travelers-Duane-Arthur-ebook/dp/B082VLML1B/ref=sr_1_1?keywords=9781643458342&qid=1576687754&sr=8-1">Amazon</a></li>
																								{/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/visited-by-star-travelers/">Stratton Press</a></li>*/}
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/visited-by-star-travelers-duane-arthur-ose/1135622815?ean=9781643458342">Barnes & Noble</a></li>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Visited-Star-Travelers-Duane-Arthur/dp/1643456709/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576687754&sr=8-1">Amazon</a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/visited-by-star-travelers-duane-arthur-ose/1135622815?ean=9781643456706">Barnes & Noble </a></li>
                                                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Visited-Star-Travelers/Duane-Arthur-Ose/9781643456706?id=8009965417365">Books A Million</a></li>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="my-5 px-5 pb-1 text-center card z-depth-5 hoverable">
                            <MDBCardBody>
                                <MDBRow className="text-md-left">
                                    <MDBCol lg="6" md="12" className="mb-5">
                                        <MDBMedia object src={Book5} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid author-img"
                                        tag="img"
                                        alt="Sample avatar" />
                                    </MDBCol>
                                    <MDBCol md="8" lg="6" className="float-right author-content">
                                        <h1 className="font-weight-bold mb-3">Marriage of the Heart</h1>
                                        {/* <h6 className="font-weight-bold white-text mb-3">
                                            Author/Writer
                                        </h6> */}
                                        <p className="white-text ">
                                            A married woman hastily dashes off not telling anyone.
                                            Hitches a ride from Minnesota into the interior of
                                            Alaska to live her dreams of being a mountain woman.
                                            Falls in love with a mountain man. Then diagnosed with
                                            terminal cancer. Together they prepare for her death by
                                            planning her headstone, words to be read and her resting
                                            place.
                                        </p>
                                        <section className="fullSection">
                                            <nav className="booklinkBlocks">
                                                <span>Ebooks :</span>
                                                <p className="white-text ">Comming Soon ...</p>
                                            </nav>

                                            <nav className="booklinkBlocks">
                                                <span>Purchase Paperback :</span>
                                                <p className="white-text ">Comming Soon ...</p>
                                            </nav>
                                        </section>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>

    )
}

export default AboutTheBook;
