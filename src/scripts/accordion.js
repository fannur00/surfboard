;(function () {
    $('.board-menu__item').on('click', function(e) {
        e.preventDefault();
        const isMobil = window.matchMedia("(max-width: 768px)").matches;
        const menuContent = $(this).find('.bm-item__content');
        $(this).siblings().find('.bm-item__content').css('width', 0);
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $(this).siblings().removeClass('active');

            if(isMobil){
             menuContent.css('width', $(window).width() - $(this).find('.bm-item__header').width() * $(this).parent('.board-menu').find('.bm-item__header').length);

            } else {
            menuContent.css('width', '500px');
                
            };

        }else {
            menuContent.css('width', 0);
        };
    });
})()