const slider = require('./common/slider');
const $ = require('jquery'); // если будет нужен

slider(); // инициализируем слайдер

function initMap() {
    var idMap = document.getElementById('map');
    if (!idMap) return;
    var image = 'assets/images/marker.png';
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

initMap();


var parallax = (function () {
    var bg = document.querySelector('.hero');
    var user = document.querySelector('.hero__user');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe + ', 0)';
            var style = block.style;

            style.top = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 45);
            this.move(user, wScroll, 3);
        }
    }
}());

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
}



// var aboutWrapper = document.getElementById('about__wrapper')
// var hamburger = document.getElementById('hamburger')
// // var cross = document.getElementById('cross')

// hamburger.addEventListener('click', function() {
//     aboutWrapper.classList.add('full-menu')
// });

// hamburger.addEventListener('click', function() {
//     aboutWrapper.classList.remove('full-menu')
// });

// $(document).ready(function(){
//     $(".hamburger").click(function(){
//       $(this).toggleClass("full-menu");
//     });
//   });

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".about__wrapper").toggleClass("full-menu");
      $(".works__wrapper").toggleClass("full-menu");
    });
    $(".log-in").click(function(){
      $('.flip__container').addClass('hover');
    });
    $(".Background-canvas").click(function(){
      $('.flip__container').removeClass('hover');
    });
  });


