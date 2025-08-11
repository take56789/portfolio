// 下から浮き上がらせる
const heading = document.querySelector('.header h1');

const keyframes = {
  opacity: [0,1],
  translate: ['0 30px', 0],
};

heading.animate(keyframes, 2000);

// ふわっと表示
const items = document.querySelectorAll ('.product-photo');

for (let i =0; i < items.length; i++) {
  const keyframes = {
    opacity: [0,1]
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes,options);
}
