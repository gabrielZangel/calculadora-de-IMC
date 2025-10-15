//entrada
function calculo() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let abaixoDoPeso = "você está abaixo do peso ideal!"
    let pesoIdeal = "você está no peso ideal!"
    let acimaDoPeso = "você está acima do peso ideal!"
    let classificacao = ""

//processamento
    let imc = peso / (altura * altura);

//saida
    
    if (imc < 18.5) {
        classificacao = abaixoDoPeso;
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = pesoIdeal;
    } else if (imc >= 25) {
        classificacao = acimaDoPeso;
    }

    document.getElementById("imc_user").textContent = "Seu IMC é de " + imc.toFixed(1);
    document.getElementById("classe").textContent = classificacao;

}

