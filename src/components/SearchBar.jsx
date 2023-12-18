import React, { useState } from 'react';
import search from "../assets/search.svg"

function SearchBar() {

    const [job, setJob] = useState("")
    const [location, setLocation] = useState("")

    const onJobChange = (e) => setJob(e.target.value)
    const onLocationChange = (e) => setLocation(e.target.value)


    return (
        <div className='search-bar'>
            <div>
                <h1 >" One Search, millions of jobs "</h1>
            </div>
            <div className='search-form'>
                <section>
                    <label htmlFor="search">Job Title</label>
                    <input
                        type="text"
                        placeholder='Enter job role'
                        value={job}
                        onChange={(e) => onJobChange(e)}
                    />
                </section>
                <section>
                    <label htmlFor="location">Job Location</label>
                    <input
                        type='text'
                        placeholder='Job location / Remote'
                        value={location}
                        onChange={(e) => onLocationChange(e)}
                    />
                </section>
                <section>
                    <button
                        type='button'
                    >
                        <img src={search} alt="search-logo" />
                    </button>
                </section>
            </div>
        </div>
    );
}

export default SearchBar;