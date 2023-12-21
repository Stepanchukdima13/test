import React from 'react';
import { useNavigate } from 'react-router-dom';

function Policy() {

    const navigate = useNavigate()

    return (
        <>
            <div className='privacy-head'>
                <h1>Privacy Policy</h1>
            </div>
            <div className='policy-container'>
                <ul className='about-us-section'>
                    <li> <a href='#about-us' >About us</a></li>
                    <li> <a href='#privacy-rules' >Privacy Rules</a></li>
                    <li> <a href='#cookie-policy' >Cookie Policy</a></li>
                    <li> <a href='#terms-and-use' >Terms and use</a></li>
                    <li> <a href='#job-rules' >Job Posting Rules</a></li>
                    <li> <a href='#contact-us' >Contact us</a></li>
                </ul>
                <div className='policy-details'>
                    <section id='about-us'>
                        <h1>Welcome</h1>
                        <p>We are thrilled to welcome you to the ultimate destination for your career journey. Whether you're a seasoned professional seeking new challenges or a recent graduate embarking on your career path, [Your Job Searching Site Name] is here to guide you every step of the way.</p>
                        <h4>Discover Opportunities:</h4>
                        <p>Unlock a world of career possibilities by exploring a diverse range of job opportunities tailored to your skills, interests, and aspirations. Our platform connects you with top employers, helping you find the perfect match for your talents</p>
                        <h4>Your Success, Our Mission:</h4>
                        <p>Our mission is to be your trusted partner in your career journey. From the first step of your job search to celebrating your achievements, we are here to support you. Your success is not just a destination; it's a journey we embark on together.Start your exciting career adventure with [Your Job Searching Site Name]. We're here to help you turn your aspirations into reality. Welcome aboard!</p>
                        <button className='btn' onClick={() => navigate("/")}>Jobsy</button>
                    </section>

                    <section id="privacy-rules">
                        <h1>Privacy Rules</h1>
                        <p>Welcome to the Privacy Rules page of [Your Job Searching Site Name]. We prioritize the protection of your personal information and are committed to maintaining the confidentiality, integrity, and security of the data you entrust to us. This document outlines our privacy rules, detailing how we collect, use, and safeguard your information.</p>
                        <h4> Information We Collect:</h4>
                        <p>We collect information to enhance your job search experience and provide personalized services. This may include:</p>
                        <ul>
                            <li>Personal Information: Name, contact details, resume, and employment history.</li>
                            <li>Usage Data: Information about your interactions with our platform, such as job searches and application history.</li>
                            <li>Device Information: Data about your device, browser, and IP address for security and analytics purposes.</li>
                        </ul>
                        <h4>How We Use Your Information:</h4>
                        <ul>
                            <li>Facilitate Job Searches: Match you with relevant job opportunities based on your skills and preferences.</li>
                            <li>Improve User Experience: Tailor our platform to your needs and enhance your overall experience.</li>
                            <li>Communication: Send you updates, job alerts, and relevant information about our services.</li>
                        </ul>
                    </section>

                    <section id='cookie-policy'>
                        <h1>Cookie Policy</h1>
                        <h4>Cookie Policy Summary:</h4>
                        <p>Welcome to our website's Cookie Policy summary. This brief overview is designed to help you understand how we use cookies and similar technologies to enhance your online experience. For more detailed information, please refer to our full Cookie Policy.</p>
                        <h4>1. What are Cookies?</h4>
                        <p>Cookies are small text files that are stored on your device when you visit a website. They help us improve the functionality and performance of our site by enabling certain features and providing analytics.</p>
                        <h4>2. Types of Cookies We Use:</h4>
                        <p><b>Essential Cookies:</b>Necessary for the basic functioning of the website.</p>
                        <p><b>Functional Cookies:</b>Enhance user experience by remembering your preferences.</p>
                        <p><b>Analytics Cookies:</b>Collect anonymous data for statistical analysis of website usage.</p>
                        <p><b>Advertising Cookies:</b>Tailor advertising content to your interests.</p>
                        <h4>3. Why We Use Cookies:</h4>
                        <p>We utilize cookies to optimize your browsing experience, personalize content, analyze site traffic, and measure the effectiveness of our marketing efforts. Cookies also play a crucial role in maintaining the security and integrity of our website.</p>
                        <h4>4. Third-Party Cookies:</h4>
                        <p>Some cookies may be placed by third-party services that appear on our pages. These external services have their own privacy policies, and we encourage you to review them for a comprehensive understanding of their practices.</p>
                        <h4>5. Managing Cookies:</h4>
                        <p>You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline them if you prefer. However, this may impact your ability to fully experience our website.</p>
                        <h4>7. Updates to this Policy:</h4>
                        <p>We may update our Cookie Policy to reflect changes in technology or legal requirements. We recommend checking this page periodically for any updates.
                            For a more detailed explanation of our Cookie Policy, please read the full policy available on our website. If you have any questions or concerns, feel free to contact us. Thank you for choosing to explore our website.</p>
                    </section>

                    <section id='terms-and-use'>
                        <h1>Terms and Use</h1>
                        <p>By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. The content on this site is provided for general informational purposes only, and we reserve the right to modify or discontinue any aspect of the website at any time. While we strive to ensure the accuracy and currency of the information presented, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website. Your use of any information or materials on this website is entirely at your own risk, and we shall not be liable for any loss or damage, direct or indirect, arising from such use. We encourage you to review our Privacy Policy and Cookie Policy to understand how we handle your personal information. By using this website, you agree to our terms and policies, and your continued use constitutes acceptance of any updates or changes to these terms. If you disagree with any part of these terms, please refrain from using our website.</p>
                    </section>

                    <section id='job-rules'>
                        <h1>JobPosting Rules</h1>
                        <p>We aim to maintain a professional and inclusive environment for both employers and job seekers. To ensure a positive experience for all users, please adhere to the following job posting rules:</p>
                        <h4>1. Accurate and Transparent Information:</h4>
                        <p>Provide accurate and transparent details about the job opportunity. Clearly state the job title, responsibilities, qualifications, and other relevant information to help candidates make informed decisions.</p>
                        <h4>2. Non-Discrimination Policy:</h4>
                        <p>Job postings must comply with anti-discrimination laws and promote equal opportunities. Avoid language or requirements that may be discriminatory based on race, gender, age, disability, religion, or any other protected characteristic.</p>
                        <h4>3. Legitimate Job Opportunities:</h4>
                        <p>Post only genuine job opportunities. Misleading or fraudulent job postings are strictly prohibited. Ensure that the position aligns with applicable labor laws and regulations.</p>
                        <h4>4. No Multi-level Marketing (MLM) or Pyramid Schemes:</h4>
                        <p>Job postings related to multi-level marketing, pyramid schemes, or any other suspicious business models will not be accepted. We prioritize legitimate employment opportunities.</p>
                        <h4>5. Clear Application Process:</h4>
                        <p>Clearly outline the application process, including how candidates should apply, the required documents, and any specific instructions. Make it easy for candidates to understand and follow through.

                        </p>
                    </section>

                    <section id='contact-us'>
                        <h1>Contact Us</h1>
                        <p>If you have questions or concerns about your privacy on Jobsy, please contact our Privacy Team at <a href="">privacy@jobsy.com</a>.

                            By using [Your Job Searching Site Name], you agree to our Privacy Rules. Your trust is important to us, and we are committed to safeguarding your privacy throughout your job search journey.</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Policy;