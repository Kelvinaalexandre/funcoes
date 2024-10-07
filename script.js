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
            alert('Você fez logout! Os campos foram bloqueados.');
        }
    });

    // Inicialmente, os campos estão desabilitados
    toggleEditableFields(false);
});
