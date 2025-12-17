
const menuLinks = document.querySelectorAll('.menu-list a');
const menuCheckbox = document.querySelector('.menu-faketrigger');


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuCheckbox) {
            menuCheckbox.checked = false;
        }
    });
});

function digitarTexto(elemento, velocidade) {
    return new Promise((resolve) => {
        const texto = elemento.innerHTML.trim(); 
        elemento.innerHTML = ''; 
        elemento.style.visibility = 'visible'; 

        let i = 0;
        const intervalo = setInterval(() => {
            elemento.innerHTML += texto.charAt(i);
            i++;

            if (i > texto.length - 1) {
                clearInterval(intervalo);
                resolve(); 
            }
        }, velocidade);
    });
}

async function iniciarDigitacao() {
    const el1 = document.querySelector('.digitando-1'); // Olá, sou o
    const el2 = document.querySelector('.digitando-2'); // Marcelo Araújo
    const el3 = document.querySelector('.digitando-3'); // Descrição

    if (el1 && el2 && el3) {
        await digitarTexto(el1, 85);  
        await digitarTexto(el2, 85);  
        await digitarTexto(el3, 85);  
    }
}

// Inicia a animação assim que o site carregar
document.addEventListener('DOMContentLoaded', iniciarDigitacao);