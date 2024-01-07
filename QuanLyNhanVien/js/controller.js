function getInfo() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;

  var nv = {
    taiKhoan: taiKhoan,
    hoTen: hoTen,
    email: email,
    matKhau: matKhau,
    ngayLam: ngayLam,
    luongCB: luongCB,
    chucVu: chucVu,
    gioLam: gioLam,
    tinhTongLuong: function () {
      var tinhLuong = 0;
      if (this.chucVu === "Sếp") {
        tinhLuong = this.luongCB * 3;
      } else if (this.chucVu === "Trưởng phòng") {
        tinhLuong = this.luongCB * 2;
      } else {
        tinhLuong = this.luongCB * 1;
      }
      return tinhLuong * 1;
    },
    xepLoaiNV: function () {
      var xepLoai = "";
      if (this.gioLam >= 192 && this.gioLam <= 210) {
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
    },
  };
  return nv;
}

function renderDSNV(array) {
  var contentHTML = "";
  for (var i = 0; i < array.length; i++) {
    var data = array[i];
    var trString = `<tr>
    <td>${data.taiKhoan}</td>
    <td>${data.hoTen}</td>
    <td>${data.email}</td>
    <td>${data.ngayLam}</td>
    <td>${data.chucVu}</td>
    <td>${data.tinhTongLuong()}</td>
    <td>${data.xepLoaiNV()}</td>
    <td>
    <button onclick="xoaNV('${
      data.taiKhoan
    }')" class="btn btn-danger">Delete</button>
    <button onclick="suaNV('${
      data.taiKhoan
    }')" class="btn btn-warning" data-toggle="modal"
    data-target="#myModal">Edit</button>
    </td>
    </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function clearForm() {
  var inputFields = document.querySelectorAll("input, select, textarea");

  inputFields.forEach(function (field) {
    field.value = "";
  });
}
