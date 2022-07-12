let distancia = 0
basic.forever(function () {
    basic.showString("" + (distancia))
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia >= 50 && distancia < 100) {
        music.playMelody("C - - C - - C - ", 120)
        music.setVolume(50)
    } else if (distancia >= 25 && distancia < 50) {
        music.playMelody("D - D - D - D - ", 120)
        music.setVolume(80)
    } else if (distancia >= 3 && distancia < 25) {
        music.playMelody("F F F F F F F F ", 194)
        music.setVolume(230)
    }
})
