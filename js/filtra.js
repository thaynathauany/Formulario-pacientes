var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //A cada letra digitada no filtro executa a função
    console.log(this.value); //this nesse caso é o campo filtro
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        console.log("Tem algo digitado");
        for (var i  = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent; //extrai o nome do paciente
            var expressao = new RegExp(this.value,"i");//permite fazer uma busca textual em um texto grande. Case sensitive e Case insentive
            if (expressao.test(nome)){
                paciente.classList.remove("invisivel")
            }else{
                paciente.classList.add("invisivel")
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }


})