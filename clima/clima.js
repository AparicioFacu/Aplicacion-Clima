const axios = require("axios");

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2b348db4584f897c0640759541628485`);
    let temp = respuesta.data.main.temp;
    return temp
}
module.exports = {
    getClima
}