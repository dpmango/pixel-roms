//////////
// RATING
//////////
(function($, APP) {
  APP.Plugins.Rating = {
    init: function() {
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
  };
})(jQuery, window.APP);
