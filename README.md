# Grids
Different types of grids using p5.js
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

```js
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
```

```js

```
