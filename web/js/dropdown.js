const dropdown_container = document.getElementById("dropdown-container");

// setting up the dropdowns and allowing them to be created with python
eel.expose(add_run_dropdown);
function add_run_dropdown(values) {

    console.log(values)

    // creating a main dropdown element
    var dropdown = document.createElement("div")
    dropdown.className = "dropdown";

    // DROPDOWN HEADER
    var dropdown_header = document.createElement("div");
    dropdown_header.className = "dropdown-header";

    // filling the header with each of the values in the given object
    Object.entries(values).forEach(([key, value]) => {
        // skipping the sensorrunid
        if (key != "sensorrunid") {
            var item = document.createElement("p");
            item.innerHTML = value;
            dropdown_header.appendChild(item);
        }
    })

    console.log("past header creation")

    // DROPDOWN CONTENT
    var dropdown_content = document.createElement("div");
    dropdown_content.className = "dropdown-content";
    dropdown_content.innerHTML = "Yaw Modification: ";

    // yawmod number input
    var yawmod_input = document.createElement("input");
    yawmod_input.setAttribute("type", "number");
    yawmod_input.value = 0;

    // yawmod button
    var yawmod_btn = document.createElement("Button");
    yawmod_btn.innerHTML = "Modify Yaw";
    yawmod_btn.value = "";
    yawmod_btn.classList.add("btn", "btn-primary");

    // adding the functionality to the yawmod button
    yawmod_btn.onclick = () => {
        var degrees = yawmod_input.value

        if (confirm(`You are about to modify ${values['runname']} by ${degrees}º`)) {
            eel.modify_yaw(values, degrees);
        }
    }

    // delete run button
    var delete_btn = document.createElement("Button");
    delete_btn.innerHTML = "Delete Run";
    delete_btn.value = "";
    delete_btn.classList.add("btn", "btn-danger");

    // adding functionality to the delete button
    delete_btn.onclick = () => {
        if (confirm(`Are you sure you want to delete ${values['runname']}?`)) {
            eel.delete_run(values);
        }
    }

    // adding the three inputs to the dropdown content
    dropdown_content.appendChild(yawmod_input);
    dropdown_content.appendChild(yawmod_btn);
    dropdown_content.appendChild(delete_btn);

    // adding the two main parts to the dropdown
    dropdown.appendChild(dropdown_header);
    dropdown.appendChild(dropdown_content);

    // adding the dropdown to the container
    dropdown_container.appendChild(dropdown);

}

// creating a bunch of dropdowns

var values = {
    "sensorrunid": 1,
    "runname": "Run 1",
    "date_of_run": "06/25/1998",
    "date_uploaded": "12/11/2019",
    "shapefile": "f119_rbtn",
    "yawmod": 0
};


function dropdown(element) {
    /* 
    finds the children of an element labeled 
    dropdown and adds an event listener to the title 
    that shows/hides content on click
    */

    var header = element.children[0];
    var content = element.children[1];

    var is_open = false;

    header.addEventListener("click", () => {

        console.log("clicked")
        if (is_open) {
            content.style.height = "0";
            content.style.display = "none";
            is_open = false;
        }
        else {
            content.style.height = "auto";
            content.style.display = "flex";
            content.style.flexDirection = "row";
            is_open = true;
        }
    });
}

eel.expose(update_dropdowns);
function update_dropdowns() {

    // making all the dropdowns actually function
    var dropdowns = document.getElementsByClassName("dropdown");

    // iterating over each element with the class dropdown and applying dropdown()
    for (var i = 0; i < dropdowns.length; i++) {
        dropdown(dropdowns[i]);
    }
}

update_dropdowns();