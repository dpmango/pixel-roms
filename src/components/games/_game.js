//////////
// CICKS
//////////
(function($, APP) {
  APP.Components.Game = {
    init: function() {
      this.setCoverMinHeight();
      this.watchResize();
    },
    watchResize: function() {
      _window.on('resize', debounce(this.setCoverMinHeight.bind(this), 200));
    },
    setCoverMinHeight: function() {
      var $cover = $('[js-cover-min-height]');
      if ($cover.length === 0) return;
      var $target = $($cover.data('watch'));

      if (window.innerWidth > 768) {
        $cover.css({
          'min-height': $target.outerHeight(),
        });
      } else {
        $cover.attr('style', '');
      }
    },
  };
})(jQuery, window.APP);
