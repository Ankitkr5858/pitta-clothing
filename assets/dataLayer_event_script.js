(function () {
  // Function to wait for an element to appear on the page
  function waitForElement(selector, callback) {
    var interval = setInterval(function () {
      var element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        callback(element);
      }
    }, 100);

    // Clear interval after 10 seconds if the element is not found
    setTimeout(function () {
      clearInterval(interval);
    }, 10000);
  }

  if (!window.location.pathname.includes('/checkouts/')) {
    //For Desktop
    waitForElement('.nav__item', function (element) {
      var isEventPushedDesk = false;
      var navItems = document.querySelectorAll('.nav__item');

      navItems.forEach(function (navItem) {
        navItem.addEventListener('click', function (event) {
          if (isEventPushedDesk) {
            return;
          }

          var parentElement = this.closest('.nav__item-parent');
          var parentName = parentElement
            .querySelector('.nav__link-parent')
            .textContent.trim();
          var targetElement = this.querySelector('.nav__link').textContent.trim();

          if (this.classList.contains('nav__item-parent')) {
            targetElement = parentName;
          }

          dataLayer.push({
            event: 'navigation_bar',
            parent_name: parentName,
            target_element: targetElement,
          });

          isEventPushedDesk = true;

          setTimeout(function () {
            isEventPushedDesk = false;
          }, 500);
        });
      });
    });

    //For login and cart
    waitForElement('.quick-cart__trigger', function () {
      var mainNavItems = document.querySelectorAll(
        '.header__icon--account, .header__icon--cart',
      );

      mainNavItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
          var targetElement = this.querySelector(
            '.quick-cart__trigger',
          ).textContent.trim();

          if (this.classList.contains('header__icon--cart')) {
            targetElement = targetElement.replace(/[\s\d]+/g, ' ').trim(); //For cleaning the text.
          }

          dataLayer.push({
            event: 'navigation_bar',
            target_element: targetElement,
          });
        });
      });
    });

    //for mobile
    waitForElement('.drawer-menu__link', function (element) {
      var isEventPushedMob = false;
      var menuLinks = document.querySelectorAll('.drawer-menu__link');

      menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
          if (isEventPushedMob) {
            return;
          }

          // Customize this part to capture the relevant data for your analytics
          var parentElement = this.closest('.drawer-menu__primary-links>li');
          if (parentElement) {
            var parentName = parentElement
              .querySelector('.drawer-menu__primary-links> li >a span')
              .textContent.trim();
            var targetElement = this.querySelector('span ').textContent.trim();

            localStorage.setItem('parent_name', parentName);
            localStorage.setItem('target_element', targetElement);

            dataLayer.push({
              event: 'navigation_bar', // Customize the event name
              parent_name: parentName,
              target_element: targetElement,
            });

            isEventPushedMob = true;

            setTimeout(function () {
              isEventPushedMob = false;
            }, 500);
          }
        });
      });
    });
    //For Mob login & register
    waitForElement('.drawer-menu__link', function () {
      var mainNavItem = document.querySelector(
        '.drawer-menu__footer li:first-child',
      );

      mainNavItem.addEventListener('click', function (event) {
        var targetElement =
          this.querySelector('.drawer-menu__link').textContent.trim();

        dataLayer.push({
          event: 'navigation_bar',
          target_element: targetElement,
        });
      });
    });
  }
})();