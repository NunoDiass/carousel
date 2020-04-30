const trashBtn = document.getElementsByTagName('i');
const links = document.getElementsByClassName('img-url');
const menuLinks = document.querySelectorAll('.side-bar a');
const carouselItem = document.getElementsByClassName('carousel-item');
const carousel = document.getElementsByClassName('carousel')[0];
const leftControl = document.getElementsByClassName('carousel-control-prev')[0];
const rightControl = document.getElementsByClassName('carousel-control-next')[0];


// onClick in trash
for(let i = 0; i< trashBtn.length; i++){
    trashBtn[i].addEventListener('click', () => trashClick(i) );
}

// onClick in menu
for(let i = 0; i< menuLinks.length; i++){
    menuLinks[i].addEventListener('click', () =>menuClick(i));
}

function trashClick(index){

    // Remove url e trash button
    const parent = links[index].parentElement;
    parent.style.display = "none";


    // Remove carousel-item
    for(let i = 0; i< carouselItem.length ; i++){
        const image = carouselItem[i].firstElementChild;
        if(image.getAttribute('src')=== trashBtn[index].parentElement.firstElementChild.innerHTML){
            carouselItem[i].parentElement.removeChild(carouselItem[i]);
        }
    }
    
    // Remove sliders em caso de so ter uma imagem
    if(carouselItem.length === 1){
        carousel.innerHTML = `<div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./imgs/me.jpg" alt="First slide">
        </div>`;
    }
}

function menuClick(index){

    // Verifica se a imagem já está no carousel indiretamente atraves dos links
    const jaExiste = (links[index].parentElement.style.display !=='none');
    if(jaExiste) return;

    // Adiciona no carouselInner 
    const carouselInner = carousel.firstElementChild;
    var element = document.createElement('div');
    element.classList.add('carousel-item');
    element.innerHTML = `<img class="d-block w-100" src="${links[index].innerHTML}">`;
    carouselInner.appendChild(element);
    
    // Se o carousel tiver duas imagens adiciona sliders
    if(carouselItem.length ===2){
        carousel.appendChild(leftControl);
        carousel.appendChild(rightControl);
    }

    // Adicionar de volta os links
    links[index].parentElement.style.display = '';
}