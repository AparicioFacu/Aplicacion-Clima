const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=2b348db4584f897c0640759541628485`)
        //let location = resp.data.results[0];
        /*console.log("Direccion: ", location.formatted_adrress);
        console.log("lat: ", location.geometry.location.lat);
        console.log("lng: ", location.geometry.location.lng);
        console.log(resp);
        //console.log(JSON.stringify(resp.data, undefined, 2));
        //console.log(resp.status);*/
    return {
        direccion: resp.data.name,
        lat: resp.data.coord.lat,
        lng: resp.data.coord.lon
    }
}

module.exports = {
    getLugarLatLng
}