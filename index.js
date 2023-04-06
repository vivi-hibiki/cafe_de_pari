 $(function () {
        $(window).scroll(function () {
          const windowHeight = $(window).height();
          const scroll = $(window).scrollTop();
      
          $('.element').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 170) {
              $(this).addClass("is-fadein");
            }
          });
        });
      });
    
 
    


      window.onscroll = function(){  
        var scrollTop = window.pageYOffset ;  //スクロール量を代入する
        
           //  ページの高さ：A
           document.documentElement.scrollHeight
           //  画面の高さ：B
           document.documentElement.clientHeight
           //  まだスクロールされていない部分の高さ：C = A - B
           let hiddenHeight =
           document.documentElement.scrollHeight -
           document.documentElement.clientHeight;
           //  スクロール量（px）: D
           let scrollPx = document.documentElement.scrollTop;
           //  スクロール量(%)：E = D / C * 100
           let scrollValue = Math.round((scrollPx / hiddenHeight) * 100);

        if (scrollValue == 0 ) {   //最上部に戻ってきた時
        $(".js-image").css('opacity', '1')
          $('.js-image').css('transition', '0.5s')
    
          $(".git-image").css('opacity', '0')
          $('.git-image').css('transition', '0.5s')
       
          // $(".access-image").css('opacity', '0')
          // $('.access-image').css('transition', '0.5s')

        }
        if (scrollValue > 58) {   //１０pxスクロールした時
          $(".js-image").css('opacity', '0')
          $('.js-image').css('transition', '0.5s')
 
          $(".git-image").css('opacity', '1')
          $('.git-image').css('transition', '0.5s')
          $(".access-image").css('opacity', '0')
          $('.access-image').css('transition', '0.5s')
  

        }
    
        if (scrollValue < 59 ) {   //１０pxスクロールした時
          $(".js-image").css('opacity', '1')
          $('.js-image').css('transition', '0.5s')
          $(".git-image").css('opacity', '0')
          $('.git-image').css('transition', '0.5s')
          $(".access-image").css('opacity', '0')
          $('.access-image').css('transition', '0.5s')
        }

        if (scrollValue> 80 ) {   //１０pxスクロールした時
          $(".js-image").css('opacity', '0')
          $('.js-image').css('transition', '0.5s')
          $(".git-image").css('opacity', '0')
          $('.git-image').css('transition', '0.5s')
          $(".access-image").css('opacity', '1')
          $('.access-image').css('transition', '0.5s')
        }
        }




        $(function() {
          $('.hamburger').click(function() {
              $(this).toggleClass('active');
       
              if ($(this).hasClass('active')) {
                  $('.globalMenuSp').addClass('active');
              } else {
                  $('.globalMenuSp').removeClass('active');
              }
          });
      });
      
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
