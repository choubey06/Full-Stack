var myCanvas = document.getElementById("artboard")

var canvas = myCanvas.getContext("2d")

canvas.moveTo(100,85)
canvas.lineTo(100,105)
canvas.stroke()


canvas.beginPath()
canvas.arc(100,100,50,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(80,80,5,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(120,80,5,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(100,120,10,0,Math.PI,false)
canvas.stroke()