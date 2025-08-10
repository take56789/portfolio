const heading = document.querySelector('#header h1');

const keyframes = {
    opacity: [0,1],
    rotate: ['x 360deg', 0 ],
};

const options = {
    duration: 1000,
    easing: 'ease',
};

heading.animate(keyframes, 2000);

const menu = document.querySelector('#header-menu')
const btn = document.querySelector('#hamburger')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('open')
  if(menu.classList.contains("open")){
    menu.style.height = menu.scrollHeight + 'px'
  }else{
   menu.style.height = "0"
  }
})