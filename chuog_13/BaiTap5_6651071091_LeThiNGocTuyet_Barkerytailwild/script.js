/*
  GHI CHÚ SO SÁNH (Yêu cầu mục 11):
  Nếu dùng Vanilla JS, mỗi lần thêm/xoá giỏ hàng, ta phải tự viết document.querySelector, 
  tự tạo element HTML và gán innerHTML thủ công để vẽ lại DOM. 
  Với Vue.js, Vue tự động theo dõi thay đổi trong mảng "cart" và tự cập nhật số lượng 
  trên Header và danh sách bên Aside nhờ cơ chế phản ứng tức thời (Reactivity).
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      tuKhoa: '', // Liên kết hai chiều (v-model) với ô tìm kiếm
      cart: [],   // Danh sách sản phẩm trong giỏ hàng
      // Mảng products gồm 8 sản phẩm phụ kiện
      products: [
        {
          id: 1,
          ten: 'Electric Blue Case',
          gia: 250000,
          moTa: 'Ốp lưng silicon chống sốc màu xanh thời thượng',
          anh: 'images/sp1.jpg'
        },
        {
          id: 2,
          ten: 'Wireless Charger Pad',
          gia: 350000,
          moTa: 'Đế sạc nhanh không dây chuẩn Qi 15W',
          anh: 'images/sp2.jpg'
        },
        {
          id: 3,
          ten: 'Active TWS Earbuds',
          gia: 590000,
          moTa: 'Tai nghe Bluetooth không dây chống ồn đàm thoại',
          anh: 'images/sp3.jpg'
        },
        {
          id: 4,
          ten: 'Braided Fast Cable Type-C',
          gia: 120000,
          moTa: 'Cáp sạc bọc dù siêu bền công suất 60W',
          anh: 'images/sp4.jpg'
        },
        {
          id: 5,
          ten: 'Midnight Black Case',
          gia: 220000,
          moTa: 'Ốp mỏng nhẹ chống vân tay cao cấp',
          anh: 'images/sp5.jpg'
        },
        {
          id: 6,
          ten: 'Củ sạc GaN 30W Mini',
          gia: 320000,
          moTa: 'Củ sạc công nghệ GaN kích thước siêu nhỏ',
          anh: 'images/sp6.jpg'
        },
        {
          id: 7,
          ten: 'Kính cường lực KingKong',
          gia: 99000,
          moTa: 'Độ cứng 9H viền vát 2.5D chống bụi màng loa',
          anh: 'images/sp7.jpg'
        },
        {
          id: 8,
          ten: 'Giá đỡ điện thoại bàn nhôm',
          gia: 160000,
          moTa: 'Khung hợp kim nhôm xoay gập 180 độ tiện lợi',
          anh: 'images/sp8.jpg'
        }
      ]
    };
  },

  computed: {
    // 1. Tính tổng số lượng hàng trong giỏ
    cartCount() {
      return this.cart.length;
    },

    // 2. Tính tổng tiền tự động khi mảng cart thay đổi
    tongTien() {
      return this.cart.reduce((tong, item) => tong + item.gia, 0);
    },

    // 3. Lọc danh sách theo từ khoá tìm kiếm không phân biệt hoa/thường
    danhSachLoc() {
      const keyword = this.tuKhoa.trim().toLowerCase();
      if (!keyword) {
        return this.products;
      }
      return this.products.filter(sp => 
        sp.ten.toLowerCase().includes(keyword) || 
        sp.moTa.toLowerCase().includes(keyword)
      );
    }
  },

  methods: {
    // Đẩy sản phẩm vào mảng cart -> kích hoạt Vue render lại UI tự động
    themVaoGio(sanPham) {
      this.cart.push(sanPham);
    },

    // Xoá sản phẩm khỏi giỏ dựa vào vị trí index
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },

    // Định dạng tiền tệ VND
    dinhDangTien(soTien) {
      return soTien.toLocaleString('vi-VN') + ' ₫';
    },

    // Sự kiện thanh toán mô phỏng
    thanhToan() {
      alert(`Đơn hàng của bạn gồm ${this.cart.length} món với tổng số tiền ${this.dinhDangTien(this.tongTien)} đã được ghi nhận!`);
      this.cart = []; // Reset giỏ hàng
    }
  }
}).mount('#app');

