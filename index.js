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
<<<<<<< HEAD
}
=======
}
>>>>>>> c065196b6d2f82df9924d3aa8dfa665455af38ff
