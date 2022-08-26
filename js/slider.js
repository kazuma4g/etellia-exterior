$('.button-next').click(function(){
    var curSlide = $('.slide.active');
    var nextSlide = curSlide.next();

    curSlide.fadeOut(1).removeClass('active');
    nextSlide.fadeIn(1).addClass('active');

    if(nextSlide.length == 0){
        $('.slide').first().fadeIn(1).addClass('active');
    }

    $('.slide.active').css('display','flex');

});

$('.button-prev').click(function(){
    var curSlide = $('.slide.active');
    var prevSlide = curSlide.prev();

    curSlide.fadeOut(1).removeClass('active');
    prevSlide.fadeIn(1).addClass('active');

    if(prevSlide.length == 0){
        $('.slide').last().fadeIn(1).addClass('active');
    }

    $('.slide.active').css('display','flex');

});