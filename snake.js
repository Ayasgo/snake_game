class Snake{
    constructor(x, y, radius, shape='cercle', color="lime"){
        this.length = 3;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.items = [
            [this.x, this.y]
        ];
        
        this.controls = new Controls();
    };
    draw(ctx){
        ctx.strokeStyle = 'black';
        ctx.fillStyle = this.color;
        this.items.forEach(item =>{
            ctx.beginPath();
            ctx.arc(...item, this.radius, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        });
    };
    update(){
        this.#move();
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
};