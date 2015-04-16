/**
 * Created by Brendan on 4/15/2015.
 */

/*$(function() {

    Parse.initialize("oBYrcLB10KhBCXIvZJ64lXxGRDSjzBbqYegIOWii", "JYEdRmzyt0nRmICF0ypYzgrSe7khKRY4CPqY6ISd");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function (object) {
        var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
        return msgbox.showAsync();
    });




}); */


$(document).keyup(function(e) {

    if (e.keyCode == 27) {
        //alert("An escape key has been pressed")
        //make sure background is not blurred


        //make the element hidden again
        $(".userLogin, .Popup, .userRegistration").css("display","none");
        $("#page-top").css("-webkit-filter","brightness(0.5)");
        $("#page-top").css("-webkit-filter","blur(0px)");
        $(".userLogin, .Popup, .userRegistration").css("z-index","0");



    }   // escape key maps to keycode `27`
});

function showRegLoginPage(regLog){

        $("#page-top").css("-webkit-filter","blur(5px)");
        $("#page-top").css("-webkit-filter","brightness(0.2)");
        $("#login_Popup").css("display","block");

        $("#login_Popup").css("z-index","3");

        //trigger the login page if login
        if(regLog == 'log'){
            $('#login_Tab a').click();
        }
        else{
            $('#signUpTab a').click();
        }
}

/*function showRegLoginPage(regLog){

    $("#page-top").css("-webkit-filter","blur(5px)");

    $(".userRegister, #register_Popup").css("display","block");
    $(".userRegister, #register_Popup").css("z-index","3");
}*/


/*event listeners that will activate login and sigh up form*/
$('#buttonContainer a').click(function(){
    //alert('clicked Login');
    showRegLoginPage('log');

});

$('#register_Button').click(function(){

    showRegLoginPage('reg');
});