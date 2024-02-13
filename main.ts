function spriteCreate(xval: number, yval: number, sprite: number[]): number[] {
    sprite.insertAt(0, xval)
    sprite.insertAt(1, yval)
    display.setMatrixColor(xval, yval, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
    return sprite
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    display.clear()
    spriteChange("y", -1, bird)
    display.show()
})
function spriteChange(text: string, num: number, sprite2: number[]) {
    //  Check to make sure sprite stays in range 0 - 7
    display.setMatrixColor(sprite2[0], sprite2[1], GAME_ZIP64.colors(ZipLedColors.Black))
    if (text == "x") {
        sprite2[0] = sprite2[0] + num
    } else {
        sprite2[1] = sprite2[1] + num
    }
    
    normalizeSprite(sprite2)
    display.setMatrixColor(sprite2[0], sprite2[1], GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    display.clear()
    spriteChange("y", 1, bird)
    display.show()
})
function spriteSet(coord: string, value: number, sprite3: number[]) {
    //  Check to make sure sprite stays in range 0 - 7
    display.setMatrixColor(sprite3[0], sprite3[1], GAME_ZIP64.colors(ZipLedColors.Black))
    if (coord == "x") {
        sprite3.insertAt(0, value)
    } else {
        sprite3.insertAt(1, value)
    }
    
    normalizeSprite(sprite3)
    display.setMatrixColor(sprite3[0], sprite3[1], GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
}

function normalizeSprite(sprite4: number[]): number[] {
    for (let i = 0; i < 2; i++) {
        if (sprite4[i] < 0) {
            sprite4[i] = 0
        }
        
        if (sprite4[i] > 7) {
            sprite4[i] = 7
        }
        
    }
    return sprite4
}

let bird : number[] = []
let display : GAME_ZIP64.ZIP64Display = null
let obstacles : number[] = []
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(10)
display.clear()
bird = spriteCreate(0, 4, [0, 0])
