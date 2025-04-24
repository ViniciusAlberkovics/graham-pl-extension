document.getElementById("bazin-calcular").addEventListener("click", calcularDados);

/**
 * @param {number} medDividendo Média do dividendo anual pago nos últimos 5 anos, ou todo o período em casos de menos de 5 anos na bolsa
 */
function calcularPrecoTeto(medDividendo, DYDesejadoPercent = 6) {
  const dividendYieldDesejado = DYDesejadoPercent / 100;
  const precoTeto = medDividendo / dividendYieldDesejado;
  return precoTeto.toFixed(2);
}

function calcularDados() {
  const dyDesejado = parseFloat(document.getElementById("bazin-dy_desejado").value);
  const med = parseFloat(document.getElementById("bazin-med").value);


  if (isNaN(dyDesejado) || isNaN(med)) {
    alert("Preencha todos os campos!");
    return;
  }

  const precoTeto = calcularPrecoTeto(med, dyDesejado)

  const resultado = document.getElementById("bazin-resultado");
  resultado.innerHTML = `Preço Teto: ${precoTeto}`;
}
