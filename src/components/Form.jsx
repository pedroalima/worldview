import { useState } from 'react';
import '../style/components/form.sass'
import { BiSearch } from "react-icons/bi";
import PropTypes from 'prop-types';

export default function Form(props){
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
        <section className='form'>
            <form onSubmit={handleSubmit} className='form-input'>
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
            <select className='form-select'>
                <option value="">Filter by Regions</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </section>
    )
}

Form.propTypes = {
    onSearch: PropTypes.func.isRequired
  };