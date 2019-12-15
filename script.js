var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

function draw() {
    ctx.restore()
    
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, 400, 400);

    ctx.save()
    ctx.translate(Math.random() * 3, Math.random() * 3);
    ctx.rotate(Math.random() * 0.02);


    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(160, 100, 80, 200);

    ctx.beginPath()
    ctx.moveTo(200, 20);
    ctx.lineTo(240, 100);
    ctx.lineTo(160, 100);
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(150, 310);
    ctx.lineTo(160, 300);
    ctx.lineTo(240, 300);
    ctx.lineTo(250, 310);
    ctx.fill()

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'darkgrey';
    ctx.fillStyle = 'lightblue';

    ctx.beginPath()
    ctx.arc(200, 125, 19, 0, Math.PI * 2, true);
    ctx.arc(200, 175, 17, 0, Math.PI * 2, true);
    ctx.arc(200, 225, 15, 0, Math.PI * 2, true);
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = 'orange';
    ctx.beginPath()
    ctx.moveTo(160, 310);
    ctx.lineTo(180 + Math.random() * 30, 350 + Math.random() * 40);
    ctx.lineTo(240, 310);
    ctx.fill()

    ctx.fillStyle = 'yellow';
    ctx.beginPath()
    ctx.moveTo(180, 310);
    ctx.lineTo(190 + Math.random() * 20, 320 + Math.random() * 20);
    ctx.lineTo(220, 310);
    ctx.fill()
    
    ctx.fillStyle = 'white';
    ctx.beginPath()
    ctx.moveTo(190, 310);
    ctx.lineTo(200 + Math.random() * 10, 310 + Math.random() * 10);
    ctx.lineTo(220, 310);
    ctx.fill()


}

setInterval(draw, 30);
