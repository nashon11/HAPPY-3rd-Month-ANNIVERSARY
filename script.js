const bouquetMap = [
  [0,0,1,1,0,0,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0,0]
];

const bouquet = document.getElementById("bouquet");
const message = document.getElementById("message");
const scrollingText = document.getElementById("scrolling-text");
let sound = new Audio("sounds/click.mp3");

function buildBouquet() {
  let delay = 0;
  for (let row = 0; row < bouquetMap.length; row++) {
    for (let col = 0; col < bouquetMap[row].length; col++) {
      if (bouquetMap[row][col] === 1) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.animationDelay = `${delay}s`;
        bouquet.appendChild(pixel);
        delay += 0.05;
        pixel.addEventListener("animationstart", () => sound.play().catch(() => {}));
      } else {
        const spacer = document.createElement("div");
        spacer.style.width = "20px";
        spacer.style.height = "20px";
        bouquet.appendChild(spacer);
      }
    }
  }

  setTimeout(() => {
    message.style.display = 'block';
    scrollingText.style.display = 'block';
  }, 4000);
}

document.addEventListener("DOMContentLoaded", buildBouquet);
