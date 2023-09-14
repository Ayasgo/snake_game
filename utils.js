const grid_size = 20;
function get_position(positon){
    return Math.floor(positon/grid_size) * grid_size -grid_size/2
};

function drawCercle(ctx,x,y,r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.closePath();
};

function randrange(a,b){
    return Math.floor(Math.random()*(b-a) + a)
};

function getRandomPosition(size){
    return [randrange(1, size) * grid_size - grid_size/2, randrange(1, size) * grid_size - grid_size/2];
};

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
