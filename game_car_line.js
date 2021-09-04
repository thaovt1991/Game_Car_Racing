class Line {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

    };
    setLine(l, t, w, h) {
        this.left = l;
        this.top = t;
        this.width = w;
        this.height = h;
    };
    setBullet(l, t) {
        this.left = l;
        this.top = t;
    }
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
    runLineDown() {
        this.top++;
    };
   


    createLine() {
        let canvas = document.getElementById("gameLine");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F8F8FF";
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }

    clearLine() {
        let canvas = document.getElementById("gameLine");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(this.left, this.top, this.width, this.height)
    }
    createBullet() {
        let canvas = document.getElementById("gameLine");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "#FFFF00";
        ctx.arc(this.left, this.top, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    clearBullet() {
        let canvas = document.getElementById("gameLine");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(this.left - 5, this.top - 5, 10, 10)
    }
}



let line1 = new Line(150, -50, 10, 50);
let line2 = new Line(150, -150, 10, 50);
let line3 = new Line(150, -250, 10, 50);
let line4 = new Line(150, -350, 10, 50);
let line5 = new Line(150, -450, 10, 50);
let line6 = new Line(150, -550, 10, 50);
let line7 = new Line(150, -650, 10, 50);


function runLine(line) {
    if (line.top > 590) {
        line.top = -100
    }
    line.clearLine();
    line.runLineDown()
    line.createLine();

};


function runBullet(bullet) {
    if (bullet.top < -5) {
        bullet.clearBullet();
        bullet.top = -1000;
    } else {
        bullet.clearBullet();
        bullet.top -= 10;
        bullet.createBullet();
    }
}



