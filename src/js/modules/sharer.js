//////////
// SHARER.js
//////////
(function($, APP) {
  APP.Plugins.Sharer = {
    refresh: function() {
      // cause it's automatically inits for initial load
      // $('[data-sharer]').sharer();
      window.Sharer.init();
    },
  };
})(jQuery, window.APP);
