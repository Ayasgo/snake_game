const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const canvas_size = 25;
let frame = 0;
const n_frame = 8;
canvas.width = canvas.height= grid_size*canvas_size;
const snake =new Snake(get_position(100), get_position(200), grid_size/2, canvas_size);

animate();

function animate(){
   if(!snake.isGameOver){
        frame++;
        if(frame%n_frame == 0) snake.update(canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.food.draw(ctx);
        snake.draw(ctx);
        requestAnimationFrame(animate)
   }
};


