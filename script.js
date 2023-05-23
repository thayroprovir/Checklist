var funcaoCount = 1;

function adicionarNovaFuncao() {
    funcaoCount++;
    
    var funcoesContainer = document.getElementById('funcoesContainer');
    var novaFuncaoGroup = document.createElement('div');
    novaFuncaoGroup.className = 'funcao-group';
    novaFuncaoGroup.innerHTML = `
        <h3>Função ${funcaoCount}</h3>
        <div class="form-group">
            <label for="funcao${funcaoCount}">Função:</label>
            <input type="text" id="funcao${funcaoCount}" name="funcao">
        </div>
        <div id="riscosContainer${funcaoCount}">
            <div class="risco-group">
                <h4>Risco 1</h4>
                <div class="form-group">
                    <label for="fonteRisco1">Fonte do Risco:</label>
                    <input type="text" id="fonteRisco1" name="fonteRisco">
                </div>
                <div class="form-group">
                    <label for="exposicaoRisco1">Exposição do Risco:</label>
                    <input type="text" id="exposicaoRisco1" name="exposicaoRisco">
                </div>
                <div class="form-group">
                    <label for="propagacaoRisco1">Meio de Propagação:</label>
                    <input type="text" id="propagacaoRisco1" name="propagacaoRisco">
                </div>
                <div class="form-group">
                    <label for="lesoesRisco1">Lesões:</label>
                    <input type="text" id="lesoesRisco1" name="lesoesRisco">
                </div>
                <div class="form-group">
                    <label for="tipoAvaliacaoRisco1">Tipo de Avaliação:</label>
                    <select id="tipoAvaliacaoRisco1" name="tipoAvaliacaoRisco">
                        <option value="qualitativo">Qualitativo</option>
                        <option value="quantitativo">Quantitativo</option>
                    </select>
                </div>
                <div id="avaliacaoQuantitativaContainer1" style="display: none;">
                    <div class="form-group">
                        <label for="avaliacaoQuantitativa1">Avaliação Quantitativa:</label>
                        <input type="file" id="avaliacaoQuantitativa1" name="avaliacaoQuantitativa" accept="application/pdf">
                    </div>
                </div>
                <div class="form-group">
                    <label for="fotosRisco1">Fotos do Risco:</label>
                    <input type="file" id="fotosRisco1" name="fotosRisco" multiple accept="image/*">
                </div>
                <button type="button" onclick="adicionarNovoRisco(${funcaoCount})">Adicionar Novo Risco</button>
            </div>
        </div>
    `;
    
    funcoesContainer.appendChild(novaFuncaoGroup);
}

function adicionarNovoRisco(funcaoIndex) {
    var riscosContainer = document.getElementById('riscosContainer' + funcaoIndex);
    var riscoCount = riscosContainer.getElementsByClassName('risco-group').length + 1;
    
    var novoRiscoGroup = document.createElement('div');
    novoRiscoGroup.className = 'risco-group';
    novoRiscoGroup.innerHTML = `
        <h4>Risco ${riscoCount}</h4>
        <div class="form-group">
            <label for="fonteRisco${funcaoIndex}_${riscoCount}">Fonte do Risco:</label>
            <input type="text" id="fonteRisco${funcaoIndex}_${riscoCount}" name="fonteRisco">
        </div>
        <div class="form-group">
            <label for="exposicaoRisco${funcaoIndex}_${riscoCount}">Exposição do Risco:</label>
            <input type="text" id="exposicaoRisco${funcaoIndex}_${riscoCount}" name="exposicaoRisco">
        </div>
        <div class="form-group">
            <label for="propagacaoRisco${funcaoIndex}_${riscoCount}">Meio de Propagação:</label>
            <input type="text" id="propagacaoRisco${funcaoIndex}_${riscoCount}" name="propagacaoRisco">
        </div>
        <div class="form-group">
            <label for="lesoesRisco${funcaoIndex}_${riscoCount}">Lesões:</label>
            <input type="text" id="lesoesRisco${funcaoIndex}_${riscoCount}" name="lesoesRisco">
        </div>
        <div class="form-group">
            <label for="tipoAvaliacaoRisco${funcaoIndex}_${riscoCount}">Tipo de Avaliação:</label>
            <select id="tipoAvaliacaoRisco${funcaoIndex}_${riscoCount}" name="tipoAvaliacaoRisco">
                <option value="qualitativo">Qualitativo</option>
                <option value="quantitativo">Quantitativo</option>
            </select>
        </div>
        <div id="avaliacaoQuantitativaContainer${funcaoIndex}_${riscoCount}" style="display: none;">
            <div class="form-group">
                <label for="avaliacaoQuantitativa${funcaoIndex}_${riscoCount}">Avaliação Quantitativa:</label>
                <input type="file" id="avaliacaoQuantitativa${funcaoIndex}_${riscoCount}" name="avaliacaoQuantitativa" accept="application/pdf">
            </div>
        </div>
        <div class="form-group">
            <label for="fotosRisco${funcaoIndex}_${riscoCount}">Fotos do Risco:</label>
            <input type="file" id="fotosRisco${funcaoIndex}_${riscoCount}" name="fotosRisco" multiple accept="image/*">
        </div>
    `;
    
    riscosContainer.appendChild(novoRiscoGroup);
}

function adicionarItem() {
    var empresa = document.getElementById('empresa').value;
    var ambiente = document.getElementById('ambiente').value;
    
    var funcoes = document.getElementsByName('funcao');
    var riscos = document.getElementsByName('risco');
    
    var listItem = document.createElement('li');
    listItem.innerHTML = `
        <h2>${empresa}</h2>
        <h3>Ambiente: ${ambiente}</h3>
        <ul class="funcoes-list">
    `;
    
    for (var i = 0; i < funcoes.length; i++) {
        var funcao = funcoes[i].value;
        var risco = riscos[i].value;
        
        var funcaoItem = document.createElement('li');
        funcaoItem.innerHTML = `
            <span>Função: ${funcao}</span>
            <span>Riscos da Função: ${risco}</span>
        `;
        
        listItem.appendChild(funcaoItem);
    }
    
    listItem.innerHTML += '</ul>';
    
    document.getElementById('checklist').appendChild(listItem);
    
    document.getElementById('empresa').value = '';
    document.getElementById('ambiente').value = '';
    
    var funcoesContainer = document.getElementById('funcoesContainer');
    funcoesContainer.innerHTML = `
        <div class="funcao-group">
            <h3>Função 1</h3>
            <div class="form-group">
                <label for="funcao1">Função:</label>
                <input type="text" id="funcao1" name="funcao">
            </div>
            <div id="riscosContainer1">
                <div class="risco-group">
                    <h4>Risco 1</h4>
                    <div class="form-group">
                        <label for="fonteRisco1">Fonte do Risco:</label>
                        <input type="text" id="fonteRisco1" name="fonteRisco">
                    </div>
                    <div class="form-group">
                        <label for="exposicaoRisco1">Exposição do Risco:</label>
                        <input type="text" id="exposicaoRisco1" name="exposicaoRisco">
                    </div>
                    <div class="form-group">
                        <label for="propagacaoRisco1">Meio de Propagação:</label>
                        <input type="text" id="propagacaoRisco1" name="propagacaoRisco">
                    </div>
                    <div class="form-group">
                        <label for="lesoesRisco1">Lesões:</label>
                        <input type="text" id="lesoesRisco1" name="lesoesRisco">
                    </div>
                    <div class="form-group">
                        <label for="tipoAvaliacaoRisco1">Tipo de Avaliação:</label>
                        <select id="tipoAvaliacaoRisco1" name="tipoAvaliacaoRisco">
                            <option value="qualitativo">Qualitativo</option>
                            <option value="quantitativo">Quantitativo</option>
                        </select>
                    </div>
                    <div id="avaliacaoQuantitativaContainer1" style="display: none;">
                        <div class="form-group">
                            <label for="avaliacaoQuantitativa1">Avaliação Quantitativa:</label>
                            <input type="file" id="avaliacaoQuantitativa1" name="avaliacaoQuantitativa" accept="application/pdf">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="fotosRisco1">Fotos do Risco:</label>
                        <input type="file" id="fotosRisco1" name="fotosRisco" multiple accept="image/*">
                    </div>
                    <button type="button" onclick="adicionarNovoRisco(1)">Adicionar Novo Risco</button>
                </div>
            </div>
            <button type="button" onclick="adicionarNovaFuncao()">Adicionar Nova Função</button>
        </div>
    `;
}

function exibirAvaliacaoQuantitativa(selectElement, riscoIndex) {
    var avaliacaoQuantitativaContainer = document.getElementById(`avaliacaoQuantitativaContainer${riscoIndex}`);
    var selectedValue = selectElement.value;
    
    if (selectedValue === 'quantitativo') {
        avaliacaoQuantitativaContainer.style.display = 'block';
    } else {
        avaliacaoQuantitativaContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tipoAvaliacaoRiscos = document.querySelectorAll('[id^=tipoAvaliacaoRisco]');
    
    tipoAvaliacaoRiscos.forEach(function(selectElement) {
        var riscoIndex = selectElement.id.match(/\d+/)[0];
        exibirAvaliacaoQuantitativa(selectElement, riscoIndex);
        
        selectElement.addEventListener('change', function() {
            exibirAvaliacaoQuantitativa(selectElement, riscoIndex);
        });
    });
});
