turtle.home()

turtle.say("fw 30")
turtle.forward(30)
pause(1000)

turtle.home()
turtle.setPenColor(4)
turtle.say("bw 30")
turtle.back(30)
pause(1000)

turtle.home()
turtle.pen(TurtlePenMode.Up)
turtle.say("lt 90 and fw 30")
turtle.turn(90)
turtle.forward(30)
pause(1000)
turtle.pen(TurtlePenMode.Down)

