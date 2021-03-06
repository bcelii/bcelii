
/**
 * Created by Brendan on 4/10/2015.
 */

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    console.log('inside check cookies main page');
    var user = getCookie("username");
    console.log("username cookie on main page = "+user);
    if (user != "" && user!=null && user != "null" && user !=undefined && user != "undefined") {
        //alert("Welcome again " + user);
    } else {
        //alert("cookie not set");
        window.location.href = 'index.html';
        alert('Must login before entering site ');
    }
}

function deleteCookie(name){
    setCookie(name,null,1);
}

//will check on initial load that the cookies indicate user already
//logged in before, else will send them to the login page
checkCookie();