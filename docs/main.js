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
