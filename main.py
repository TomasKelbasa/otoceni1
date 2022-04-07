def on_forever():
    if input.button_is_pressed(Button.A):
        otoceni(stred, trojuhelnik)
basic.forever(on_forever)

stred = [2, 2]
trojuhelnik = [[0, 0], [0, 2], [2, 0]]
led.plot_brightness(stred[0], stred[1], 50)
for point in trojuhelnik:
    led.plot(point[0], point[1])

def otoceni(stred, souradnice):
    global trojuhelnik
    trojuhelnik.clear()
    for bod in souradnice:
        x = Math.cos(90) * (bod[0] - stred[0]) - Math.sin(90) * (bod[1] - stred[1]) + stred[0]
        y = Math.sin(90) * (bod[0] - stred[0]) + Math.cos(90) * (bod[1] - stred[1]) + stred[1]
        trojuhelnik.push([x, y])
    for obod in trojuhelnik:
        led.plot(obod[0], obod[1])
stred = [2, 2]
trojuhelnik = [[0, 0], [0, 2], [2, 0]]
led.plot_brightness(stred[0], stred[1], 50)
for bod in trojuhelnik:
    led.plot(bod[0], bod[1])