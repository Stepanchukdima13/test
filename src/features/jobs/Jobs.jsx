import React, { useState } from 'react';
import data from "../../app/data.json"
import SearchBar from '../../components/SearchBar';
import SingleJob from './SingleJob';
import saveBorder from "../../assets/bookmark.svg"
import saveFilled from "../../assets/bookmarkFill.svg"
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';


function Jobs() {

    const allJobs = data
    const [detailJob, setDetailJob] = useState("")
    const [bookmark, setBookmark] = useState(false)

    return (
        <>
            <SearchBar />
            <ul className='job-menu'>
                <li> <Link to="/jobs">Job Feed</Link></li>
                <li> <Link to="/jobs/saved">Saved Jobs</Link></li>
            </ul>
            <div className='job-container'>
                <section className='job-section'>
                    {allJobs.map((job) => {
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
                                <button type='button' className='btn apply-btn'>
                                    Apply Now
                                </button>
                                <img
                                    src={!bookmark ? saveBorder : saveFilled}
                                    className='bookmark-img'
                                    alt="Bookmark image"
                                    onClick={() => setBookmark(!bookmark)}
                                />
                            </section>
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
                        </section>
                    }
                </div>

            </div>
        </>
    );
}

export default Jobs;