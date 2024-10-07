document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    let isAuthenticated = false;

    // Função para habilitar/desabilitar os campos
    function toggleEditableFields(enable) {
        const selects = document.querySelectorAll('.funcoes');
        const anotacoes = document.querySelectorAll('.anotacao');
        const metas = document.querySelectorAll('.meta');
        const vendas = document.querySelectorAll('.venda');

        // Habilita ou desabilita selects de funções
        selects.forEach(select => {
            select.disabled = !enable;
        });

        // Habilita ou desabilita campos de anotação
        anotacoes.forEach(anotacao => {
            anotacao.disabled = !enable;
        });

        // Habilita ou desabilita campos de meta
        metas.forEach(meta => {
            meta.disabled = !enable;
        });

        // Habilita ou desabilita campos de venda
        vendas.forEach(venda => {
            venda.disabled = !enable;
        });
    }

    // Função para salvar os dados no LocalStorage
    function saveToLocalStorage() {
        const funcoes = document.querySelectorAll('.funcoes');
        const anotacoes = document.querySelectorAll('.anotacao');
        const metas = document.querySelectorAll('.meta');
        const vendas = document.querySelectorAll('.venda');
        
        const data = {
            funcoes: [],
            anotacoes: [],
            metas: [],
            vendas: []
        };

        // Salvando funções
        funcoes.forEach(select => {
            data.funcoes.push(select.value);
        });

        // Salvando anotações
        anotacoes.forEach(anotacao => {
            data.anotacoes.push(anotacao.value);
        });

        // Salvando metas
        metas.forEach(meta => {
            data.metas.push(meta.value);
        });

        // Salvando vendas
        vendas.forEach(venda => {
            data.vendas.push(venda.value);
        });

        // Salvando no LocalStorage
        localStorage.setItem('delegacaoFuncoes', JSON.stringify(data));
    }

    // Função para carregar os dados do LocalStorage
    function loadFromLocalStorage() {
        const savedData = JSON.parse(localStorage.getItem('delegacaoFuncoes'));

        if (savedData) {
            const funcoes = document.querySelectorAll('.funcoes');
            const anotacoes = document.querySelectorAll('.anotacao');
            const metas = document.querySelectorAll('.meta');
            const vendas = document.querySelectorAll('.venda');

            // Carregando funções
            funcoes.forEach((select, index) => {
                select.value = savedData.funcoes[index];
            });

            // Carregando anotações
            anotacoes.forEach((anotacao, index) => {
                anotacao.value = savedData.anotacoes[index];
            });

            // Carregando metas
            metas.forEach((meta, index) => {
                meta.value = savedData.metas[index];
            });

            // Carregando vendas
            vendas.forEach((venda, index) => {
                venda.value = savedData.vendas[index];
            });
        }
    }

    // Simulando a autenticação (você pode integrar com backend se necessário)
    loginBtn.addEventListener('click', function() {
        if (!isAuthenticated) {
            const password = prompt('Digite a senha:');
            
            // Simulando a verificação de senha (troque pela lógica real)
            if (password === 'admin123') {  // Defina sua senha aqui
                isAuthenticated = true;
                loginBtn.textContent = 'Logout';
                toggleEditableFields(true);  // Habilita os campos para edição
                alert('Login realizado com sucesso! Agora você pode editar os campos.');
            } else {
                alert('Senha incorreta!');
            }
        } else {
            isAuthenticated = false;
            loginBtn.textContent = 'Login';
            toggleEditableFields(false);  // Desabilita os campos para edição
            saveToLocalStorage();  // Salva as alterações no LocalStorage
            alert('Você fez logout! As alterações foram salvas.');
        }
    });

    // Inicialmente, os campos estão desabilitados e os dados são carregados
    toggleEditableFields(false);
    loadFromLocalStorage();  // Carrega os dados ao abrir a página
});
