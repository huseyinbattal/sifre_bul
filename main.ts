input.onButtonPressed(Button.A, function () {
    giris = "" + giris + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (giris == sifre) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    giris = "" + giris + "B"
})
let giris = ""
let sifre = ""
sifre = "AABAA"
giris = ""
pins.servoWritePin(AnalogPin.P0, 0)
