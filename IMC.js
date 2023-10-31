let IMC = document.getElementById("IMC");
let resp = document.getElementById("resp");
let borrar = document.getElementById("borrar");
   borrar.addEventListener("click",clickBorrar);
let calcular = document.getElementById("calcular");
   calcular.addEventListener("click",clickcalcular);
function clickcalcular(){
    let m = document.getElementById("estatura").value;
    let kg = document.getElementById("peso").value;
    let imc = (kg / (m*m)) * 10000;
    IMC.innerHTML=Math.round(imc);
    
    if (imc > 8)
    {
        alert(jooooo);
        resp.innerHTML=Math.round("imc");
    }

    IMC.innerHTML = nath.round(imc)
    if ( m =="" / kg =="") {
        alert ("debes ingresar los datos completos")
        IMC.innerHTML = "";
        alert("dddddddddd")
        return;

    }
    if(imc >= 18.5 && imc <= 24.9);{resp.innerHTML=Math.round("imc");}
    if(imc >= 25 && imc <= 29.9);{ resp.innerHTML = " mas alto de lo normal";}
    if(imc >= 30 );{ resp.innerHTML = " demasiado alto de lo normal";}
    if(imc <= 18.5 );{ resp.innerHTML = " es mas bajo de lo normal";}

}
        

    
function clickBorrar(){
        IMC.innerHTML = "";
        resp.innerHTML = "";
        

}
