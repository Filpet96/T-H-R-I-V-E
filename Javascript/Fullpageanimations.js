(function($) {

  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
    $isAnimatedSecondSingle = $('.second .is-animated__single'),
    $isAnimatedThird = $('.third .is-animated'),
    $isAnimatedThirdSingle = $('.third .is-animated__single'),
    $isAnimatedFourth = $('.fourth .is-animated'),
    $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
    $isAnimatedBoxPage3d = $('.is-animated-desktop');

  // initialize fullPage
  $('#wrapper').fullpage({

    navigation: false,
    onLeave: function(index, nextIndex, direction) {

      /**
       * use the following condition:
       *
       *   if( index == 1 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur
       * when you jump (using the dot navigation)
       * from the first section to another sections
       */

      // first animation
      if (index == 1 && nextIndex == 2) {
        $isAnimatedSecond.addClass('animated fadeInLeft');
        $isAnimatedSecond.eq(0).css('animation-delay', '.4s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

      if (index == 2 && nextIndex == 3) {
        $isAnimatedBoxPage3d.addClass('animated fadeInRight').css('animation-delay', '.4s');
      }

    }

  });

})(jQuery);
