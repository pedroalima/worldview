import { useState, useEffect } from 'react';
import '../style/components/form.sass'
import { BiSearch } from "react-icons/bi";
import { url } from './utilities';

export default function Form(){
    const [ country, setCountry ] = useState('')

    useEffect(() => {
        const getCountry = async () => {
            const endpoint = `/name/${country}`
            const urlToFetch = `${url}${endpoint}`
    
            try {
                const response = await fetch(urlToFetch)
    
                if (response.ok) {
                    const jsonResponse = await response.json()
                    console.log(jsonResponse)
                }
    
            } catch (error) {
                console.log(error)
            }
        }

        if (country.length) {
            getCountry()
        }
    }, [country])

    const handleTextChange = ({ target }) => {
        setCountry(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}  className='form-input'>
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