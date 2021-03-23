//ボール
var bouncingBall = anime({
  targets: ['.ball1', '.ball3', '.ball5', '.ball7', ],
  translateY: '10rem',
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic',
  scaleX: {
    value: 1.5,
    duration: 150,
    delay: 350
  },
  scaleY: {
    value: 0.7,
    duration: 150,
    delay: 350
  }
});

var bouncingBall = anime({
  targets: ['.ball2', '.ball4', '.ball6', ],
  translateY: '10rem',
  duration: 1000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic'
});

//四角形
var bouncingSquare = anime({
  targets: '.sq',
  translateY: '30rem',
  duration: 700,
  loop: true,
  direction: 'alternate',
  easing: 'easeInCubic',
  scaleX: {
    value: 1.5,
    duration: 200,
    delay: 550,
  },
  scaleY: {
    value: 0.1,
    duration: 200,
    delay: 500,
  },
  rotate: {
    value: 1080,
    duration: 700,
    delay: 100,
    easing: 'easeInOutExpo'
  },
});

//猫アニメーション
var btnPlay = document.querySelector('.play'),
  btnPause = document.querySelector('.pause'),
  btnRestart = document.querySelector('.restart');

var movingEyes = anime({
  targets: ['.inner-left-eye', '.inner-right-eye'],
  cy: 400,
  duration: 500,
  delay: function (el, index) {
    var singleDelay = index === 0 ? 300 : index * 500;
    return singleDelay;
  },
  autoplay: false
});

var movingTail = anime({
  targets: '.tail',
  transform: ['translate(10 2)', 'translate(0 0)'],
  delay: movingEyes.duration + 1000,
  autoplay: false
});

var kickingCat = anime({
  targets: '.front-leg-right',
  translateX: '-20px',
  duration: 300,
  delay: movingTail.duration + 300,
  easing: 'easeInCubic',
  autoplay: false
});

var movingBall = anime({
  targets: '.cat-ball',
  cx: 50,
  easing: 'easeOutBounce',
  delay: kickingCat.duration + 100,
  autoplay: false
});

btnPlay.addEventListener('click', function (e) {
  e.preventDefault();
  movingEyes.play();
  movingTail.play();
  kickingCat.play();
  movingBall.play();
});

btnPause.addEventListener('click', function (e) {
  e.preventDefault();
  movingEyes.pause();
  movingTail.pause();
  kickingCat.pause();
  movingBall.pause();
});

btnRestart.addEventListener('click', function (e) {
  e.preventDefault();
  movingEyes.restart();
  movingTail.restart();
  kickingCat.restart();
  movingBall.restart();
});