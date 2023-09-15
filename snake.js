class Snake{
    constructor(x, y, radius, canvas_size, shape='cercle', color="lime"){
        this.length = 2;
        this.x = this.x0 = x;
        this.y = this.y0 = y;
        this.radius = radius;
        this.canvas_size = canvas_size;
        this.color = color;
        this.score = 0;
        this.lifes = 3;
        this.isalive = true;
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
        if( this.controls.paused) return;

        this.#move();
        if(this.#snakeEatFood()){
            this.food.effect(this);
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
        else if(this.items.length > this.length && this.items.length  >=3) {
            for(let i=0; i< this.items.length - this.length; i++)
                this.items.pop();
        };
    };
    #snakeEatFood(){
        return this.x == this.food.x && this.y == this.food.y;
    };
    #putFood(){
        if(!this.controls.paused || !this.food){
            this.food = new Food(   ...getRandomPosition(this.canvas_size),
                                    this.radius-1);
            this.food.choise_type();
    }
        if(!this.controls.paused){
            if( this.foodTimer ) clearTimeout(this.foodTimer);
            this.foodTimer = setTimeout(()=>{
                this.#putFood();
            }, 6000);
        }
    };
    #checkCollision(w, h){
        let head = this.items[0];
        for(let item of this.items.slice(1)) 
            if(arraysAreEqual(head, item)){
                this.decrementLifes();
                this.#initialize();
            }
        
        if( this.x<0 || this.x>w || this.y<0  || this.y>h) {
            this.decrementLifes();
            this.#initialize();
        }
    };
    #initialize(){
        this.x = this.x0;
        this.y = this.y0;
        this.items = [
            [this.x, this.y]
        ];
        this.controls = new Controls();
    };
    decrementLifes(){
        this.lifes--;
        if(this.lifes <=0) this.isalive = false;
    };
};