$(document).ready(function() {
  let isOn = true;
  $('#themeToggle').on('click', function() {
    isOn = !isOn;
    if (isOn) {
      $('body').removeClass('dark-theme').addClass('light-theme');
      $(this).text('Theme: ON (Sáng)');
    } else {
      $('body').removeClass('light-theme').addClass('dark-theme');
      $(this).text('Theme: OFF (Tối)');
    }
  });
});

