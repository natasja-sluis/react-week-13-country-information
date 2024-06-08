import './App.css';
import React from 'react';
import axios from 'axios';

function App() {

    const [countries, setCountries] = React.useState([]);

    async function fetchData() {
        try {
            const response = await axios.get('https://restfulcountries.com/api/v1/countries', {
                headers: {'Authorization': 'Bearer 1076|p34malEeAzxVHNRgAxOAe3XtjxpIHg19oQVwML39'},
            })
            setCountries(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <img src="/src/assets/world_map.png" alt="World Map"/>
            <h1>World Regions</h1>
            <ul className="country-list">{countries.map((country) => {
                return <li key={country.name}>
                    <div className="image-flag-container">
                        <img src={country.href.flag} alt={country.name}/>
                        <h3>{country.name}</h3>
                    </div>
                    <div className="population-description">Has a population of <div>
                        <strong>{country.population}</strong></div> people
                    </div>
                </li>
            })}</ul>
            <button type="button" onClick={fetchData}>Click me</button>
        </>
    )
}

export default App
