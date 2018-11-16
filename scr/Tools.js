let Tools = function(){
  this.getRInt = function(min, max){
    return Math.floor(Math.random()*max) + min;
  }
};let tools = new Tools();
