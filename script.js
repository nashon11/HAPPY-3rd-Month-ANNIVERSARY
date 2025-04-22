document.addEventListener('DOMContentLoaded', function() {
  const bouquetMap = [
    "...............",
    "...rr..rr..rr..",
    "...rr..rr..rr..",
    "....rrrrrrrr...",
    "....rrrrrrrr...",
    ".....rrr.rr....",
    ".....gggggg....",
    "....gggggggg...",
    "...gggggggggg..",
    "...gggggggggg..",
    "....bbbbb.bb...",
    ".....bb.bb....."
  ];

  const bouquet = document.getElementById('bouquet');

  // If bouquet is null, stop the script
  if (!bouquet) {
    console.error("Bouquet element not found!");
    return;
  }

  // Build pixels from the bouquet map
  bouquetMap.forEach(row => {
    row.split('').forEach(char => {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      if (char === 'r') pixel.classList.add('red');
      if (char === 'g') pixel.classList.add('green');
      if (char === 'b') pixel.classList.add('brown');
      bouquet.appendChild(pixel);
    });
  });

  const pixels = document.querySelectorAll('.pixel');

  // Animate blocks with sound + bounce
  pixels.forEach((pixel, index) => {
    setTimeout(() => {
      pixel.classList.add('visible');
    }, index * 70);
  });
});
