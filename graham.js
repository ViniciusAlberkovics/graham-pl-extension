document.getElementById("graham-calcular").addEventListener("click", calcularDados);

function calcularPrecoJusto(LPA, VPA, PLIdeal = 15, PVIdeal = 1.5) {
  return parseFloat(Math.sqrt(LPA * VPA * PLIdeal * PVIdeal).toFixed(2));
}

function calcularDados() {
  const plIdeal = parseFloat(document.getElementById("graham-pl_ideal").value);
  const pvpIdeal = parseFloat(document.getElementById("graham-pvp_ideal").value);
  const vpa = parseFloat(document.getElementById("graham-vpa").value);
  const lpa = parseFloat(document.getElementById("graham-lpa").value);

  if (isNaN(plIdeal) || isNaN(pvpIdeal) || isNaN(vpa) || isNaN(lpa)) {
    alert("Preencha todos os campos!");
    return;
  }

  const precoJusto = calcularPrecoJusto(lpa, vpa, plIdeal, pvpIdeal);

  const resultado = document.getElementById("graham-resultado");
  resultado.innerHTML = `Preço Justo: ${precoJusto}`;
}
