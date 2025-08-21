document.addEventListener('DOMContentLoaded', () => {
  // 下から浮き上がらせる
  const heading = document.querySelector('.header h1');
  heading.animate(
    { opacity:[0,1], transform:['translateY(30px)','translateY(0)'] },
    { duration:2000, fill:'forwards' }
  );


  // おみくじイベント
  const main = document.getElementById("main");
  const message = document.getElementById("message");
  const omikujiBtn = document.getElementById("omikujiBtn");

  function next() {
    const omikuji = ['大吉','吉','中吉','小吉','末吉','凶','大凶'];
    const image = ['omikuji_daikichi','omikuji_kichi','omikuji_chuukichi','omikuji_syoukichi','omikuji_suekichi','omikuji_kyou','omikuji_daikyou'];
    const random = Math.floor(Math.random() * omikuji.length);

    main.src = "images/" + image[random] + ".png";
    message.textContent = omikuji[random];
  }

  function start() {
    main.src = "images/load.png";
    message.textContent = "なにがでるかな";
    setTimeout(next, 2000);
  }

  omikujiBtn.addEventListener('click', start);
});
