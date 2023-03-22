export default function () {
    const forest = new Audio('../som/Floresta.wav')
    const rain = new Audio('../som/Floresta.wav')
    const coffee = new Audio('../som/Cafeteria.wav')
    const fire = new Audio('../som/Lareira.wav')

    function buttonForest() {
        forest.play()
        forest.loop = true;
        rain.pause()
        coffee.pause()
        fire.pause()
    }

    function buttonRain() {
        forest.pause()
        rain.play()
        rain.loop = true;
        coffee.pause()
        fire.pause()
    }

    function buttonCoffee() {
        forest.pause()
        rain.pause()
        coffee.play()
        coffee.loop = true;
        fire.pause()
    }

    function buttonFire() {
        forest.pause()
        rain.pause()
        coffee.pause()
        fire.play()
        fire.loop = true;
    }

    return {
        buttonForest,
        buttonRain,
        buttonCoffee,
        buttonFire
    }
}