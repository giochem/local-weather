import { useState } from "react";
function Geolocation({ weatherData }) {
  const valueTemp = Math.floor(weatherData.temp);
  let [temp, setTemp] = useState(["C", "F", valueTemp]);
  const covert = (e) => {
    e.preventDefault();
    if (temp[0] === "C") {
      temp[2] = Math.floor((9 * temp[2]) / 5 + 32);
    } else {
      temp[2] = valueTemp;
    }
    setTemp([temp[1], temp[0], temp[2]]);
  };
  return (
    <>
      <div className="container">
        <div>
          {temp[2]}
          <span> &deg;{temp[0]}</span>
          <div onClick={covert}>
            &#10140; <span> &deg;{temp[1]}</span>
          </div>
        </div>
        <div>{weatherData.name}</div>
        <div>{weatherData.country}</div>
        <div>{weatherData.main}</div>
        <div>{weatherData.desc}</div>
        <img src={weatherData.icon} alt="icon" />
      </div>
    </>
  );
}

export default Geolocation;
