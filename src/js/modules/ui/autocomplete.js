////////////////////
// AUTOCOMPLETE PLUGIN
////////////////////
(function($, APP) {
  APP.Plugins.AutoCompleate = {
    init: function() {
      var $autocomplete = $('#autocomplete');
      if ($autocomplete.length === 0) return;

      $autocomplete.easyAutocomplete({
        // http://easyautocomplete.com/guide
        url: 'json/autocomplete.json',
        getValue: 'name',
        list: {
          match: {
            enabled: true,
          },
          onChooseEvent: function() {
            var selectedItem = $autocomplete.getSelectedItemData();
            Barba.Pjax.goTo(selectedItem.url);
          },
          showAnimation: {
            type: 'fade', //normal|slide|fade
            time: 200,
            callback: function() {},
          },
          hideAnimation: {
            type: 'fade', //normal|slide|fade
            time: 200,
            callback: function() {},
          },
        },
      });
    },
  };
})(jQuery, window.APP);
