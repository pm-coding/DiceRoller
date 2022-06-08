var color = "white";
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("6sidedprompt").addEventListener("click", randomize6sided);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("8sidedprompt").addEventListener("click", randomize8sided);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("20sidedprompt").addEventListener("click", randomize20sided);
});

function randomize6sided() {
    var number = Math.floor((Math.random() * 6) + 1);
    var bonus = document.getElementById('bonus').value;
    document.getElementById('result').style.display = "block";
	document.innerHeight = "300px";
    if (isNaN(Number.parseFloat(bonus))|| Number.parseFloat(bonus) == 0) {
        document.getElementById('result').innerHTML = "The number on the dice is " + number + "! No bonus has been added.";
    } else {
        var truebonus = Number.parseFloat(bonus);
        document.getElementById('result').innerHTML = "Your total roll is " + (number + truebonus) + "!";
    }
    if (color = "white") {
        switch (number) {
            case 1:
                document.getElementById('6sided').src = 'dice/6dice_1.png';
                break;
            case 2:
                document.getElementById('6sided').src = 'dice/6dice_2.png';
                break;
            case 3:
                document.getElementById('6sided').src = 'dice/6dice_3.png';
                break;
            case 4:
                document.getElementById('6sided').src = 'dice/6dice_4.png';
                break;
            case 5:
                document.getElementById('6sided').src = 'dice/6dice_5.png';
                break;
            case 6:
                document.getElementById('6sided').src = 'dice/6dice_6.png';
                break;
        }
    }
}

function randomize8sided() {
    var number = Math.floor((Math.random() * 8) + 1);
    document.getElementById('result').style.display = "block";
    document.getElementById('result').innerHTML = "The number on the dice is " + number + "!";
    var bonus = document.getElementById('bonus').value;
    document.getElementById('result').style.display = "block";
	document.innerHeight = "300px";
    if (isNaN(Number.parseFloat(bonus))||Number.parseFloat(bonus) == 0) {
        document.getElementById('result').innerHTML = "The number on the dice is " + number + "! No bonus has been added.";
    } else {
        var truebonus = Number.parseFloat(bonus);
        document.getElementById('result').innerHTML = "Your total roll is " + (number + truebonus) + "!";
    }
    if (color = "white") {
        switch (number) {
            case 1:
                document.getElementById('8sided').src = 'dice/8dice_1.png';
                break;
            case 2:
                document.getElementById('8sided').src = 'dice/8dice_2.png';
                break;
            case 3:
                document.getElementById('8sided').src = 'dice/8dice_3.png';
                break;
            case 4:
                document.getElementById('8sided').src = 'dice/8dice_4.png';
                break;
            case 5:
                document.getElementById('8sided').src = 'dice/8dice_5.png';
                break;
            case 6:
                document.getElementById('8sided').src = 'dice/8dice_6.png';
                break;
            case 7:
                document.getElementById('8sided').src = 'dice/8dice_7.png';
                break;
            case 8:
                document.getElementById('8sided').src = 'dice/8dice_8.png';
                break;
        }
    }
 
}

function randomize20sided() {
    var number = Math.floor((Math.random() * 20) + 1);
    var bonus = document.getElementById('bonus').value;
    document.getElementById('result').style.display = "block";
	document.innerHeight = "300px";
    if (isNaN(Number.parseFloat(bonus))||Number.parseFloat(bonus) == 0) {
        document.getElementById('result').innerHTML = "The number on the dice is " + number + "! No bonus has been added.";
    } else {
        var truebonus = Number.parseFloat(bonus);
        document.getElementById('result').innerHTML = "Your total roll is " + (number + truebonus) + "!";
    }
    if (color = "white") {
        switch (number) {
            case 1:
                document.getElementById('20sided').src = 'dice/20dice_1.png';
                break;
            case 2:
                document.getElementById('20sided').src = 'dice/20dice_2.png';
                break;
            case 3:
                document.getElementById('20sided').src = 'dice/20dice_3.png';
                break;
            case 4:
                document.getElementById('20sided').src = 'dice/20dice_4.png';
                break;
            case 5:
                document.getElementById('20sided').src = 'dice/20dice_5.png';
                break;
            case 6:
                document.getElementById('20sided').src = 'dice/20dice_6.png';
                break;
            case 7:
                document.getElementById('20sided').src = 'dice/20dice_7.png';
                break;
            case 8:
                document.getElementById('20sided').src = 'dice/20dice_8.png';
                break;
            case 9:
                document.getElementById('20sided').src = 'dice/20dice_9.png';
                break;
            case 10:
                document.getElementById('20sided').src = 'dice/20dice_10.png';
                break;
            case 11:
                document.getElementById('20sided').src = 'dice/20dice_11.png';
                break;
            case 12:
                document.getElementById('20sided').src = 'dice/20dice_12.png';
                break;
            case 13:
                document.getElementById('20sided').src = 'dice/20dice_13.png';
                break;
            case 14:
                document.getElementById('20sided').src = 'dice/20dice_14.png';
                break;
            case 15:
                document.getElementById('20sided').src = 'dice/20dice_15.png';
                break;
            case 16:
                document.getElementById('20sided').src = 'dice/20dice_16.png';
                break;
            case 17:
                document.getElementById('20sided').src = 'dice/20dice_17.png';
                break;
            case 18:
                document.getElementById('20sided').src = 'dice/20dice_18.png';
                break;
            case 19:
                document.getElementById('20sided').src = 'dice/20dice_19.png';
                break;
            case 20:
                document.getElementById('20sided').src = 'dice/20dice_20.png';
                break;
        }
    }

}