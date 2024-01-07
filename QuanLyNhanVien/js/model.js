function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCB = luongCB;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tinhTongLuong = function () {
    var tinhLuong = 0;
    if (this.chucVu === "Sếp") {
      tinhLuong = this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      tinhLuong = this.luongCB * 2;
    } else {
      tinhLuong = this.luongCB * 1;
    }
    return tinhLuong * 1;
  };
  this.xepLoaiNV = function () {
    var xepLoai = "";
    if (this.gioLam >= 192 && this.gioLam <= 200) {
      xepLoai = "Xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      xepLoai = "Giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      xepLoai = "khá";
    } else if (this.gioLam < 160 && this.gioLam >= 80) {
      xepLoai = " Trung bình";
    } else {
      xepLoai = "nhập từ 80 - 200";
    }
    return xepLoai;
  };
}
