//set content on click
$('.asidebtn').click(function(e){
    e.preventDefault();
    setContent($(this));
});

//set content on load
$('.asidebtn.active').length &&
setContent($('.asidebtn.active'));

function setContent($el){
    $('.asidebtn').removeClass('active');
    $('.sides').hide();

    $el.addClass('active');
    $($el.data('rel')).show();
}