const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=2b76e289b9ece1b525febc7d98f28ce9`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}