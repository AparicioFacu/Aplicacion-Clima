const axios = require("axios");

const getClima = async(lat, lng) => { // se obtiene la temperatura a travez de una peticion con axios
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2b348db4584f897c0640759541628485`);
    let temp = respuesta.data.main.temp; //aqui se la obtiene a la temp
    return temp
}
module.exports = {
    getClima // exportamos la funcion para que puede ser usada en app.js
}