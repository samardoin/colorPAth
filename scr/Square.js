var _Square_size = 30;
var Square = function(){
  this.colors=['Red', 'Blue', 'DarkOrange','Turquoise', 'Yellow', 'green'];
  this.size = _Square_size;

  this.color = this.colors[tools.getRInt(0,this.colors.length)];
  this.pathValue = 0;
}
