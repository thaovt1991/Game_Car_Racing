class Car {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.height = height;
        this.width = width;
        this.enegy = 100;
        this.numBullet = 20;
    }
    setEneryandBullet() {
        switch (true) {
            case arrBeforOp[7]:
                this.enegy = 100;
                this.numBullet = 20
                break;
            case arrBeforOp[8]:
                this.enegy = 70;
                this.numBullet = 5
                break;
            case arrBeforOp[9]:
                this.enegy = 50;
                this.numBullet = 1
                break;
        }
    }
    getNumBullet() {
        return this.numBullet;
    }
    setNumBullet(num) {
        this.numBullet = num;
    }
    attackBarrier() {
        if (this.numBullet > 0) {
            return this.numBullet--;
        } else {
            return this.numBullet = 0;
        }
    }
    setCar(l, t, w, h) {
        this.left = l;
        this.top = t;
        this.height = h;
        this.width = w;
    }
    getEnery() {
        return this.enegy;
    };
    setEnery(enegy) {
        this.enegy = enegy
    }
    reduceEnegy() {
        this.enegy--;
    }

    getLeft() {
        return this.left;
    };

    getTop() {
        return this.top;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };
    setLeft(left) {
        this.left = left;
    };

    setTop(top) {
        this.top = top;
    };

    setWidth(width) {
        this.width = width;
    };

    setHeight(height) {
        this.height = height;
    };

    autoRun() {
        if (this.top > 0) {
            this.top -= 1;
        } else { this.top }
        this.clearCar(0, 0, 310, 590)
        this.createCar(this.left, this.top, this.width, this.height);

    }

    runLeft() {
        if (this.left > 0) {
            this.left -= 10;
        } else { this.left }
        this.clearCar(this.left + 10, this.top, this.width, this.height)
        this.createCar(this.left, this.top, this.width, this.height);

    };

    runRight() {
        if (this.left < 310 - this.width) {
            this.left += 10;
        } else { this.left }
        this.clearCar(this.left - 10, this.top, this.width, this.height)
        this.createCar(this.left, this.top, this.width, this.height);
    };

    runDown() {
        if (this.top < 590 - this.height) {
            this.top += 5;
        } else { this.top }
        this.clearCar(this.left, this.top - 5, this.width, this.height)
        this.createCar(this.left, this.top, this.width, this.height);

    };

    runUp() {
        if (this.top > 0) {
            this.top -= 5;
        } else { this.top }
        this.clearCar(this.left, this.top + 5, this.width, this.height)
        this.createCar(this.left, this.top, this.width, this.height);

    };
    runLeftUp() {
        switch (true) {
            case this.left > 0 && this.top > 0:
                this.left -= 5;
                this.top -= 5;
                this.clearCar(this.left + 5, this.top + 5, this.width, this.height);
                this.createCar(this.left, this.top, this.width, this.height);
                break;
            case this.left == 0 && this.top > 0:
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top + 5, this.width, this.height);
                break;
            case this.left > 0 && this.top == 0:
                this.left -= 5;
                this.clearCar(this.left + 5, this.top, this.width, this.height);
                this.createCar(this.left, this.top, this.width, this.height);

                break;
            case this.left == 0 && this.top == 0:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };

    runLeftDown() {
        switch (true) {
            case this.left > 0 && this.top < 590 - this.height:
                this.left -= 5;
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top - 5, this.width, this.height);
                break;
            case this.left == 0 && this.top < 590 - this.height:
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top - 5, this.width, this.height);
                break;
            case this.left > 0 && this.top == 590 - this.height:
                this.left -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top, this.width, this.height);
                break;
            case this.left == 0 && this.top == 590 - this.height:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };

    runRightUp() {
        switch (true) {
            case this.left < 310 - this.width && this.top > 0:
                this.left += 5;
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top + 5, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top > 0:
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top + 5, this.width, this.height);
                break;
            case this.left < 310 - this.width && this.top == 0:
                this.left += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top == 0:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };
    runRightDown() {
        switch (true) {
            case this.left < 310 - this.width && this.top < 590 - this.height:
                this.left += 5;
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top - 5, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top < 590 - this.height:
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top - 5, this.width, this.height);
                break;
            case this.left < 310 - this.width && this.top == 590 - this.height:
                this.left += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top == 590 - this.height:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    }

    createCar(l, t, w, h) {
        let canvas = document.getElementById("gameCar");
        let ctx = canvas.getContext("2d");
        var image = new Image();
        this.imageCar = "./image/car_green.png";
        switch (true) {
            case arrBeforOp[5]:
                this.imageCar = "./image/car_red.png"
                break;
            case arrBeforOp[6]:
                this.imageCar = "./image/car_yellow.png"
                break;
        }
        image.src = this.imageCar
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h);
        };
    }

    clearCar(l, t, w, h) {
        let canvas = document.getElementById("gameCar");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }
}




let arrImageCar = [
    ["./image/car_green.png", 60, 80, 2]
    ["./image/car_red.png", 60, 80, 2]
    ["./image/car_yellow.png", 60, 80, 2]
]
let oto = new Car(120, 500, 60, 80);


oto.createCar(oto.left, oto.top, oto.width, oto.height);

function Event_Press(evt) {
    switch (evt.keyCode) {
        case 100:
            oto.runLeft()
            break;
        case 102:
            oto.runRight();
            break;
        case 104:
            oto.runUp()
            break;
        case 98:
            oto.runDown()
            break;
        case 103:
            oto.runLeftUp()
            break;
        case 97:
            oto.runLeftDown()
            break;
        case 105:
            oto.runRightUp()
            break;
        case 99:
            oto.runRightDown()
            break;

    }
};

function runAfterForTimes() {
    oto.autoRun()
};

function dislayGameOver() {
    let canvas3 = document.getElementById("gameOver");
    let over = canvas3.getContext("2d");
    var imgOver = new Image();
    imgOver.src = "./image/game_over.png"
    imgOver.onload = function () {
        over.drawImage(imgOver, 20, 250, 270, 100)
    }
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("gameOver").style.zIndex = "10";
    document.getElementById("gameOver").style.position = "absolute";
    document.querySelector('#music_endgame').play();
    document.getElementById("btrestart").disabled = true ;
};


let canvas5 = document.getElementById("gameStart");
let start = canvas5.getContext("2d");
var imgFlag = new Image();
imgFlag.src = "./image/flag.png"
imgFlag.onload = function () {
    start.drawImage(imgFlag, 100, 150, 100, 100)
}
var imgText = new Image();
imgText.src = "./image/startgame.png";
imgText.onload = function () {
    start.drawImage(imgText, 20, 260, 250, 150)
}

 

