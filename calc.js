document.getElementById("calcular").addEventListener("click", calcularDados);

function calcularPrecoJusto(LPA, VPA, PLIdeal = 15, PVIdeal = 1.5) {
  return parseFloat(Math.sqrt(LPA * VPA * PLIdeal * PVIdeal).toFixed(2));
}

function calcularDados() {
  const plIdeal = parseFloat(document.getElementById("pl_ideal").value);
  const pvpIdeal = parseFloat(document.getElementById("pvp_ideal").value);
  const vpa = parseFloat(document.getElementById("vpa").value);
  const lpa = parseFloat(document.getElementById("lpa").value);

  if (isNaN(plIdeal) || isNaN(pvpIdeal) || isNaN(vpa) || isNaN(lpa)) {
    alert("Preencha todos os campos!");
    return;
  }

  const precoJusto = calcularPrecoJusto(lpa, vpa, plIdeal, pvpIdeal);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Preço Justo: ${precoJusto}`;
}
