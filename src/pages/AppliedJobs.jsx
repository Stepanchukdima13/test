import React, { useContext } from 'react';
import { applyJobContext } from '../contexts/ApplyJob';
import SingleJob from '../components/SingleJob';
import { nanoid } from '@reduxjs/toolkit';
import Navbar from '../components/Navbar';

function AppliedJobs() {

    const { state } = useContext(applyJobContext)
    console.log(state);

    return (
        <>
            <Navbar />
            <div className="saved-post">
                {
                    state.appliedJob.length == 0
                        ? <h1 className='no-job'>Ви не вибрали жодної вакансії</h1>
                        : state.appliedJob.map((job) => {
                            return <section
                                className='single-post'
                                key={nanoid()}
                            >
                                <SingleJob job={job} />
                            </section>
                        })
                }

            </div>
        </>
    );
}

export default AppliedJobs;