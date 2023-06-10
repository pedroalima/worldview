import { useState, useEffect } from 'react';
import '../style/components/countries.sass'

export default function Countries() {

    const [ countries, setCountries ] = useState([]);

    const getDataCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");

            if(response.ok) {
                const countries = await response.json();

                setCountries(countries)
            }

        } catch(error){ 
            console.log(error)
        }
    }

    useEffect(() => {
        getDataCountries()
    }, [])

    return (
        <section className='countries'>
            {
                countries.map((country, i) => {
                    const { flags, name } = country;

                    return (
                        <div key={"country_" + i}>
                            <img src={flags.svg} alt="" />
                            <div>
                                <h1>{name.common}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}