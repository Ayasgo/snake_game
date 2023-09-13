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
            switch(event.key){
                case "ArrowUp":
                    this.#updateKeys('fo');
                    break;
                case "ArrowDown":
                    this.#updateKeys('re');
                    break;
                case "ArrowRight":
                    this.#updateKeys('ri');
                    break;
                case "ArrowLeft":
                    this.#updateKeys('le');
                    break;
            };
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
            if(_key === key) this.#setKeyToTrue(_key);
            else this.#setKeyToFalse(_key);
        };
    };
}