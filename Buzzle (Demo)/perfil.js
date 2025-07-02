const inputImagem = document.getElementById("imagemPerfil");
const imagemPreview = document.getElementById("imagemPreview");

inputImagem.addEventListener("change", function () {
  const arquivo = this.files[0];
  if (arquivo) {
    const leitor = new FileReader();
    leitor.onload = function (e) {
      imagemPreview.setAttribute("src", e.target.result);
    };
    leitor.readAsDataURL(arquivo);
  }
});
