$('#slider_item1').on('click', ()=>{
   $('#slider_item1').addClass("active_slider");
   $('#slider_item2').removeClass("active_slider");
   $('#slider_item3').removeClass("active_slider");
   setTimeout(()=>{$('.main_wrapper').css({"backgroundColor":"#849d8f", "backgroundImage":"url('img/backlight.png')"})},300);setTimeout(()=>{
        $('.one_icecream').css({"backgroundImage":"url('img/ice-cream-one.png')", "backgroundRepeat":"no-repeat"});
        $('.two_icecream').css({"backgroundImage":"url('img/strawberry-ice-cream.png')", "backgroundRepeat":"no-repeat"});
        $('#icecream_name p').text("Крем-брюле и пломбир\n" +
            "с малиновым джемом");
    },500);
});

$('#slider_item2').on('click', ()=>{
    $('#slider_item2').addClass("active_slider");
    $('#slider_item1').removeClass("active_slider");
    $('#slider_item3').removeClass("active_slider");
    setTimeout(()=>{$('.main_wrapper').css({"backgroundColor": "#8996a6", "backgroundImage":"url('img/backlight2.png')"})},300);
    setTimeout(()=>{
        $('.one_icecream').css({"backgroundImage":"url('img/ice-cream-one2.png')", "backgroundRepeat":"no-repeat"});
        $('.two_icecream').css({"backgroundImage":"url('img/ice-cream-two2.png')", "backgroundRepeat":"no-repeat"});
        $('#icecream_name p').text("Шоколадный пломбир\n" +
            "и лимонный сорбет ");
    },500);

});

$('#slider_item3').on('click', ()=>{
    $('#slider_item3').addClass("active_slider");
    $('#slider_item1').removeClass("active_slider");
    $('#slider_item2').removeClass("active_slider");
    setTimeout(()=>{$('.main_wrapper').css({"backgroundColor": "#9d8b84", "backgroundImage":"url('img/backlight3.png')"})},300);
    setTimeout(()=>{
        $('.one_icecream').css({"backgroundImage":"url('img/ice-cream-one3.png')", "backgroundRepeat":"no-repeat"});
        $('.two_icecream').css({"backgroundImage":"url('img/ice-cream-two3.png')", "backgroundRepeat":"no-repeat"});
        $('#icecream_name p').text("Пломбир с помадкой\n" +
            "и клубничный щербет");
    },500);
});

$('.header_menu a:first-child').on('click', ()=>{
    console.log($('.header_menu a:first-child').text());
    $('.header_menu a:first-child').toggleClass("active_link");
    $('.header_menu a:first-child').toggleClass("passive_link");
    $('.login_block').hide();
    $('.search_block').hide();
    if($('.header_menu a:first-child').hasClass("active_link")){
        $('.main_menu').css({"display":"block"});
    }else{
        $('.main_menu').css({"display":"none"});
    }
});

$('#search').on('click', ()=>{
   $('.search_block').toggle();
   $('.login_block').hide();
   $('.main_menu').css({"display":"none"});
   $('.header_menu a:first-child').removeClass("active_link");
   $('.header_menu a:first-child').addClass("passive_link");
});

$('#login').on('click', ()=>{
    $('.login_block').toggle();
    $('.search_block').hide();
    $('.main_menu').css({"display":"none"});
    $('.header_menu a:first-child').removeClass("active_link");
    $('.header_menu a:first-child').addClass("passive_link");
});


$('.address_block .button').on('click', ()=>{
   $('.overlay').show();
   $('.feedback_form').show();
   $('.search_block').hide();
   $('.login_block').hide();
   $('.main_menu').css({"display":"none"});
   $('.header_menu a:first-child').removeClass("active_link");
   $('.header_menu a:first-child').addClass("passive_link");
});

$('.feedback_form .close_form').on('click', ()=>{
    $('.overlay').hide();
    $('.feedback_form').hide();
});

$('.feedback_form .button').on('click', ()=>{
    $('.overlay').hide();
    $('.feedback_form').hide();
});

$('.hit_product_1').on('mouseenter', ()=>{
    $('.hit_product_1 .hit_product_view').css({"display":"block"});
});

$('.hit_product_2').on('mouseenter', ()=>{
    $('.hit_product_2 .hit_product_view').css({"display":"block"});
});

$('.hit_product_3').on('mouseenter', ()=>{
    $('.hit_product_3 .hit_product_view').css({"display":"block"});
});

$('.hit_product_4').on('mouseenter', ()=>{
    $('.hit_product_4 .hit_product_view').css({"display":"block"});
});

$('.hit_product').on('mouseleave', ()=>{
    $('.hit_product_view').css({"display":"none"});
});