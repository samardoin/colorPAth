var Tools = function(){
  this.getRInt = function(min, max){
    return Math.floor(Math.random()*max) + min;
  }
};var tools = new Tools();
