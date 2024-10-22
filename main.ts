radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        estoque += -1
        basic.showString("" + (estoque))
    }
    if (receivedNumber == 2) {
        estoque += -2
        basic.showString("" + (estoque))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let estoque = 0
radio.setGroup(255)
estoque = 9
basic.forever(function () {
    if (estoque < 2) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.showString("" + (estoque))
    }
})
