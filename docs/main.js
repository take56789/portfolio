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
  const comment = document.getElementById("comment");
  const omikujiBtn = document.getElementById("omikujiBtn");

  function next() {
    const omikuji = ['大吉','吉','中吉','小吉','末吉','凶','大凶'];
    const image = ['omikuji_daikichi','omikuji_kichi','omikuji_chuukichi','omikuji_syoukichi','omikuji_suekichi','omikuji_kyou','omikuji_daikyou'];
    const comments = [
      '今日は最高のサウナ日和！思い切り楽しもう！',
      '良い汗をかけそう。水分補給も忘れずに！',
      'まずまずのコンディション。ゆっくりと蒸気を楽しもう',
      '少し熱さに注意。無理せず休憩しながら楽しんで',
      '今日は控えめに入るのが吉。冷たい水風呂でリフレッシュ',
      '無理は禁物。深呼吸を意識して落ち着いてサウナを楽しもう',
      '今日はリラックス重視。サウナ室より休憩メインで過ごすと吉'
    ];
    const random = Math.floor(Math.random() * omikuji.length);

    main.src = "images/" + image[random] + ".png";
    message.textContent = omikuji[random];
    comment.textContent = comments[random];
  }

  function start() {
    main.src = "images/load.png";
    message.textContent = "なにがでるかな";
    comment.textContent= "";
    setTimeout(next, 2000);
  }

  omikujiBtn.addEventListener('click', start);
});
