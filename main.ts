input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 3; index++) {
        led.plot(4, 4 - index)
        basic.pause(200)
        led.unplot(4, 4 - index)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4 - index, 0)
        basic.pause(200)
        led.unplot(4 - index, 0)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(0, index)
        basic.pause(200)
        led.unplot(0, index)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 4)
        basic.pause(200)
        led.unplot(index, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 0)
        basic.pause(200)
        led.unplot(index, 0)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4, index)
        basic.pause(200)
        led.unplot(4, index)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(4 - index, 4)
        basic.pause(200)
        led.unplot(4 - index, 4)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(0, 4 - index)
        basic.pause(200)
        led.unplot(0, 4 - index)
    }
})
basic.forever(function () {
	
})
