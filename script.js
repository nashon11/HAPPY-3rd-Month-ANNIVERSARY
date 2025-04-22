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
  
  // Load click sound
  const clickSound = new Audio('sounds/click.mp3');
  clickSound.volume = 0.2;
  
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
      clickSound.currentTime = 0;
      clickSound.play();
    }, index * 70);
  });
  
  // Reveal message
  setTimeout(() => {
    document.getElementById('message').style.opacity = 1;
  }, pixels.length * 70 + 500);
  
  // Reveal text
  setTimeout(() => {
    const scrollText = document.getElementById('scrolling-text');
    scrollText.style.opacity = 1;
    scrollText.style.maxHeight = '1000px';
  }, pixels.length * 70 + 3000);
  