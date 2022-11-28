var titulo = document.querySelector(".titulo");
titulo.textContent = "Thayná Endocrinologia";
//console.log(titulo.textContent); //Permite ter acesso ao conteúdo de texto da TAG
//titulo.textContent = "banana" //Altera o conteúdo de texto da tag

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); //true ou false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) { //Quando o peso NÃO for válido entra aqui
        console.log('Peso invalido!');
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        //tdPeso.classList.add("paciente-invalido"); // pinta somente o peso
    }

    if (!alturaEhValida) { //Quando a altura NAO for valida entra aqui
        console.log('Altura Inválida!')
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido"); //pinta toda linha
    }

    if (alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;//Deixar apenas 2 casas decimais
    }
}

function  validaPeso(peso){
    if (peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

/*
titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado")
}
*/

//console.log(paciente); // tr
//console.log(tdPeso); // td que tem o peso
//console.log(altura)//resultado altura
