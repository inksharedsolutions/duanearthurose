import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../static/logo/logo.png'
import {Link} from 'gatsby'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
            <div className="container-gt" id="footer-info">
                <img src={Logo}/>
                <p>
                    Duane Arthur Ose loves to hear from readers. You can reach him via email. 
                    Feel free to send questions about writing, his works, interviews 
                    and other publicity matters.
                </p> 

                <div className="two-grid-column" id="footer-info-lower">
                    <p>Copyright 2020. Stratton Press</p>

                    <ul>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>

                        <li>
                            <Link to="/terms-and-conditions">Terms & Condition</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
