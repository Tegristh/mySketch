const myContainer = document.getElementById("container");

function createPixel() {
//pour créer un pixel vierge
    let pix = document.createElement("div");
    pix.classList.add("pixel");
    myContainer.appendChild(pix);
};

function createSketch(max) {
    for (let i=0; i < max; i++)
    createPixel();
};


createSketch(256); // on crée un sketch de 16*16= 256 pixels

const items = container.querySelectorAll('.pixel');
items.forEach(item => item.addEventListener('mouseover', action(e.target)));

function action(){ 
   this.classList.add("colored")
};




