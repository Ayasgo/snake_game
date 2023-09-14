class Food{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = 'lightsalmon';
    };
    draw(ctx){
        ctx.fillStyle = this.color;
        drawCercle(ctx, this.x, this.y, this.radius)
        ctx.fill();
    }
};