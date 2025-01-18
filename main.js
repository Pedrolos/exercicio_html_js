const form = document.getElementById("formulario");

function validarFormulario() {
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O valor de B é maior que o valor de A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O valor de B deve ser maior que o valor de A.";
        mensagem.style.color = "red";
    }
}
form.addEventListener("submit", function(event) {
    event.preventDefault()
    validarFormulario();
});

console.log(form)