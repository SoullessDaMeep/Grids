# Grids
Different types of grids using p5.js

Ok so lets just say our canvas size is 500 by 500 => createCanvas(500, 500)
Most of these grids use 2 for loops because you need to get the x and y 
```js
gridNum = 10
rectSide = width/gridNum 
 for(var x = 0; x<gridNum; x++) {
   for(var y = 0; y<gridNum; y++) {
      let xPos = x*rectSide
      let yPos = y*rectSide
      rect(xPos, yPos, rectSide, rectSide)
  }
}
```
probably the best way to make a grid in p5.js in my opinion, because its more understandable in a way. To me atleast
```js
 var cols = 10
 var rows = 10
 for(var i = 0; i< cols; i++) {
    for(var j = 0; j< rows; j++) {
      var x = i*30
      var y = j*30
      stroke(0)
      rect(x, y, 30, 30)
   }
}
```
Based off the amount of columns and rows, just creating a row of 30 by 30 squares, not fit to canvas
```js
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
```
Using lines, if x is less than height, create a line all the way across the screen then add the increment, same thing with the other
```js
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
```
Same one as above besides fits in canvas
