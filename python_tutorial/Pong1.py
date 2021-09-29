

import turtle

wn = turtle.Screen()
wn.title("Doc's Pong")
wn.bgcolor('black')
wn.setup(width=800, height=600)
wn.tracer(0)



# Paddle A
paddle_a = turtle.Turtle()

paddle_a.shape("square")
paddle_a.color("white")
paddle_a.penup()
paddle_a.goto(-350, 0)



# PADDLE B

#BALL


#mainh game loop

while True:
    wn.update()
