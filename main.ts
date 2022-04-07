basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        otoceni(stred, trojuhelnik)
    }
    
})
let stred = [2, 2]
let trojuhelnik = [[0, 0], [0, 2], [2, 0]]
led.plotBrightness(stred[0], stred[1], 50)
for (let point of trojuhelnik) {
    led.plot(point[0], point[1])
}
function otoceni(stred: any, souradnice: any[]) {
    let x: any;
    let y: any;
    
    _py.py_array_clear(trojuhelnik)
    for (let bod of souradnice) {
        x = Math.cos(90) * (bod[0] - stred[0]) - Math.sin(90) * (bod[1] - stred[1]) + stred[0]
        y = Math.sin(90) * (bod[0] - stred[0]) + Math.cos(90) * (bod[1] - stred[1]) + stred[1]
        trojuhelnik.push([x, y])
    }
    for (let obod of trojuhelnik) {
        led.plot(obod[0], obod[1])
    }
}

stred = [2, 2]
trojuhelnik = [[0, 0], [0, 2], [2, 0]]
led.plotBrightness(stred[0], stred[1], 50)
for (let bod of trojuhelnik) {
    led.plot(bod[0], bod[1])
}
