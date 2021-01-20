const axios = require("axios");

const getLugarLatLng = async(direccion) => { // se obtiene la latitud y longitud a travez de una peticion con axios

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=2b348db4584f897c0640759541628485`)
    return {
        direccion: resp.data.name, //obtenemos el nombre de la ciudad
        lat: resp.data.coord.lat, //obtenemos la latitud  de la ciudad
        lng: resp.data.coord.lon //obtenemos la longitud de la ciudad
    }
}

module.exports = {
    getLugarLatLng // exportamos la funcion para que puede ser usada en app.js
}