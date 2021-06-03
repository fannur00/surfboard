;(function () {
    const sections = $('.section');
    const display = $('.maincontent');
    const sidemenu = $('.fixed-menu');


    let inScroll = false;

    sections.first().addClass('active');

    const countSectionPosition = sectionEq => {
        return sectionEq * -100;
    }

    const changeMenuThemeForSection = (sectionEq) => {
        const currentSection = sections.eq(sectionEq);
                const menuTheme = currentSection.attr("data-sidemenu-theme");

                if(menuTheme === "black"){
                    sidemenu.addClass('fixed-menu_shadowed')
                }else{
                    sidemenu.removeClass('fixed-menu_shadowed')
                }
    }
   
    const perfomTransition = sectionEq => {

        if(inScroll=== false){

            inScroll = true;
            
            const position = countSectionPosition(sectionEq);

            changeMenuThemeForSection(sectionEq);
            
            display.css({
                transform: `translateY(${position}%)`
            });

            sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
            sidemenu.find('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active');


            setTimeout(() => {
                inScroll = false;
            }, 1300);
        }
    }

    const viewportScroller = () => {

        const activeSection = sections.filter('.active');
        const nextSection = activeSection.next();
        const prevSection = activeSection.prev();

        return{
            next(){
                if(nextSection.length){
                perfomTransition(nextSection.index());
                }
            },
            prev() {
                if(prevSection.length){
                    perfomTransition(prevSection.index());
                }
            }
        }

    }

    $(window).on('wheel', e => {
        if($('.fullscrean-menu').hasClass('active')) return
        const deltaY = e.originalEvent.deltaY;
        const scroller = viewportScroller();

        

        if(deltaY > 0) {
            scroller.next();
        }

        if(deltaY < 0){
            scroller.prev();

        }
    });

    $(window).on('keydown', (e) => {
        if($('.fullscrean-menu').hasClass('active')) return
        const tagName = e.target.tagName.toLocaleLowerCase();
        const scroller = viewportScroller();

        if(tagName !== "input" && tagName !== "textarea"){
            switch (e.keyCode) {
            case 38:
                scroller.prev();
                break;

            case 40:
                scroller.next();
                break;
            
        }
        }
        
    });

    $('[data-scroll-to]').click(e => {
        e.preventDefault();
       
        const $this = $(e.currentTarget);
        const target = $this.attr('data-scroll-to');
        const reqSection = $(`[data-section-id=${target}]`);

        perfomTransition(reqSection.index());
        if($('.fullscrean-menu').removeClass('active')) return
    })

    $("body").swipe( {
    swipe: function (event, direction) {
        const scroller = viewportScroller();
        let scrollDirection = '';

        if(direction === 'up') scrollDirection = "next";
        if(direction === 'down') scrollDirection = "prev";

        scroller[scrollDirection]();
    }
    });
})();