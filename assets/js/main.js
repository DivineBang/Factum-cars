
//preloader
$(document).ready(function() {
  $('#preloader').fadeOut(400);
});


//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu').toggleClass('active-menu');

  });
});

//tab
$('.tab-pane').on('click',function(){
    var currTab = $(this).index();
  
    $('.tab-pane ').removeClass('active-tab');
    $(this).addClass('active-tab');
  
    $('.tab-text').removeClass(' active-tab');
    $('.tab-text').eq(currTab).addClass(' active-tab');
})


$('.single-item').slick({
  infinite: true,
  dots: true,
  slidesToShow:3,
  slidesToScroll: 1,
  pauseOnHover:true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 1800,

  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow:2,
      }
    },
    {
      breakpoint:1449,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:1299,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:1199,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint:911,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint:820,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
	
$('.center').slick({
  infinite: true,
  dots: true,
  centerMode: true,
  slidesToShow:3,
  slidesToScroll: 1,
  pauseOnHover:true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 1800,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:1449,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:1299,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:1199,
      settings: {
        slidesToShow: 1.5,
      }
    },
    
    {
      breakpoint:911,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint:820,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});



