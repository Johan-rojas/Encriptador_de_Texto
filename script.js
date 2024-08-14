const textArea = document.querySelector(".texto_Entrada");
const mensaje = document.querySelector(".texto_Salida");
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
     alert('Contenido copiado al portapapeles');
    },() => {
      console.error('Error al copiar');
    });
   
}

function btn_pegar(){
    textArea.value=texto_copia;  
}

function encriptar(stringEncriptada){

    if(stringEncriptada != ""){
        let matrizCodigo = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase()

        for(let i=0; i < matrizCodigo.length ; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

            }
        }
        return stringEncriptada
    }
    else{
        alert("Ingrese texto para encriptar"); 
        return none;
    }

    
}

function desencriptar(stringDesencriptada){
    if(stringDesencriptada != ""){
        let matrizCodigo = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringDesencriptada.toLowerCase()

        for(let i=0; i < matrizCodigo.length ; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
        }
        return stringDesencriptada
    }
    else{
        alert("Ingrese un texto para desencriptar"); 
        return none;
    }
    
}