(function ($) {
  "use strict";
  //   feather.replace();
  $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(".popup-youtube").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $("#header").addClass("is-sticky");
    } else {
      $("#header").removeClass("is-sticky");
    }
  });
  $(".popup-btn").magnificPopup({ type: "image", gallery: { enabled: true } });
  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass(
      "active"
    );
  });
  $(".works-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1500: { items: 4 },
    },
  });
  $(".boxes-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
    },
  });
  $(".testimonials-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
  });
  $(".team-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 2 },
      992: { items: 4 },
      1500: { items: 5 },
    },
  });
  var $imagesSlider = $(".feedback-slides .client-feedback>div"),
    $thumbnailsSlider = $(".client-thumbnails>div");
  $imagesSlider.slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    fade: true,
    autoplay: true,
    draggable: true,
    asNavFor: ".client-thumbnails>div",
    prevArrow: ".client-feedback .prev-arrow",
    nextArrow: ".client-feedback .next-arrow",
  });
  $thumbnailsSlider.slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    centerMode: true,
    draggable: false,
    focusOnSelect: true,
    asNavFor: ".feedback-slides .client-feedback>div",
    prevArrow: ".client-thumbnails .prev-arrow",
    nextArrow: ".client-thumbnails .next-arrow",
  });
  $(function () {
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 300) $(".go-top").fadeIn("slow");
      if (scrolled < 300) $(".go-top").fadeOut("slow");
    });
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  });
  $(function () {
    $(".accordion")
      .find(".accordion-title")
      .on("click", function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle("fast");
        $(".accordion-content").not($(this).next()).slideUp("fast");
        $(".accordion-title").not($(this)).removeClass("active");
      });
  });
  $("#tabs li").on("click", function () {
    var tab = $(this).attr("id");
    if ($(this).hasClass("inactive")) {
      $(this).removeClass("inactive");
      $(this).addClass("active");
      $(this).siblings().removeClass("active").addClass("inactive");
      $("#" + tab + "_content").addClass("show");
      $("#" + tab + "_content")
        .siblings("div")
        .removeClass("show");
    }
  });
  function makeTimer() {
    var endTime = new Date("August 19, 2020 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 1000);
  var owl = $(".products-details-image-slides");
  owl.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  $(".partner-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 2 },
      576: { items: 4 },
      768: { items: 4 },
      992: { items: 6 },
    },
  });
  (function ($) {
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
    $(".tab ul.tabs li a").on("click", function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();
      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");
      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();
      g.preventDefault();
    });
  })(jQuery);
  $(".ml-feedback-slides").owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
  });
  $(".ml-projects-slides").owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".agency-portfolio-home-slides").owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: false,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".blog-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    margin: 30,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
  });
  $(".grid").imagesLoaded(function () {
    $(".shorting-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  });
  $(".shorting-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
  $(".agency-portfolio-feedback-slides").owlCarousel({
    loop: false,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
  });
  var $grid = $(".projects-items").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: { columnWidth: ".grid-item" },
  });
  $(".agency-portfolio-partner-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: { items: 2 },
      576: { items: 4 },
      768: { items: 4 },
      992: { items: 6 },
    },
  });
  $(window).on("load", function () {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 20,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  });
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
})(jQuery);
