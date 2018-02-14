const slider = require('./common/slider');
const $ = require('jquery'); // если будет нужен
require('./common/loader')
slider(); // инициализируем слайдер

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




