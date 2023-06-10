import '../style/components/form.sass'
import { BiSearch } from "react-icons/bi";

export default function Form(){

    return (
        <section className='form'>
            <form className='form-input'>
                <BiSearch />
                <input  
                    placeholder='Search for a country...' 
                    type="search" 
                    name="search" 
                    id="countries" 
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