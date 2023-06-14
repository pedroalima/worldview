import './index.sass'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Filter(props) {
    const [ regions ] = useState([
        {
            name: "Africa",
        },
        {
            name: "America",
        },
        {
            name: "Asia",
        },
        {
            name: "Europe",
        },
        {
            name: "Oceania",
        }
    ])

    const handleChange = ({ target }) => {
        props.onFilter(target.value)
    }

    return (
        <select onChange={handleChange} value={regions.name} className='form-filter'>
            <option value="">Filter by Regions</option>
            {
                regions.map((region, i) => {
                    return (
                        <option key={"region_" + i} value={region.name}>{region.name}</option>
                    )
                })
            }
        </select>
    )
}

Filter.propTypes = {
    onFilter: PropTypes.func,
};