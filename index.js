const imagens = document.querySelectorAll('.outrosheader');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const img = entry.target;

        if (entry.isIntersecting) {
            img.classList.remove("hide");
            img.classList.add("show");
        } else {
            img.classList.remove("show");
            img.classList.add("hide");
        }
    });
}, { threshold: 0.5 });

imagens.forEach(img => observer.observe(img));


// ===============================
// MENU HAMBÚRGUER (ATUALIZADO)
// ===============================

const escudo = document.getElementById('buttonmenu');
const inav = document.getElementById('inav');

escudo.addEventListener('click', () => {
    if (inav.classList.contains('off')) {
        // ABRIR — Animação da direita para a esquerda
        inav.classList.remove('off');
        inav.classList.add('slide-in-right');
    } else {
        // FECHAR — Animação saindo pela direita
        inav.classList.add('slide-out-right');
        setTimeout(() => {
            inav.classList.remove('slide-out-right');
            inav.classList.add('off');
        }, 300);
    }
});


// ===========================================
// FECHAR O MENU AO CLICAR FORA DO NAV
// ===========================================
document.addEventListener('click', (event) => {
    const isClickInsideNav = inav.contains(event.target);
    const isClickMenuButton = escudo.contains(event.target);

    if (!isClickInsideNav && !isClickMenuButton && !inav.classList.contains('off')) {
        inav.classList.add('slide-out-right');
        setTimeout(() => {
            inav.classList.remove('slide-out-right');
            inav.classList.add('off');
        }, 300);
    }
});
