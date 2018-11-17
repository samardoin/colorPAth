var Board = function(){
  let board = this;
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
  };
  squares[0][0].pathValue=1;

  this.getColor = function(o_x,o_y){
    let x =  Math.floor(o_x / _Square_size);
    let y =  Math.floor(o_y / _Square_size);
    if (x < board.size && y < board.size
      && x >= 0 && y>=0) return squares[x][y].color;
    return undefined;
  }

  this.path=function(o_color){
    let color = o_color;
    squares[0][0].color = color;

    let test = function(i,j){
      //console.log("i:" + i + "\tj:" + j + "\ts:" + board.size);
      if (i >= 0 && i < board.size&& j >=0 && j < board.size){
        //console.log('[0]')
        if (squares[i][j].pathValue==0 && squares[i][j].color == color){
          squares[i][j].pathValue=1;
          return true;
        }
        else if (squares[i][j].pathValue==1){
          //console.log('[2]')
          squares[i][j].color = color;
          ctx.fillStyle = color;
          ctx.fillRect(i*_Square_size,
            j*_Square_size,
            _Square_size,
            _Square_size);
        }
      }
      return false;
    }

    let addition = false;
    do {
      addition = false;
      for (let i = 0; i < board.size; i++){
        for (let j = 0; j < board.size;j++){
          //console.log("i:" + i + "\tj:" + j + "\tp:" + squares[i][j].pathValue);
          if (squares[i][j].pathValue==1){
            //printf("Here");
            if (test(i+1,j)) addition = true;
            if (test(i-1,j)) addition = true;
            if (test(i,j-1)) addition = true;
            if (test(i,j+1)) addition = true;

          }

        }
      }
    }while (addition==true);
  };this.path(squares[0][0].color);
}
