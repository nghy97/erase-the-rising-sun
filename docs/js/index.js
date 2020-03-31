$('#rising-sun-flag').eraser({
  size: 150,
  completeRatio: 0.9,
  completeFunction() {
    $('#rising-sun-flag').fadeOut(1500, () => {
      $('#text-after-erasing-rising-sun, #fireworks').fadeIn(500, () => {
        $('#text-after-erasing-rising-sun, #fireworks').fadeOut(5000, () => {
          $('#title-with-flag, #contents').fadeIn(500);
        });
      });
    });
  },
});

setTimeout(() => {
  $('#alert-eraser-information, .dimmed').fadeOut(500);
}, 2000);
