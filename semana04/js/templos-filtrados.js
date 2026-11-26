const templos = [
  { nomeDoTemplo: "Aba Nigeria", localizacao: "Aba, Nigéria", consagracao: "2005-08-07", area: 11500, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { nomeDoTemplo: "Manti Utah", localizacao: "Manti, Utah, Estados Unidos", consagracao: "1888-05-21", area: 74792, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { nomeDoTemplo: "Payson Utah", localizacao: "Payson, Utah, Estados Unidos", consagracao: "2015-06-07", area: 96630, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { nomeDoTemplo: "Yigo Guam", localizacao: "Yigo, Guam", consagracao: "2020-05-02", area: 6861, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { nomeDoTemplo: "Washington D.C.", localizacao: "Kensington, Maryland, Estados Unidos", consagracao: "1974-11-19", area: 156558, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { nomeDoTemplo: "Lima Peru", localizacao: "Lima, Peru", consagracao: "1986-01-10", area: 9600, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { nomeDoTemplo: "Cidade do México, México", localizacao: "Cidade do México, México", consagracao: "1983-12-02", area: 116642, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { nomeDoTemplo: "Salt Lake",localizacao: "Salt Lake City, Utah, Estados Unidos",consagracao: "1893-04-06", area: 253000, urlDaImagem: "https://www.churchofjesuschrist.org/imgs/42bce5bf1cadd2149285166cdc9ddd52ed00f62b/full/%2C500/0/default" },
  { nomeDoTemplo: "Roma Itália", localizacao: "Roma, Itália", consagracao: "2019-03-10", area: 41010, urlDaImagem: "https://www.churchofjesuschrist.org/imgs/918b10c2dcb6f84bf96088f039a65ef0cb3cf2d0/full/%2C500/0/default"},
  { nomeDoTemplo: "Curitiba Brasil", localizacao: "Curitiba, Paraná, Brasil", consagracao: "2008-06-01", area: 27850,urlDaImagem: "https://www.churchofjesuschrist.org/imgs/600979467c5e3fb65a6cc793d53ad313e73e569d/full/%2C500/0/default"
},

];

const DATA_ANTIGA = new Date('1900-01-01');
const DATA_NOVA = new Date('2000-01-01');
const AREA_GRANDE = 90000;
const AREA_PEQUENA = 10000;

function criarCartaoTemplo(templo) {
    const cartao = document.createElement('div');
    cartao.className = 'templo-card';
    const data = new Date(templo.consagracao);
    const dataFormatada = data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    cartao.innerHTML = `<img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy"><h3>${templo.nomeDoTemplo}</h3><p><strong>Localização:</strong> ${templo.localizacao}</p><p><strong>Consagração:</strong> ${dataFormatada}</p><p><strong>Área:</strong> ${templo.area.toLocaleString('pt-BR')} pés²</p>`;
    return cartao;
}

function exibirTemplos(lista) {
    const espaco = document.getElementById('temples-grid');
    espaco.innerHTML = '';
    lista.forEach(t => espaco.appendChild(criarCartaoTemplo(t)));
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    document.getElementById('ultima-mod').textContent = document.lastModified;
    exibirTemplos(templos);
    
    document.getElementById('todos').addEventListener('click', () => exibirTemplos(templos));
    document.getElementById('antigos').addEventListener('click', () => exibirTemplos(templos.filter(t => new Date(t.consagracao) < DATA_ANTIGA)));
    document.getElementById('novos').addEventListener('click', () => exibirTemplos(templos.filter(t => new Date(t.consagracao) >= DATA_NOVA)));
    document.getElementById('grandes').addEventListener('click', () => exibirTemplos(templos.filter(t => t.area > AREA_GRANDE)));
    document.getElementById('pequenos').addEventListener('click', () => exibirTemplos(templos.filter(t => t.area < AREA_PEQUENA)));
});
