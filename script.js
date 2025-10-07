const container = document.getElementById('container');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = randomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}, 0 0 40px ${color}`;
}

function removeColor(element) {
  // Immediately set back; CSS transition handles smooth fade
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function randomColor() {
  const colors = [
    '#e74c3c',
    '#8e44ad',
    '#3498db',
    '#e67e22',
    '#2ecc71',
    '#f1c40f',
    '#1abc9c',
    '#9b59b6'
  ];
  return colors[Math.floor(Math.random() * colors.length)*]()
