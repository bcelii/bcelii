/**
 * Created by bcelii on 2/8/2015.
 */

//Code to set the background of a page is a button is pressed
function setBackgroundFunction(){
    document.body.style.background = "#3f1823 url('Mavericks_Logo.jpg') no-repeat right top";


}

function alertTitle(){
    alert(document.title);
}

function validateEmail(){
    emailGathered = document.getElementById('emailTextBox').value;
    var valid = regexEmail(emailGathered);

    if(valid){
        alert('Email ' + emailGathered + ' is valid');
    }
    else{
        alert('Email ' + emailGathered + ' is NOT valid');
    }
}

function regexEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function load_Page(){
    alert('made inside load_Page');
    window.location.href = "http://private-40e0f-smugui2015.apiary-mock.com/assignments/4";
    <!--prints contents to console-->
    var content = document.body.innerHTML;
    alert (content);
    console.log(content);
}


/*Anser to question 4*//*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp2.responseText);
    }
};

xmlhttp2.open("GET", "http...", true);
xmlhttp.send();

    }
}*/

