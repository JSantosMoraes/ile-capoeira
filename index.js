// 30% IA

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

const escudo = document.getElementById('escudo');
const inav = document.getElementById('inav');

escudo.addEventListener('click', () => {
    if (inav.classList.contains('off')) {
        inav.classList.remove('off');
        inav.classList.add('slide-in-left');
    } else {
        inav.classList.add('slide-out-left');
        setTimeout(() => {
            inav.classList.remove('slide-out-left');
            inav.classList.add('off');
        }, 200); // tempo correspondente à duração da animação
    }
});
