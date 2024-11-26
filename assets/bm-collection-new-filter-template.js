document.addEventListener("DOMContentLoaded", function() {
  /* Event listeners */
  function intiEventListener() {
    // Filter click events
    var forms = document.querySelectorAll('[data-collection-filter-form]');
    forms.forEach(function(form) {
      form.addEventListener('change', function (e) {
        if (isDesktop() && e.target.tagName === 'INPUT') {
          if (isDesktop()) {
            renderCollection(form);
          }
        }
      })

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelector('[data-filter-drawer]').classList.remove('active');
        renderCollection(form);
      })

      form.addEventListener('reset', function(e) {
        e.preventDefault();
        document.querySelector('[data-filter-drawer]').classList.remove('active');
        renderCollection(form, 'reset');
      })

      toggleFilterExpand(form);
    })

    // Filter drawer events
    var filterTrigger = document.querySelector('[data-filter-popup-trigger]');
    var filterDrawer = document.querySelector('[data-filter-drawer]');
    var filterDrawerClose = document.querySelectorAll('[data-close-filter-drawer]');
    if(filterDrawerClose.length && filterDrawer) {
      filterDrawerClose.forEach(function(close) {
        close.addEventListener('click', function() {
          filterDrawer.classList.remove('active');
        })
      })
    }

    if(filterTrigger && filterDrawer) {
      filterTrigger.removeEventListener('click', function(){});
      filterTrigger.addEventListener('click', function() {
        filterDrawer.classList.add('active');
      })
    }
  }

  /* Render collection page */
  function renderCollection(form, reset=false) {
    pageLoading(true);
    
    var url = generateURL(form);
    if (reset) {
      //url = window.location.pathname + '?view=new-filter';
      url = window.location.pathname;
    }

    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        var parsedData = new DOMParser().parseFromString(data, "text/html");
        var content = parsedData.querySelector('[data-partial]');
        var sidebarForm = parsedData.querySelector('.form--sidebar[data-collection-filter-form]');
        var drawerForm = parsedData.querySelector('.form--drawer[data-collection-filter-form]');

        var _content = document.querySelector('[data-partial]');
        var _sidebarForm = document.querySelector('.form--sidebar[data-collection-filter-form]');
        var _drawerForm = document.querySelector('.form--drawer[data-collection-filter-form]');

        _content.innerHTML = content.innerHTML;
        _sidebarForm.innerHTML = sidebarForm.innerHTML;
        _drawerForm.innerHTML = drawerForm.innerHTML;

        toggleFilterExpand(_sidebarForm);
        toggleFilterExpand(_drawerForm);
        
        updateURL(url);
        initQuickView();
        pageLoading(false);
      })
      .catch((e) => {
        console.log('>> error', e)
        pageLoading(false);
      });
  }

  /* Quick view event listener */
  function initQuickView() {
    var products = document.querySelectorAll('.collection__products .product-item');
    if (products.length) {
      products.forEach(function(product) {
        window.bmInitCollectionQuickView(product);
      })
    }
  }

  /* Create request url */
  function generateURL(form) {
    var formData = new FormData(form);
    var url = window.location.pathname + '?';
    var serializedData = '';
  
    for (var [name, value] of formData) {
      serializedData += name + '=' + value + '&';
    }

    //serializedData += 'view=new-filter';
    return url + new URLSearchParams(serializedData).toString();
  }

  /* Page loading effect while loading the page */
  function pageLoading(loading = true) {
    var loader = document.querySelector('[data-loading]');
    var form = document.querySelector('[data-collection-filter-form]');

    if (loading) {
      loader.classList.add('is-active');
      form.classList.add('is-active');
    } else {
      loader.classList.remove('is-active');
      form.classList.remove('is-active');
    }
  }

  /* Check if desktop or mobile */
  function isDesktop() {
    if (window.innerWidth > 959) {
      return true;
    }

    return false;
  }

  /* Update browser url */
  function updateURL(url) {
    window.history.replaceState('', '', url);
  }

  /* Expane and collapse filters */
  function toggleFilterExpand(form) {
    var labels = form.querySelectorAll('.sidebar__filter .filter__label');
    labels.forEach(function(label) {
      label.addEventListener('click', function() {
        this.parentNode.classList.toggle('collapse');
      })
    })
  }

  intiEventListener();
});
