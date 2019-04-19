////////////////////
// HERO COMPONENTS
////////////////////
(function($, APP) {
  APP.Components.Hero = {
    init: function() {
      this.startGif();
      this.animateEyes();
    },
    startGif: function() {
      var $coins = $('[js-coins] img');
      if ($coins.length === 0) return;

      $coins.each(function(i, coin) {
        var $coin = $(coin);
        setTimeout(function() {
          $coin.attr('src', $coin.data('src'));
        }, i * 225); // 900 total
      });
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
