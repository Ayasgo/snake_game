class Food{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = '+item';
        this.color = 'lightsalmon';
    };
    draw(ctx){
        ctx.fillStyle = this.color;
        drawCercle(ctx, this.x, this.y, this.radius)
        ctx.fill();
    };
    effect(snake){
        if(this.type === '+item'){
            snake.length ++;
            snake.score ++;
        }else if(this.type === '-item'){
            if(snake.length>=3) snake.length-=2;
            snake.score ++;
        }else if(this.type === '+life'){
            snake.lifes++;
        }else if(this.type === '-life'){
            snake.decrementLifes();
        };
    };
    choise_type(){
        let probabilities = {
            '+item': 7,
            '-item':1,
            '+life':1,
            '-life':1,
        };
        let possibilities = [];
        for( let key in probabilities){
            for( let i=0; i< probabilities[key]; i++){
                possibilities.push(key);
            };
        };
        console.log(possibilities)
        this.type = possibilities[randrange(0, possibilities.length)] || '+item';
        this.choise_color();
    };
    choise_color(){
        let colors = {
            '+item': 'lime',
            '-item': 'lightcoral',
            '+life': 'rgba(255, 255, 0, 0.816)',
            '-life': 'lightslategrey',
        };
        this.color = colors[this.type];
    };
};