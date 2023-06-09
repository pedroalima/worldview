import '../style/components/form.sass'
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';

export default function Form(){
    const [ box, setBox ] = useState(false);

    const handleClick = () => {
        setBox(prev => !prev)
    }

    return (
        <form className='form'>
            <div className='form-input'>
                <BiSearch />
                <input  
                    placeholder='Search for a country...' 
                    type="search" 
                    name="search" 
                    id="countries" 
                />
            </div>
            <div className='form-select'>
                <div onClick={handleClick} className='form-select-title'>
                    <span>Filter by Regions</span>
                    <IoIosArrowDown />
                </div>
                {box &&
                <div className='form-select-box'>
                    <div className='form-select-box-option'>
                        <input 
                            type="radio" 
                            name="region" 
                            id="region1" 
                        />
                        <label htmlFor="region1">Region</label>
                    </div>
                </div>
                }
            </div>
        </form>
    )
}