function entrarPorCodigo() {
  const codigo = document.getElementById('codigoQuiz').value;
  if (!/^\d{12}$/.test(codigo)) {
    alert("O código deve conter exatamente 12 dígitos numéricos.");
    return;
  }
  // Redirecionar (exemplo)
  alert("Entrando no quiz com código: " + codigo);
  // window.location.href = `/quiz/${codigo}`;
}

function entrarPorLink() {
  const link = document.getElementById('linkQuiz').value;
  if (!link.startsWith("http")) {
    alert("Cole um link válido do quiz.");
    return;
  }
  // Redirecionar (exemplo)
  alert("Abrindo o quiz: " + link);
  // window.location.href = link;
}
