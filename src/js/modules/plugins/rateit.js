//////////
// AOS
//////////
(function($, APP) {
  APP.Plugins.Rateit = {
    init: function() {
      if ($('.rateit').length > 0) {
        $('.rateit').rateit();
      }
    },
  };
})(jQuery, window.APP);
