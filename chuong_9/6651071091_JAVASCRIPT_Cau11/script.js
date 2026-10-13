$(document).ready(function() {
  $('#fileInput').on('change', function() {
    const file = this.files[0];
    if (file) {
      const fileName = file.name;
      const extension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
      $('#fileInfo').html(`
        Tên file: <strong>${fileName}</strong><br>
        Phần mở rộng: <strong>${extension ? '.' + extension : 'Không có'}</strong>
      `);
    } else {
      $('#fileInfo').text('Chưa chọn file nào.');
    }
  });
});

