
// Cronometro

function cronometro() {
    // Cada vez que se llama a la funcion se aumenta una centésima del cronómetro
    decimas++;

    // Añade un cero a la izquierda si el valor es menor que 10
    if (decimas < 10) decimas = "0" + decimas;
    else if (decimas > 99) {
        decimas = "0";
        segundos++;
    }

    if (segundos[0] != 0) if (segundos < 10) segundos = "0" + segundos;
    // Si los segundos aumentan de 59 se resetean a 0 y se aumenta un minuto
    if (segundos > 59) {
        segundos = "0";
        minutos++;
    }
    // Actualizamos el contenido del cronómetro
    contador1.innerHTML = "0" + minutos + ":" + segundos + ":" + decimas;
}

// Función que empieza el cronómetro
function empezarCronometro() {
    // Solo lo empieza si no está empezado ya
    if (!t) t = setInterval(cronometro, 10);
}

// Función que para el cronómetro
function pausarCronometro() {
    clearInterval(t);
    t = null;
}

// Función que reinicia el cronómetro
function reiniciarCronometro() {
    clearInterval(t);
    t = null;
    minutos = 0;
    segundos = 0;
    decimas = 0;
    contador1.innerHTML = "00:00:00";
}

// Se declaran las variables globales a las que tendrán acceso todas las funciones
var contador1 = document.getElementById("contador1");

var minutos = 0;
var segundos = 0;
var decimas = 0;

var t;


// Temporizador

function temporizador() {
    // Cada vez que se llama a la funcion se resta una centésima del cronómetro
    decimas2--;
    
    // Si el valor es menor que diez se le añade un cero a la izquierda (de otra forma a la usada anteriormente)
    if (decimas2 < 10) decimas2 = ("00" + decimas2).slice(-2);
    if (decimas2 < 0) {
        decimas2 = 99;
        segundos2--;
    }

    if (segundos2 < 10) segundos2 = ("00" + segundos2).slice(-2);
    // Si los segundos bajan de 0 se aumentan a 59 y se resta 1 a los minutos
    if (segundos2 < 0) {
        segundos2 = 59;
        minutos2--;
    }

    if (minutos2 < 10) minutos2 = ("00" + minutos2).slice(-2);
    if (minutos2 < 0) {
        minutos2 = 59;
        horas--;
    }

    if (horas < 10) horas = ("00" + horas).slice(-2);

    // Comprueba que el temporizador se acabe
    if (horas == 00 && minutos2 == 00 && segundos2 == 00 && decimas2 == 00) {
        clearInterval(t2);
        delete(t2);
    }
    // Se actualiza el valor del temporizador
    contador2.innerHTML = horas + ":" + minutos2 + ":" + segundos2 + ":" + decimas2;
}

function empezarTemporizador() {

    // Si el temporizador no está ya declarado
    if (!t2) {

        // Solo se vuelven a coger los valores del formulario si estos no están ya declarados
        if (!horas && !minutos2 && !segundos2 && !decimas2) {
            horas = document.getElementById("horas").value;
            minutos2 = document.getElementById("minutos").value;
            segundos2 = document.getElementById("segundos").value;
            decimas2 = 99;

            horas = ("00" + horas).slice(-2);
            minutos2 = ("00" + minutos2).slice(-2);
            segundos2 = ("00" + segundos2).slice(-2);

            // Si el temporizador está en 00:00:00 no se empieza 
            if (horas == "00" & minutos2 == "00" && segundos2 == "00") return false;
            
            // Un ajuste para que si le pones por ej 10 segundos empiece en 9.99 y no en 10.99 que sería un segundo más
            segundos2--;
        }

        t2 = setInterval(temporizador, 10);
    }
}

// Para el temporizador
function pausarTemporizador() {
    clearInterval(t2);
    t2 = null;
}

// Reinicia el temporizador
function reiniciarTemporizador() {
    clearInterval(t2);
    t2 = null;
    horas = 0;
    minutos2 = 0;
    segundos2 = 0;
    decimas2 = 0;
    contador2.innerHTML = "00:00:00:00";
}

// Se declaran las variables globales a las que tendrán acceso todas las funciones
var contador2 = document.getElementById("contador2");
var horas, minutos2, segundos2, decimas2;

var t2;



