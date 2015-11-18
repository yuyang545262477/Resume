(function($){
    $(document).ready(function(){
        $(window).scroll(function(){
//            屏幕滚动数据
            var m = $(document).scrollTop();
            
            
            var lefts = $('.left');
            lefts.each(function(){
                var that = $(this);
                var left = that.offset().top;
                
                var currentId = '';
                if((m+300)>left){
                    currentId = '#'+that.attr('id');
                }else{
                    return false;
                }
                
                var currentLink = $('.right').find('.active');
                if(currentId && currentId != currentLink.attr('href')){
                    currentLink.removeClass('active');
                    $('.right').find('[href='+currentId+']').addClass('active');
                }
            })
            
            
            
        })
    })
})(jQuery);