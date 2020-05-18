const myContainer = document.getElementById("container");

function createPixel() {
//pour créer un pixel vierge
    let pix = document.createElement("div");
    pix.classList.add("pixel");
    pix.addEventListener("mouseover", colorie);
    myContainer.appendChild(pix);
};

function createSketch(max) {
    for (let i=0; i < max; i++)
    createPixel();
};

createSketch(256); // on crée un sketch de 16*16= 256 pixels

function colorie(e) {
    let target = event.target;
    target.classList.add("colored");
}
