const cdp1 = document.querySelectorAll('#ct1');
const cdp2 = document.querySelectorAll('#ct2');
const cdp3 = document.querySelectorAll('#ct3');
cdp1.forEach((button) => {
    button.addEventListener('click', (e) => {
        const numRebanadas = e.target.textContent;
            const precioBase = 300.00;
            let precioFinal = 0;
            switch (numRebanadas) {
                case '10':
                    precioFinal = precioBase;
                    break;
                case '25':
                    precioFinal = precioBase * 2.5;
                    break;
                case '50':
                    precioFinal = precioBase * 5;
                    break;
                default:
                    console.error('Número de rebanadas no válido');
            }
        const precioLabel = document.getElementById('#ctp');
        precioLabel.textContent = `$${precioFinal.toFixed(2)}`;
    });
});
cdp2.forEach((button) => {
    button.addEventListener('click', (e) => {
        const numRebanadas = e.target.textContent;
            const precioBase = 300.00;
            let precioFinal = 0;
            switch (numRebanadas) {
                case '10':
                    precioFinal = precioBase;
                    break;
                case '25':
                    precioFinal = precioBase * 2.5;
                    break;
                case '50':
                    precioFinal = precioBase * 5;
                    break;
                default:
                    console.error('Número de rebanadas no válido');
            }
        const precioLabel = document.getElementById('#ctp');
        precioLabel.textContent = `$${precioFinal.toFixed(2)}`;
    });
});
cdp3.forEach((button) => {
    button.addEventListener('click', (e) => {
        const numRebanadas = e.target.textContent;
            const precioBase = 300.00;
            let precioFinal = 0;
            switch (numRebanadas) {
                case '10':
                    precioFinal = precioBase;
                    break;
                case '25':
                    precioFinal = precioBase * 2.5;
                    break;
                case '50':
                    precioFinal = precioBase * 5;
                    break;
                default:
                    console.error('Número de rebanadas no válido');
            }
        const precioLabel = document.getElementById('#ctp');
        precioLabel.textContent = `$${precioFinal.toFixed(2)}`;
    });
});