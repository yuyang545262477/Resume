//两个目标
//第一获取屏幕滚动数据，
//第二，获取每一个div到top的距离。
//第三，判断scrollTop与setoff的大小。推断翻到了那一页.
(function($){
    $(document).ready(function(){
        $(window).scroll(function(){
            var m = $(document).scrollTop();
//            console.log(m);目标一完成。
            var mdivs = $('h3');
            var currentId = '';
            
            var menu = $('#menu');
            
            mdivs.each(function(){
                var that = $(this);
                var mdiv = that.offset().top;
//                console.log(mdiv);任务2完成
//                获得currentId的值
                if(m>mdiv){
                    currentId = '#'+that.attr('id');
//                    console.log(currentId);
                }else{
                    return false;
                }
//                获得menu的值
                var currentLink = menu.find('.active');
                if(currentId && currentLink.attr('href')!=currentId){
                    currentLink.removeClass('active');
                    menu.find('[href='+currentId+']').addClass('active');
                }
                
                
                
            })
        })
    })
})(jQuery);