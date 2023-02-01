console.log('mostrar o docment, document');

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkdoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=> {
    console.log('clicou no botao veja o trailer');
    alternarModal();
    video.setAttribute("src", linkdoVideo);
} );

botaoFecharModal.addEventListener("click", ()=> {
    alternarModal();
    video.setAttribute("src", "")
} );