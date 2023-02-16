
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adiciona");

  let pacienteObjeto = obtemPacienteDoFormulario(form);

  let formulario = validaPaciente(pacienteObjeto);

  if (formulario.getErrors().length > 0) {
    exibeMensagensDeErro(formulario);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  let mensagensErro = document.querySelector("mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(pacienteObjeto) {
  const pacienteTr = montaTr(pacienteObjeto);
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(formulario) {
  const errors = formulario.getErrors();
  errors.forEach(function (errorObject) {
    errorObject.element.textContent = errorObject.text;
  });
}


function obtemPacienteDoFormulario(form) {
  let pacienteObjeto = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return pacienteObjeto;
}

function montaTr(pacienteObjeto) {
  const pacienteTr = document.createElement("tr");


  pacienteTr.classList.add("paciente");

 
  pacienteTr.appendChild(montaTd(pacienteObjeto.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(pacienteObjeto.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(pacienteObjeto.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(pacienteObjeto.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(pacienteObjeto.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function Form() {
  this.errors = [];
  this.getErrors = function () {
    return this.errors;
  };
  this.addError = function (text, element) {
    this.errors.push({
      text: text,
      element: element,
    });
  };
}

function validaPaciente(pacienteObjeto) {
  
  const nomeErro = document.querySelector("#nome-error");
  nomeErro.innerHTML = "";

  const pesoErro = document.querySelector("#peso-error");
  pesoErro.innerHTML = "";

  const alturaErro = document.querySelector("#altura-error");
  alturaErro.innerHTML = "";

  const gorduraErro = document.querySelector("#gordura-error");
  gorduraErro.innerHTML = "";

  const formulario = new Form();

  if (!verificaPeso(pacienteObjeto.peso)) {
    formulario.addError("Peso é invalido", pesoErro);
  }

  if (!verificaAltura(pacienteObjeto.altura)) {
    formulario.addError("Altura é inválida", alturaErro);
  }

  if (!verificaGordura(pacienteObjeto.gordura)) {
    formulario.addError("Gordura é inválida", gorduraErro);
  }

  if (pacienteObjeto.nome.length == 0) {
    formulario.addError("O nome não pode ser em branco", nomeErro);
  }

  if (pacienteObjeto.gordura.length == 0) {
    formulario.addError("A gordura não pode ser em branco", gorduraErro);
  }

  if (pacienteObjeto.peso.length == 0) {
    formulario.addError("O peso não pode ser em branco", pesoErro);
  }

  if (pacienteObjeto.altura.length == 0) {
    formulario.addError("A altura não pode ser em branco", alturaErro);
  }
  return formulario;
}
