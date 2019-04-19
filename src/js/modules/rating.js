//////////
// RATING
//////////
(function($, APP) {
  APP.Plugins.Rating = {
    init: function() {
      this.update();
      this.clickHandlers();
      this.resizeListener();
    },
    update: function() {
      if ($('.rateit').length > 0) {
        $('.rateit').rateit();
      }
    },
    clickHandlers: function() {
      var $rating = $('[js-rating]');
      if ($rating.length === 0) return;

      $rating.each(function(i, rating) {
        var $el = $(rating);
        var $rateit = $el.find('.rateit');
        var $number = $el.find('.rating__number');

        $rateit.bind('rated', function(e) {
          var ri = $(this);
          var value = ri.rateit('value');
          var productID = ri.data('productid');

          // disable voting
          ri.rateit('readonly', true);

          // update number value
          // TODO - move to ajax sucess responce
          $number.text(value);

          // $.ajax({
          //   url: 'rateit.aspx', //your server side script
          //   data: { id: productID, value: value }, //our data
          //   type: 'POST',
          //   success: function(data) {
          //     // $('#response').append('<li>' + data + '</li>');
          //   },
          //   error: function(jxhr, msg, err) {
          //     // $('#response').append('<li style="color:red">' + msg + '</li>');
          //   },
          // });
        });
      });
    },
    resizeListener: function() {
      var _this = this;
      _this.resizeStars();
      _window.on('resize', debounce(_this.resizeStars, 200));
    },
    resizeStars: function() {
      var $ratitResizable = $('.rateit.resizable');
      if ($ratitResizable.length === 0) return;

      if (window.innerWidth <= 768) {
        $ratitResizable.each(function(i, rateit) {
          $(rateit)
            .removeClass('svg')
            .addClass('svg-mini')
            .rateit('starwidth', 20)
            .rateit('starheight', 15);
        });
      } else {
        $ratitResizable.each(function(i, rateit) {
          $(rateit)
            .removeClass('svg-mini')
            .addClass('svg')
            .rateit('starwidth', 28)
            .rateit('starheight', 22);
        });
      }
    },
  };
})(jQuery, window.APP);
