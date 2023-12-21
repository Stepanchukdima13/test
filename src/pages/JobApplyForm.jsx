import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { applyJobContext } from '../contexts/ApplyJob';
import Navbar from '../components/Navbar';

function JobApplyForm() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [experience, setExperience] = useState("")

    const { jobId, state, dispatch } = useContext(applyJobContext)
    console.log(`action.payload - ${jobId}`);

    const onNameChange = (e) => setName(e.target.value)
    const onExperienceChange = (e) => setExperience(e.target.value)
    const onApplication = () => {
        dispatch({ type: "apply_job", payload: jobId })
        navigate("/jobs/applied")
    }

    return (
        <>
            <Navbar />
            <div className='register-container'>
                <h1 className='job-application'>Job Application</h1>
                <form action="post" className='form' onSubmit={() => onApplication()}>

                    <section className='form-section'>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => onNameChange(e)}
                            required
                        />
                        <label htmlFor="Name">Name</label>
                    </section>

                    <section className='form-section'>
                        <input
                            type="number"
                            value={experience}
                            onChange={e => onExperienceChange(e)}
                            required
                        />
                        <label htmlFor="experience">Work Experience</label>
                    </section>

                    <section>
                        <input type="file" required />
                    </section>

                    <button
                        type='submit'
                        className='btns'
                    >
                        Apply Now
                    </button>

                </form>
            </div>
        </>
    );
}

export default JobApplyForm;