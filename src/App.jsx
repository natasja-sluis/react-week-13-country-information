import './App.css';
import React from 'react';
import axios from 'axios';
import assignClassName from "./helpers/assignContinentClassNames.js";
import roundNumber from "./helpers/roundNumber.js";

function App() {

    const [countries, setCountries] = React.useState([]);
    const [singleCountry, setSingleCountry] = React.useState({});

    async function fetchSingleCountryData() {
        try {
            const response = await axios.get('https://restfulcountries.com/api/v1/countries/Iceland', {
                headers: {'Authorization': 'Bearer 1076|p34malEeAzxVHNRgAxOAe3XtjxpIHg19oQVwML39'},
            })
            setSingleCountry(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCountriesData() {
        try {
            const response = await axios.get('https://restfulcountries.com/api/v1/countries', {
                headers: {'Authorization': 'Bearer 1076|p34malEeAzxVHNRgAxOAe3XtjxpIHg19oQVwML39'},
            })

            const data = response.data.data;

            data.sort((a, b) => {
                let populationA = a.population.replaceAll(",", '')
                let populationB = b.population.replaceAll(",", '')
                populationA = parseInt(populationA, 10);
                populationB = parseInt(populationB, 10);
                return populationA - populationB
            });
            setCountries(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <img src="/src/assets/world_map.png" alt="World Map"/>
            <h2>Search Country Information</h2>

                <button type="submit" onClick={fetchSingleCountryData}>Search</button>


            <div>
                <div className="image-flag-container">
                    <img src={singleCountry.href.flag} alt={singleCountry.name}/>
                    <h3>{singleCountry.name}</h3>
                </div>
                <p>{singleCountry.name} is situated in {singleCountry.continent} and the capital
                    is {singleCountry.capital}. It has a population of {roundNumber(singleCountry.population)} million.</p>
            </div>
            <h2>World Regions</h2>
            {countries.length < 1 && <button type="button" onClick={fetchCountriesData}>Click me</button>}
            <ul className="country-list">{countries.map((country) => {
                    return <li key={country.name}>
                        <div className="image-flag-container">
                            <img src={country.href.flag} alt={country.name}/>
                            <h3 className={assignClassName(country.continent)}>{country.name}</h3>
                        </div>
                        <div className="population-description">Has a population of <div>
                            <strong>{country.population}</strong></div> people
                        </div>
                    </li>
                }
            )}</ul>
        </>
    )
}

export default App
