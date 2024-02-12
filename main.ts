function normalizeSprite () {
    for (let i = 0; i <= 1; i++) {
        if (bird[i] < 0) {
            bird[i] = 0
        }
        if (bird[i] > 7) {
            bird[1] = 7
        }
    }
}
function createSprite (xval: number, yval: number) {
    bird.insertAt(0, xval)
    bird.insertAt(1, yval)
    display.setMatrixColor(xval, yval, GAME_ZIP64.colors(ZipLedColors.Red))
}
input.onButtonPressed(Button.A, function () {
    display.clear()
    spriteChange("y", -1)
    display.show()
})
function spriteChange (text: string, num: number) {
    // Check to make sure sprite stays in range 0 - 7
    display.setMatrixColor(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.Black))
    if (text == "x") {
        bird[0] = bird[0] + num
    } else {
        bird[1] = bird[1] + num
    }
    normalizeSprite()
    display.setMatrixColor(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
}
input.onButtonPressed(Button.B, function () {
    display.clear()
    spriteChange("y", 1)
    display.show()
})
function spriteSet (coord: string, value: number) {
    // Check to make sure sprite stays in range 0 - 7
    display.setMatrixColor(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.Black))
    if (coord == "x") {
        bird.insertAt(0, value)
    } else {
        bird.insertAt(1, value)
    }
    normalizeSprite()
    display.setMatrixColor(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
}
let bird: number[] = []
let display: GAME_ZIP64.ZIP64Display = null
let obstacles: number[] = []
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(10)
display.clear()
bird = [0, 0]
createSprite(0, 4)
