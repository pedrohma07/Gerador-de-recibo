function gerarRecibo(){
    const valor = document.getElementById("valor").value;
    const valorExtenso = document.getElementById("valor-extenso").value;
    const referente = document.getElementById("referente").value;
    const nomePag = document.getElementById("nome-pag").value;
    const cpfCnpjPag = document.getElementById("cpf-cnpj").value;
    const cheque ={
        numero_cheque: document.getElementById("n-cheque"),
        banco_cheque: document.getElementById("banco-cheque"),
        agencia_cheque: document.getElementById("agencia-cheque")
    };
    const local = document.getElementById("local").value;
    const nome_emitente = document.getElementById("nome-emitente").value;
    const cpf_cnpj_emitente = document.getElementById("cpf-cnpj-emitente").value;
    const rg_emitente = document.getElementById("rg-emitente").value;
    

    if(validaCampos(valor) == true) {return;}
    if(validaCampos(valorExtenso) == true) {return;}
    if(validaCampos(referente) == true) {return;};
    if(validaCampos(nomePag) == true) {return;};
    if(validaCampos(cpfCnpjPag) == true) {return;};
    if(validaCampos(local) == true) {return;};
    if(validaCampos(nome_emitente) == true){return;};
    if(validaCampos(cpf_cnpj_emitente) == true) {return;};
    if(validaCampos(rg_emitente) == true) {return;};

    const janela =window.open("","", "width=800", "height=600");
    janela.document.write(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Imprima seu Recibo</title>
        <link rel="stylesheet" href="style-recibo.css">
    </head>
    <body>
        <div class="principal">
            <h1>Recibo:</h1>
            <div class="container">
                <span>Nome do pagador: ${nomePag}</span> 
                <span>valor: ${valor}</span> 
                <span>valor (por extenso): ${valorExtenso}</span> 
                <span>Referente: ${referente}</span> 
                <span>CPF/CNPJ do pagador: ${cpfCnpjPag}</span>
                <span>Local da emissão: ${local}</span>
                <span class="line"></span>
                <span>Nome do emitente: ${nome_emitente}</span> 
                <span>CPF/CNPJ do emitente: ${cpf_cnpj_emitente}</span>
                <span>RG do emitente: ${rg_emitente}</span> 
                <div class="container-cheque">
                    <span>N° do cheque: ${cheque.numero_cheque.value}</span>
                    <span>Banco do cheque: ${cheque.banco_cheque.value}</span>
                    <span>Agencia do cheque: ${cheque.agencia_cheque.value}</span>
                </div>
            </div>
        </div>
        <button onclick="imprimir()">Imprimir</button>
        <script src="script.js">
        </script>
    </body>
    </html>
    `);
    
    janela.document.close();
}

function validaCampos(campo){
    if(campo == null || campo == undefined || campo == ""){
        console.log("teste");
        alert("Preencha todos os campos obrigatórios");
        return true;
    }
    else{
        return false
    }
}

function limpar() {
    const form = document.getElementById("form-recibo").reset();    

}

function imprimir(){
    window.print();
}
