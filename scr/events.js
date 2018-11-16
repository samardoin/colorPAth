document.addEventListener("click", (e)=>{
  let box = canvas.getBoundingClientRect();
  let x = e.clientX - box.left;
  let y = e.clientY - box.top;

  console.log("Board:" + board.getColor(x,y));
});
