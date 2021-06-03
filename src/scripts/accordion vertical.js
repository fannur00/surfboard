;(function (){
    $(document).ready(() => {
        $('.team__title').on('click', function(e) {
            e.preventDefault();
            let teamContent = $(this).siblings('.team__content');
            const teamItem = $(this).parent('.team__item');
            teamItem.siblings('.team__item').find('.team__content').css('height', 0);
            $(this).parent().toggleClass('active');
    
            if($(this).parent().hasClass('active')){
                $(this).parent().siblings().removeClass('active');
                teamContent.css('height', teamContent.prop('scrollHeight') +'px');
    
            }else {
                teamContent.css('height', 0);
            }
        });
        
    });
})()