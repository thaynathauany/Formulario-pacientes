var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET"," https://api-pacientes.herokuapp.com/pacientes"); //Abre conexao com o endereço que queremos fazer. GET é um tipo de requisição comum

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status === 200 ){ //significa que deu td certo. Sem erros
            erroAjax.classList.add("invisivel") //se não deu erro, deixa a meensagem invisivel
            var resposta = xhr.responseText; //Quando td estiver carregado, executa essa função cuspindo o texto da resposta no console
            //console.log(resposta)
            //console.log(typeof resposta) - VERIFICA SE É STRING OU OBJETO
            
            var pacientes = JSON.parse(resposta); //Pega a string e transforma em Array
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);          
            })       
        }else{
            console.log(xhr.status); //mostra qual foi o tipo de erro
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel") //deixa visivel ao usuario que deu erro.
        }
    })

    xhr.send();//envia requisição
});


//APRENDENDO A FAZER REQUISIÇÃO COM JS