import './index.sass'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSearch } from "react-icons/bi";


export default function Search(props){
    const [ country, setCountry ] = useState('')

    const handleTextChange = ({ target }) => {
        setCountry(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.onSearch(country)
        setCountry('')
    }

    return (
        <form onSubmit={handleSubmit} className='form-search'>
            <BiSearch />
            <input  
                placeholder='Search for a country...' 
                type="search" 
                name="search" 
                id="countries"
                value={country}
                onChange={handleTextChange}
            />
        </form>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired
};