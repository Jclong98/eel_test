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