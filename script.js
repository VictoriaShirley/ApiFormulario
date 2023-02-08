async function buscaCep(cep) {
    mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaConvertida = await consultaCep.json();
        if (consultaConvertida.erro) {
            throw Error ('Cep inválido')
        }

        var logradouro = document.getElementById('endereco');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        logradouro.value = consultaConvertida.logradouro;
        cidade.value = consultaConvertida.localidade;
        estado.value = consultaConvertida.uf;
        bairro.value = consultaConvertida.bairro;
    } catch(erro){
        mensagemErro.innerHTML = '<p>Cep inválido</p>'
    }
    console.log(consultaConvertida)
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaCep(cep.value))