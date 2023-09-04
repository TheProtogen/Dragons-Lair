
//Processador1 mostra a página quando o Processador recebe o nome.
//Basicamente, todo o conteúdo da página está como hidden até que a variável seja registrada
//Então dá para se observar que alguns elementos perdem o atributo hidden, enquanto outros ganham o mesmo

let toggle = button => {
       //Coisas para mostrar
       let myDiv1 = document.getElementById("myDiv1");
       let myDiv2 = document.getElementById("myDiv2");
       let myDiv3 = document.getElementById("myDiv3");

       let myTable1 = document.getElementById("myTable1");


       //Coisas para esconder
       let buttonThing = document.getElementById("buttonThing");
       let myHr = document.getElementById("myHr");
       

       //Comando para mostrar
       myDiv1.removeAttribute("hidden");
       myDiv2.removeAttribute("hidden");
       myDiv3.removeAttribute("hidden");

       myTable1.removeAttribute("hidden")


       //Comando para esconder
       buttonThing.setAttribute("hidden","hidden");
       myHr.setAttribute("hidden","hidden");
}
