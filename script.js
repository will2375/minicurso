const image = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.species;
        condicao.innerHTML = data.status;

    });
}

botao.onclick = pegarPersonagem;