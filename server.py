import datetime
import sys
import tkinter.filedialog as fd

import eel

class ConsoleOut:

    def write(self, s=''):
        current_time = ''
        s = str(s)
        if s:
            current_time = datetime.datetime.now().strftime("%H:%M:%S") + ":"
        
        eel.write(s, current_time)

    def flush(self):
        pass

# setting the console out to the eel window
cout = ConsoleOut()
sys.stdout = cout
print=cout.write

eel.init('web')

@eel.expose
def askdirectory():
    print("asking for a run directory")
    fd.Tk().withdraw()
    filepath = fd.askdirectory()

    return filepath

@eel.expose
def process_run(run_dir):
    print("processing " + run_dir, )



print("HELLO WORLD")
print()
print("This is the professor pipeline!")

eel.start('main.html', size=(1220, 720))
