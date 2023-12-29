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
                    <h1 className='search-head'>" Один пошук, мільйони вакансій! "</h1>
                </div>
                <SearchBar />
                <div className='welcome-section'>
                    <section>
                        <p>Наша потужна технологія підбору вакансій надсилатиме відповідні вакансії прямо на вашу поштову скриньку</p>
                        <button type='button' className='btn' onClick={() => navigate("/register")}>Зареєструватись</button>
                    </section>
                    <section>
                        <img src={welcomeImg} alt="welcome image" className='welcome-img' />
                    </section>
                </div>
                <div className='summary'>
                    <div>
                        <h1>Створити профіль</h1>
                    </div>
                    <div className='summary-sections'>
                        <section>
                            <img src={saveIcon} alt="save icon" />
                            <h3>Додати до улюблених</h3>
                        </section>
                        <section>
                            <img src={resume} alt="resume icon" />
                            <h3>Завантажити Резюме</h3>
                        </section>
                        <section>
                            <img src={searchResume} alt="search resume icon" />
                            <h3>Завантажити вакансію</h3>
                        </section>
                        <section>
                            <img src={correct} alt="correct icon" />
                            <h3>Отримати роботу</h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;