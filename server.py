import eel

eel.init('web')

@eel.expose
def askdirectory():
    print("called")
    fd.Tk().withdraw()
    filepath = fd.askdirectory()

    return filepath

eel.start('main.html', size=(1080, 720))