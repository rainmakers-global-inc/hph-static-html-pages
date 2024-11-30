$(document).ready(function(){
    
    $('.homebanner').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '0px',
        infinite: true,
        // autoplaySpeed: 5000,
        // autoplay: true
        
    });
})



$(".clss_tgl").click(function () {
    $("body").toggleClass("nav_open");
  });


  $(window).on('load resize orientationchange', function () {
    $('.srvc_bx_wrp ul').each(function () {
        var $carousel = $(this);
        if ($(window).width() > 991) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        } else {
            if (!$carousel.hasClass('slick-initialized')) {
                $('.srvc_bx_wrp ul').slick({
                    // dots: true,
                    infinite: true,
                    arrows: true,
                    slidesToShow: 2,
                    // centerMode:true,
                    // centerPadding: '90px',
                    speed: 600,
                    autoplaySpeed: 3000,
                    autoplay: true,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }]
                });
            }
        }
    });
});