// Funções JavaScript para adicionar novas funções e riscos dinamicamente

// Função para adicionar novo risco
function adicionarNovoRisco(idFuncao) {
  const riscosContainer = document.getElementById(`riscosContainer${idFuncao}`);
  const riscoCount = riscosContainer.childElementCount;

  const novoRiscoHTML = `
    <div class="risco-group">
        <h4>Risco ${riscoCount + 1}</h4>
        <!-- Resto do código HTML para os campos do risco -->
    </div>
  `;

  riscosContainer.insertAdjacentHTML('beforeend', novoRiscoHTML);
}

// Função para adicionar nova função
function adicionarNovaFuncao() {
  const funcoesContainer = document.getElementById('funcoesContainer');
  const funcaoCount = funcoesContainer.childElementCount;

  const novaFuncaoHTML = `
    <div class="funcao-group">
        <h3>Função ${funcaoCount + 1}</h3>
        <!-- Resto do código HTML para os campos da função -->
    </div>
  `;

  funcoesContainer.insertAdjacentHTML('beforeend', novaFuncaoHTML);
}

// Função para exibir ou ocultar campo de avaliação quantitativa
function exibirAvaliacaoQuantitativa() {
  const tipoAvaliacao = document.getElementById('tipoAvaliacaoRisco1');
  const avaliacaoQuantitativaContainer = document.getElementById('avaliacaoQuantitativaContainer1');

  if (tipoAvaliacao.value === 'quantitativo') {
    avaliacaoQuantitativaContainer.classList.remove('hide');
  } else {
    avaliacaoQuantitativaContainer.classList.add('hide');
  }
}

// Event listener para o campo tipoAvaliacaoRisco1
document.getElementById('tipoAvaliacaoRisco1').addEventListener('change', exibirAvaliacaoQuantitativa);

