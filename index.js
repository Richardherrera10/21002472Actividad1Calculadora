let pantalla = document.getElementById("Pantalla")

let botones = Array.from(document.getElementsByClassName("boton"))

botones.map( boton => {
    boton.addEventListener("click", (x) =>{
        switch(x.target.innerText){
            case "C":
                pantalla.innerText = "";
                break;
            case "←":
                pantalla.innerText = pantalla.innerText.substring(0,pantalla.innerText.length-1)
                break;
            case "=":
                try {
                    pantalla.innerText = eval(pantalla.innerText);
                }catch{
                    pantalla.innerText = "Error"
                }
                break;
            default: 
                pantalla.innerText += x.target.innerText;    

        }
    });

});