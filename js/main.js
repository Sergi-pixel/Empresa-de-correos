// Calculadora básica
document.getElementById('shippingForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const origen = document.getElementById('origen')?.value.trim();
    const destino = document.getElementById('destino')?.value.trim();
    const peso = parseFloat(document.getElementById('peso')?.value);
    const tipo = document.getElementById('tipo-envio')?.value;

    if(!origen || !destino || isNaN(peso)){
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Aquí puedes añadir lógica de cálculo real
    document.getElementById('resultado')?.innerText = `El precio del envío tipo "${tipo}" se mostrará aquí.`;
});
