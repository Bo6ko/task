$('div.content').on('click', function () {
    $('header div.nav ul.menu li ul.sub-menu').removeClass('show')
});

var menuHolder = $('header div.nav ul.menu li');
menuHolder.on('click', function () {

    var itemLi          = $(this);
    var subMenuHolder   = itemLi.find('ul.sub-menu');

    if ( subMenuHolder.hasClass('show') ) {
        subMenuHolder.removeClass('show');
    } else {
        subMenuHolder.addClass('show');
    }

});

/* slider */
$('span.dot').on('click', function () {

    var dot                 = $(this);
    var dotDataSlideAttr    = dot.attr('data-slide');
    var sliderHolder        = $('div.slider' + dotDataSlideAttr);

    $('div.mySlides').removeClass('active');
    sliderHolder.addClass('active');
    $('span.dot').removeClass('active');
    dot.addClass('active');

});