// ======================================
// 📌 Função: Calcular Sensação Térmica
// ======================================
function calcularSensacaoTermica(temperatura, velocidadeVento) {
    // Fórmula do fator de resfriamento pelo vento (em °C e km/h)
    // Válida quando: temp <= 10°C E vento > 4.8 km/h
    if (temperatura <= 10 && velocidadeVento > 4.8) {
        let sensacao = 13.12 + 0.6215 * temperatura 
                       - 11.37 * Math.pow(velocidadeVento, 0.16) 
                       + 0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);
        return Math.round(sensacao * 10) / 10; // Arredonda para 1 casa decimal
    } else {
        return "N/A"; // Não aplicável
    }
}

// ======================================
// 📌 Quando a página carregar...
// ======================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 🔹 Dados estáticos (depois vamos usar APIs reais!)
    let temp = 25;        // em °C
    let vento = 10;       // em km/h
    
    // 🔹 Exibe os valores na página
    document.getElementById("temperatura").textContent = temp;
    document.getElementById("vento").textContent = vento;
    
    // 🔹 Calcula e mostra sensação térmica
    let resultado = calcularSensacaoTermica(temp, vento);
    document.getElementById("sensacao").textContent = resultado;
    
    // 🔹 Rodapé: ano atual e data de modificação
    let hoje = new Date();
    document.getElementById("ano").textContent = hoje.getFullYear();
    
    let dataArquivo = new Date(document.lastModified);
    let dataFormatada = dataArquivo.toLocaleDateString("pt-BR");
    document.getElementById("data-modificacao").textContent = dataFormatada;
    
    console.log("✅ Página carregada com sucesso!");
});
