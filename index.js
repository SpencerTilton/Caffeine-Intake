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
    },

    viewCaffeine: function () {
        document.getElementById("output").innerHTML = caffeineInSystem;
    },
}