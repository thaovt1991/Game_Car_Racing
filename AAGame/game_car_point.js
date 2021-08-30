class Score {
    constructor() {
        this.point = 0;
        this.arrPoint = [300,500,400,250];
    }
    getPoint() {
        return this.point;
    };
    setPoint(point) {
        this.point = point
    }
    setArrPoint(point) {
        this.arrPoint.push(point)
    }
}


let score = new Score();

document.getElementById("score").innerHTML = score.getPoint() + " points ";
function runScore() {
    this.scoreGame = setInterval(() => {
        let s = score.getPoint();
        s +=10;
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
    let arrPoint = score.arrPoint
    arrPoint.sort(function (a, b) {
        return b - a;
    });
    let point = score.getPoint() ;
    let num = arrPoint.lastIndexOf(point);
    let str ="";
    if (num != -1){ str = "Your Raiting : " + (num+1) + "\n"}else{str = "Let's play the game ! ^^! \n"}
    
    for (let i = 0; i < arrPoint.length; i++) {
        str += (i + 1) + ". " + arrPoint[i] + " points " + "\n"
    }
    document.getElementById("displayArrPoint").value = str;
}
displayCharts() ;