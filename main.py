def normalizeSprite():
    for i in range(2):
        if bird[i] < 0:
            bird[i] = 0
        if bird[i] > 7:
            bird[1] = 7
def createSprite(xval: number, yval: number):
    bird.insert_at(0, xval)
    bird.insert_at(1, yval)
    display.set_matrix_color(xval, yval, GAME_ZIP64.colors(ZipLedColors.RED))

def on_button_pressed_a():
    display.clear()
    spriteChange("y", -1)
    display.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def spriteChange(text: str, num: number):
    # Check to make sure sprite stays in range 0 - 7
    display.set_matrix_color(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.BLACK))
    if text == "x":
        bird[0] = bird[0] + num
    else:
        bird[1] = bird[1] + num
    normalizeSprite()
    display.set_matrix_color(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()

def on_button_pressed_b():
    display.clear()
    spriteChange("y", 1)
    display.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

def spriteSet(coord: str, value: number):
    # Check to make sure sprite stays in range 0 - 7
    display.set_matrix_color(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.BLACK))
    if coord == "x":
        bird.insert_at(0, value)
    else:
        bird.insert_at(1, value)
    normalizeSprite()
    display.set_matrix_color(bird[0], bird[1], GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()
bird: List[number] = []
display: GAME_ZIP64.ZIP64Display = None
obstacles: List[number] = []
display = GAME_ZIP64.create_zip64_display()
display.set_brightness(10)
display.clear()
bird = [0, 0]
createSprite(0, 4)