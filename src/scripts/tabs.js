;(function () { 
    $(document).ready(() => {
            
        const findBlockByAlias = (alias) => {
            return $('.reviews__item').filter((ndx, item) => {
            return  $(item).attr('data-linked-with') === alias;
            });
        };

        $('.interactive-avatar__link').on('click', function(e) {
            e.preventDefault();

            const $this = $(e.currentTarget);
            const target = $this.attr('data-open');
            const showItem = findBlockByAlias(target);
            const curItem = $this.closest('.reviews__switchcer-item');

            showItem.addClass('active').siblings().removeClass('active');
            curItem.addClass('active').siblings().removeClass('active');

        });

    });
})();