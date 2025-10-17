document.addEventListener('DOMContentLoaded', function () {

    // tijolos
    const valortj = document.getElementById('valortj');
    const cimentotj = document.getElementById('cimentotj');
    const areiatj = document.getElementById('areiatj');
    const mediatj = document.getElementById('mediatj');

    // pisos
    const valorps = document.getElementById('valorps');
    const cimentops = document.getElementById('cimentops');
    const areiaps = document.getElementById('areiaps');
    const argamassaps = document.getElementById('argamassaps');
    const mediaps = document.getElementById('mediaps');

    // Tijolos
    function calculartijolo() {
        const valor = parseFloat(valortj.value) || 0;
        cimentotj.value = Math.round(valor * 0.18) / 50 + 'sacos';
        areiatj.value = Math.round(valor * 0.7) / 20 + 'sacos de 20kg';
        mediatj.value = Math.round((valor * 0.18) / 50 * 40 + (valor * 0.7) / 20 * 8);
    }


    // Pisos
      function calcularpisos() {
        const valor = parseFloat(valorps.value) || 0;
        cimentops.value = Math.round(valor * 0.3) + ' sacos';
        areiaps.value = Math.round(valor * 1.5) + ' m3';
        argamassaps.value = Math.round(valor * 0.3) + ' sacos';
        mediaps.value = Math.round((valor * 0.18) / 50 * 40 + (valor * 0.7) / 20 * 8 + (valor * 0.3)*18);
    }

    //   Tijolos
    valortj.addEventListener('input', calculartijolo);
     // Pisos
    valorps.addEventListener('input', calcularpisos);
});





