////////////////////
// LAZY LOAD
////////////////////
(function($, APP) {
  APP.Plugins.Tablesort = {
    init: function() {
      var _this = this;

      var $tables = $('[js-sortable-table]');
      if ($tables.length === 0) return;
      $tables.each(function(i, table) {
        // var $table = $(table);
        new Tablesort(table);

        // table.addEventListener('beforeSort', function() {
        //   console.log('Table is about to be sorted!');
        // });

        // table.addEventListener('afterSort', function() {
        //   console.log('Table sorted!');
        // });
      });
    },
  };
})(jQuery, window.APP);
