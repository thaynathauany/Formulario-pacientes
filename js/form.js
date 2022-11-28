var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault() //previne que a pagina recarregue. Como padrao do form
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do #form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    //Valida inforações para inserir na tabela
    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros)    
        return; //return vazio faz ele sair da funcao anonima
    }

    adicionaPacienteNaTabela(paciente)

    form.reset(); //limpa o formulario
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML= "" //Se tudo for adicionado corretamente, limpa os erros

});

function adicionaPacienteNaTabela(paciente){
    //Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //Adiciona o novo paciente na tabela principal
    tabela.appendChild(pacienteTr); 
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "" //Controla o HTML interno de um elemento

    erros.forEach(function(erro){ //no erro poderia ser qualquer coisa. Está escrito erro apenas para identificação
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    //Adiciona uma classe na lista dos pacientes incluidos pelo form
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Por favor, digite o nome do paciente.")
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!") //puxa a mensagem pra dentro do array 
    }
    //OUTRA FORMA
    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida!")    

    if(paciente.gordura.length == 0){
        erros.push("Por favor, digite o percentual de gordura")
    }

    if(paciente.altura.length == 0){
        erros.push("Por favor, digite sua altura")
    }

    if(paciente.peso.length == 0){
        erros.push("Por favor, digite o seu peso")
    }


    return erros;
}

