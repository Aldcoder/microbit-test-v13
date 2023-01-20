input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A",5)
basic.showString("B",5)
basic.showString("C",5)
basic.showString("D",5)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("D E D E F E F E ", 300)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
