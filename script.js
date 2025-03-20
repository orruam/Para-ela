const botaoSurpresa = document.getElementById('botao-surpresa');
const mensagem = document.getElementById('mensagem');
const galeriaFotos = document.getElementById('galeria-fotos');
const botaoVoltar = document.getElementById('botao-voltar');
const musicaFundo = document.getElementById('musica-fundo');

botaoSurpresa.addEventListener('click', () => {
    mensagem.style.display = 'none';
    galeriaFotos.style.display = 'block';
    musicaFundo.play();
});

botaoVoltar.addEventListener('click', () => {
    galeriaFotos.style.display = 'none';
    mensagem.style.display = 'block';
    musicaFundo.pause();
});

// mensagens
const mensagens = [
    "Você é a luz da minha vida.",
    "Cada momento ao seu lado é especial.",
    "Te amo mais que tudo!",
    "Você é a pessoa mais incrível que conheço."
];

function exibirMensagemAleatoria() {
    const textoMensagem = document.getElementById('texto-mensagem');
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    textoMensagem.textContent = mensagens[indiceAleatorio];
}

setInterval(exibirMensagemAleatoria, 5000); // Muda a mensagem a cada 5 segundos


const perguntas = [
    { pergunta: "Onde nos conhecemos?", resposta: "Escola" },
    { pergunta: "Qual nosso estilo de música?", resposta: "Mpb" },
    { pergunta: "Qual meu sonho", resposta: "Criar uma familia com você" },
    { pergunta: "Qual jogo mais gostamos de jogar ?", resposta: "Roblox" },
  

];

let indicePergunta = 0;
let pontuacao = 0;

function exibirPergunta() {
    document.getElementById('pergunta').textContent = perguntas[indicePergunta].pergunta;
}

document.getElementById('enviar-resposta').addEventListener('click', () => {
    const resposta = document.getElementById('resposta').value.toLowerCase();
    if (resposta === perguntas[indicePergunta].resposta) {
        pontuacao++;
    }
    indicePergunta++;
    if (indicePergunta < perguntas.length) {
      
        exibirPergunta();
        
    } else if (resposta.length == '' && resposta == ''){
         alert('Responda todas as perguntas!')
    }
     else {
        document.getElementById('jogo').innerHTML = `<h2> Otimas respostas, todas estavão corretas, parabéns!!</h2>`;
    }
});

exibirPergunta();
const paginasLivro = document.getElementById('paginas-livro');
const adicionarPagina = document.getElementById('adicionar-pagina');

adicionarPagina.addEventListener('click', () => {
    const novaPagina = document.createElement('div');
    novaPagina.classList.add('pagina');

    const foto = document.createElement('img');
    foto.src = prompt('URL da foto:');
    novaPagina.appendChild(foto);

    const texto = document.createElement('p');
    texto.textContent = prompt('Descrição da memória:');
    novaPagina.appendChild(texto);

    paginasLivro.appendChild(novaPagina);
});

const listaDesejos = document.getElementById('lista-desejos');
const novoDesejo = document.getElementById('novo-desejo');
const adicionarDesejo = document.getElementById('adicionar-desejo');

adicionarDesejo.addEventListener('click', () => {
    const desejo = novoDesejo.value;
    if (desejo) {
        const itemLista = document.createElement('li');
        itemLista.textContent = desejo;
        listaDesejos.appendChild(itemLista);
        novoDesejo.value = '';
    }
});
const entradas = document.getElementById('entradas');
const novaEntrada = document.getElementById('nova-entrada');
const adicionarEntrada = document.getElementById('adicionar-entrada');

adicionarEntrada.addEventListener('click', () => {
    const entrada = novaEntrada.value;
    if (entrada) {
        const novaEntradaDiv = document.createElement('div');
        novaEntradaDiv.textContent = entrada;
        entradas.appendChild(novaEntradaDiv);
        novaEntrada.value = '';
    }
});
