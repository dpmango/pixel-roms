// PRE-initialization
var APP = window.APP || {};
APP.Dev = APP.Dev || {};
APP.Browser = APP.Browser || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

// force scroll to top on initial load
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// shorthand operators
var _window = $(window);
var _document = $(document);
var easingSwing = [0.02, 0.01, 0.47, 1]; // default jQuery easing

(function($, APP) {
  APP.Initilizer = function() {
    var app = {};

    app.init = function() {
      app.initGlobalPlugins();
      app.initPlugins();
      app.initComponents();
    };

    app.onLoadTrigger = function() {
      APP.Plugins.LazyLoadImages.init();
    };

    app.refresh = function() {
      APP.Components.Header.closeMobileMenu(true);
      APP.Plugins.Sharer.refresh();
      app.initPlugins(true);
      app.initComponents(true);
    };

    app.destroy = function() {};

    // pjax triggers
    app.newPageReady = function() {
      app.refresh();
    };

    app.transitionCompleted = function() {
      app.onLoadTrigger();
    };

    // Global plugins which must be initialized once
    app.initGlobalPlugins = function() {
      APP.Dev.Credentials.logCredentials();
      APP.Dev.Breakpoint.listenResize();
      APP.Browser().methods.setBodyTags();
      APP.Plugins.LegacySupport.init();
      APP.Plugins.ScrollBlock.listenScroll();
      APP.Plugins.Clicks.init();
      APP.Plugins.Barba.init();
    };

    // Plugins which depends on DOM and page content
    app.initPlugins = function(fromPjax) {
      APP.Plugins.Selectric.init();
      APP.Plugins.Rating.init();
      APP.Plugins.Tablesort.init();
      APP.Plugins.Stacktable.init(fromPjax);
      APP.Plugins.AutoCompleate.init();
      APP.Plugins.InputFocuses.init();
      APP.Plugins.DISQUS.init();
    };

    // All components from `src/componenets`
    app.initComponents = function(fromPjax) {
      APP.Components.Header.init(fromPjax);
      APP.Components.Hero.init();
      APP.Components.Game.init();
    };

    return app;
  };

  // a.k.a. ready
  $(function() {
    APP.Initilizer().init();
  });

  $(window).on('load', function() {
    $.ready.then(function() {
      APP.Initilizer().onLoadTrigger();
    });
  });
})(jQuery, window.APP);
