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
                    <h4>Для користувачів</h4>
                    <p><Link to="/jobs">Пошук роботи</Link></p>
                    <p><Link to="/jobs">Упорядкувати пошук</Link></p>
                    <p><Link to="/register">Створити безкоштовний аккаунт</Link></p>
                    <p><Link to="">Підтримка</Link></p>
                </section>
                <section>
                    <h4>Партнери</h4>
                    <p><Link to="">Партнери</Link></p>
                    <p><Link to="">Спонсори</Link></p>
                </section>
                <section>
                    <h4>Компанія</h4>
                    <p><Link to="/policy">Про нас</Link></p>
                </section>
                <section>
                    <h4>Зв`язок</h4>
                    <p><Link to="/policy">Email</Link></p>
                    {/* <section className='social-media-icons'>
                            <img src={xIcon} alt="social media Icons" />
                            <img src={fbIcon} alt="social media Icons" />
                            <img src={wpIcon} alt="social media Icons" />
                    </section> */}
                </section>
            </div>
            <div className='policy-section'>
                <section>
                    <p><Link to="/policy">Політика приватності</Link></p>
                    <p><Link to="/policy">Правила приватності</Link></p>
                    <p><Link to="/policy">Правила пошуку</Link></p>
                    <p><Link to="/policy">Cookie</Link></p>
                </section>
                <p> Степанчук Дмитро 1СП-20Б</p>
            </div>

        </footer>
    );
}

export default Footer;