class Item {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

    };
     setItem(){
        this.top = -(Math.floor(Math.random() * (1000 - this.height )) + this.height);
        this.left = Math.floor(Math.random()* (310 - this.width));
        this.width = 30;
        this.height = 30;
     };
    setCoin(){
        this.top = -(Math.floor(Math.random() * (2000 - this.height )) + this.height);
        this.left = Math.floor(Math.random()* (310 - this.width));
        this.width = 30;
        this.height = 30;
     }

    getLeft() {
        return this.left;
    };

    getTop() {
        return this.top;
    };
    setLeft(left) {
        this.left = left;
    };
    setTop(top) {
        this.top = top;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };

    setWidth(width) {
        this.width = width;
    };

    setHeight(height) {
        this.height = height;
    };

    autoRunItem() {
        if (this.top < 590) {
            this.top++;
        } else {
            this.top = -(Math.floor(Math.random() * (1000 - this.height )) + this.height);
             this.left = Math.floor(Math.random()* (310 - this.width));
        }
        this.clearItem(this.left, this.top - 1, this.width, this.height)
        this.createItem(this.left, this.top, this.width, this.height);
    }
    autoRunCoin(){
        if (this.top < 590) {
            this.top++;
        } else {
            this.top = -(Math.floor(Math.random() * (2000 - this.height )) + this.height);
             this.left = Math.floor(Math.random()* (310 - this.width));
        }
        this.clearItem(this.left, this.top - 1, this.width, this.height)
        this.createCoin(this.left, this.top, this.width, this.height);
    }
    

    createItem(l, t, w, h) {
        let canvas = document.getElementById("gameItem");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src =  "./image/enegy.png"              
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h)
        }
    }
    createCoin(l, t, w, h) {
        let canvas = document.getElementById("gameItem");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = "./image/coin.png"
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h)
        }
    }

    clearItem(l, t, w, h) {
        let canvas = document.getElementById("gameItem");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }

}


let topItem = -(Math.floor(Math.random() * 1000 )- this.height);
let leftItem = Math.floor(Math.random()* (310 - this.width));
let power = new Item(leftItem, topItem, 30, 30);
power.createItem(leftItem, topItem, 30, 30)


let topCoin = -(Math.floor(Math.random() * 2000 )- this.height);
let leftCoin = Math.floor(Math.random()* (310 - this.width));
let coin = new Item(leftCoin, topCoin,30,30);
coin.createCoin(leftCoin,topCoin,30,30);

