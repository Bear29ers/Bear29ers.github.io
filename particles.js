var w = window.innerWidth,
    h = window.innerHeight,
    container = document.getElementById('canvas-container'),
    canvas = document.getElementById('bubble'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    speed = 10,
    size = 7,
    lights = new Array,
    colors = ['#fcb721', '#ffffff', '#21d4fd', '#FF5ACD', '#8bff59', '#8b59ff'];

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
  // canvas.setAttribute('width', container.clientWidth);
  // canvas.setAttribute('height', container.clientHeight);

function init() {
  time = 0;
  count = 0;

  for (var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * container.clientWidth),
      y: Math.ceil(Math.random() * container.clientHeight),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size
    }
  }
}

function bubble() {
  ctx.clearRect(0, 0, w, h);

  for (var i = 0; i < arc; i++) {
    var li = lights[i];
    var scale = canvas.width / li.width

    ctx.beginPath();
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > container.clientWidth) { li.x = 0; }
    if (li.y > container.clientHeight) { li.y = 0; }
    if (li.x < 0) { li.x = container.clientWidth; }
    if (li.y < 0) { li.y = container.clientHeight; }
  }
  if (time < speed) {
    time++;
  }
  timerID = setTimeout(bubble, 1000 / rate);
}

window.onresize = function () {
  var scale = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  scale = canvas.width / img.width;
  ctx.beginPath();
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
  ctx.fillStyle = li.c;
  ctx.fill();
}

init();
bubble();