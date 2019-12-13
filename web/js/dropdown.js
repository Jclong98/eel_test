const dropdown_container = document.getElementById("dropdown-container");

// setting up the dropdowns and allowing them to be created with python
eel.expose(addRunDropdown);
function addRunDropdown(values) {

    // creating a main dropdown element
    var dropdown = document.createElement("div")
    dropdown.className = "dropdown";

    // DROPDOWN HEADER
    var dropdown_header = document.createElement("div");
    dropdown_header.className = "dropdown-header";

    // first element will always be the sensorrunid
    var sensorrunid = values[0];

    // header values
    for (var i = 1; i < values.length; i++) {
        var item = document.createElement("p");
        item.innerHTML = values[i];
        dropdown_header.appendChild(item);
    }

    // DROPDOWN CONTENT
    var dropdown_content = document.createElement("div");
    dropdown_content.className = "dropdown-content";
    dropdown_content.innerHTML = "Yaw Modification: ";

    // yawmod number input
    var yawmod_input = document.createElement("input", type="number");
    yawmod_input.setAttribute("id", `run-${sensorrunid}`);

    // yawmod button
    var yawmod_btn = document.createElement("Button");
    yawmod_btn.innerHTML = "Modify Yaw"
    yawmod_btn.value = `modify ${sensorrunid}`;
    yawmod_btn.classList.add("btn", "btn-primary");

    // delete run button
    var delete_btn = document.createElement("Button");
    delete_btn.innerHTML = "Delete Yaw"
    delete_btn.value = `delete ${sensorrunid}`;
    delete_btn.classList.add("btn", "btn-danger");

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

// sensorrunid=1, 
// runname="Run 1",
// date_of_run="06/25/1998",
// date_uploaded="12/11/2019",
// shapefile="f119_rbtn",
// yaw_modification=0

// creating a bunch of dropdowns
var values = [1, "Run 1", "06/25/1998", "12/11/2019", "f119_rbtn", 0]

addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)
addRunDropdown(values)

// making all the dropdowns actually function
var dropdowns = document.getElementsByClassName("dropdown");

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

        if (is_open) {
            content.style.height = "0";
            content.style.display = "none";
            is_open = false;
        }
        else {
            content.style.height = "auto";
            content.style.display = "flex";
            is_open = true;
        }
    });
}

// iterating over each element with the class dropdown and applying dropdown()
for (var i = 0; i < dropdowns.length; i++) {
    dropdown(dropdowns[i]);
}