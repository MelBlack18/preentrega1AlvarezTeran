let unidadInicial
let unidadDestino
let cantidadInicial = 0
let cantMlaTazas = 0
let cantTazasAMl = 0
let cantGrAOz = 0
let cantOzAGr = 0

function MlaTazas(cant) {

    cantMlaTazas = parseFloat(cant) / 240 
    
    return console.log(cantMlaTazas)
}

function TazasAMl(cant) {

    cantTazasAMl = parseFloat(cant) * 240

    return console.log(cantTazasAMl)
}

function GrAOz(cant) {

    cantGrAOz = parseFloat(cant) * 0.035274

    return console.log(cantGrAOz)
}

function OzAGr(cant) {

    cantOzAGr = parseFloat(cant) * 28.3495

    return console.log(cantOzAGr)
}


do {

    unidadInicial = "ESC"
    unidadDestino = "ESC"

    unidadInicial = prompt("¿Con qué unidad comenzaste? \n Ingresa: \n ml para Mililitros \n gr para Gramos \n tz para Tazas \n oz para Onzas \n\n Para cerrar ingrese ESC ")

    if (unidadInicial=="ESC") {

        console.log("Chau!")

    } else {

        unidadDestino = prompt("¿A que unidad deseas convertir? \n Ingresa: \n ml para Mililitros \n gr para Gramos \n tz para Tazas \n oz para Onzas \n\n Para cerrar ingrese ESC ")

    }

    if (unidadDestino=="ESC") {

        console.log("Chau!")
        
    } else {
        
        if (unidadInicial == "ml" && unidadDestino == "tz") {

        cantidadInicial = prompt("Ingresa la cantidad \nSólo el número - Usar . para los decimales")
        
        MlaTazas(cantidadInicial)
    
        } else if (unidadInicial == "tz" && unidadDestino == "ml") {
            
            cantidadInicial = prompt("Ingresa la cantidad \nSólo el número - Usar . para los decimales")
            
            TazasAMl(cantidadInicial)
        
        } else if (unidadInicial == "gr" && unidadDestino == "oz") {
        
            cantidadInicial = prompt("Ingresa la cantidad \nSólo el número - Usar . para los decimales")
            
            GrAOz(cantidadInicial)
        
        } else if (unidadInicial == "oz" && unidadDestino == "gr"){
        
            cantidadInicial = prompt("Ingresa la cantidad \nSólo el número - Usar . para los decimales")
            
            OzAGr(cantidadInicial)
        
        } else if (unidadInicial == "ESC" || unidadDestino == "ESC"){

            console.log("Chau!")

        } else {
        
            console.log("Quisiste hacer una conversión que todavía no contemplamos")
        
        }

    }
    
} while ( unidadInicial != "ESC" || unidadDestino != "ESC" );



