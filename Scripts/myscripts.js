
// var map;
// google.maps.event.addDomListener(window, 'load', initialize);

// function initialize() {

//     /* Create Google Map */
//     var myOptions = {
//         zoom: 6,
//         center: new google.maps.LatLng(41, 19.6),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

//     /* Add you'r curved lines here */
//     $("#map-canvas").curvedLine({

//         LatStart: 42.68243562027229,
//         LngStart: 23.280029421875042,
//         LatEnd: 42.488302202180364,
//         LngEnd: 27.432861453125042
//     });

// }

// function loadScript() {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
//         'callback=initialize';
//     document.body.appendChild(script);
// }

// window.onload = loadScript;

          // markers form:
            // [
            //     [
            //         'Title',
            //         LatLngX,
            //         LatLngY,
            //         'Descriptiton',
            //         'thumbnails photo',
            //         'big photo',
            //         'clicked href'
            //     ]
            // ]
            var markers = [
                ['The Start', 45.439191467687365, 12.321102619171143, 'The Start', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
                ['Chatway Chase', 45.4319451550006, 12.318400303582735, 'Chatway Chase', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
                ['Elephant Fence', 45.439053351909415, 12.337413115313666, 'Elephant Fence', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
                ['Elephant Fence', 45.435209862373696, 12.335436819543474, 'Elephant Fence', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
                ['Elephant Fence', 45.43227363625518, 12.329246281137102, 'Elephant Fence', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
                ['Elephant Fence', 45.4345606, 12.339712500000019, 'Elephant Fence', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-aa51f2e2f27fd864f312808f6a79499e.jpg', 'http://preview.ait-themes.com/touroperator/wp1/wp-content/uploads//2013/05/bigstock-Hotel-5914005-68d7cec1afd833792a19cb4694ca5497.jpg', 'http://www.google.com'],
            ];

            function getGmap3Makers(markers) {
                var values = [];
                for (var i = 0; i < markers.length; i++) {
                    var item = {
                        latLng: [markers[i][1], markers[i][2]],
                        options: {
                            content:
                                    "<div class='marker-overlay'>" +
                                    "<div class='marker-image'><img src='" + markers[i][4] + "' alt=''>" +        
                                    "</div>",
                            offset: {
                                y: -76,
                                x: -38
                            }
                        },
                        data: '<div class="marker-holder">' +
                                '<div class="marker-content with-image"><img src="' + markers[i][5] + '" alt="">' +
                                '<div class="map-item-info">' +
                                '<div class="title">' + markers[i][0] + '</div>' +
                                '<div class="desc">' + markers[i][3] + '</div>' +
                                '<div data-link="' + markers[i][6] + '" class="more-button">' + "VIEW MORE" + '</div>' +
                                '</div><div class="close"></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>'                        
                    }
                    values.push(item);
                }
                return values;
            }

            function initialize(markers) {
                var mapDiv = $("#map-canvas");
                mapDiv.gmap3({
                    action: 'destroy'
                });
                mapDiv.gmap3(
                        {
                            map: {
                                options: {
                                    zoom: 10,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                }

                            },
                            overlay: {
                                values: getGmap3Makers(markers),
                                events: {
                                    mouseover: function(marker, event, context) {

                                        //Hover and zoom
                                        // map.panTo(marker.getPosition()); 
                                        infobox.setContent(context.data);
                                        infobox.open(map, marker);
                                    }
                                },
                                mouseout: function(){
                                    infobox.close();
                                }
                            }
                        }, "autofit");

                map = mapDiv.gmap3("get");
                infobox = new InfoBox({
                    pixelOffset: new google.maps.Size(-50, -150),
                    closeBoxURL: '',
                    enableEventPropagation: true
                });

                mapDiv.delegate('.infoBox .close', 'mouseover', function() {
                    infobox.close();
                });

                // hotfix for chrome on android
                mapDiv.delegate('.infoBox div.more-button', 'click', function() {
                    window.location = $(this).data('link');
                });
                
            }

            $(document).ready(function() {
                initialize(markers);
            });

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

$('.dropdown-toggle').dropdown();

$(document).ready(function () {
    loadImageLibrary();
    loadCommentSection();

});


//-----------------------------------------
(function ($) {

    var evenOdd = 0;

    $.fn.extend({

        curvedLine: function (options) {

            var defaults = {
                LatStart: null,
                LngStart: null,
                LatEnd: null,
                LngEnd: null,
                Color: "#FF0000",
                Opacity: 1,
                Weight: 3,
                GapWidth: 0,
                Horizontal: true,
                Multiplier: 1,
                Resolution: 0.1,
                Map: map
            }

            var options = $.extend(defaults, options);

            return this.each(function () {

                var o = options;

                var LastLat = o.LatStart;
                var LastLng = o.LngStart;

                var PartLat;
                var PartLng;

                var Points = new Array();
                var PointsOffset = new Array();

                for (point = 0; point <= 1; point += o.Resolution) {
                    Points.push(point);
                    offset = (0.6 * Math.sin((Math.PI * point / 1)));
                    PointsOffset.push(offset);
                }

                var OffsetMultiplier = 0;

                if (o.Horizontal == true) {

                    var OffsetLenght = (o.LngEnd - o.LngStart) * 0.1;

                } else {

                    var OffsetLenght = (o.LatEnd - o.LatStart) * 0.1;

                }

                for (var i = 0; i < Points.length; i++) {

                    if (i == 4) {

                        OffsetMultiplier = 1.5 * o.Multiplier;

                    }

                    if (i >= 5) {

                        OffsetMultiplier = (OffsetLenght * PointsOffset[i]) * o.Multiplier;

                    } else {

                        OffsetMultiplier = (OffsetLenght * PointsOffset[i]) * o.Multiplier;

                    }

                    if (o.Horizontal == true) {

                        PartLat = (o.LatStart + ((o.LatEnd - o.LatStart) * Points[i])) + OffsetMultiplier;
                        PartLng = (o.LngStart + ((o.LngEnd - o.LngStart) * Points[i]));

                    } else {

                        PartLat = (o.LatStart + ((o.LatEnd - o.LatStart) * Points[i]));
                        PartLng = (o.LngStart + ((o.LngEnd - o.LngStart) * Points[i])) + OffsetMultiplier;

                    }

                    curvedLineCreateSegment(LastLat, LastLng, PartLat, PartLng, o.Color, o.Opacity, o.Weight, o.GapWidth, o.Map);

                    LastLat = PartLat;
                    LastLng = PartLng;

                }

                curvedLineCreateSegment(LastLat, LastLng, o.LatEnd, o.LngEnd, o.Color, o.Opacity, o.Weight, o.GapWidth, o.Map);

            });

        }

    });

    function curvedLineCreateSegment(LatStart, LngStart, LatEnd, LngEnd, Color, Opacity, Weight, GapWidth, Map) {

        evenOdd++;

        if (evenOdd % (GapWidth + 1))
            return;

        var LineCordinates = new Array();

        LineCordinates[0] = new google.maps.LatLng(LatStart, LngStart);
        LineCordinates[1] = new google.maps.LatLng(LatEnd, LngEnd);

        var Line = new google.maps.Polyline({
            path: LineCordinates,
            geodesic: false,
            strokeColor: Color,
            strokeOpacity: Opacity,
            strokeWeight: Weight
        });

        Line.setMap(Map);


    }

})(jQuery);