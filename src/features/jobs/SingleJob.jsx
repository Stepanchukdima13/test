import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

function SingleJob({ job }) {
    return (
        <>
            <section className='job-head'>
                <h3>{job.title} </h3>
                <h4>{job.company}</h4>
                <h4>{job.location}, India</h4>
            </section>
            <section className='job-type'>
                <h5>{job.salary} per month</h5>
                <h5>{job.details.type}</h5>
            </section>
            <ul className='benefit-list'>
                {job.details.benefits.map((benefit) => {
                    return <li key={nanoid()}>{benefit}</li>
                })}
            </ul>
        </>
    );
}

export default SingleJob;