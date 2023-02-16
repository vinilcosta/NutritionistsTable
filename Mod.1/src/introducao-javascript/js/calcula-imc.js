function calculaTabela() {
  const titulo = document.querySelector("h1");
  titulo.textContent = "Aparecida Nutricionista";

  

  let paciente = document.querySelector("#primeiro-paciente");

  const pacientes = document.querySelectorAll(".paciente");

  for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    const tdGordura = paciente.querySelector(".info-gordura");
    const gordura = tdGordura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    if (
      verificaPeso(peso, paciente, tdImc) &&
      verificaAltura(altura, paciente, tdImc) &&
      verificaGordura(gordura, paciente, tdImc)
    ) {
      let imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
    }
  }
}

function verificaPeso(peso, ) {
  if (peso <= 0 || peso >= 400) {
    return false;
  }
  return true;
}

function verificaAltura(altura) {
  if (altura <= 0 || altura >= 3.0) {
    return false;
  }
  return true;
}

function verificaGordura(gordura) {
  if (gordura <= 0 || gordura >= 100) {
    return false;
  }
  return true;
}

function calculaImc(peso, altura) {
  let imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
