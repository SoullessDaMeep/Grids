//------------------------------------------------------------------------
gridNum = 10
rectSide = width/gridNum 
 for(var x = 0; x<gridNum; x++) {
   for(var y = 0; y<gridNum; y++) {
      let xPos = x*rectSide
      let yPos = y*rectSide
      rect(xPos, yPos, rectSide, rectSide)
  }
}
//------------------------------------------------------------------------
 var cols = 10
 var rows = 10
 for(var i = 0; i< cols; i++) {
    for(var j = 0; j< rows; j++) {
      var x = i*30
      var y = j*30
      fill(colors[i][j])
      stroke(0)
      rect(x, y, 30, 30)
   }
}
//------------------------------------------------------------------------
var x = 0
var y = 0
let inc = 50
x = inc
while(x<height) {
    line(x, 0, x, height)
    x += inc 
}
y = inc
while(y<width) {
    line(0, y, width, y)
    y += inc
}
//------------------------------------------------------------------------
let rectHeight = 20
let rectWidth = 20
for (var x = 0; x < width; x += width / rectWidth) {
  for (var y = 0; y < height; y += height / rectHeight) {
    stroke(0)
    strokeWeight(1)
    line(x, 0, x, height)
    line(0, y, width, y)
   }
}
//------------------------------------------------------------------------
