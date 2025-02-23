// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
function agregarAmigo(){
  const nombreAmigo = document.getElementById('amigo').value;
  if(nombreAmigo &&!amigos.includes(nombreAmigo)){
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
  } else {
    alert('Debes ingresar un nombre de amigo válido');
  }
}

function sortearAmigo(){
  if(amigos.length === 0){
    alert('No hay amigos para sortear');
    return;
  }
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('listaAmigos').innerHTML=amigoSorteado;
}