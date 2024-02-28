/**
 * Função para gerar QRCode
 */
function generateQRCodeAndAnimate() {  
    document.getElementById("qrcodeContainer").innerHTML = ""; 
    // Recupera os dados do formulário
    let nome = document.getElementById("nome").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let telefone = document.getElementById("telefone").value;
    let plano = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    
    // Constrói a mensagem com os dados do formulário
    let mensagem = "Olá, tudo bem!\nRealizei meu pré cadastro no seu site, gostaria de contratar um plano. Aqui estão meus dados.\n\nNome: " + nome + "\n";
        mensagem += "Rua: " + rua + "\n";
        mensagem += "Número: " + numero + "\n";
        mensagem += "Bairro: " + bairro + "\n";
        mensagem += "Telefone: " + telefone + "\n";
        mensagem += "Plano: " + plano;

    const numeroTelefone = '+5598985541640';
    // Cria um link que redireciona para o WhatsApp com a mensagem
    const linkRedirecionamento = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    
    // Cria um novo QR Code
    new QRCode(document.getElementById("qrcodeContainer"), {
        text: linkRedirecionamento,
        width: 550,
        height: 500
    });
    const fechar = document.getElementById("fecharQRCode");
    fechar.classList.add('btn-close');
}
/**
 * função para fechar QRCode
 */
function fecharQRcode(){
    document.getElementById("qrcodeContainer").innerHTML = "";
    const fechar = document.getElementById("fecharQRCode");
    fechar.classList.remove('btn-close')
}

/**
 * função para iniciar convesa na web
 */
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Recupera os dados do formulário
    let nome = document.getElementById("nome").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let telefone = document.getElementById("telefone").value;
    let plano = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    // Constrói a mensagem com os dados do formulário
    let mensagem = "Olá, tudo bem!\nRealizei meu pré cadastro no seu site, gostaria de contratar um plano. Aqui estão meus dados.\nNome: " + nome + "\n";
        mensagem += "Rua: " + rua + "\n";
        mensagem += "Número: " + numero + "\n";
        mensagem += "Bairro: " + bairro + "\n";
        mensagem += "Telefone: " + telefone + "\n";
        mensagem += "Plano: " + plano;
    
    const numeroTelefone = '+5598985541640';
    // Constrói o link para o WhatsApp
    let link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o link do WhatsApp
    window.location.href = link;
});