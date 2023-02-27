$(document).ready(function(){
    $('.slaeder__top').slick({
        dots: false,
        arrows:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 1500,
        autoplay:true,
        fade: true,
    });


    $('.partners__pro').slick({
        dots: false,
        infinite: true,
        speed: 300,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1601,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $(window).on('load',function(){
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });
    

});



// --------------Header fixed-----------------------------start

$(document).ready(function(){
  const header = document.querySelector('.header__mrx');
window.onscroll=()=>{
      if (window.pageYOffset > 250) {
          header.classList.add('header__max_mrx');
          $('.header__max_mrx').fadeTo(1000,1);
      } else{
          header.classList.remove('header__max_mrx');
          $('.header__max_mrx').fadeTo(1000,1);
      }
  }
});

// --------------Header fixed-----------------------------end


$(document).ready(function(){
  $('.menu__burger__burger').click(function(){
    $('.header__menu').fadeTo(500,1);
     $('.header__menu').css('display','block');
  })
});

$(document).ready(function(){
   $('.menu__burger__x').click(function(){
    $('.header__menu').fadeTo(500,1);
       $('.header__menu').css('display','none');
   })
});

$(document).ready(function(){
  $('.menu__burger__burger').click(function(){
    $('.menu__burger__x').fadeTo(500,1);
    $('.menu__burger__x').css('display','block') && $('.menu__burger__burger').css('display','none');
  })
});
 
$(document).ready(function(){
  $('.menu__burger__x').click(function(){
    $('.menu__burger__burger').fadeTo(500,1);
      $('.menu__burger__burger').css('display','block') && $('.menu__burger__x').css('display','none');
  })
});