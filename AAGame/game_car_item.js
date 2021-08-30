class Item {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.imageItem = "./image/enegy.png"

    };
     setItem(){
        this.top = -(Math.floor(Math.random() * 1000 )- this.height);
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

    autoRun() {
        if (this.top < 600) {
            this.top++;
        } else {
            this.top = -(Math.floor(Math.random() * 100 - this.height ) + this.height);
             this.left = Math.floor(Math.random()* (310 - this.width));
        }
        this.clearItem(this.left, this.top - 1, this.width, this.height)
        this.createItem(this.left, this.top, this.width, this.height);
    }

    createItem(l, t, w, h) {
        let canvas = document.getElementById("gameItem");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = this.imageItem
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
function runItem(item) {
    item.autoRun()
}
