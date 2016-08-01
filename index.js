var caffeineInSystem = 0;

function recordData() {
    caffeine.addCup();
    console.log('button press');
}

function checkDate() {
    caffeine.viewCaffeine();
}

var caffeine = {
    addCup: function () {
        caffeineInSystem  += 100;
        this.viewCaffeine();
        this.interval = setInterval(reduceCaffeine, 1000);
    },

    viewCaffeine: function () {
        document.getElementById("output").innerHTML = caffeineInSystem;
    },
}

function reduceCaffeine() {
    caffeineInSystem = caffeineInSystem * Math.pow(.5, 4.87e-5);
    caffeine.viewCaffeine();
}