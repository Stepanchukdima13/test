import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import welcomeImg from "../assets/img1.jpg"
import saveIcon from "../assets/saved-icon.svg"
import resume from "../assets/resume.svg"
import searchResume from "../assets/search-resume.svg"
import correct from "../assets/correct.svg"
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Home() {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='home-container'>
                <div>
                    <h1 className='search-head'>" One Search, millions of jobs "</h1>
                </div>
                <SearchBar />
                <div className='welcome-section'>
                    <section>
                        <p>Our powerful   matching technology will send job matches right to your inbox</p>
                        <button type='button' className='btn' onClick={() => navigate("/register")}>Sign up</button>
                    </section>
                    <section>
                        <img src={welcomeImg} alt="welcome image" className='welcome-img' />
                    </section>
                </div>
                <div className='summary'>
                    <div>
                        <h1>Create a Jobsy Profile</h1>
                    </div>
                    <div className='summary-sections'>
                        <section>
                            <img src={saveIcon} alt="save icon" />
                            <h3>Save your favourite jobs  </h3>
                        </section>
                        <section>
                            <img src={resume} alt="resume icon" />
                            <h3>Upload your documents</h3>
                        </section>
                        <section>
                            <img src={searchResume} alt="search resume icon" />
                            <h3>Apply for jobs</h3>
                        </section>
                        <section>
                            <img src={correct} alt="correct icon" />
                            <h3>Get Hired</h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;