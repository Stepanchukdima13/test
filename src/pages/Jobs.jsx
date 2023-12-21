import React, { useContext, useState } from 'react';
import data from "../app/data.json"
import SearchBar from '../components/SearchBar';
import SingleJob from '../components/SingleJob';
import { nanoid } from '@reduxjs/toolkit';
import { searchContext } from '../contexts/ContextHook';
import { saveContext } from '../contexts/SaveJobContext';
import { Link, useNavigate } from 'react-router-dom';
import { applyJobContext } from '../contexts/ApplyJob';
import Navbar from '../components/Navbar';



function Jobs() {


    const allJobs = data
    const [detailJob, setDetailJob] = useState("")
    const [bookmark, setBookmark] = useState(false)

    const navigate = useNavigate()

    const { job, setJob, location, setLocation } = useContext(searchContext)
    const { jobId, setJobId } = useContext(applyJobContext)

    const onApplyOfJob = () => {
        setJobId(detailJob.id)
        navigate("/jobs/apply")
        console.log(jobId);
    }


    const showAllJobs = () => {
        setJob("")
        setLocation("")
    }

    const { state, dispatch } = useContext(saveContext)

    const onSaveJob = () => {
        const exist = state.savedJobs.find((job) => {
            return job.id == detailJob.id
        })

        setBookmark(!bookmark)

        exist
            ? null
            : dispatch({ type: "add_to_save", payload: detailJob })
    }

    return (
        <>
            <Navbar />
            <SearchBar />
            <ul className='job-menu'>
                <li onClick={() => showAllJobs()}>Job Feed</li>
                <li> <Link to="/jobs/saved">Saved Jobs</Link></li>
                <li> <Link to="/jobs/applied">Applied Jobs</Link></li>
            </ul>
            <div className='job-container'>
                <section className='job-section'>
                    {allJobs

                        .filter((item) => {
                            return job == ""
                                ? item
                                : item.title.toLowerCase().includes(job.toLowerCase())
                        })

                        .filter((item) => {
                            return location == ""
                                ? item
                                : item.location.toLowerCase().includes(location.toLowerCase())
                        })


                        .map((job) => {
                            return <section
                                className='single-post'
                                key={nanoid()}
                                onClick={() => {
                                    setDetailJob("")
                                    setDetailJob(job)
                                }}
                            >
                                <SingleJob job={job} />
                            </section>
                        })}
                </section>

                <div className='job-detail'>
                    {detailJob == ""
                        ? <h1> * Select a Job to see details</h1>
                        : <section className='job-detail-container'>
                            <section className='job-head'>
                                <h3>{detailJob.title} </h3>
                                <h4>{detailJob.company}</h4>
                                <h4>{detailJob.location}, India</h4>
                            </section>
                            <section className='job-type buttons-list'>
                                <h5>{detailJob.salary} per month</h5>
                                <h5>{detailJob.details.type}</h5>
                            </section>
                            <section className='btn-section'>
                                <button type='button'
                                    className='btn apply-btn'
                                    onClick={() => onApplyOfJob()}
                                >
                                    Apply Now
                                </button>
                                <button
                                    type='button'
                                    className='btn apply-btn'
                                    onClick={() =>
                                        onSaveJob()
                                    }
                                >
                                    Save
                                </button>
                            </section>
                            <div className='benefit-section'>
                                <section>
                                    <h1>Benefits</h1>
                                    <ul className='benefit-list'>
                                        {detailJob.details.benefits.map((benefit) => {
                                            return <li key={nanoid()}>{benefit}</li>
                                        })}
                                    </ul>
                                </section>
                                <section>
                                    <h1>Qualifications</h1>
                                    <ul className='benefit-list'>
                                        {detailJob.details.qualifications.map((benefit) => {
                                            return <li key={nanoid()}>{benefit}</li>
                                        })}
                                    </ul>
                                </section>
                                <section>
                                    <h1>Resposblities</h1>
                                    <ul className='benefit-list'>
                                        {detailJob.details.resposblities.map((benefit) => {
                                            return <li key={nanoid()}>{benefit}</li>
                                        })}
                                    </ul>
                                </section>
                                <section>
                                    <h1>Education</h1>
                                    <ul className='benefit-list'>
                                        {detailJob.details.education.map((benefit) => {
                                            return <li key={nanoid()}>{benefit}</li>
                                        })}
                                    </ul>
                                </section>
                                <h1 className='details'>Experience : {detailJob.details.experience}</h1>
                                <h1 className='details'>Schedule : {detailJob.details.schedule}</h1>
                            </div>
                        </section>

                    }
                </div>

            </div>
        </>
    );
}

export default Jobs;