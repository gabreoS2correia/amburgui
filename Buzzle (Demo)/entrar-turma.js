function entrarPorCodigo() {
  const codigo = document.getElementById('codigoQuiz').value;
  if (!/^\d{12}$/.test(codigo)) {
    alert("O código deve conter exatamente 12 dígitos numéricos.");
    return;
  }
  // Redirecionar (exemplo)
  alert("Entrando na turma com código: " + codigo);
  // window.location.href = `/quiz/${codigo}`;
}

function entrarPorLink() {
  const link = document.getElementById('linkQuiz').value;
  if (!link.startsWith("http")) {
    alert("Cole um link válido da turma.");
    return;
  }
  // Redirecionar (exemplo)
  alert("Entrando em turma: " + link);
  // window.location.href = link;
}
