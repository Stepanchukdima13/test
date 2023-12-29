import React, { useContext } from 'react';
import search from "../assets/search.svg"
import { searchContext } from '../contexts/ContextHook';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const { job, setJob, location, setLocation } = useContext(searchContext)

    const onJobChange = (e) => setJob(e.target.value)
    const onLocationChange = (e) => setLocation(e.target.value)

    const navigate = useNavigate()

    return (
        <div className='search-bar'>
            <div className='search-form'>
                <section>
                    <label htmlFor="search">Опис вакансії</label>
                    <input
                        type="text"
                        placeholder='Характеристики'
                        value={job}
                        onChange={(e) => onJobChange(e)}
                    />
                </section>
                <section>
                    <label htmlFor="location">Локація</label>
                    <input
                        type='text'
                        placeholder='Локація'
                        value={location}
                        onChange={(e) => onLocationChange(e)}
                    />
                </section>
                <section>
                    <button
                        type='button'
                        onClick={() => navigate("/jobs")}
                    >
                        <img src={search} alt="search-logo" />
                    </button>
                </section>
            </div>
        </div>
    );
}

export default SearchBar;