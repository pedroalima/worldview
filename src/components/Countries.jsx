import { useState, useEffect } from 'react';
import numberFormat from './utilities';
import '../style/components/countries.sass';
import { url } from './utilities';

export default function Countries() {

    const [ countries, setCountries ] = useState([]);

    const getDataCountries = async () => {
        try {
            const endpoint = "/all";
            const response = await fetch(url + endpoint);

            if(response.ok) {
                const countries = await response.json();

                setCountries(countries)
            }

        } catch(error){ 
            console.log(error)
        }
    };

    useEffect(() => {
        getDataCountries()
    }, []);

    return (
        <section className='countries'>
            {
                countries.map((country) => {
                    const { cca2, flags, name, population, region, capital, subregion, coatOfArms } = country;

                    return (
                        <div className='countries-container' key={cca2}>
                            <div className='countries-container-image'>
                                <img src={flags.png} alt={flags.alt} />
                            </div>
                            <div className='countries-container-content'>
                                <img src={coatOfArms.png} alt="" />
                                <h1>{name.common}</h1>
                                <p>Population: <span>{numberFormat(population)}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Subregion: <span>{subregion}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}