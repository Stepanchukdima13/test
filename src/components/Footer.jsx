import React from 'react';
import { Link } from 'react-router-dom';
import xIcon from "../assets/x.png"
import fbIcon from "../assets/facebook.png"
import wpIcon from "../assets/whatsapp.png"

function Footer() {
    return (
        <footer className='footer'>

            <div className='footer-section'>
                <section>
                    <h4>For Job Seekers</h4>
                    <p><Link to="/jobs">Search Jobs</Link></p>
                    <p><Link to="/jobs">Browse Jobs</Link></p>
                    <p><Link to="/register">Create Free Account</Link></p>
                    <p><Link to="">Support</Link></p>
                </section>
                <section>
                    <h4>Partner With Us</h4>
                    <p><Link to="">Partners</Link></p>
                    <p><Link to="">Sponsored Reach</Link></p>
                </section>
                <section>
                    <h4>Company</h4>
                    <p><Link to="/policy">About Us</Link></p>
                </section>
                <section>
                    <h4>Contact Us</h4>
                    <p><Link to="/policy">Email Us</Link></p>
                    {/* <section className='social-media-icons'>
                            <img src={xIcon} alt="social media Icons" />
                            <img src={fbIcon} alt="social media Icons" />
                            <img src={wpIcon} alt="social media Icons" />
                    </section> */}
                </section>
            </div>
            <div className='policy-section'>
                <section>
                    <p><Link to="/policy">Privacy Policy</Link></p>
                    <p><Link to="/policy">Terms and Use</Link></p>
                    <p><Link to="/policy">Job Posting Rules</Link></p>
                    <p><Link to="/policy">Cookie Policy</Link></p>
                </section>
                <p>Copyright © 2023 Jobsy</p>
            </div>

        </footer>
    );
}

export default Footer;