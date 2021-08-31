


class Barrier2 {
    constructor(image, left, top, width, height, speed) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.imageBarrier = image;
        this.speed = speed;
    };
    setBarrier() {
        let random = Math.floor(Math.random() * (arrBarrier.length - 1));
        this.imageBarrier = arrBarrier[random][0]
        this.speed = arrBarrier[random][3];
        this.width = arrBarrier[random][1]
        this.height = arrBarrier[random][2]
        this.top = -(Math.floor(Math.random() * (590 - this.height)) + this.height + bar.height);
        if ((bar.left - this.width) > 0 ) {
            leftBar2 = Math.floor(Math.random() * (bar.left - this.width));
         } else {
             leftBar2 = Math.floor(Math.random() * (310  - (bar.width + bar.left))) + (bar.width + bar.left) - this.width
        }
        
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
        if (this.top < 590) {
            this.top += this.speed;
        } else {
            this.setBarrier();
        }
        this.clearBarrier(this.left, this.top - this.speed, this.width, this.height)
        this.createBarrier(this.left, this.top, this.width, this.height);
    }

    createBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier2");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = this.imageBarrier;
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h)
        }
    }
    clearBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier2");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }

}


random2 = Math.floor(Math.random() * (arrBarrier.length - 1));
imageBar2 = arrBarrier[random2][0]
topBar2 = -(Math.floor(Math.random() * (590 - this.height)) + this.height + bar.height );
widthBar2 = arrBarrier[random2][1]
heightBar2 = arrBarrier[random2][2]
let leftBar2 = 0 ;
 if ((bar.left - this.width) > 0 ) {
    leftBar2 = Math.floor(Math.random() * (bar.left - this.width));
 } else {
     leftBar2 = Math.floor(Math.random() * (310  - (bar.width + bar.left))) + (bar.width + bar.left) - this.width
}

let bar2 = new Barrier(imageBar2, leftBar2, topBar2, widthBar2, heightBar2);
bar2.createBarrier(leftBar2, topBar2, widthBar2, heightBar2)



