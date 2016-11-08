/**
 * Created by Senad on 20.09.2016.
 */

var eing;
var img = document.getElementById("foto");



document.body.removeChild(img);

var object = new Bild("bild.jpg",70,90);

function Bild(img,x,y)
{   "use strict";
    this.y=y;
    this.x=x;
    this.img=img;

function name (a){
 
}

    this.addToDOM=function(element)
    {
        element.src=this.img;
        element.style.position="absolute";
        element.style.top=this.y+"30px";
        element.style.left=this.x+"30px";
    };


}

document.getElementById("button_1").addEventListener("click", function(){
    "use strict";
    eing = document.getElementById("eingabe").value;
    if (isNaN(eing)){
        window.alert("Darf keine zahl sein ");
    }
    else {
        document.getElementById("ausgabe").value += eing;
    }

})

