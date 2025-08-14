$(document).ready(function() {

  // Card Slider
  $('.card-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 4.2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 4.2, slidesToScroll: 4 } },
      { breakpoint: 1800, settings: { slidesToShow: 3.5, slidesToScroll: 3 } },
      { breakpoint: 1600, settings: { slidesToShow: 3.5, slidesToScroll: 3 } },
      { breakpoint: 1440, settings: { slidesToShow: 3.2, slidesToScroll: 3 } },
      { breakpoint: 1366, settings: { slidesToShow: 3.2, slidesToScroll: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 2.9, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2.1, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2.2, slidesToScroll: 2, dots: true, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1.1, slidesToScroll: 1, dots: true, arrows: false } }
    ]
  });

  // Mobile Slider
  $('.mobile-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 5.4,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      { breakpoint: 2560, settings: { slidesToShow: 6.8, slidesToScroll: 5 } },
      { breakpoint: 1920, settings: { slidesToShow: 5.8, slidesToScroll: 5 } },
      { breakpoint: 1600, settings: { slidesToShow: 5.2, slidesToScroll: 5 } },
      { breakpoint: 1440, settings: { slidesToShow: 4.8, slidesToScroll: 4 } },
      { breakpoint: 1366, settings: { slidesToShow: 4.5, slidesToScroll: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3.8, slidesToScroll: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 2.8, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2.2, slidesToScroll: 2, dots: true, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1.5, slidesToScroll: 1, dots: true, arrows: false } }
    ]
  });

  // Rewards Slider
  $('.rewards-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    rows: 2,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 6, slidesToScroll: 3, rows: 2 } },
      { breakpoint: 1370, settings: { slidesToShow: 5, slidesToScroll: 3, dots: true, arrows: false, rows: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3.2, slidesToScroll: 2, rows: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, dots: true, arrows: false, rows: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1.8, slidesToScroll: 2, dots: true, arrows: false, rows: 1 } }
    ]
  });

  // Category Slider
  $('.category-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 9.8,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1580, settings: { slidesToShow: 7.8, slidesToScroll: 5 } },
      { breakpoint: 1366, settings: { slidesToShow: 6.7, slidesToScroll: 5 } },
      { breakpoint: 1280, settings: { slidesToShow: 5.7, slidesToScroll: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4.7, slidesToScroll: 4, dots: true, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 3.5, slidesToScroll: 4, dots: true, arrows: false } },
      { breakpoint: 600, settings: { slidesToShow: 2.8, slidesToScroll: 3, dots: true, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 2.8, slidesToScroll: 3.5, dots: true, arrows: false } }
    ]
  });

  // Banner Slider
  $('.banner-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 3.15,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1580, settings: { slidesToShow: 3.15, slidesToScroll: 3 } },
      { breakpoint: 1366, settings: { slidesToShow: 3.15, slidesToScroll: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 3.15, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2.3, slidesToScroll: 2, dots: true, arrows: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false } }
    ]
  });

});
