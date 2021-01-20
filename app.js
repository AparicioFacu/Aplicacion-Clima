const lugar = require("./lugar/lugar"); //le de acceso a la carpeta lugar
const clima = require("./clima/clima"); //le de acceso a la carpeta clima
const argv = require("yargs").options({ //el yargs es para poder enviar parametros a travez de la consola
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

let getInfo = async(direccion) => { //obtiene la direccion que enviamos por consola
    try {
        let coors = await lugar.getLugarLatLng(direccion); //aqui se obtiene las latitudes y longitudes de la ciudad
        let temp = await clima.getClima(coors.lat, coors.lng); //aqui se obtiene la temperatura a traves de las latitudes y longitudes de la ciudad

        return `El clima en ${coors.direccion} es de ${temp}°C` //se mustra la temperatura
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}
getInfo(argv.direccion) //se inicializa la funcion getInfo y se lo muesrta por consola
    .then(resp => console.log(resp))
    .catch((e) => console.log(e))