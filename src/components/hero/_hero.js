////////////////////
// HERO COMPONENTS
////////////////////
(function($, APP) {
  APP.Components.Hero = {
    init: function() {
      this.animateEyes();
    },
    animateEyes: function() {
      var _this = this;
      var $eye1 = $('#eye-1');
      var $eye2 = $('#eye-2');
      if ($eye1.length && $eye2.length) {
        setInterval(function() {
          _this.blink($eye1);
          _this.blink($eye2);
        }, 2800);
      }
    },
    blink: function(el) {
      TweenLite.set(el, {
        rotation: 90,
        transformOrigin: '50% 50%',
      });
      TweenLite.set(el, {
        delay: 0.4,
        rotation: 0,
        transformOrigin: '50% 50%',
      });
    },
  };
})(jQuery, window.APP);
