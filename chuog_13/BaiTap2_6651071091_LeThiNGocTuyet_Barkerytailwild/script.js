// ==========================================================================
// JAVASCRIPT CHO BÀI TẬP 2 - BẾP BÁNH HOMEMADE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Xử lý bật/tắt Mobile Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Tự động đóng menu sau khi nhấp vào liên kết
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Xử lý gửi Form đặt bánh theo yêu cầu
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const customerName = document.getElementById('customerName')?.value || 'Quý khách';
      const cakeType = document.getElementById('cakeType')?.value || 'Bánh';

      alert(`Cảm ơn bạn ${customerName}! Yêu cầu đặt ${cakeType} đã được gửi thành công. Bếp Bánh sẽ liên hệ xác nhận trong thời gian sớm nhất!`);
      orderForm.reset();
    });
  }
});
