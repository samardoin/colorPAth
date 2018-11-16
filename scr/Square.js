let _Square_size = 10;
let Square = function(){
  this.colors=['Red', 'Blue', 'DarkOrange','Turquoise', 'Yellow', 'green'];
  this.size = _Square_size;

  this.color = this.colors[tools.getRInt(0,this.colors.length)];
}
