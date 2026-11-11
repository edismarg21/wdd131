// Atualizar o ano atual no rodapé
const today = new Date();
document.getElementById('year').textContent = today.getFullYear();

// Mostrar a data da última modificação da página
document.getElementById('lastModified').textContent = document.lastModified;

// Funcionamento do menu hambúrguer
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
