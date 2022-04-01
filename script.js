const imageDB = [
'https://i.ibb.co/sK9z1ZP/gtr.jpg',
'https://i.ibb.co/Bsbps4t/m4.jpg',
'https://i.ibb.co/j5j0Vcd/488.jpg',
'https://i.ibb.co/6srrp5M/huracan.jpg',
'https://i.ibb.co/Qdzv29c/mustang.jpg',
'https://i.ibb.co/Km8k1Zg/370z.jpg',
'https://i.ibb.co/qjMLBd0/tt.jpg'
];

function get(el) {
  return document.querySelector(el);
}

let index = 0;
let timer = 3000;
let image = get('.container__gallery');
let leftArrow = get('.ctrl__al');
let rightArrow = get('.ctrl__ar');
let prev = get('#prev');
let next = get('#next');
let pause = get('#pause');
let status = get('.ctrl__dash--select');
let wait = document.querySelectorAll('.ctrl__al, .ctrl__ar, .ctrl__bottom');
let middleDash = 'ctrl__dash--select';
let glitchImage = 'container__gallery--glitch';

function currenImage() {
  return image.setAttribute('src', imageDB[index]);
}

function nextImage() {
  status.classList.remove(middleDash);
  next.classList.add(middleDash);
  image.classList.add(glitchImage);

  setTimeout(() => {
    status.classList.add(middleDash);
    next.classList.remove(middleDash);
    image.classList.remove(glitchImage);
  }, 250);

  index++;
  if (index === imageDB.length) {
    index = 0;
  }
  currenImage();
}

function prevImage() {
  status.classList.remove(middleDash);
  prev.classList.add(middleDash);
  image.classList.add(glitchImage);

  setTimeout(() => {
    status.classList.add(middleDash);
    prev.classList.remove(middleDash);
    image.classList.remove(glitchImage);
  }, 250);

  if (index === 0) {
    index = imageDB.length;
  }
  index--;
  currenImage();
}

currenImage();
let imageLoop = setInterval(nextImage, timer);

wait.forEach(el => {
  el.onmouseenter = () => {
    clearInterval(imageLoop);
    pause.classList.add('ctrl__pause--icon');
  };
  el.onmouseleave = () => {
    imageLoop = setInterval(nextImage, timer);
    pause.classList.remove('ctrl__pause--icon');
  };
});

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);
leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);