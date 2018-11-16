let Board = function(){
  this.size = Math.floor(Math.max(canvas.width,canvas.height) / _Square_size );

  let squares=new Array(this.size);

  for (let i = 0; i < this.size; i++){
    squares[i] = new Array(this.size);
    for (let j = 0; j < this.size;j++){
      squares[i][j] = new Square();
      ctx.fillStyle = squares[i][j].color;
      ctx.fillRect(i*_Square_size,
        j*_Square_size,
        _Square_size,
        _Square_size);
    }
  }

  this.getColor = function(o_x,o_y){
    let x =  Math.floor(o_x / _Square_size);
    let y =  Math.floor(o_y / _Square_size);
    if (x < this.size && y < this.size
      && x >= 0 && y>=0) return squares[x][y].color;
    return undefined;
  }
}
