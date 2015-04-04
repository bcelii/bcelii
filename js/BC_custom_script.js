/**
 * Created by Brendan on 4/3/2015.
 */
function loadNotes() {
    $.get('notes-list.mst', function(template) {
        $.getJSON(
            'http://private-ad0b0-demoapi24.apiary-mock.com/notes',
            {},
            function(json, textStatus) {
                var data = {"notes":json};
                console.log(data);
                var rendered = Mustache.render(template,data);
                $('#body').html(rendered);
            });
    });
}

function loadNoteById(id) {
    $.get('notes-detail.mst', function(template) {
        $.getJSON(
            'http://private-ad0b0-demoapi24.apiary-mock.com/notes/'+id,
            {},
            function(json, textStatus) {
                var data = {"note":json};
                var rendered = Mustache.render(template,data);
                $('#body').html(rendered);
            });
    });
}

function hashAction(){
    var numberPattern = /notes-\d+/g;
    var noteId = location.hash.match( numberPattern );
    if (noteId) {
        loadNoteById(noteId);
        return;
    }
    switch(location.hash) {
        case '#home':
            //do something
            $("#body").text("Welcome to my awesome list website");
            break;
        case '#notes':
            //do something else
            loadNotes();
            break;
        case '#blog':
            $("#body").text("Use another apiary endpoint to create a blog");
            break;
        default:
            location.hash = "home";
    }
}

$(function(){
    $("#body").text("");
    $.get('navigation.mst', function(template) {
        var data = {"title":"TEST TITLE",
            "nav":[
                {"title":"Home", "href":"home"},
                {"title":"Notes", "href": "notes"},
                {"title":"Blog", "href": "blog"}
            ]
        };
        var rendered = Mustache.render(template,data);
        $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
        hashAction();
    };
    hashAction();
});