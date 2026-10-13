$(document).ready(function() {
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('#btnAdd').on('click', function() {
    const name = $('#uName').val().trim();
    const email = $('#uEmail').val().trim();
    const birthdate = $('#uBirthdate').val();

    if (!name || !email || !birthdate) {
      alert('Vui lòng điền đầy đủ tất cả các trường!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Email không đúng định dạng!');
      return;
    }

    const row = `
      <tr>
        <td style="text-align: center;"><input type="checkbox" class="row-select"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${birthdate}</td>
      </tr>
    `;
    $('#userTable tbody').append(row);

    $('#uName').val('');
    $('#uEmail').val('');
    $('#uBirthdate').val('');
  });

  $('#btnDelete').on('click', function() {
    $('#userTable tbody input.row-select:checked').closest('tr').remove();
  });
});

