$(window).load(function() {
   $(".before-after").twentytwenty({
      before_label: 'До',
      after_label: 'После'
   });
   $(".before-slider").slick({
      draggable: false,
      touchMove: false,
      dots: true,
      dotsClass: 'slider-dots',
      prevArrow: '<button type="button" class="slider-prev slider-arrow">&#9001;</button>',
      nextArrow: '<button type="button" class="slider-next slider-arrow">&#9002;</button>',
   });

   $('.reviews-slider').slick({
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      responsive: [
      {
         breakpoint: 1030,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
         }
      },
      ]
   });
   $('.menu-button').on('click', function(){
      $('.menu').toggleClass('menu--active');
      $('.menu-button').toggleClass('menu-button--active');
   });
   $('.select__checked').on('click', function() {
      $('.select__dropdown').toggleClass('select__dropdown--open');
   });
   $('.select__option').on('click', function () {
      var value = $(this).attr('data-value');
      $('#select-type').val(value);
      $('.select__checked').text(value);
      $('.select__dropdown').toggleClass('select__dropdown--open');
   });
   $("a[href^='#']").click(function () {
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top -200 + 'px'});
      return false;
   });
   $('input[type="tel"]').mask("+ 7 (999) 999-99-99");

   var reviews = $('.reviews');
   var reviewsTop = reviews.offset().top;
   $(window).bind('scroll', function(){
      var windowTop = $(this).scrollTop();
      if (windowTop > reviewsTop) {
         $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aabf86d259690123c1d884b029e522f9274d5b02f341eb00fc152fb3ae7ca4039&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
         $(window).unbind('scroll');
      }
   });
});
