// Selecionar os elementos da página
const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySeletor('#lista-capitulos');

botao.addEventListener('click', function () {

    //Criar o item da lista
    const li = document.createElement('li');

    //Criar o botão de excluir
    const botaoExcluir = document.createElement('button');

    //Colocar o texto do que o usuário digitou 
    li.textContent = input.value;

    //Colocar o simbolo no botão de excluir
    botaoExcluir.textContent ='❌';

    //Melhorar para leitores de tela
    botaoExcluir.setAttribute('arial-label', 'Excluir este capitulo');

    //Colocar o botão DENTRO do item
    li.append(botaoExcluir);

    //Colocar o item completo na lista 
    lista.append(li);

    //Limpa o campo 
    input.value = '';
    input.focus();
 });