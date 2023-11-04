function suma (a,b,callback){
    let c = a +b;
    callback();
    }
    //¿Que es el tercer parámetro recibido?
    /*El tercer parámetro, callback, es una función que se pasa como argumento a la función suma.*/
    //¿En que casos es obligatorio desarrollar este tipo de funciones?
    /*para ejecutar código después de que se complete una operación asincrónica, 
    como una solicitud AJAX o la lectura de un archivo.*/
    //EJEMPLO
    function miCallback() {
        console.log("La suma se ha completado.");
    }

    suma(2, 3, miCallback);
