function zeichneKreis16x16 (num: number) {
    angle = 0
    while (angle <= 360) {
        matrix.setPixel(Math.round(7.5 + 7.5 * Math.cos(angle * Math.PI / 180)), Math.round(7.5 + 7.5 * Math.sin(angle * Math.PI / 180)), num)
        angle += 5
    }
    matrix.show()
}
input.onButtonPressed(Button.A, function () {
	
})
function zeichneSmiley16x16 (num: number) {
    matrix.clear()
    zeichneKreis16x16(num)
    matrix.setPixel(12, 6, num)
    matrix.setPixel(12, 7, num)
    matrix.setPixel(12, 8, num)
    matrix.setPixel(12, 9, num)
    matrix.setPixel(11, 5, num)
    matrix.setPixel(11, 10, num)
    matrix.setPixel(10, 4, num)
    matrix.setPixel(10, 11, num)
    matrix.setPixel(10, 12, num)
    matrix.setPixel(9, 11, num)
    matrix.setPixel(10, 3, num)
    matrix.setPixel(9, 4, num)
    matrix.setPixel(4, 5, num)
    matrix.setPixel(4, 6, num)
    matrix.setPixel(5, 5, num)
    matrix.setPixel(5, 6, num)
    matrix.setPixel(4, 10, num)
    matrix.setPixel(4, 11, num)
    matrix.setPixel(5, 10, num)
    matrix.setPixel(5, 11, num)
    matrix.show()
}
input.onButtonPressed(Button.AB, function () {
    zeichneSmiley16x16(neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.B, function () {
    zeichneSmiley16x16(neopixel.colors(NeoPixelColors.Green))
})
function zeichnesadSmiley16x16 (num: number) {
    matrix.clear()
    zeichneKreis16x16(num)
    matrix.setPixel(4, 4, num)
    matrix.setPixel(4, 5, num)
    matrix.setPixel(5, 4, num)
    matrix.setPixel(5, 5, num)
    matrix.setPixel(10, 4, num)
    matrix.setPixel(10, 5, num)
    matrix.setPixel(11, 4, num)
    matrix.setPixel(11, 5, num)
    basic.pause(0)
    matrix.setPixel(4, 11, num)
    matrix.setPixel(4, 10, num)
    matrix.setPixel(5, 10, num)
    matrix.setPixel(5, 9, num)
    matrix.setPixel(6, 9, num)
    matrix.setPixel(6, 8, num)
    matrix.setPixel(7, 8, num)
    matrix.setPixel(7, 9, num)
    matrix.setPixel(8, 8, num)
    matrix.setPixel(8, 9, num)
    matrix.setPixel(9, 8, num)
    matrix.setPixel(9, 9, num)
    matrix.setPixel(10, 9, num)
    matrix.setPixel(10, 10, num)
    matrix.setPixel(11, 10, num)
    matrix.setPixel(11, 11, num)
    matrix.show()
}
let angle = 0
let matrix: SmartMatrix.Matrix = null
matrix = SmartMatrix.create(
DigitalPin.P2,
16,
16,
NeoPixelMode.RGB
)
let matrix2 = SmartMatrix.create(
DigitalPin.P14,
64,
8,
NeoPixelMode.RGB
)
matrix.Brightness(32)
matrix2.Brightness(100)
basic.forever(function () {
    matrix.scrollText(
    "giga",
    82,
    4,
    neopixel.colors(NeoPixelColors.Yellow)
    )
    matrix.show()
    zeichnesadSmiley16x16(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
})
basic.forever(function () {
    matrix2.scrollText(
    "Willkommen im",
    82,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
    matrix2.scrollText(
    "Informatiktheater!¡",
    82,
    0,
    neopixel.colors(NeoPixelColors.Red)
    )
    matrix2.show()
    matrix2.show()
})
