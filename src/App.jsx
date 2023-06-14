import './components/style/app.sass';

import Navbar from "./components/navbar/Navbar";
import Search from "./components/form/Search";
import Filter from "./components/form/Filter";

import { useState, useEffect } from 'react';
import numberFormat, { url } from './components/utilities';

function App() {

  const [ countries, setCountries ] = useState([]);

  const getDataCountries = async () => {
    try {
      const endpoint = "/all";
      const response = await fetch(`${url}${endpoint}`);

      if(response.ok) {
        const countries = await response.json();
        setCountries(countries)
      } else {
        throw Error("something is wrong")
      } 
    } catch(e){ 
      console.log(e.message)
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
        } else {
          throw Error("something is wrong")
        } 
      } catch (e) {
          console.log(e.message)
      }
    } else {
      getDataCountries()
    }
  }

  const filterRegions = async (region) => {
    const endpoint = `/region/${region}`
    const urlToFetch = `${url}${endpoint}`
    
    try {
      const response = await fetch(urlToFetch)

      if (response.ok) {
        const jsonResponse = await response.json()
        setCountries(jsonResponse)

        throw Error("complete API request")
      }

    } catch(e) {
      console.log(e)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    filterRegions()
  }

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section className='form'>
          <Search onSearch={getCountryByName} />
          <form onChange={handleSubmit}>
            <Filter onFilter={filterRegions} onFilterOff={getDataCountries} />
          </form>
          
        </section>
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
