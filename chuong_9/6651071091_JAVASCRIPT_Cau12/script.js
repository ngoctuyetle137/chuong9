$(document).ready(function() {
  $('input[name="passport"]').on('change', function() {
    if ($(this).val() === 'yes') {
      $('#passportBox').slideDown();
    } else {
      $('#passportBox').slideUp();
    }
  });

  $('input[name="creditCard"]').on('change', function() {
    if ($(this).val() === 'yes') {
      $('#creditBox').slideDown();
    } else {
      $('#creditBox').slideUp();
    }
  });
});

