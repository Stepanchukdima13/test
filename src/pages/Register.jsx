import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Register() {

    const [terms, setTerms] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const onTermsChange = () => setTerms(!terms)
    const onNameChange = (e) => setName(e.target.value)
    const onEmailChange = (e) => setEmail(e.target.value)
    const onPhoneChange = (e) => setPhone(e.target.value)

    return (
        <>
            <Navbar />
            <div className='register-page'>
                <div className='register-container'>
                    <h1>Register</h1>
                    <form action="post" className='form'>

                        <section className='form-section'>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => onNameChange(e)}
                            />
                            <label htmlFor="name">Name</label>
                        </section>

                        <section className='form-section'>
                            <input
                                type="text"
                                required
                                value={email}
                                onChange={(e) => onEmailChange(e)}
                            />
                            <label htmlFor="email">Email</label>
                        </section>

                        <section className='form-section'>
                            <input
                                type="number"
                                required
                                value={phone}
                                onChange={(e) => onPhoneChange(e)}
                            />
                            <label htmlFor="name">Phone</label>
                        </section>

                        <section>
                            <input
                                type="checkbox"
                                onChange={() => onTermsChange()}
                            />
                            <span className='terms'> By creating an account I understand and agree Terms and Conditions.</span>
                        </section>

                        <button
                            type='button'
                            className='btns'
                            disabled={!terms}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;