var caffeineInSystem = 0;
var inputCaffeine;

function startProgram() {
    caffeine.start();
}

function recordCup() {
    caffeine.addCup(100);
}

function recordCaffeine() {
    inputCaffeine = document.getElementById("caffeineInput").value;
    console.log(inputCaffeine);
    if (inputCaffeine <= 0) {
        document.getElementById("output2").innerHTML = "Please enter value for Caffeine Amount";
    }
    else {
        caffeine.addCup(inputCaffeine);
    }
    
}

var caffeine = {

    start: function() {
        this.interval = setInterval(reduceCaffeine, 1000);
    },

    addCup: function (caffeineAmount) {
        caffeineInSystem += caffeineAmount;
    },

    viewCaffeine: function () {
        document.getElementById("output").innerHTML = caffeineInSystem;
    }
}

function reduceCaffeine() {
    if (caffeineInSystem > 0) {
        caffeineInSystem = caffeineInSystem * Math.pow(.5, 4.87e-5);
        caffeine.viewCaffeine();
    }
}