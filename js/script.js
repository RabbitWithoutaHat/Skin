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
});
