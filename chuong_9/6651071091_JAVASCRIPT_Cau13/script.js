$(document).ready(function() {
  $('#togglePassword').on('click', function() {
    const input = $('#pwdInput');
    const type = input.attr('type') === 'password' ? 'text' : 'password';
    input.attr('type', type);
    $(this).toggleClass('fa-eye fa-eye-slash');
  });
});

