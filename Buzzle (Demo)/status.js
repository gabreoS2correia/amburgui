const alunosRespondidos = ['Gabriel Foda da Silva', 'Caio Palmar Lixo', 'Enzo Fezes Costa'];
const alunosNaoRespondidos = ['Guilherme Cu de Burro', 'Jeguilson Pimentel Scroblei', 'Rei do Sexo Bruto'];

const totalAlunos = alunosRespondidos.length + alunosNaoRespondidos.length;
const porcentagem = Math.round((alunosRespondidos.length / totalAlunos) * 100);

document.getElementById("porcentagem").textContent = `${porcentagem}%`;
document.getElementById("barra-progresso").value = porcentagem;

// Montar tabela de alunos
const tabela = document.getElementById("tabelaAlunos");

alunosRespondidos.forEach(nome => {
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${nome}</td>
    <td><span class="status-bolinha verde"></span>Respondeu</td>
  `;
  tabela.appendChild(linha);
});

alunosNaoRespondidos.forEach(nome => {
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${nome}</td>
    <td><span class="status-bolinha vermelha"></span>Não respondeu</td>
  `;
  tabela.appendChild(linha);
});
