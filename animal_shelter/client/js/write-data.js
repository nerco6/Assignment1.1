//Submit Button

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {

// $('#submit').click(function() {  //JQUERY

    console.log("Submit Button was pressed");

    alert("Submit Button was pressed");
    event.preventDefault();

   /* //pointers to object
    const nameInput = document.getElementById("name")
    const speciesInput = document.getElementById("species")
    const breedInput = document.getElementById("breed")
    const ageInput = document.getElementById("age")
    const colorInput = document.getElementById("color")
    const tempInput = document.getElementById("temperament")
    const entryInput = document.getElementById("entryType")

    //get value of objects
    var name = nameInput.value;
    var species = speciesInput.value;
    var breed = breedInput.value;
    var age = ageInput.value;
    var color = colorInput.value;
    var temperament = tempInput.value;
    var entryType = entryInput.value; */
       
});

//Clear Button
$('#clear').click(function() {
    $('#name').val("");
    $('#species').val("");
    $('#breed').val("");
    $('#age').val("");
    $('#color').val("");
    $('#temperament').val("");
    $('#entryType').val("");

    return false;
})