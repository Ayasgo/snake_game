const grid_size = 20;
function get_position(positon){
    return Math.floor(positon/grid_size) * grid_size -grid_size/2
};

function drawCercle(ctx,x,y,r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.closePath();
};
function drawRect(ctx,x,y,r){
  ctx.beginPath();
  ctx.rect(x-r, y-r, 2*r, 2*r)
  ctx.closePath();
};

function drawHead(ctx, x, y, r, direction = 'fo'){
  ctx.beginPath()
  
  ctx.arc(x, y, 1.1*r, 0, 2*Math.PI );
  if(direction === 'fo') {
    ctx.rect(x-r,y,r*2,r);
  }else if(direction === 're'){
    ctx.rect(x-r,y-r,r*2,r);
  }else if(direction === 'ri'){
    ctx.rect(x-r,y-r,r,2*r);
  }else if(direction === 'le'){
    ctx.rect(x,y-r,r,2*r);
  }
  ctx.fill();
  ctx.closePath();
}

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
