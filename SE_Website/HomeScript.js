// Grab References to Drop down menues
var sizeSelection = document.getElementById('size-selection');
var plateImg = document.getElementById('current-well-plate');


// On update to size selection update image of well plate
sizeSelection.addEventListener('change', (event) => {
    var size = sizeSelection.options[sizeSelection.selectedIndex].text;
    console.log(size);

    // Change Image to match selection
    if (size == "6") {
        plateImg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url('https://www.mattek.com/wp-content/uploads/6-well-Front.png')";
    } else if (size == "12") {
        plateImg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url('https://www.mattek.com/wp-content/uploads/12-well-Front.png')";
    } else if (size == "24") {
        plateImg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url('https://www.mattek.com/wp-content/uploads/24-well-Front.png')";  
    } else {
        plateImg.style.backgroundImage = "";
    }

  });


