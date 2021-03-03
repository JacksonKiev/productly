 $(document).ready(function () {


    $(function () {
       $(".slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
          responsive: [{
                breakpoint: 1170,
                settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2
                }
             },
             {
                breakpoint: 769,
                settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
             }
          ]

       });
    });

    $(".menu__btn").on('click', function () {
       $(".menu__list").toggleClass("active");
       $(".menu__btn").toggleClass("active");
       $(".top__inner").toggleClass("active");
    });

 });