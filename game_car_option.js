//Form option

let arrBeforOp = [8000, false, 7000, false, true, false, false, true, false, false];




function checkedMute() {
    let value = document.getElementById("mute").checked;
    if (value) {
        document.querySelector("#music_startgame").pause();
    } else {
        changeVol();
        document.querySelector("#music_startgame").play();
    }
}

function changeVol() {
    let value = document.getElementById("vol").value;
    if (value != 0) {
        document.querySelector("#music_startgame").volume = value / 10000;
        document.getElementById('mute').checked = false;
        document.querySelector("#music_startgame").play();
    } else {
        document.getElementById('mute').checked = true;
        document.querySelector("#music_startgame").pause();
    }
}




function checkedMuteSound() {
    let value = document.getElementById("muteSound").checked;
    if (value) {
        document.querySelector("#music_detroy").pause();
        document.querySelector("#music_attack").pause();
        document.querySelector("#music_endgame").pause()
        document.querySelector("#music_open").pause()
        document.querySelector("#music_close").pause()

    } else {
        changeVolSound();
        document.querySelector("#music_detroy").play();
        document.querySelector("#music_attack").play();
        document.querySelector("#music_endgame").play()
        document.querySelector("#music_open").play()
        document.querySelector("#music_close").play()
    }
}

function changeVolSound() {
    let value = document.getElementById("vol").value;
    if (value != 0) {
        document.querySelector("#music_detroy").volume = value / 10000;
        document.querySelector("#music_attack").volume = value / 10000;
        document.querySelector("#music_endgame").volume = value / 10000;
        document.querySelector("#music_open").volume = value / 10000;
        document.querySelector("#music_close").volume = value / 10000;
        document.getElementById('muteSound').checked = false;
        document.querySelector("#music_detroy").play();
        document.querySelector("#music_attack").play();
        document.querySelector("#music_endgame").play()
        document.querySelector("#music_open").play()
        document.querySelector("#music_close").play()

    } else {
        document.getElementById('muteSound').checked = true;
        document.querySelector("#music_detroy").pause();
        document.querySelector("#music_attack").pause();
        document.querySelector("#music_endgame").pause()
        document.querySelector("#music_open").pause()
        document.querySelector("#music_close").pause()

    }
}
 function checked(){
    document.querySelector("#music_close").play()
 }
 let radio = document.querySelectorAll('input[type=radio]');
 Array.prototype.forEach.call(radio, function(radio) {
    radio.addEventListener('change', checked);
 });



function saveOption() {
    document.querySelector("#music_open").play()
    if (confirm(`Are you sure "Save" your option ?`)) {
        arrBeforOp[0] = document.getElementById("vol").value;
        arrBeforOp[1] = document.getElementById("mute").checked;
        arrBeforOp[2] = document.getElementById("volSound").value;
        arrBeforOp[3] = document.getElementById("muteSound").checked;
        arrBeforOp[4] = document.getElementById("car_green").checked;
        arrBeforOp[5] = document.getElementById("car_red").checked;
        arrBeforOp[6] = document.getElementById("car_yellow").checked;
        arrBeforOp[7] = document.getElementById("levelEasy").checked;
        arrBeforOp[8] = document.getElementById("levelHard").checked;
        arrBeforOp[9] = document.getElementById("levelVeryHard").checked;
        oto.clearCar(oto.left, oto.top, oto.width, oto.height);
        oto.createCar(oto.left, oto.top, oto.width, oto.height);
        document.getElementById("enegy").innerHTML = oto.getEnery();
        document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
        displayCharts();
        oto.setEneryandBullet();

    }
    document.querySelector("#music_close").play()
}



function cancelOption() {
    document.querySelector("#music_open").play()
    if (confirm('Are you sure "Cancel" your option ?')) {
        document.getElementById("vol").value = arrBeforOp[0];
        document.getElementById("mute").checked = arrBeforOp[1];
        document.getElementById("volSound").value = arrBeforOp[2];
        document.getElementById("muteSound").checked = arrBeforOp[3]
        document.getElementById("car_green").checked = arrBeforOp[4];
        document.getElementById("car_red").checked = arrBeforOp[5];
        document.getElementById("car_yellow").checked = arrBeforOp[6];
        document.getElementById("levelEasy").checked = arrBeforOp[7];
        document.getElementById("levelHard").checked = arrBeforOp[8];
        document.getElementById("levelVeryHard").checked = arrBeforOp[9];
    }
    document.querySelector("#music_close").play()

}

function defaultOption() {
    document.querySelector("#music_open").play()
    if (confirm('Are you sure "Default Option" ?')) {
        document.getElementById("vol").value = 8000;
        document.getElementById("mute").checked = false
        document.getElementById("volSound").value = 8000;
        document.getElementById("muteSound").checked = false;
        document.getElementById("car_green").checked = true;
        document.getElementById("car_red").checked = false
        document.getElementById("car_yellow").checked = false;
        document.getElementById("levelEasy").checked = true;
        document.getElementById("levelHard").checked = false;
        document.getElementById("levelVeryHard").checked = false;
        oto.clearCar(oto.left, oto.top, oto.width, oto.height)
        oto.createCar(oto.left, oto.top, oto.width, oto.height)
        document.getElementById("enegy").innerHTML = oto.getEnery();
        document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
        displayCharts();
        oto.setEneryandBullet();
    }
    document.querySelector("#music_close").play()
}
function exitOption() {
    document.querySelector("#music_open").play()
    if (confirm(`Are you sure "Exit Option" ?`)) {
        if ((document.getElementById("vol").value == arrBeforOp[0]) &&
            (document.getElementById("mute").checked == arrBeforOp[1]) &&
            (document.getElementById("volSound").value == arrBeforOp[2]) &&
            (document.getElementById("muteSound").checked == arrBeforOp[3]) &&
            (document.getElementById("car_green").checked == arrBeforOp[4]) &&
            (document.getElementById("car_red").checked == arrBeforOp[5]) &&
            (document.getElementById("car_yellow").checked == arrBeforOp[6]) &&
            (document.getElementById("levelEasy").checked == arrBeforOp[7]) &&
            (document.getElementById("levelHard").checked == arrBeforOp[8]) &&
            (document.getElementById("levelVeryHard").checked == arrBeforOp[9])
        ) {
            document.getElementById("optionGame").style.display = "none";
            document.getElementById("controlGame").style.display = "block";
            document.getElementById("enegy").innerHTML = oto.getEnery();
            document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
            displayCharts();
            oto.setEneryandBullet();
            document.querySelector("#music_close").play()

        } else {
            if (confirm("There are a few options to change, do you want to save?")) {
                arrBeforOp[0] = document.getElementById("vol").value;
                arrBeforOp[1] = document.getElementById("mute").checked;
                arrBeforOp[2] = document.getElementById("volSound").value;
                arrBeforOp[3] = document.getElementById("muteSound").checked;
                arrBeforOp[4] = document.getElementById("car_green").checked;
                arrBeforOp[5] = document.getElementById("car_red").checked;
                arrBeforOp[6] = document.getElementById("car_yellow").checked;
                arrBeforOp[7] = document.getElementById("levelEasy").checked;
                arrBeforOp[8] = document.getElementById("levelHard").checked;
                arrBeforOp[9] = document.getElementById("levelVeryHard").checked;
                document.getElementById("optionGame").style.display = "none";
                document.getElementById("controlGame").style.display = "block";
                oto.clearCar(oto.left, oto.top, oto.width, oto.height)
                oto.createCar(oto.left, oto.top, oto.width, oto.height)
                document.getElementById("enegy").innerHTML = oto.getEnery();
                document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
                displayCharts();
                oto.setEneryandBullet();
            
            } else {
                document.getElementById("vol").value = arrBeforOp[0];
                document.getElementById("mute").checked = arrBeforOp[1];
                document.getElementById("volSound").value = arrBeforOp[2];
                document.getElementById("muteSound").checked = arrBeforOp[3]
                document.getElementById("car_green").checked = arrBeforOp[4];
                document.getElementById("car_red").checked = arrBeforOp[5];
                document.getElementById("car_yellow").checked = arrBeforOp[6];
                document.getElementById("levelEasy").checked = arrBeforOp[7];
                document.getElementById("levelHard").checked = arrBeforOp[8];
                document.getElementById("levelVeryHard").checked = arrBeforOp[9]
                document.getElementById("optionGame").style.display = "none";
                document.getElementById("controlGame").style.display = "block";
                document.getElementById("enegy").innerHTML = oto.getEnery();
                document.getElementById("num_bullet").innerHTML = oto.getNumBullet();
                displayCharts();
                oto.setEneryandBullet();
               

            }
            document.querySelector("#music_close").play()
        }
    }
    window.addEventListener('keydown', pressSpace);
}
