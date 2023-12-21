import React, { useContext } from 'react';
import { saveContext } from '../contexts/SaveJobContext';
import SingleJob from "../components/SingleJob"
import { nanoid } from '@reduxjs/toolkit';
import Navbar from '../components/Navbar';

function SavedJobs() {

    const { state, dispatch } = useContext(saveContext);

    return (
        <>
            <Navbar />
            <div className="saved-post">
                {
                    state.savedJobs.length == 0
                        ? <h1 className='no-job'>No jobs has been saved</h1>
                        : state.savedJobs.map((job) => {
                            return <section
                                className='single-post'
                                key={nanoid()}
                            >
                                <SingleJob job={job} button="true" />
                            </section>
                        })
                }

            </div>
        </>
    );
}

export default SavedJobs;