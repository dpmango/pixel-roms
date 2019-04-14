//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    data: {
      header: {
        container: undefined,
        headerHeight: undefined,
        stickyPoint: undefined,
      },
    },
    init: function() {
      this.getHeaderParams();
      this.setMenuClass();
      this.controlHeaderClass();
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
        headerHeight: $header.outerHeight(),
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

        if (scroll.y > this.data.header.stickyPoint - this.data.header.headerHeight / 2) {
          this.data.header.container.addClass(fixedClass);
        } else {
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    setMenuClass: function() {
      // SET ACTIVE CLASS IN HEADER
      // * could be removed in production and server side rendering when header is inside barba-container
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;

      headerMenuList.each(function(i, val) {
        if (
          window.location.pathname
            .split('/')
            .pop()
            .indexOf(
              $(val)
                .find('a')
                .attr('href')
            ) !== -1
        ) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function() {
      this.data.header.container.attr('data-modifier', false);

      var $modifierElement = $('.page')
        .last()
        .find('[js-header-class]');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    },
  };
})(jQuery, window.APP);
