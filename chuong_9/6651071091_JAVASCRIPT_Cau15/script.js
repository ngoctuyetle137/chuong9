$(document).ready(function() {
  $('.tabs-nav li').on('click', function() {
    const targetId = $(this).data('tab');
    $('.tabs-nav li').removeClass('active');
    $(this).addClass('active');

    $('.tab-pane').removeClass('active').hide();
    $('#' + targetId).fadeIn().addClass('active');
  });
});

