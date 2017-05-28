var link = document.getElementById('getNumberView'); // Gets the link
link.onclick = getNumberView; // Runs the function on click

function getNumberView() {
    var minNumberView = 0; // The minimum number you want
    var maxNumberView = 100; // The maximum number you want
    var randomnumberView = Math.floor(Math.random() * (maxNumberView + 1) + minNumberView); // Generates random number
    $('#myNumber').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}
