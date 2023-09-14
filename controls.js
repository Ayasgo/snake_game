class Controls{
    constructor(){
        this.forward = false;
        this.reverse = false;
        this.right = true;
        this.left = false;

        this.#addKeyboardsListeners();
    };
    #addKeyboardsListeners(){
        document.onkeydown=(event)=>{
            let key = event.key;
            if(key === "ArrowUp" && !this.reverse) this.#updateKeys('fo');
            else if(key === "ArrowDown" && !this.forward) this.#updateKeys('re');
            else if(key === "ArrowRight" && !this.left) this.#updateKeys('ri');
            else if( key === "ArrowLeft" && !this.right) this.#updateKeys('le');
        };
    };
    #setKeyToFalse(...keys){
        for(let key of keys){
            if(key === 'fo') this.forward = false;
            else if(key === 're') this.reverse = false;
            else if(key === 'ri') this.right = false;
            else if( key === 'le') this.left = false;
        };
    };
    #setKeyToTrue(...keys){
        for(let key of keys){
            if(key === 'fo') this.forward = true;
            else if(key === 're') this.reverse = true;
            else if(key === 'ri') this.right = true;
            else if( key === 'le') this.left = true;
        };
    };
    #updateKeys(key){
        for(const _key of ['fo', 're', 'ri', 'le']){
            if(_key === key ) this.#setKeyToTrue(_key);
            else this.#setKeyToFalse(_key);
        };
    };
}