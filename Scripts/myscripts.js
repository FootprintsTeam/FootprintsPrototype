function initialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;

function loadImageLibrary() {
    jQuery("#media-container").nanoGallery({
        kind: 'flickr',
        userID: '99932419@N07'
    });
}

function loadCommentSection() {

    $('div.comment-container').comment({
        title: 'Comments',
        url_get: 'articles/id/1/comments/list',
        url_input: 'articles/id/1/comments/input',
        url_delete: 'articles/id/1/comments/delete',
        limit: 10,
        auto_refresh: false,
        refresh: 10000,
        transition: 'slideToggle',
    });

}

function start() {
}

$(document).ready(function () {
    loadImageLibrary();
    loadCommentSection();
});


