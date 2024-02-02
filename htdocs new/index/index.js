/*function switchToArt () {
$.get('/altpages/art.html', function (data) {
    $(".contentbox").html(data);
});
}

function switchToGames () {
$.get('/altpages/games.html', function (data) {
    $(".contentbox").html(data);
});
}

function switchToOther () {
$.get('/altpages/other.html', function (data) {
    $(".content").html(data);
});
}

*/

var currentpage = "home";
var pagehist = [];

function switchToHome () {
$.get('/index/altpages/home.html', function (data) {
    $(".content").html(data);
    currentpage = "home"
    pagehist.push(currentpage)
});
}

function switchToComp () {
$.get('/index/altpages/comp.html', function (data) {
    $(".content").html(data);
    currentpage = "comp"
    pagehist.push(currentpage)
});
}

function switchToLinks () {
$.get('/index/altpages/links.html', function (data) {
    $(".content").html(data);
    currentpage = "links"
    pagehist.push(currentpage)
});
}


window.addEventListener('load', switchToHome);