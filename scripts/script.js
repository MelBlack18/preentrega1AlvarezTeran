// Objeto que tiene todos los datos base necesarios para operar
let datosBase = {
    unidadInicial : "",
    unidadDestino : "",
    cantidadInicial : 0,
    unidades : [
        "Mililitros",
        "Tazas",
        "Gramos",
        "Onzas"
    ],
}

// Objeto en donde cada clave es el resultado de una operacion
let resultados = {
    mililitrosATazas : 0,
    tazasAMililitros : 0,
    gramosAOnzas : 0,
    onzasAGramos : 0,
    gramosATazas : 0,
    tazasAGramos : 0
}

//Objeto que contiene todas las operaciones como métodos
let operaciones = {
    MlATazas(cant){
        resultados.mililitrosATazas =  (parseFloat(cant) / 240).toFixed(2)
        return resultados.mililitrosATazas
    },
    TazasAMl (cant){
        resultados.tazasAMililitros = (parseFloat(cant) * 240).toFixed(2)
        return resultados.tazasAMililitros
    },
    GrAOz (cant) {
        resultados.gramosAOnzas = (parseFloat(cant) * 0.035274).toFixed(2)
        return resultados.gramosAOnzas
    },
    OzAGr (cant) {
        resultados.onzasAGramos = (parseFloat(cant) * 28.3495).toFixed(2)
        return resultados.onzasAGramos
    },
    TzaGr (cant) {
        resultados.tazasAGramos = (parseFloat(cant) * 236.588236).toFixed(2)
        return resultados.tazasAGramos
    },
    GraTz (cant) {
        resultados.gramosATazas = (parseFloat(cant) / 236.588236).toFixed(2)
        return resultados.gramosATazas
    }
}

//Aler de bienvenida
alert("¿Querés hacer una torta y no sabes cómo calcular los ingredientes? Yo te ayudo (:")

 //Toda la recolección de datos es una función, para poder volver a ejecutarla si el usuario quiere seguir realizando operaciones
function recolectarDatos(){
    
    //Pongo el prompt dentro de un bucle do-while para que sólo continúe si se ingresa un número válido
    do {

        //Pido al usuario que indique la unidad de medida que quiere convertir
        datosBase.unidadInicial = prompt("¿Con qué unidad comenzaste? \nIngresa: \n0 para Mililitros \n1 para Tazas \n2 para Gramos  \n3 para Onzas")
        
    } while (datosBase.unidadInicial>4);

    //Guardo esa unidad de medida en la misma variable, consultando el array de unidades que tengo predefinido
    let unidadInicio = unidadElegida => datosBase.unidadInicial=datosBase.unidades[unidadElegida]
    // Ejecuto la función
    unidadInicio(datosBase.unidadInicial)

    //Pido al usuario la cantidad que quiere convertir y la guardo en una variable
    datosBase.cantidadInicial = prompt("Ingresa la cantidad \nSólo el número - Usar . para los decimales")

    //Vuelvo a hacer un bucle do-while para preguntar por la unidad a convertir
    do {
        
        //Pido al usuario que indique a qué unidad quiere convertir
        datosBase.unidadDestino = prompt("¿A qué unidad deseas convertir? \nIngresa: \n0 para Mililitros \n1 para Tazas \n2 para Gramos  \n3 para Onzas")

    } while (datosBase.unidadDestino>4);

    //De nuevo guardo esa unidad según lo que corresponda en el array de unidades
    let unidadFin = unidadElegida => datosBase.unidadDestino=datosBase.unidades[unidadElegida]
    unidadFin(datosBase.unidadDestino)

    //Console Log para verificar que todos los datos sean correctos
    console.log(`La unidad Inicial es ${datosBase.unidadInicial}, la Cantidad Inicial es ${datosBase.cantidadInicial} y se debe convertir a ${datosBase.unidadDestino}`);

    return datosBase.unidadInicial, datosBase.unidadDestino, datosBase.cantidadInicial, continuar
}

//Esta funcion evalúa qué operación utilizar dependiendo de lo ingresado, usando como parámetros las unidades de inicio y fin y la cantidad inicial
function convertir(unidadInicial, unidadDestino, cantidadInicial) {

    //Comparo en el if si las unidades pueden ser convertidas de una a otra o no y ejecuto la operación q corresponda, retornando el resultado
    if (unidadInicial == datosBase.unidades[0] && unidadDestino == datosBase.unidades[1]) {

        operaciones.MlATazas(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.mililitrosATazas} ${datosBase.unidadDestino}`)

    } else if (unidadInicial == datosBase.unidades[1] && unidadDestino == datosBase.unidades[0]) {
            
        operaciones.TazasAMl(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.tazasAMililitros} ${datosBase.unidadDestino}`)
        
    } else if (unidadInicial == datosBase.unidades[2] && unidadDestino == datosBase.unidades[1]) {
        
        operaciones.GraTz(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.gramosATazas} ${datosBase.unidadDestino} `)
        
    } else if (unidadInicial == datosBase.unidades[1] && unidadDestino == datosBase.unidades[2]){
        
        operaciones.TzaGr(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.tazasAGramos} ${datosBase.unidadDestino} `)
        
    } else if (unidadInicial == datosBase.unidades[2] && unidadDestino == datosBase.unidades[3]){

        operaciones.GrAOz(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.gramosAOnzas} ${datosBase.unidadDestino} `)

    } else if (unidadInicial == datosBase.unidades[3] && unidadDestino == datosBase.unidades[2]){

        operaciones.OzAGr(cantidadInicial)

        console.log(`${datosBase.cantidadInicial} ${datosBase.unidadInicial} equivalen a ${resultados.onzasAGramos} ${datosBase.unidadDestino} `)

    } else {
        
        alert("Quisiste hacer una conversión que todavía no contemplamos, probá de nuevo")
        
    }
}

//Variable para evaluar si continuar o no con el do-while
let continuar = "SI"

//Bucle de ejecución del programa, sigue pidiendo información y recolectando los datos mientras el usuario no le diga que quiere salir
do {

    recolectarDatos()
    convertir(datosBase.unidadInicial, datosBase.unidadDestino, datosBase.cantidadInicial)

    continuar = prompt("¿Querés convertir algo más?\nIngresá SI para continuar o NO para cancelar")

} while (continuar=="SI")