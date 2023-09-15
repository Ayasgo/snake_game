class Controls{
    constructor(){
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;
        this.paused = true;
        this.lastUpdatedKey = 'ri';

        this.#addKeyboardsListeners();
    };
    #addKeyboardsListeners(){
        document.onkeydown=(event)=>{
            let key = event.key;
             
            if(key === ' ' && !this.paused){
                this.paused = true;
                this.#setKeyToTrue('');
            }else if (key === ' ' && this.paused){
                this.paused = false;
                this.#setOnlyToTrue(this.lastUpdatedKey);
            };

            if(this.paused) return;
            else if(key === "ArrowUp" && !this.reverse) this.#setOnlyToTrue('fo');
            else if(key === "ArrowDown" && !this.forward) this.#setOnlyToTrue('re');
            else if(key === "ArrowRight" && !this.left) this.#setOnlyToTrue('ri');
            else if( key === "ArrowLeft" && !this.right) this.#setOnlyToTrue('le');
        };
    };
    #setKeyToFalse(key){
        if(key === 'fo') this.forward = false;
        else if(key === 're') this.reverse = false;
        else if(key === 'ri') this.right = false;
        else if( key === 'le') this.left = false;
    };
    #setKeyToTrue(key){
        if(key === 'fo') this.forward = true;
        else if(key === 're') this.reverse = true;
        else if(key === 'ri') this.right = true;
        else if( key === 'le') this.left = true;
    };
    #setOnlyToTrue(key){
        for(const _key of ['fo', 're', 'ri', 'le']){
            if(_key === key ) {
                this.#setKeyToTrue( key);
                this.lastUpdatedKey = key;
            }else this.#setKeyToFalse(_key);
        };
    };
}