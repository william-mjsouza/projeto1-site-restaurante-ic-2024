document.addEventListener('DOMContentLoaded', (event) => {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');

    const labelNome = document.getElementById('labelNome');
    const labelEmail = document.getElementById('labelEmail');
    const labelAssunto = document.getElementById('labelAssunto');
    const labelMensagem = document.getElementById('labelMensagem');

    function showLabel(input, label, minLength) {
        if (input.value.length === 0 || input.value.length < minLength) {
            label.style.display = 'block';
        } else {
            label.style.display = 'none';
        }

        input.addEventListener('input', () => {
            if (input.value.length === 0 || input.value.length < minLength) {
                label.style.display = 'block';
            } else {
                label.style.display = 'none';
            }
        });
    }

    // Inicializa as labels e os inputs
    showLabel(nomeInput, labelNome, 3);
    showLabel(emailInput, labelEmail, 3);
    showLabel(assuntoInput, labelAssunto, 3);
    showLabel(mensagemInput, labelMensagem, 3);
});
