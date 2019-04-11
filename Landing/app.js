$('.form_call_button').on('click',(event)=>{
    event.preventDefault();
    $('.data-form').toggle();
});

$('.delete_button').on('click', (event)=>{
    event.preventDefault();
    $('.data-form').hide();
});

$('.button').on('click', (event)=>{
    event.preventDefault();
});

$('.sandwich_button').on('click', ()=>{
   $('.mobile_header_nav').toggle();
});

$('.mobile_header_nav a').on('click', ()=>{
    $('.mobile_header_nav').hide();
});