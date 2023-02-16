function turn_right () {
    modules.servo1.setAngle(360)
    modules.servo2.setAngle(360)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    drive_forward()
})
function drive_backwards () {
    modules.servo1.setAngle(-90)
    modules.servo2.setAngle(90)
}
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    turn_right()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sword)
    drive_backwards()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    turn_left()
})
function turn_left () {
    modules.servo1.setAngle(-360)
    modules.servo2.setAngle(-360)
}
function drive_forward () {
    modules.servo1.setAngle(90)
    modules.servo2.setAngle(-90)
}
basic.showIcon(IconNames.Yes)
modules.servo1.setEnabled(true)
modules.servo2.setEnabled(true)
