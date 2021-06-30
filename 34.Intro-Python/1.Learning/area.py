PI = 3.14  # PI é uma "constante" (por isso está maiúscula) em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side
# importante colocar 2 linhas de espaço


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius
