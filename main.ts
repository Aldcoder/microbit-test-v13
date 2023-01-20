let letter = 0
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
    letter = randint(1, 4)
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("D E D E F E F E ", 300)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,0)
    }
    basic.clearScreen()
})
