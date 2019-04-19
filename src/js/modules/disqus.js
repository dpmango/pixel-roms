//////////
// DISQUS
//////////
(function($, APP) {
  APP.Plugins.DISQUS = {
    init: function() {
      var $thread = $('.page')
        .last()
        .find('#disqus_thread');

      if ($thread.length > 0) {
        this.create();
        if (window.DISQUS) {
          this.refresh();
        }
      }
    },
    create: function() {
      (function() {
        var d = document,
          s = d.createElement('script');
        s.src = 'https://pixel-roms.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    },
    refresh: function() {
      if (window.DISQUS) {
        // TODO - test if disqus_config is parsed correctly
        DISQUS.reset({
          reload: true,
          // config: function() {
          //   this.page.identifier = 'newidentifier';
          //   this.page.url = 'http://example.com/#!newthread';
          // },
        });
      }
    },
  };
})(jQuery, window.APP);
