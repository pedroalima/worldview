import './style/app.sass';

import Navbar from "./components/Navbar";
import Form from "./components/Form";

import { useState, useEffect } from 'react';
import numberFormat, { url } from './components/utilities';

function App() {

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

  const getCountryByName = async (countryName) => {
    if (countryName) {
      const endpoint = `/name/${countryName}`
      const urlToFetch = `${url}${endpoint}`
  
      try {
          const response = await fetch(urlToFetch)
  
          if (response.ok) {
              const jsonResponse = await response.json()
              setCountries(jsonResponse)
          }
  
      } catch (error) {
          console.log(error)
      }
    } else {
      getDataCountries()
    }
  }

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Form onSearch={getCountryByName}/>
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
      </main>
    </div>
  )
}

export default App
