function My_First_Function() { //Defining a function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint
                                                            //with the "BUtton_Text" id
}

var str = new String("Font color text"); // Making a new string and making the font blue
document.write(str.fontcolor( "blue" ));


function myFunction() { //Definded and named a function
    var sentence = "I am learning";
    sentence += " a lot from this course!"; //concatenating "I am learning" & "a lot from this course"
    document.getElementById("Concatenate").innerHTML = sentence; //Links the "Click here!" to the text above when clicked.
}