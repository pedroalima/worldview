import { useState, useEffect } from 'react';
import numeral from 'numeral';
import '../style/components/countries.sass';

const url = "https://restcountries.com/v3.1";

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

    function numberFormat (number) {
        let result = numeral(number).format(0,0);
        return result;
    }

    return (
        <section className='countries'>
            {
                countries.map((country) => {
                    const { cca2, flags, name, population, region, capital, subregion, coatOfArms } = country;

                    return (
                        <div className='countries-container' key={cca2}>
                            <img src={flags.svg} alt={flags.alt} />
                            <div className='countries-container-content'>
                                <img src={coatOfArms.svg} alt="" />
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