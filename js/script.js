;(function($){
    $(function(){
        $("header").scrollToGiveClass({baseline:100 });
        
        /* 스와이퍼 동작시키기 display:flex 필요*/
        var mainSwiper = new Swiper("#main_view",{
            wrapperClass:'slider', //슬라이드를 감싸는 클래스
            slideClass:'view', //각 슬라이드에 설정된 클래스
            speed:600,
            autoplay: {
                delay: 3000, //3초마다 슬라이드 자동전환
              },
            spaceBetween:10,
            pagination: {
                el: '.pager', //버튼이 생성될 영역
                bulletActiveClass:'active', //현재 보여지는 슬라이드에 부여될 클래스
                clickable: true // 버튼 클릭시 해당되는 화면으로 이동
              },
        });

        var pressSwiper = new Swiper("#press .inner",{
            wrapperClass:'slider',
            slideClass:'item',
            slidesPerView:1, //나타내는 슬라이드 갯수
            spaceBetween:10,
            pagination: {
                el: '.dot', //버튼이 생성될 영역
                bulletActiveClass:'active', //현재 보여지는 슬라이드에 부여될 클래스
                clickable: true // 버튼 클릭시 해당되는 화면으로 이동
              },
              breakpoints:{
                //화면의 너비가 321px 이상 적용 옵션
                321:{slidesPerView:2, spaceBetween:20},
                //화면의 너비가 641px 이상 적용 옵션
                641:{slidesPerView:3, spaceBetween:30},
                //화면의 너비가 769px 이상 적용 옵션
                769:{slidesPerView:4, spaceBetween:40},
                //화면의 너비가 1025px 이상 적용 옵션
                1025:{slidesPerView:5, spaceBetween:30},
              }
        })

        $("#open_btns .open_search").click(function(e){
            e.preventDefault(); //요소의 본래기능이 동작하지않음.
            $("#search").addClass("open");
        });
        $("#search .close_search").click(function(){
            $("#search").removeClass("open");
        });
        //esc키를 눌렀을때 적용
        $(document).keydown(function(e){
            var state = $("#search").hasClass("open");
            if(state){
                if(e.keyCode == 27/*esc의 키코드*/ || e.which == 27/*파이어 폭스에서 esc의 키코드*/){
                    $("#search").removeClass("open");
                }
            }
        });

        $("#open_btns .open_menu").click(function(){
            $("#menu").toggleClass("open");
            $(".open_menu i").toggleClass("xi-bars")
            $(".open_menu i").toggleClass("xi-close")
        });
    });
})(jQuery); //$ = jQuery


;(function($){
    $(function(){
        
    });
})(jQuery); //$ = jQuery