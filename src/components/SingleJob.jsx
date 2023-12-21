import { nanoid } from '@reduxjs/toolkit';
import React, { useContext } from 'react';
import { saveContext } from '../contexts/SaveJobContext';
import dots from "../assets/dots.png"
import { Link } from 'react-router-dom';

function SingleJob({ job, button }) {

    const { dispatch } = useContext(saveContext)

    const onDelete = () => {
        dispatch({ type: "remove_from_save", payload: job })
    }

    return (
        <>
            {/* <img src={dots} className='dot-img' />
            <div className='floating-btns'>
                <ul>
                    <li> <Link to="/jobs/apply"> Apply Job </Link> </li>
                    <li> <Link to="/jobs/saved">Save Job</Link></li>
                </ul>
            </div> */}
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
            <section>
                {button
                    ? <button className="btn" onClick={() => onDelete()}> Unsave</button>
                    : null
                }
            </section>
        </>
    );
}

export default SingleJob;