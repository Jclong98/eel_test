import datetime
import os
import sys
import tkinter.filedialog as fd

import eel


class ConsoleOut:

    def write(self, s=''):
        current_time = ''

        # making sure new lines are apropriately displayed
        s = str(s).replace('\n', '<br>')

        # if there was a given message, get the time with it.
        # just put white space
        if s:
            current_time = datetime.datetime.now().strftime("%H:%M:%S") + ":"
        else:
            current_time = ''
        
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
    root = fd.Tk()
    root.withdraw()
    root.focus_force()
    filepath = fd.askdirectory(parent=root)


    return filepath


values = {
    "sensorrunid":1,
    "runname":"Run 1",
    "date_of_run":"06/25/1998",
    "date_uploaded":"12/11/2019",
    "shapefile":"f119_rbtn",
    "yawmod":0
}



@eel.expose
def process_run(run_dir):
    """
    called from eel,  uses the professor pipeline 
    to process a directory containing professor data

    parameters:
        run_dir (str): directory to a professor run
    """

    # checking if the given directory exists on the system
    if not os.path.isdir(run_dir):
        print(f'<span class="color-danger"> {run_dir} </span> is an invalid directory!')
        return

    print(f"Processing {run_dir}")
    values['runname'] = os.path.basename(run_dir)
    eel.add_run_dropdown(values)
    eel.update_dropdowns()

@eel.expose
def delete_run(run_dict):
    """
    called from eel, deletes a run with a given sensorrunid from the database

    parameters:
        run_dict (dict): contains sensorrunid, runname, 
            date_of_run, date_uploaded, shapefile, and yawmod
    """
    print(f"Deleting run {run_dict['sensorrunid']}:{run_dict['runname']}")

@eel.expose
def modify_yaw(run_dict, degrees):
    """
    a function to be called from eel

    parameters:
        run_dict (dict): contains sensorrunid, runname, 
            date_of_run, date_uploaded, shapefile, and yawmod
        degrees (float): how many degrees to update the yaw by
      
    """
    print(f"Modifying Yaw for {run_dict['sensorrunid']}:{run_dict['runname']} by {degrees}º")

print("Welcome to the Professor Pipeline!")


eel.start('main.html', size=(1220, 720))
