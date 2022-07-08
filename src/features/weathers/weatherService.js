import axios from 'axios'

const API_URL = 'https://weather-proxy.freecodecamp.rocks/api/current?lat='

const getWeather = async ({ local }) => {
    const response = await axios.get(API_URL + local.latitude + '&lon=' + local.longitude)
    let data = {
        temp: response.data.main.temp,
        icon: response.data.weather[0].icon,
        name: response.data.name,
        country: response.data.sys.country,
        main: response.data.weather[0].main,
        desc: response.data.weather[0].description,
    }
    return data
}

const weatherService = {
    getWeather,
}

export default weatherService