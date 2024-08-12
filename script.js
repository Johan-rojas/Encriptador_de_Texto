const textArea = document.querySelector(".texto_entrada");
const mensaje = document.querySelector(".texto_salida");
let texto_copia;

function btn_Encriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}   

function btn_Desencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

} 

function btn_copiar(){
    texto_copia = mensaje.value;
    navigator.clipboard.writeText(texto_copia)
    .then(() => {
      console.log('Contenido copiado al portapapeles');
    },() => {
      console.error('Error al copiar');
    });
   
}

function btn_pegar(){
    textArea.value=texto_copia;  
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length ; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringDesncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length ; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesncriptada
}