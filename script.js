let musicas = [
        {titulo:'Funkzao 1.0', artista: 'Youtube', src:'musicas/funk1.mp3', img:'imagens/foto1.png'},
        {titulo:'Funkzao 2.0', artista: 'Youtube', src:'musicas/funk2.mp3', img:'imagens/foto2.jpg'},
        {titulo:'Funkzao 3.0', artista: 'Youtube', src:'musicas/funk3.mp3', img:'imagens/foto3.jpg'}
]
let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.rotulo h2');
let nomeArtista = document.querySelector('.rotulo i');
let indexMusica = 0;

renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocaMusica);
document.querySelector('.botao-pause').addEventListener('click', pausaMusica);
musica.addEventListener('timeupdate', progressBarra);

document.querySelector('.anterior').addEventListener('click',() => {
        indexMusica--;
        if (indexMusica < 0 ){
            indexMusica = 2;
        }
        renderizarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click',() => {
        indexMusica++;
        if (indexMusica > 2 ){
            indexMusica = 0;
        }
        renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = SegMin(Math.floor(musica.duration));
    })
}


function tocaMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block'; 
    document.querySelector('.botao-play').style.display = 'none'; 
}


function pausaMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none'; 
    document.querySelector('.botao-play').style.display = 'block'; 
}


function progressBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoAtual = document.querySelector('.inicio');
    tempoAtual.textContent = SegMin(Math.floor(musica.currentTime));
}

function SegMin(segundos){
    let Min = Math.floor(segundos/60);
    let Seg = segundos % 60;
    if (Seg < 10 ){
        Seg = '0'+ Seg;
    }
    return Min+ ':' +Seg;
}

function duration(){
    duracaoMusica.textContent = SegMin(Math.floor(musica.duration));
}

musica.addEventListener('loadeddata', duration);

