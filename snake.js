class Snake{
    constructor(x, y, radius, canvas_size, shape='cercle', color="lime"){
        this.length = 2;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.canvas_size = canvas_size;
        this.color = color;
        this.score = 0;
        this.isGameOver = false;
        this.items = [
            [this.x, this.y]
        ];
        
        this.controls = new Controls();
        this.#putFood();
    };
    draw(ctx){
        ctx.strokeStyle = 'black';
        ctx.fillStyle = this.color;
        this.items.forEach(item =>{
            drawCercle(ctx, ...item, this.radius);
            ctx.fill();
            ctx.stroke();
        });
    };
    update(w,h){
        this.#move();
        if(this.#snakeEatFood()){
            this.score++;
            this.length++;
            this.#putFood();
        };
        this.#checkCollision(w,h);
    };
    #move(){
        let [x,y] = this.items[0];
        if(this.controls.forward) y -= this.radius*2;
        if(this.controls.reverse) y += this.radius*2;
        if(this.controls.right) x += this.radius*2;
        if(this.controls.left) x -= this.radius*2;
        const lastItem = this.items[this.items.length-1];
        for( let i=this.items.length-1; i>0; i--) this.items[i] = this.items[i-1];
        [this.x, this.y] = this.items[0] = [x, y];   
        if( this.items.length < this.length) this.items.push(lastItem);       
    };
    #snakeEatFood(){
        return this.x == this.food.x && this.y == this.food.y
    };
    #putFood(){
        this.food = new Food(   ...getRandomPosition(this.canvas_size),
                                this.radius-2);
    };
    #checkCollision(w, h){
        let head = this.items[0];
        for(let item of this.items.slice(1)) 
            if(arraysAreEqual(head, item))
                this.isGameOver = true;
        
        if( this.x<0 || this.x>w || this.y<0  || this.y>h) this.isGameOver = true;
    };
};