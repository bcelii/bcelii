/**
 * Created by Brendan on 4/3/2015.
 */
function makeMembersTable(){

    $.get('Mustache/membersTable.mst', function(template) {
        $.getJSON(
            'http://private-fa7f85-triathlonroster.apiary-mock.com/athletes',
            {},
            function(json, textStatus) {
                var data = json;
                console.log(data);
                var rendered = Mustache.render(template,data);
                $('#currentBody').html(rendered);
            });
    });
}

function makeLoginPage(){

    $.get('Mustache/login.mst', function(template) {
        //console.log(template);
        $('#currentBody').html(template);
    });

}

function makeWorkoutTable(){
    //alert('workout table');
    $.get('Mustache/workoutTable.mst', function(template) {
        $.getJSON(
            'http://private-fa7f85-triathlonroster.apiary-mock.com/workoutSchedule',
            {},
            function(json, textStatus) {
                var data = json;
                console.log(data);
                var rendered = Mustache.render(template,data);
                $('#currentBody').html(rendered);
            });
    });

}

function makeRaceTable(){
    //alert('makeRace table');
    $.get('Mustache/raceTable.mst', function(template) {

        $.getJSON(
            'http://private-fa7f85-triathlonroster.apiary-mock.com/raceResults',
            {},
            function(json, textStatus) {
                var data = json;
                console.log(data);
                var rendered = Mustache.render(template,data);
                console.log(rendered);
                $('#currentBody').html(rendered);
            });
    });
}

function makeSponsorsTable(){
    //alert('makeSponsorsTable');
    $.get('Mustache/sponsorTable.mst', function(template) {
        $.getJSON(
            'http://private-fa7f85-triathlonroster.apiary-mock.com/sponsors',
            {},
            function(json, textStatus) {
                var data = json;
                console.log(data);
                var rendered = Mustache.render(template,data);
                console.log(rendered);
                $('#currentBody').html(rendered);
            });

        //set the background image of all sponsorImage class
        /*var imgURLs = $('.imgURL');
        var sponsorImages = $('.sponsorImage');
        console.log(imgURLs.length);
        var i;
        for (i = 0; i < imgURLs.length; i++) {
            console.log(sponsorImages[i]);
            console.log(imgURLs[i]);

            $(sponsorImages[i]).css('background-image', imgURLs[i]);
        }*/
    });


}

function makeContactTable(){
    //alert('makeContactTable');
    $.get('Mustache/contactTable.mst', function(template) {
        $.getJSON(
            'http://private-fa7f85-triathlonroster.apiary-mock.com/officers',
            {},
            function (json, textStatus) {
                var data = json;
                console.log(data);
                var rendered = Mustache.render(template, data);
                $('#currentBody').html(rendered);

            });

    });
}


function hashAction(){

    switch(location.hash) {
        case '#members':
            //create table of members
            makeMembersTable();

            break;
        case '#login':
            //defaults to the login page
            makeLoginPage();
            break;

        case '#raceResults':

            makeRaceTable();

            break;
        case '#workouts':
            makeWorkoutTable();
            break;
        case '#sponsors':
            makeSponsorsTable();
            break;
        case '#contact':
            makeContactTable();
            break;
        default:
            location.hash = "login";
    }
}

$(function(){

    $.get('Mustache/navigation.mst', function(template) {
        var data = {
            "nav":[
                {"title":"Login", "href":"login"},
                {"title":"Members", "href": "members"},
                {"title":"Race Results", "href": "raceResults"},
                {"title":"Workout Schedule", "href": "workouts"},
                {"title":"Sponsors", "href": "sponsors"},
                {"title":"Contact", "href": "contact"}
            ]
        };
        alert('inside mustache');
        var rendered = Mustache.render(template,data);
        //$('body').html('HELLLLLLLO');
        console.log(rendered);
        //$('body').html(rendered);
        //alert($('#NewHeader').html());
        $('#link-list').html(rendered);
    });

    window.onhashchange = function(){
        hashAction();
    };


});