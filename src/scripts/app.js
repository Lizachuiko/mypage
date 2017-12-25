const slider = require('./common/slider');
const $ = require('jquery'); // если будет нужен

slider(); // инициализируем слайдер

// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }

function initMap() {
    var idMap = document.getElementById('map');
    var image = '../images/marker.png';
    var style = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#86a77a"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    var uluru = {
        lat: 55.756602,
        lng: 37.412258
    };
    var map = new google.maps.Map(idMap, {
        center: uluru,
        zoom: 12,
        styles: style
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        { lat: 55.757116, lng: 37.409277}
     ]

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          icon: image
        });
      });

       var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
};
