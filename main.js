const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const grid_size = 20;
const canvas_size = 25;
let frame = 0;
const n_frame = 8;
canvas.width = canvas.height= grid_size*canvas_size;
const snake =new Snake(get_position(100), get_position(200), grid_size/2);

animate();

function animate(){
    frame++;
    if(frame%n_frame == 0) snake.update();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(ctx);
    requestAnimationFrame(animate)
};

function get_position(positon){
    return Math.floor(positon/grid_size) * grid_size -grid_size/2
};
