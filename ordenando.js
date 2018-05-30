/* la funcion esta enlazada con el boton, para poder enviar la eleccion*/
function enviar(){
    /*se crea la primera variable que traera la opcion del cliente a nuesto js*/
    let eleccionMenu = document.getElementById("eleccion").value;
    /*se crea una segunda variable para entregarle una respuesta al cliente*/
    let pedido = "Lo sentimos,no tenemos "+ eleccionMenu +" ,seleccione otro plato";
    /*si el cliente elige la hamburguesa , se cumple la funcion y arroja la nueva respuesta*/
    if(eleccionMenu == "Hamburguesa"){
        pedido= "Buena eleccion, disfruta tu " + eleccionMenu;
    }
    /* imprimimos en el html la respuesta que corresponde*/
    document.getElementById("mostrarEleccion").innerHTML= pedido;
}
