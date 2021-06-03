;(function () { 
    $('.form').submit((e) => {
        e.preventDefault();

            const form = $(e.currentTarget);
            const name = form.find("[name='name']");
            const phone = form.find("[name='phone']");
            const comment = form.find("[name='comment']");
            const to = form.find("[name='to']");

            [name, phone, comment, to].forEach(element => {
                element.removeClass("form__input-error");
                if(element.val().trim() === ""){
                    element.addClass("form__input-error");
                }
            });

            const modal = $(".modal");
            const content = modal.find(".modal__content");

            content.removeClass('error__modal');

            errorField = form.find(".form__input-error")

            if(errorField.length === 0){
                $.ajax({
                    url: "https://webdev-api.loftschool.com/sendmail",
                    method: "post",
                    data: {
                        name: name.val(),
                        phone: phone.val(),
                        comment: comment.val(),
                        to: to.val(),
                    },
                    success: (data) => {
                        content.text(data.message);

                        $.fancybox.open({

                            src: "#modal",
                            type: "inline",
                        });
                    },
                    error: (data) => {
                        const message = data.responseJSON.message;
                        content.text(message);
                        content.addClass('error__modal');
                         
                        $.fancybox.open({

                        src: "#modal",
                        type: "inline",
                        });
                    }
                });
            }

        $(".js__submit-btn").click(e => {
            e.preventDefault();

            $.fancybox.close();
        })
    });
    })();