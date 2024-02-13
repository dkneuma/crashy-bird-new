def spriteCreate(xval: number, yval: number, sprite: List[number]):
    sprite.insert_at(0, xval)
    sprite.insert_at(1, yval)
    display.set_matrix_color(xval, yval, GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()
    return sprite

def on_button_pressed_a():
    display.clear()
    spriteChange("y", -1, bird)
    display.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def spriteChange(text: str, num: number, sprite2: List[number]):
    # Check to make sure sprite stays in range 0 - 7
    display.set_matrix_color(sprite2[0],
        sprite2[1],
        GAME_ZIP64.colors(ZipLedColors.BLACK))
    if text == "x":
        sprite2[0] = sprite2[0] + num
    else:
        sprite2[1] = sprite2[1] + num
    normalizeSprite(sprite2)
    display.set_matrix_color(sprite2[0], sprite2[1], GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()

def on_button_pressed_b():
    display.clear()
    spriteChange("y", 1, bird)
    display.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

def spriteSet(coord: str, value: number, sprite3: List[number]):
    # Check to make sure sprite stays in range 0 - 7
    display.set_matrix_color(sprite3[0],
        sprite3[1],
        GAME_ZIP64.colors(ZipLedColors.BLACK))
    if coord == "x":
        sprite3.insert_at(0, value)
    else:
        sprite3.insert_at(1, value)
    normalizeSprite(sprite3)
    display.set_matrix_color(sprite3[0], sprite3[1], GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()

def normalizeSprite(sprite4: List[number]):
    for i in range(2):
        if sprite4[i] < 0:
            sprite4[i] = 0
        if sprite4[i] > 7:
            sprite4[i] = 7
    return sprite4
bird: List[number] = []
display: GAME_ZIP64.ZIP64Display = None
obstacles: List[number] = []
display = GAME_ZIP64.create_zip64_display()
display.set_brightness(10)
display.clear()
bird = spriteCreate(0, 4, [0, 0])