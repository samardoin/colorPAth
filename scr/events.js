document.addEventListener("click", (e)=>{
  let box = canvas.getBoundingClientRect();
  let x = e.clientX - box.left;
  let y = e.clientY - box.top;
  let color = board.getColor(x,y);
  if (color != undefined) board.path(color);
});
