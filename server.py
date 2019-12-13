import datetime
import sys
import tkinter.filedialog as fd

import eel

class ConsoleOut:

    def write(self, s=''):
        current_time = ''
        if s:
            current_time = datetime.datetime.now().strftime("%H:%M:%S") + ":"
        
        eel.write(s, current_time)

    def flush(self):
        pass

# setting the console out to the eel window
sys.stdout = ConsoleOut()

eel.init('web')

@eel.expose
def askdirectory():
    print("asking for a run directory", end='')
    fd.Tk().withdraw()
    filepath = fd.askdirectory()

    return filepath

@eel.expose
def process_run(run_dir):
    print("processing " + run_dir, end='')



print("HELLO WORLD", end="")
print(end="")
print("This is the professor pipeline!", end="")

eel.start('main.html', size=(1220, 720))
