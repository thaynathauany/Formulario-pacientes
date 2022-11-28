var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){ ////Dblclick pergunta ao PAI da sessão qual dos seus FILHOS foram clicados
    event.target.parentNode.classList.add("fadeOut"); 
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500); //Espera 500 milisegundos para remover da lista
})

/*
tabela.addEventListener("click",function(){
    console.log("fui clicado");
})
Nesse exemplo, há cliques em todas as sessões
*/

    /*var alvoEvento = event.target; // TARGET Verifica quem foi o alvo desse evento.
    var paiDoAlvo = alvoEvento.parentNode; //PARENTNODE pega o pai do alvo TR =paciente = remover-paciente
    paiDoAlvo.remove(); OUTRA FORMA DE FAZER, SEM ECONOMIZAR LINAHS*/