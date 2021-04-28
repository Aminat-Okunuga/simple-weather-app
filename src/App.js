import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({ 
    temperature: " ",
    place: " ",
    pressure: " ",
    wind_speed: " "

  })

  const DisplayWeather = (event) => {
    const getData = async () => {
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bbb3084d49a2dc7d1197ea9447ce48ae`)
  // console.log(data.data)
  setData({
    temperature: data.data.main.temp,
    place: data.data.name,
    pressure: data.data.main.pressure,
    wind_speed: data.data.wind.speed
  })

  
  };
    getData();
    event.preventDefault()
    setCity('')
  };
  
  return (
    <div className="App">
      <h2>Welcome To {data.place} </h2>
      <h2>Temperature {data.temperature} </h2>
      <h2>Pressure {data.pressure} </h2>
      <h2>Wind Speed {data.wind_speed} </h2>
      <form>
        <input
          placeholder="Enter a location"
          onChange={(event) => {
            const newCity = event.target.value;
            setCity(newCity);
          }}
          value={city}
        />
        <button onClick={DisplayWeather}>Search</button>
      </form>
    </div>
  );
}

export default App;
