// $(document).ready(function(){
//   new WOW().init();
// });

$(document).ready(function(){
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
    });
});

$(document).ready(function(){
  $(".tabs__caption li").click(function () {
    var caption = $(this).html();
    if(caption == "Общая информация"){
      $("#first__about .tabs .container .list__third").css("bottom","320px");
      $("#first__for_producers .tabs .container .list__two").css("display","block");
      $("#first__for_producers .tabs .container .list__third").css("display","block");
      $("#first__for_producers .tabs .container .list__third").css("top","960px");
      $("#first__for_producers .tabs .container .list__third").css("right","-455px");
      $("#first__for_producers .tabs .container .list__fourth").css("display","block");
      $("#first__for_producers .tabs .container .list__fourth").css("top","1550px");
      $("#first__for_producers .tabs .container .list__fourth").css("left","-300px");
      $("#first__for_producers .tabs .container .list__seven").css("display","none");
    }
    if(caption == "«Весна» сегодня"){
      $("#first__about .tabs .container .list__third").css("bottom","395px");
    }
    if(caption == "Руководство"){
      $("#first__about .tabs .container .list__third").css("bottom","450px");
    }
    if(caption == "Информация для производителей"){
      $("#first__for_producers .tabs .container .list__two").css("display","none");
      $("#first__for_producers .tabs .container .list__third").css("display","block");
      $("#first__for_producers .tabs .container .list__third").css("display","none");
      $("#first__for_producers .tabs .container .list__fourth").css("display","none");
      $("#first__for_producers .tabs .container .list__seven").css("display","block");
    }
    if(caption == "Презентация для производителей"){
      $("#first__for_producers .tabs .container .list__two").css("display","none");
      $("#first__for_producers .tabs .container .list__third").css("display","none");
      $("#first__for_producers .tabs .container .list__fourth").css("display","block");
      $("#first__for_producers .tabs .container .list__fourth").css("top","200px");
      $("#first__for_producers .tabs .container .list__fourth").css("left","1270px");
      $("#first__for_producers .tabs .container .list__seven").css("display","none");
    }
  });
});

$(document).ready(function(){
  $("#first__for_pharmacies .tabs__caption li").click(function () {
    var caption = $(this).html();
    if(caption == "Общая информация"){
      $("#first__for_pharmacies .tabs .container .list__one").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__third").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__seven").css("display","none");
      $("#first__for_pharmacies .tabs .container .list__eight").css("display","none");
    }
    if(caption == "Для руководителей Аптек и АС"){
      $("#first__for_pharmacies .tabs .container .list__one").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__third").css("display","none");
      $("#first__for_pharmacies .tabs .container .list__seven").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__seven").css("top","165px");
      $("#first__for_pharmacies .tabs .container .list__eight").css("display","none");
    }
    if(caption == "Презентация для аптек"){
      $("#first__for_pharmacies .tabs .container .list__seven").css("display","none");
      $("#first__for_pharmacies .tabs .container .list__eight").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__third").css("display","none");
     
    }
    if(caption == "Заказать звонок"){
      $("#first__for_pharmacies .tabs .container .list__seven").css("display","none");
      $("#first__for_pharmacies .tabs .container .list__eight").css("display","block");
      $("#first__for_pharmacies .tabs .container .list__third").css("display","none");
    }
  });
});

//Модальное окно

$(document).ready(function() {
  $('.popup__content').magnificPopup({
    type: 'image',
       gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },

      fixedContentPos: false,
      //fixedBgPos: true,
      navigateByImgClick: true,

      overflowY: 'auto',

      closeBtnInside: false,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,

  });
});

//Гамбургер меню

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }

$(".hamburger").click(function(){
  $("nav").slideToggle(300);
});

$('nav .panel a.without__item').click(function(){
  $("nav").slideToggle(300);
});

//Переключение табов при переходе с ссылки в гамбургер-меню

function saveGlobalVar(name, value) {
    localStorage.setItem(name, value); // сохраняем в localStorage значение
}

function getGlobalVar(name) {
    return localStorage.getItem(name); // получаем значение свойства localStorage
}

$(document).ready(function() {
  $('nav .panel-body a').click(function(){
    $("nav").slideToggle(300); // Убираение гамбургер меню при клике на ссылку в меню
    var caption_menu = $(this).html();
    saveGlobalVar('menu', caption_menu);
  });

  $('.menu__item .drop__menu a').click(function(){
    var caption_menu = $(this).html();
    saveGlobalVar('menu', caption_menu);
  });

  $('.menu__item a').click(function(){
    var caption_menu = $(this).html();
    saveGlobalVar('menu', caption_menu);
  });

  $('a.apt').click(function(){
    var caption_menu = "Регистрация для руководителей аптек и АС";
    saveGlobalVar('menu', caption_menu);
  });

  $('a.prod').click(function(){
    var caption_menu = "Регистрация для руководителей производителей";
    saveGlobalVar('menu', caption_menu);
  });

});

//Иницыализация прелоадера

// var count__load = 0;
//saveGlobalVar('c_load', count__load);

$(window).load(function(){
  // count__load = getGlobalVar('c_load');
  // count__load++; 
  // saveGlobalVar('c_load', count__load);
  // if((getGlobalVar('c_load')) <=1){
    $(".asociation").delay(800).addClass('loaded').fadeOut('slow');
    $(".preloader").delay(800).addClass('loaded').fadeOut('slow');
  // }
  // else{
  //   $('.preloader').css('display','none');
  //   $('.pulse').css('display','none');
  //   $('.anti').css('display','none');
  // }
  $("#first, #feedback, #whats, #news, #partners, footer").css('opacity','1');
});

$(document).ready(function() {

  var menu_m = getGlobalVar('menu');

  // var doc_w = $(document).width();
  // if (doc_w < 992){

    if(menu_m == ""){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_1').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_1').addClass('active');
    }
    if(menu_m == "Регистрация для руководителей аптек и АС"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_1').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_1').addClass('active');
    }
    if(menu_m == "Регистрация для руководителей производителей"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_2').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_2').addClass('active');
    }
    if(menu_m == "Общая информация"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_1').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_1').addClass('active');
    }
    if(menu_m == "«Весна» сегодня"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_2').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_2').addClass('active');
    }
    if(menu_m == "Руководство"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_3').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_3').addClass('active');
    }
    if(menu_m == "Для руководителей Аптек и АС"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_2').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_2').addClass('active');
    }
    if(menu_m == "Презентация для аптек"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_3').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_3').addClass('active');
    }
    if(menu_m == "Заказать звонок"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_4').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_4').addClass('active');
    }
    if(menu_m == "Информация для производителей"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_2').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_2').addClass('active');
    }
    if(menu_m == "Презентация для производителей"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_3').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_3').addClass('active');
    }
    if(menu_m == "Региональные конференции"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_1').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_1').addClass('active');
    }
    if(menu_m == "Тематические конференции"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_2').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_2').addClass('active');
    }
    if(menu_m == "Обучающие семинары"){
      $('.tabs__caption li').each(function(){
        $(this).removeClass('active');
      });
      $('.tabs__caption li#about_li_3').addClass('active');
      $('div.tabs__content').each(function(){
        $(this).removeClass('active');
      });
      $('div#about_3').addClass('active');
    }
    // var count = 0;
    // $('.tabs__caption li').each(function(){
    //   tabs_menu = $(this).html();
    //   if(menu_m !== tabs_menu){
    //     count++;
    //   }
    //   if(menu_m == tabs_menu){
    //     count = 0;
    //     return true;
    //   }
    // });
    // if(count < 3){
    //   if(menu_m !== "Общая информация"){
    //     $('.tabs__caption li#about_li_1').removeClass('active');
    //     $('div#about_1').removeClass('active');
    //   }
    // }
    // if(count >= 3){
    //   $('.tabs__caption li#about_li_1').addClass('active');
    //   $('div#about_1').addClass('active');
    // }

  // }
});

//Активный пункт таба при разрешении екрана > 767

// $(window).resize(function() {
//   var doc_w = $(document).width();
//   if (doc_w > 767){

//     $('.tabs__caption li').each(function(){
//       $(this).removeClass('active');
//     });
    
//     $('.tabs__content').each(function(){
//       $(this).removeClass('active');
//     });

//     $('#about_li_1').addClass('active');
//     $('#about_1').addClass('active');

//   }
// }

// $(document).ready(function() {
//   var doc_w = $(document).width();
//   if (doc_w > 992){

//     $('.tabs__caption li').each(function(){
//       $(this).removeClass('active');
//     });
    
//     $('.tabs__content').each(function(){
//       $(this).removeClass('active');
//     });

//     $('#about_li_1').addClass('active');
//     $('#about_1').addClass('active');

//   }
// });

$(document).ready(function(){
  $('[data-submit]').on('click', function(){
    // e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
         el.validate({
          rules:{
          tel:{
              required:true,
              regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
          name:{
              required:true
          },
            email:{
              required:true,
              email:true
            }
          },
         messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения!',
            },
            email:{
              required:'Поле обязательно для заполнения!',  
              email:'Неверный формат E-mail'
            }
          },           
          submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
              var $formId = $(form).attr('id');
              switch($formId){
              case'goToNewPage':
                $.ajax({
                   type: 'POST',
                   url: $form.attr('action'),
                   data: $form.serialize(),
                })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
            yaCounter27714603.reachGoal('lm17lead');
                });
              break;        
              case'popupResult':
               $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {   
                   //  setTimeout(function (){
                   //   $.arcticmodal('close');
                   //  });
                   //  setTimeout(function (){
                   //     $('.arcticmodal-overlay').fadeOut();
                   // },400);                   
                    setTimeout(function (){
                     $('#loader').fadeOut();
                    },1500);
                    setTimeout(function (){
                      $('#overlay').fadeIn();
                      $form.trigger('reset');
                    },1100);
                    $('#overlay').on('click', function(e) {
                      $('#overlay').fadeOut();
                    });
                  });
              break;
            }        
return false; 
    }                           
  })
   }                        
   $('.js-form').each(function() {
      valEl($(this)); 
   });
  $('[data-scroll]').on('click', function(){
    $('html, body').animate({
          scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
      }, 2000);
      event.preventDefault();
  })          
});

$(document).ready(function(){
  $('[registration]').on('click', function(){
    // e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
         el.validate({
          rules:{
          tel:{
              required:true,
              regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
          name:{
              required:true
          },
            email:{
              required:true,
              email:true
            }
          },
         messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения!',
            },
            email:{
              required:'Поле обязательно для заполнения!',  
              email:'Неверный формат E-mail'
            }
          },           
          submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
              var $formId = $(form).attr('id');
              switch($formId){
              case'goToNewPage':
                $.ajax({
                   type: 'POST',
                   url: $form.attr('action'),
                   data: $form.serialize(),
                })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
            yaCounter27714603.reachGoal('lm17lead');
                });
              break;        
              case'popupResult':
               $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {   
                   //  setTimeout(function (){
                   //   $.arcticmodal('close');
                   //  });
                   //  setTimeout(function (){
                   //     $('.arcticmodal-overlay').fadeOut();
                   // },400);                   
                    setTimeout(function (){
                     $('#loader').fadeOut();
                    },1500);
                    setTimeout(function (){
                      $('#overlay').fadeIn();
                      $form.trigger('reset');
                    },1100);
                    $('#overlay').on('click', function(e) {
                      $('#overlay').fadeOut();
                    });
                  });
              break;
            }        
return false; 
    }                           
  })
   }                        
   $('.js-form').each(function() {
      valEl($(this)); 
   });
  $('[data-scroll]').on('click', function(){
    $('html, body').animate({
          scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
      }, 2000);
      event.preventDefault();
  })          
});

$(document).ready(function() {
    $('.dfo__hover_1, .dfo__hover_2, .dfo__hover_3, .dfo__hover_4, .dfo__hover_5, .dfo__hover_6, .dfo__hover_7, .dfo__hover_8, .dfo__hover_9').hover(
     function() {
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .active').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .img__hover').css('display', 'block');
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .description__area').css('display', 'block');
     },
     function() {
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .active').css('display', 'block'); 
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .img__hover').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.dfo .description__area').css('display', 'none');
    }
)}); 

$(document).ready(function() {
  $('.dfo__hover_10, .dfo__hover_11, .dfo__hover_12').hover(
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .active').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .img__hover').css('display', 'block');
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .description__area').css('display', 'block');
   },
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .active').css('display', 'block'); 
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .img__hover').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.sfo .description__area').css('display', 'none');
    }
)});

$(document).ready(function() {
  $('.dfo__hover_13').hover(
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .active').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .img__hover').css('display', 'block');
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .description__area').css('display', 'block');
   },
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .active').css('display', 'block'); 
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .img__hover').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.pfo .description__area').css('display', 'none');
    }
)}); 

$(document).ready(function() {
  $('.dfo__hover_14').hover(
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .active').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .img__hover').css('display', 'block');
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .description__area').css('display', 'block');
    },
    function() {
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .active').css('display', 'block'); 
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .img__hover').css('display', 'none');
      $('section#first__about .tabs .tabs__content .map .okrug.szfo .description__area').css('display', 'none');
    }
)});

$('.partnyor__slider').slick({
  centerMode: true,
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  adaptiveHeight: true,
  slidesToScroll: 1,
  edgeFriction: 0.15,
  variableWidth: true,
  focusOnSelect: true,
  //centerPadding: true,
  speed: 300,
  autoplay: true,
  lazyLoad: 'ondemand',
    responsive: [
     {
        breakpoint: 600,
        settings: {
        Arrows: false,
        slidesToShow: 2
      }
     },
     {
        breakpoint: 480,
        settings: {
          Arrows: false,
          slidesToShow: 1
      }
    },
    {
        breakpoint: 375,
        settings: {
          Arrows: false,
          slidesToShow: 1
      }
    },
    {
        breakpoint: 321,
        settings: {
          Arrows: false,
          slidesToShow: 1
      }
    },
    ]
});


//Otziv_personalniy

$('.slider__foto').slick({
  centerMode: true,
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  edgeFriction: 0.15,
  //variableWidth: true,
  focusOnSelect: true,
  centerPadding: true,
  asNavFor: '.slider__description',
  prevArrow: '<i class="fa reviews__arrows_prev fa-caret-left" aria-hidden="true"></i>',
  nextArrow: '<i class="fa reviews__arrows_next fa-caret-right" aria-hidden="true"></i>',
  responsive: [
    {
       breakpoint: 767,
       settings: {
       arrows: false
     }
    },
     {
        breakpoint: 600,
        settings: {
        Arrows: false
      }
     },
     {
        breakpoint: 480,
        settings: {
          Arrows: false
      }
    },
    {
        breakpoint: 375,
        settings: {
          Arrows: false
      }
    },
    {
        breakpoint: 321,
        settings: {
          Arrows: false
      }
    },
    ]
});

$('.slider__description').slick({
  centerMode: true,
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  edgeFriction: 0.15,
  //variableWidth: true,
  focusOnSelect: true,
  centerPadding: true,
  asNavFor: '.slider__foto',
  prevArrow: '<i class="fa reviews__arrows_prev fa-caret-left" aria-hidden="true"></i>',
  nextArrow: '<i class="fa reviews__arrows_next fa-caret-right" aria-hidden="true"></i>',
});

//Активный пункт основного меню

$(function () {
  var location = window.location.href;
  var cur_url = location.split('/').pop();
  //console.log(cur_url);
  $('header .menu .main__menu .menu__item').each(function () {
    var link = $(this).find('a').attr('href');

    if(cur_url == link){
      $(this).addClass('menu__active');
    }

  });

  if (cur_url == 'event_item.html'){
    $('header .menu .main__menu .menu__item').each(function () {
      var link = $(this).find('a').attr('href');
      if(link == "events.html"){
        $(this).addClass('menu__active');
      }
    });
  }

  if (cur_url == 'news_shablon.html'){
    $('header .menu .main__menu .menu__item').each(function () {
      var link = $(this).find('a').attr('href');
      if(link == "news_1.html"){
        $(this).addClass('menu__active');
      }
    });
  }

  if (cur_url == 'otzivi_o_rabote.html'){
    $('.tabs__caption #about_li_1').addClass('active');
    $('#about_1').addClass('active');
  }
});


$(document).ready(function() {
  $(function () {
    $('.representatives .representatives__item').each(function(e){
      var th = $(this);
      th.attr('id','review_' + e);
    });
  });
});

$('#time_msk').datetimepicker({
  datepicker:false,
  format:'H:i'
});

// $(document).ready(function() {
//   var doc_w = $(document).width();
//   if (doc_w >= 992){
//     $('#first__news .news__content').equalHeights();
//     console.log(doc_w);
//   }
//   else{
//     $('#first__news .news__content').equalHeights(destory);
//   }
// });




//Переход по ссылкам подменю основного меню

// $(document).ready(function() {
//   $('.menu__item .drop__menu a').click(function(){
//     var caption_menu_m = $(this).html();
//     saveGlobalVar('menu', caption_menu_m);
//     console.log(caption_menu_m);
    // if(caption_menu_m == "Общая информация"){
    //   $('.tabs__caption li').each(function(){
    //     $(this).removeClass('active');
    //   });

    //   $('#about_li_1').addClass('active');
    //   $('#about_1').addClass('active');
    // }
    // if(caption_menu_m == '"Весна" сегодня'){
    //   $('.tabs__caption li').each(function(){
    //     $(this).removeClass('active');
    //   });

    //   $('#about_li_2').addClass('active');
    //   $('#about_2').addClass('active');
    // }
//   })
// });

// $(document).ready(function() {
//   var menu_m_m = getGlobalVar('menu');
//   console.log("Тут все нормал: " + menu_m_m);

//   if(menu_m_m == "Общая информация"){
//     $('.tabs__caption li').each(function(){
//       $(this).removeClass('active');
//     });

//     $('#about_li_1').addClass('active');
//     $('#about_1').addClass('active');
//   }
//   if(menu_m_m == '"Весна" сегодня'){
//     $('.tabs__caption li').each(function(){
//       $(this).removeClass('active');
//     });

//     $('#about_li_2').addClass('active');
//     $('#about_2').addClass('active');
//   }
//   if(menu_m_m == 'Руководство'){
//     $('.tabs__caption li').each(function(){
//       $(this).removeClass('active');
//     });

//     $('#about_li_3').addClass('active');
//     $('#about_3').addClass('active');
//   }

// });







