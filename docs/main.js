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



// おみくじ
const main = document.getElementById("main");


function start() {
main.src = "images/load.png";
document.getElementById("message").innerHTML = "なにがでるかな";
setTimeout(next, 2000);
}

function next() {

var omikuji = ['大吉', '吉', '中吉', '小吉', '末吉', '凶','大凶'];
var image = ['omikuji_daikichi', 'omikuji_kichi', 'omikuji_chuukichi', 'omikuji_syoukichi', 'omikuji_suekichi', 'omikuji_kyou','omikuji_daikyou'];
var random = Math.floor( Math.random() * omikuji.length );

main.src = "images/" + image[random] + ".png";
document.getElementById("message").innerHTML = omikuji[random];
}