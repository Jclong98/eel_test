import eel
import tkinter.filedialog as fd

eel.init('web')

@eel.expose
def askdirectory():
    fd.Tk().withdraw()
    filepath = fd.askdirectory()

    return filepath

eel.start('main.html', size=(1200, 720))