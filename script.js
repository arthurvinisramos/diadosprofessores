const botao = document.getElementById('botao');
const musica = document.getElementById('musica');

botao.addEventListener('click', () => {
  
  musica.play();

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

