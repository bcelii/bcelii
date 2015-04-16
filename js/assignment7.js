/**
 * Created by Brendan on 4/15/2015.
 */

$(function() {
     Parse.initialize("vywJ4sjPJKr5Qujzy7kVbQq5H95NmkNg5Mn85aLJ", "yecWik5rvrWVcQvEnRwzjc4nJJMU0MyYhkUAj1cE");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
        /*var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
        return msgbox.showAsync();*/
    });

    /****functions for testing if parse works******/
    //testing functions
    //saveAthlete('Brendan Celii','bcelii@smu.edu','bcelii','35103176','Brentfield');
    //saveAthlete('Collette Marsh','cl@smu.edu','cmarsh','12345','Password1');
    //saveAthlete('Elise Lebiga','el@smu.edu','ebig','45678','Password2');
    /*getAthleteBySMUID('35103176');
    getGroupAthletes('School','SMU');
    updateAthlete('rt9DbYhATf',"height","6.7");
    deleteAthlete('f3zGNRrgOS');*/


});

/*Will use parse to update and add new members of the Triathlon Team and their stats*/

/*function will save object to PARSE*/
function saveAthlete(name,email,username,id,password,height,age,gender){
    var Athlete = Parse.Object.extend("Athlete");
    var athlete = new Athlete();

    //set the properties of the athlete
    athlete.set("name",name);
    athlete.set("SMU_ID",id);
    athlete.set("School","SMU");
    athlete.set("height",height);
    athlete.set("age",age);
    athlete.set("gender",gender);
    athlete.set("email",email);
    athlete.set('username',username);
    athlete.set('password',password);
    console.log("passed password = "+password);
    console.log("Set password = "+ athlete.get("password"));

    console.log('about to save athlete in saveAthlete');
    athlete.save(null, {
    success: function(athlete) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + athlete.get('SMU_ID') + athlete.get('name'));
    },
    error: function(athlete, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
    }
});

}




/*function that will create a new object and then save it to parse
* Like: GET /objects/id*/
function getAthleteBySMUID(ID){
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);
    query.equalTo("SMU_ID", ID);
    //only want one member with this ID
    query.first({
        success: function(object) {
            // Successfully retrieved the object.
            console.log('Successfully got Athlete: '+ object.get('name') + ' ID = '+ object.id);
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

function getAthleteByParseID(ID){
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);

    //only want one member with this ID
    query.get(ID, {
        success: function(object) {
            // Successfully retrieved the object.
            console.log('Successfully got Athlete: '+ object.get('name') + object.get('ID'));
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

/*will read collection of objects from PARSE
* Like: GET /objects/  --> use Parse.Query
 */

/*Example: key='School' value='SMU' would get all SMU students*/
function getGroupAthletes(key,pair){
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);
    query.equalTo(key, pair);
    query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " athletes.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.id + ' - ' + object.get('name'));
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}


/*function that will update object and then save it to parse (can pass it an ID)*/
/*will require the ID of the object to be updated*/
function updateAthlete(ID,key,pair){
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);

    //only want one member with this ID
    query.get(ID, {
        success: function(object) {
            // Successfully retrieved the object.
            object.set(key,pair);
            console.log("key = "+key+';pair = '+pair);
            object.save(ID, {
                    success: function(athlete) {
                        // Execute any logic that should take place after the object is saved.
                        console.log('Updated Athlete ' + athlete.get('SMU_ID') +' '+ athlete.get('name'));
                    },
                    error: function(athlete, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }

                });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

/*function that will delete an object*/
/*find object by ID and then destroy it*/
function deleteAthlete(ID) {
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);

    //only want one member with this ID
    query.get(ID, {
        success: function (object) {
            object.destroy({
                success: function (myObject) {
                    // The object was deleted from the Parse Cloud.
                },
                error: function (myObject, error) {
                    // The delete failed.
                    // error is a Parse.Error with an error code and message.
                }
            });
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

/* function that will get the username and login information and persist to parse*/
function validateUser(email, password){
    console.log('user entered email = '+email+ " password = "+ password);
    var Athlete = Parse.Object.extend("Athlete");
    var query = new Parse.Query(Athlete);
    query.equalTo("email", email);
    //only want one member with this ID
    query.first({
        success: function(object) {
            // Successfully retrieved the object.
            //console.log('Successfully got Athlete: '+ object.get('name') + ' ID = '+ object.id);
            //console.log("email = "+ object.get('email') + '; password = '+object.get('password'));
            /************for some reasone the password field is not getting set*****/
            if(object != undefined) {
                if ((object.get('email') == email)/*&&(object.get('password') == password)*/) {
                    setCookieToMain();
                }
                else {
                    alert('userName or Password Wrong; Please Enter correct ones');
                }
            }
            else{
                alert('userName or Password Wrong; Please Enter correct ones');
            }
        },
        error: function(error) {
            alert('userName or Password Wrong; Please Enter correct ones');
        }
    });
}


$('#loginForm').submit(function(event){
        event.preventDefault();
        //alert('loginForm just submitted');

        //check to see if the correct user is login in
        var email = $('#email_Login').val();
        var password = $('#password_Login').val();

        validateUser(email,password);



});

function setCookieToMain(){
    setCookie("username",'activeUser');
    window.location.href = "mainPage.html";
}



$('#formSignUp').submit(function(event){
    event.preventDefault();
    //alert('sign up form submitted');
    //collect the user data
    var firstName = $('#fName_Sign').val();
    var lastName = $('#lName_Sign').val();
    var SMU_ID = $('#ID_Sign').val();
    var email = $('#email_Sign').val();
    var password = $('#password_Sign').val();
    var username = 'activeUser';

    console.log("fName = "+firstName + ' lastName = '+lastName + ' SMU_ID = '+
                SMU_ID + ' email = '+email + ' password = '+ password);

    //create parse object with all info
    saveAthlete(firstName + lastName,email,username,SMU_ID,password);

    //set the cookies so know have login in
    setCookie("username",username);
    //go to the main page
    window.location.href = "mainPage.html";

});

/*function setMultipleCookies(names,values){
    var counter;
    for(counter = 0;counter<names.length;counter++){
        setCookie(names[counter],values[counter],1);
    }
    //console.log(document.cookie);
}*/

