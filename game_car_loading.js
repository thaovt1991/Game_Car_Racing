//Create GAME
let endGame ;
let pause =true ;


oto.setEneryandBullet();
document.getElementById("enegy").innerHTML = oto.getEnery();
document.getElementById("num_bullet").innerHTML = oto.getNumBullet();

function btstartGame() {
    if (endGame) {
        if (confirm("Bạn muốn chơi lại !")) {
            restartGame();
            displayCharts();
            endGame = false;
        } else dislayGameOver();
    } else {
        startGame();
        runScore();
        endGame = false;
        document.getElementById("levelEasy").disabled = true;
        document.getElementById("levelHard").disabled = true;
        document.getElementById("levelVeryHard").disabled = true;

    }
}

function startGame() {
    document.getElementById("gameStart").style.display = "none";
    pause = false;
    this.startRun = setInterval(function () {
        runLine(line1)
        runLine(line2)
        runLine(line3)
        runLine(line4)
        runLine(line5)
        runLine(line6)
        runLine(line7)
        power.autoRunItem();
        coin.autoRunCoin()
        bullets.autoRunBullets();
        eventEatItem()
        eventEatCoin()
        eventEatBullets()
        power.clearItem(0, 0, 310, 590)
        bar.autoRun();
        bar2.autoRun();
        eventEatBarrier(bar)
        eventEatBarrier(bar2)
    }, 10);
    this.carRun = setInterval('runAfterForTimes()', 350)
    this.enegyCar = setInterval(() => {
        let t = oto.getEnery();
        oto.reduceEnegy();
        if (t > 0) {
            if (t >= 10) {
                document.getElementById("enegy").innerHTML = t;
            } else {
                document.getElementById("enegy").innerHTML = "0" + t
            };
        } else {
            document.getElementById("enegy").innerHTML = "00"
            pauseGame();
            dislayGameOver();
            stopScore();
            endGame = true;

        }
    }, 1000);
    document.getElementById('btstart').disabled = true;
    document.getElementById('btpause').disabled = false;
    document.getElementById("btrestart").disabled = true;
    document.getElementById("btoption").disabled = true;
    checkedMute()
    window.addEventListener('keydown', Event_Press);
    window.addEventListener('keydown', eventAttack)
}


function pauseGame() {
    clearInterval(this.startRun);
    clearInterval(this.carRun);
    clearInterval(this.enegyCar)
    document.getElementById('btstart').disabled = false;
    document.getElementById('btpause').disabled = true;
    document.getElementById("btrestart").disabled = false;
    document.getElementById("btoption").disabled = false;
    window.removeEventListener('keydown', Event_Press);
    window.removeEventListener('keydown', eventAttack)
    clearInterval(this.scoreGame);
    document.querySelector("#music_startgame").pause();
    pause = true

}
function restartGame() {
    document.getElementById("gameStart").style.display = "block";
    oto.clearCar(oto.left, oto.top, oto.width, oto.height);
    oto.setCar(120, 500, 60, 80);
    oto.createCar(120, 500, 60, 80)
    oto.setEneryandBullet();
    document.getElementById("enegy").innerHTML = oto.getEnery();
    document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
    score.setPoint(0);
    document.getElementById("score").innerHTML = score.getPoint();
    let canLine = document.getElementById("gameLine");
    let ctxLine = canLine.getContext("2d");
    ctxLine.clearRect(0, 0, 310, 590);
    line1.setLine(150, -50, 10, 50);
    line2.setLine(150, -150, 10, 50);
    line3.setLine(150, -250, 10, 50);
    line4.setLine(150, -350, 10, 50);
    line5.setLine(150, -450, 10, 50);
    line6.setLine(150, -550, 10, 50);
    line7.setLine(150, -650, 10, 50);
    let canItem = document.getElementById("gameItem");
    let ctxItem = canItem.getContext("2d");
    ctxItem.clearRect(0, 0, 310, 590);
    power.setItem();
    coin.setCoin();
    bullets.setBulllets()
    let canBar = document.getElementById("gameBarrier");
    let ctxBar = canBar.getContext("2d");
    ctxBar.clearRect(0, 0, 310, 590);
    bar.setBarrier();
    bar2.setBarrier()
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("btrestart").disabled = true;
    document.getElementById("levelEasy").disabled = false;
    document.getElementById("levelHard").disabled = false;
    document.getElementById("levelVeryHard").disabled = false;
    pause = false ;
    
}

function btrestartGame() {
    if (confirm("Are you sure Restart Game !")) {
        if (endGame) {
            restartGame();
        } else {
            score.setArrPoint(score.getPoint());
            displayCharts();
            restartGame();
        }
    }
}
function displayOption() {
    document.getElementById("optionGame").style.display = "block";
    document.getElementById("controlGame").style.display = "none";
    window.removeEventListener('keydown', pressSpace)
}

function displayInstruction() {
    document.getElementById("instruction").style.display = "block";
    document.getElementById("instruction").width = "350";
    document.getElementById("controlGame").style.display = "none";

}
function closeInstruction() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("controlGame").style.display = "block";

}


let bullet = new Line()
function attackCar(bullet) {
    if (oto.numBullet > 0) {
        oto.attackBarrier();
        document.getElementById("num_bullet").innerHTML = oto.getNumBullet()
        let left = oto.left + oto.width / 2 + 5;
        let top = oto.top;
        bullet.setBullet(left, top)
        document.querySelector('#music_attack').play();
        this.attack = setInterval(function () {
            runBullet(bullet)
            eventAttackBullet(bullet)
        }, 10)
    } else {
        window.removeEventListener('keydown', pressSpace);
    }

}

function eventAttackBullet(bullet) {
    if ((bullet.top <= bar.top + bar.height) && (bullet.left + 10 >= bar.left) && (bullet.left <= bar.left + bar.width)) {
        bar.clearBarrier(0, 0, 310, 590)
        bar.setBarrier();
        score.setPoint(score.point + 20);
        bullet.clearBullet();
        bullet.setBullet(-50, -50)
        clearInterval(this.attack)
        document.querySelector("#music_detroy").play();
    }
    if ((bullet.top <= bar2.top + bar2.height) && (bullet.left + 10 >= bar2.left) && (bullet.left <= bar2.left + bar2.width)) {
        bar2.clearBarrier(0, 0, 310, 590)
        bar2.setBarrier();
        score.setPoint(score.point + 20);
        bullet.clearBullet();
        bullet.setBullet(-50, -50)
        clearInterval(this.attack);
        document.querySelector("#music_detroy").play();
        
    }
}

function eventAttack(attack) {
    if (attack.keyCode == 13) { attackCar(bullet); }
}




function eventEatItem() {
    if ((power.top <= (oto.height + oto.top))
        && (power.top + power.height >= oto.top)
        && (power.left + power.width >= oto.left)
        && (power.left <= oto.left + oto.width)) {
        power.setItem();
        oto.setEnery(oto.enegy + 6);
    }
}

function eventEatCoin() {
    if ((coin.top <= (oto.height + oto.top))
        && (coin.top + coin.height >= oto.top)
        && (coin.left + coin.width >= oto.left)
        && (coin.left <= oto.left + oto.width)) {
        coin.setCoin();
        score.setPoint(score.point + 100)
    }
}
function eventEatBullets() {
    if ((bullets.top <= (oto.height + oto.top))
        && (bullets.top + bullets.height >= oto.top)
        && (bullets.left + bullets.width >= oto.left)
        && (bullets.left <= oto.left + oto.width)) {
        bullets.setBulllets();
        oto.setNumBullet(oto.numBullet + 1);
        document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
    }
}

function eventEatBarrier(bar) {
    if ((bar.top <= (oto.height + oto.top))
        && (bar.top + bar.height >= oto.top)
        && (bar.left + bar.width >= oto.left)
        && (bar.left <= oto.left + oto.width)) {
        pauseGame();
        dislayGameOver();
        stopScore();
        endGame = true;
    }

}


function pressSpace(event) {
    if (event.keyCode == 32) {
        if (pause) {
            btstartGame()
        } else pauseGame()
    }
}
window.addEventListener('keydown', pressSpace);
