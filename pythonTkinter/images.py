


from tkinter import *
from PIL import ImageTk, Image

root =Tk()
root.title("Some Image App")
root.iconbitmap('/Users/bobby2/Desktop/pokeball.ico')

my_img = ImageTk.PhotoImage(Image.open("Desktop/pokeball.png'))
my_label = Label(image=my_img)
my_label.pack()








button_quit = Button(root, text="Exit Program", command=root.quit)
button_quit.pack()





root.mainloop()
