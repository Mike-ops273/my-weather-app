import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const apiKey = process.env.REACT_APP_MY_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

  const handleClick = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setSearch("");
  };

  return (
    <div className="App">
      <header>
        <h1>myWeather</h1>
        <div>
          <input
            type="text"
            placeholder="Enter city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleClick}>Go</button>
        </div>
      </header>
      <main>
        {!data.name ? (
          <p>Get started by entering a city</p>
        ) : (
          <>
            <p className="city">{data.name}</p>
            <p className="larger">{data.main.temp.toFixed()} °C</p>
            <p>{data.wind.speed.toFixed()} m/s wind speed</p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
