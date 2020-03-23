$('#rising-sun-flag').eraser({
  size: 150,
  completeRatio: 0.9,
  completeFunction() {
    $('#rising-sun-flag').fadeOut(1500, () => {
      $('#text-after-erasing-rising-sun, #fireworks').fadeIn(500, () => {
        $('#text-after-erasing-rising-sun, #fireworks').fadeOut(3000, () => {
          $('#abe-with-flag, #contents').fadeIn(500);
        });
      });
    });
  },
});

setTimeout(() => {
  $('#alert-eraser-information, .dimmed').fadeOut(500);
}, 2000);

$(window).scroll(() => {
  $('.paragraph').each(function() {
    const perParagraphHeight = $(this).offset().top + $(this).outerHeight();
    const windowHeight = $(window).scrollTop() + $(window).height() + 400;

    if (windowHeight > perParagraphHeight) {
      $(this).animate({ opacity: '1' }, 500);
    }
  });
});

$('#go-petition').click(() => {
  window.open('about: blank').location.href = '?';
});
