    // бургер-меню
    $('.header-burger').on('click', function () {
      $('.header-top-row').toggleClass('active');
      $('body').toggleClass('lock');
    });


    // выпадающее меню закладки
    // var head_bookmarks_link = document.querySelector('.header-top-bookmarks__link');
    // var head_bookmarks = document.querySelector('.header-top-bookmarks');
    // head_bookmarks_link.addEventListener("click", function (e) {
    //   head_bookmarks.classList.toggle('active');
    // });
    // document.documentElement.addEventListener("click", function (e) {
    //   if (!e.target.closest('.header-top-bookmarks')) {
    //     head_bookmarks.classList.remove('active');
    //   }
    // });

    // выпадающее меню хедер
    var head_curr_link = document.querySelector('.header-top-currency__link');
    var head_curr = document.querySelector('.header-top-currency');
    head_curr_link.addEventListener("click", function (e) {
      head_curr.classList.toggle('active');
    });
    document.documentElement.addEventListener("click", function (e) {
      if (!e.target.closest('.header-top-currency')) {
        head_curr.classList.remove('active');
      }
    });

    var head_lang_link = document.querySelector('.header-top-lang__link');
    var head_lang = document.querySelector('.header-top-lang');
    head_lang_link.addEventListener("click", function (e) {
      head_lang.classList.toggle('active');
    });
    document.documentElement.addEventListener("click", function (e) {
      if (!e.target.closest('.header-top-lang')) {
        head_lang.classList.remove('active');
      }
    });


    // каталог: открываем меню
    $(function ($, undefined) {
      var catalog_list = document.querySelector('.catalog-list-icon');
      var side_left = document.querySelector('.side-left');
      catalog_list.addEventListener("click", function (e) {
        side_left.classList.toggle('active');
      });
      document.documentElement.addEventListener("click", function (e) {
        if (!e.target.closest('.side-left')) {
          side_left.classList.remove('active');
        }
      });
    });


    // каталог: добавляем авто-высоту
    $('.catalog-list-icon').click(function () {
      a = $(window).height() - 40;
      $('.catalog').css('height', a + 'px');
    });

    $('.catalog-heading').click(function () {
      $('.side-left').removeClass('active');
    });


    // каталог: доб. класс при наведении (для внутренних страниц)
    $('.catalog-heading, .catalog-inner .catalog').hover(
      function () {
        $('.catalog-inner').addClass('hover');
      },
      function () {
        $('.catalog-inner').removeClass('hover');
      }
    );

    // хедер - поиск
    $(function ($, undefined) {
      var catalog_list = document.querySelector('.header-body-search-icon');
      var side_left = document.querySelector('.header-body-search');
      catalog_list.addEventListener("click", function (e) {
        side_left.classList.toggle('active');
      });
      document.documentElement.addEventListener("click", function (e) {
        if (!e.target.closest('.header-body-search')) {
          side_left.classList.remove('active');
        }
      });
    });


    // стр. покупатели - якоря и плавный переход по якорным ссылкам
    $('.rules-anchor__link').click(function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });


    // сорт. изменение режима просмотра (список, сетка)
    $('.sort-switch-item').on('click', function (e) {
      e.preventDefault();
      let shopProductWrap = $('.sort-content');
      let viewMode = $(this).data('target');
      $('.sort-switch-item').removeClass('active');
      $(this).addClass('active');
      shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
    });


    // слайдер для внутренних страниц - описание
    $(function ($, undefined) {
      $('.desc-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.desc-slider-nav'
      });
      $('.desc-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.desc-slider-main',
        centerMode: true,
        focusOnSelect: true
      });
    });


    // фильтер товаров
    var sliders = document.getElementById('priceFileterSlider');
    noUiSlider.create(sliders, {
      start: [0, 2000],
      connect: true,
      tooltips: [wNumb({
        decimals: 0
      }), wNumb({
        decimals: 0
      })],
      range: {
        'min': 0,
        'max': 2000
      }
    });

    var priceStart = document.getElementById('priceStartSlider');
    var priceEnd = document.getElementById('priceEndSlider');

    sliders.noUiSlider.on('update', function (values, handle) {

      var value = values[handle];

      if (handle) {
        priceEnd.value = Math.round(value);
      } else {
        priceStart.value = Math.round(value);
      }
    });

    priceStart.addEventListener('change', function () {
      sliders.noUiSlider.set([this.value, null]);
    });

    priceEnd.addEventListener('change', function () {
      sliders.noUiSlider.set([null, this.value]);
    });