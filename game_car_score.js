class Score {
    constructor() {
        this.point = 0;
        this.arrPointEasy = [300, 500, 400, 250];
        this.arrPointHard = [200, 450, 350, 320];
        this.arrPointVeryHard = [200, 350, 100, 320];
        this.arrPoint =  this.arrPointEasy
    }
    getPoint() {
        return this.point;
    };
    setPoint(point) {
        this.point = point
    }
    setArrPoint(point) {
        switch (true) {
            case arrBeforOp[7]:
                this.arrPointEasy.push(point);
                break;
            case arrBeforOp[8]:
                this.arrPointHard.push(point);
                break;
            case arrBeforOp[9]:
                this.arrPointVeryHard.push(point);
                break;
        }
    }
}


let score = new Score();

document.getElementById("score").innerHTML = score.getPoint() + " points ";
function runScore() {
    this.scoreGame = setInterval(() => {
        let s = score.getPoint();
        s += 10;
        score.setPoint(s);
        document.getElementById("score").innerHTML = s + " points ";
    }, 1000);
}
function stopScore() {
    clearInterval(this.scoreGame);
    score.setArrPoint(score.getPoint())
    displayCharts();
}

function displayCharts() {
    let arrPoint = [];
    let str = "";
    switch (true) {
        case arrBeforOp[7]:
            str += "Level : Easy ! \n";
            arrPoint = score.arrPointEasy;
            break;
        case arrBeforOp[8]:
            str += "Level : Hard ! \n";
            arrPoint = score.arrPointHard;
            break;
        case arrBeforOp[9]:
            str += "Level : Very Hard ! \n";
            arrPoint = score.arrPointVeryHard;
            break;
    }
    console.log(str)
    arrPoint.sort(function (a, b) {
        return b - a;
    });
    let point = score.getPoint();
    let num = arrPoint.lastIndexOf(point);
    
    if (num != -1) { str += "Your Raiting : " + (num + 1) + "\n" } else { str += "Let's play the game ! ^^! \n" }

    for (let i = 0; i < arrPoint.length; i++) {
        str += (i + 1) + ". " + arrPoint[i] + " points " + "\n"
    }
    document.getElementById("displayArrPoint").value = str;
}
displayCharts();