
//Processador1 mostra a página quando o Processador recebe o nome.
//Basicamente, todo o conteúdo da página está como hidden até que a variável seja registrada
//Então dá para se observar que alguns elementos perdem o atributo hidden, enquanto outros ganham o mesmo

let toggle = button => {
       let element0 = document.getElementById("myDiv1");
       let element1 = document.getElementById("buttonThing")
       let element2 = document.getElementById("myDiv2");
       let element3 = document.getElementById("myHr");
       let element4 = document.getElementById("myDiv3");

       element0.removeAttribute("hidden");
       element1.setAttribute("hidden","hidden");
       element2.removeAttribute("hidden");
       element3.setAttribute("hidden","hidden");
       element4.removeAttribute("hidden","hidden");
}    
    