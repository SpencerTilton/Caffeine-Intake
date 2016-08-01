var caffeineInSystem = 0;

function recordData() {
    caffeine.addCup();
    caffeine.viewCaffeine();
    console.log('button press');
}

var caffeine = {
    addCup: function () {
        caffeineInSystem  += 100;
    },

    viewCaffeine: function () {
        document.getElementById("output").innerHTML = caffeineInSystem;
    }
}
