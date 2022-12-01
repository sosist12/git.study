;(function($){
    $(function(){
        $('.slider').bxSlider({
            auto:true, mode:'fade', pager:true
        });

        /* 요소를 복제하여 추가하기 */
        var menu = $("#gnb > ul").clone();//대상을 복제함

        var sns = $(".sns > ul").clone();
        /* 복제된 내용을 대상에 넣음. */
        $("#main_menu").append(menu);
        $("footer .sns").append(sns);
        $(".menu_btn").click(function(e){
            e.preventDefault();//태그가 가지는 원래 기능이 동작되지 않도록함
            
            var target = $(this).attr("href");
            //this(.menu_btn)안에 있는 href 속성값을 추출한다

            var top = $(target).offset().top;
            //대상.offset().top; 대상이 화면 위에서 부터 떨어진 거리

            $("html,body").animate({scrollTop:top},400);
            
        });
    });
})(jQuery);