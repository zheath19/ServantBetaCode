// Grab References to Drop down menues
var sizeSelection = document.getElementById('size-selection');
var angleSelection = document.getElementById('angle-selection');
var plateImg = document.getElementById('current-well-plate');

// Circle Grid
$('.circle').height($('.circle').width());


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

// Media Exhange Button
// When Pressed will clear page of all elements 
const exchangeButton = document.querySelector("#exchange-button");
exchangeButton.addEventListener('click', function(e) {
    


  // Save Data From Selectors
  var size = sizeSelection.options[sizeSelection.selectedIndex].text;
  var angle = angleSelection.options[angleSelection.selectedIndex].text;

  if (size != "Select Well Plate Size" && angle != "Select Well Plate Angle") {
    // TODO MAKE GET REQUEST TO NODEJS SERVER TO CALL MATCHING PYTHON SCRIPT TO WELL PLATE SELECTION FOR MEDIA EXHANGE

    // Clear Error Text
    $("#error-text").hide();

    // Toggle Visibility of Well Plate Selectors
    toggleElements();

  } else {
      // If options were not selected then display error message and don't run scripts
      $("#error-text").show();
  }

});


// Cancel Button
// When Pressed will clear page of all elements related to media exhange and stops script from running
const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener('click', function(e) {

  // TODO STOP PYTHON SCRIPT FROM RUNNING

  // Toggle Visibility of Well Plate Selectors
  toggleElements();
});


// When Clicked Each Cell in the Well Plate should change color and signal that they are filled
function selectCell(culture_id) {
    var culture  = document.getElementById(culture_id);

    // Change Color
    if (culture.style.background == "white") {
        culture.style.background = "linear-gradient(to left top, #ff34d3e3, #c94dae)";
    } else {
        culture.style.background = "white";
    }

    // TODO Record which cell cultures are filled in 2d array or sumthin
}







 // Helper Function that toggles the visibility of all elements within the column
function toggleElements() {

    // If Well Plate Selectors are hidden then make them visible again and info displayed during media exchange
    if (document.querySelector(".column").style.display == "none") {
        $(".column").show();

        $("#exchange-info").hide();
        $("#cancel-button").hide();
        $("#stop-button").hide();
    } else {
        $(".column").hide();
        
        $("#exchange-info").show();
        $("#cancel-button").show();
        $("#stop-button").show();
    }
}

