let listaAmigos = [];

function adicionar(){
    let nomes = document.getElementById('nome-amigo');

    if (nomes.value == '') {
        alert('Você precisa digitar o nome de seu amigo primeiro.')
        return;
    }

    if (listaAmigos.includes(nomes.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let listaNomes = document.getElementById('lista-amigos');
    listaAmigos.push(nomes.value)
    if (listaNomes.textContent == '') { 
        listaNomes.textContent = nomes.value;
    } else {
        listaNomes.textContent = listaNomes.textContent + ', ' + nomes.value;
    } 
    nomes.value = '';
}

function sortear(){
    if (listaAmigos.length < 4) {
        alert('Adicione ao menos 4 amigos.')
        return
    }
    embaralha(listaAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++) {
       
        if (i == listaAmigos.length -1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}