//a=ai, e=enter, i=imes, o=ober, u=ufat

//Función de encriptar mensaje
function encriptar() {
    let mensaje  = document.getElementById('mensaje').value;
    let pizarra = document.getElementById('msg');
    let mensajeEncriptado='';

    //El orden de los regex es importante porque es una lectura lineal y se puede hacer una
    //encriptación sobre encriptación: e, i, a, o, u.
    mensajeEncriptado = mensaje.replace(/e/gi,'enter')
                        .replace(/i/gi,'imes').replace(/a/gi,'ai')
                        .replace(/o/gi,'ober')
                        .replace(/u/gi,'ufat');

    pizarra.innerHTML=mensajeEncriptado;

}
//Función de desencriptar mensaje
function desencriptar() {
    let mensaje  = document.getElementById('mensaje').value;
    let pizarra = document.getElementById('msg');
    let mensajeDesencriptado='';

    mensajeDesencriptado = mensaje.replace(/ai/gi,'a').replace(/enter/gi,'e')
                        .replace(/imes/gi,'i').replace(/ober/gi,'o')
                        .replace(/ufat/gi,'u');

    pizarra.innerHTML=mensajeDesencriptado;

}

