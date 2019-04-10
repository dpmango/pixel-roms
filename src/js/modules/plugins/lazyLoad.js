////////////////////
// LAZY LOAD
////////////////////
(function($, APP) {
  APP.Plugins.LazyLoadImages = {
    init: function() {
      var _this = this;

      _document.find('[js-lazy]').Lazy({
        threshold: 400, // Amount of pixels below the viewport
        enableThrottle: true,
        throttle: 100,
        scrollDirection: 'vertical',
        // effect changed to custom due to safari performance
        // effect: 'fadeIn',
        // effectTime: 350,
        // visibleOnly: true,
        // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        onError: function(element) {
          // load errored - append src and hope that browser will do its work
          try {
            element.attr('src', element.data('src'));
          } catch (e) {
            // 'eror appending src'
          }
        },
        beforeLoad: function(element) {
          // element.attr('style', '')
        },
        afterLoad: function(element) {
          _this.animationHandler(element);
        },
        onFinishedAll: function() {
          // ieFixPictures()
        },
      });
    },
    animationHandler: function(element) {
      var fadeTimeout = 250;
      var $scaler = element.closest('.scaler');
      $scaler.addClass('is-loaded');

      if ($scaler.length === 0) {
        $(element).addClass('is-loaded');
      }

      if ($scaler.is('.no-bg-onload')) {
        setTimeout(function() {
          $scaler.addClass('is-bg-hidden');
        }, fadeTimeout);
      }
    },
  };
})(jQuery, window.APP);
