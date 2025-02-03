let amigoSecreto = [];

function agregarAmigo(){
    console.log(amigoSecreto)
    // Evalua si no se ingresa ningun nombre
    let agregar = document.getElementById("amigo");
    if (agregar.value == "" || agregar.value == " " ){
        alert("Debes ingresar un nombre")
        
    }//Evalua si se ingresa un numero
    else if (!isNaN(parseInt(agregar.value))) {
        alert("No se pueden ingregar numeros. Favor ingresar un nombre")
    
    }//Evalua si se repite el nombre
    else if(amigoSecreto.includes(agregar.value.trim())){
        alert("Este nombre ya fue ingresado, favor ingresa otro")
    }else//Si ninguna de las condiciones anteriores no se cumple, agrega el valore a la lista
    {
        let elementoSeleccion = document.getElementById("listaAmigos")
        elementoSeleccion.innerHTML = "";

        amigoSecreto.push(agregar.value);
           
        for(let i = 0; i < amigoSecreto.length;i++){
            imprimirEnPantalla(elementoSeleccion, "li", amigoSecreto[i]);
        }
    }
    agregar.value = "";
    
        
}

function imprimirEnPantalla(lista, elemento,texto){
    let elementoHTML = document.createElement(elemento);
    elementoHTML.textContent = texto;
    lista.appendChild(elementoHTML);
    return
}



function sortearAmigo(){
    if(amigoSecreto.length == 0){
        alert("Se han asignado todos los nombres")
    }else{
        let elementoSeleccion = document.getElementById("resultado");
        elementoSeleccion.innerHTML = "";
        let numeroGenerado =  Math.floor(Math.random() * amigoSecreto.length);
        
        let amigoSorteado = amigoSecreto.splice(numeroGenerado,1);
        console.log(amigoSorteado);
        
        imprimirEnPantalla(elementoSeleccion, "li", amigoSorteado);
        return
}

}


