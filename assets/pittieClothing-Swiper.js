if (!customElements.get("swiper-slider")) {
  class SwiperSlider extends HTMLElement {
    constructor() {
      super();

      var _this = this;

      // swiper container
      this.swiperContainer = this.querySelector(".swiper-container");
      this.config = this.swiperContainer?.dataset || {};

      // wait for swiper slider
      this.waitForSwiper(function () {
        // If thumbnails available
        _this.initSwiperWithThumbs(_this.swiperContainer);
      });
    }

    // Wit for swiper slider
    waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof Swiper !== "undefined") {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    // Thumbnail configuration
    thumbConfig(thumbConfig) {
      var config = {
        slidesPerView: 3,
        spaceBetween: 12,
        centeredSlides: false,
        grabCursor: true,
        freeMode: false,
        loop: true,
        mousewheel: false,
        slideToClickedSlide: true,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        keyboard: {
          enabled: true,
        },
        direction: "horizontal",
      };
      // Loop
      if (thumbConfig?.loop) {
        config.loop = thumbConfig.loop;
      }
      // Slide per view
      if (thumbConfig?.slidesPerView > 1) {
        config.slidesPerView = thumbConfig.slidesPerView;
      }

      // direction
      if (thumbConfig.direction) {
        config.direction = thumbConfig.direction;
      }

      // Breakpoints
      if (thumbConfig.breakpoints) {
          config.breakpoints = JSON.parse(thumbConfig.breakpoints);
        }

      //autoplay
      if (thumbConfig.autoplay == 'true') {
        config.autoplay = {
          delay: thumbConfig.delay || 5000,
        };
      }

      // allowTouchMove
      if (thumbConfig.allowTouchMove == "true") {
        config.allowTouchMove = true;
      } else{
        config.allowTouchMove = false;
      }

      return config;
    }

    // Gallery slider configuration
    galleryConfiguration(galleryConfig, thumbs) {
      var config = {
        slidesPerView: 1,
        spaceBetween: 12,
        loop: true,
        direction: "horizontal",
        thumbs: {},
        pagination: {
          el: "",
          clickable: true,
        },
        navigation: {
          nextEl: "",
          prevEl: "",
        },
      };

      // Pagination
      if (galleryConfig.dots) {
        config.pagination.el = galleryConfig.pagination;
      }

      // If prev/next element
      if (galleryConfig?.nav) {
        config.navigation.prevEl = galleryConfig.prevEl;
        config.navigation.nextEl = galleryConfig.nextEl;
      }

      // direction
      if (galleryConfig.direction) {
        config.direction = galleryConfig.direction;
      }

      // per view
      if (galleryConfig?.slidesPerView > 1) {
        config.slidesPerView = thumbConfig.slidesPerView;
      }

      // if thumbs
      if (thumbs) {
        config.thumbs.swiper = thumbs;
      }

      //autoplay
      if (galleryConfig.autoplay == "true") {
        config.autoplay = {
          delay: galleryConfig.delay || 4000,
        };
      }

      // Breakpoints
      if (galleryConfig.breakpoints) {
        config.breakpoints = JSON.parse(galleryConfig.breakpoints);
      }
      
      // allowTouchMove
      if (galleryConfig.allowTouchMove == "true") {
        config.allowTouchMove = true;
      }else{
        config.allowTouchMove = false;
      }

      console.log('Configuration', config)
      
      return config;
    }

    // remove duplicate slider
    removeDuplicateSlides(slides){
       slides.forEach(function(slide) {
        if(slide.classList.contains('swiper-slide-duplicate')){
          slide.remove();
        }
      })
    }

    // Initlize swiper slider with thums
    initSwiperWithThumbs() {
      // Thumbnails
      var sliderThumbs = document.querySelector(`${this.config["thumbsId"]}`);

      // Thumbnails initialize
      var thumbs;
      if (sliderThumbs) {
        var thumbConfig = sliderThumbs.dataset;
        thumbConfig = this.thumbConfig(thumbConfig);
        // Thumbnails
        thumbs = new Swiper(sliderThumbs, thumbConfig);
      }

      if (this.swiperContainer) {
        var galleryConfig = this.galleryConfiguration(this.config, thumbs);
        // Add click event listener to the swiper slider
        var gallerySl = new Swiper(this.swiperContainer, galleryConfig);

        // Add an event listener to the gallery swiper's 'slideChange' event
        if (thumbs) {
          thumbs.params.slideToClickedSlide = true;


          // Remove loop
          var totalSlides = 0;
          thumbs.slides.forEach(function(slide) {
            if(!slide.classList.contains('swiper-slide-duplicate')){
              totalSlides++;
            }
          })

          if(totalSlides == thumbs.params.slidesPerView){
            thumbs.params.loop = false;
            gallerySl.params.loop = false;
            this.removeDuplicateSlides(thumbs.slides)
            this.removeDuplicateSlides(gallerySl.slides)
            thumbs.update();
            gallerySl.update();
          }

          gallerySl.on("slideChange", function () {
            if (thumbs.params.slidesPerView == 1.5) {
              // Get the active slide index of the gallery swiper
              var activeSlideIndex = gallerySl.activeIndex;

              // Calculate the corresponding active thumbnail slide index
              var activeThumbnailIndex = Math.floor(activeSlideIndex * 1.5);

              if (activeThumbnailIndex - activeSlideIndex > 1) {
                activeThumbnailIndex = activeThumbnailIndex - 1;
              }

              // Slide to the active thumbnail slide to make it fully visible
              thumbs.slideTo(activeThumbnailIndex);
            } 
          });
        }
      }
    }
  }

  customElements.define("swiper-slider", SwiperSlider);
}