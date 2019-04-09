//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    data: {
      header: {
        container: undefined,
        stickyPoint: undefined,
      },
    },
    init: function() {
      this.getHeaderParams();
      this.updateHeaderActiveClass();
      this.hamburgerClickListener();
      this.listenScroll();
      this.listenResize();
    },
    getHeaderParams: function() {
      var $header = $('.header');
      var $page = $('.page__content');
      var firstSectionHeight = $page
        .find('div')
        .first()
        .outerHeight();

      this.data.header = {
        container: $header,
        stickyPoint: firstSectionHeight,
      };
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');

      APP.Plugins.ScrollBlock.blockScroll(isOnload);
    },
    hamburgerClickListener: function() {
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        APP.Plugins.ScrollBlock.blockScroll();
      });
    },
    listenScroll: function() {
      _window.on('scroll', this.scrollHeader.bind(this));
    },
    listenResize: function() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    scrollHeader: function() {
      if (this.data.header.container !== undefined) {
        var fixedClass = 'is-fixed';

        // get scroll params from blocker function
        var scroll = APP.Plugins.ScrollBlock.getData();

        if (scroll.blocked) return;

        if (scroll.y > this.data.header.stickyPoint) {
          this.data.header.container.addClass(fixedClass);
        } else {
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    updateHeaderActiveClass: function() {
      // SET ACTIVE CLASS IN HEADER
      // * could be removed in production and server side rendering when header is inside barba-container
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;

      headerMenuList.each(function(i, val) {
        if (
          $(val)
            .find('a')
            .attr('href') === window.location.pathname.split('/').pop()
        ) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
  };
})(jQuery, window.APP);
