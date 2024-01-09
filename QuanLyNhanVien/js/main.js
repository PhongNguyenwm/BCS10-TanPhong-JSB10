var dsnv = [];
var dataJason = localStorage.getItem("DSNV");
var arrayNv = JSON.parse(dataJason) || [];

for (var i = 0; i < arrayNv.length; i++) {
  var data = arrayNv[i];
  var nv = new NhanVien(
    arrayNv[i].taiKhoan,
    arrayNv[i].hoTen,
    arrayNv[i].email,
    arrayNv[i].matKhau,
    arrayNv[i].ngayLam,
    arrayNv[i].luongCB,
    arrayNv[i].chucVu,
    arrayNv[i].gioLam
  );
  dsnv.push(nv);
}
renderDSNV(dsnv);

function themNV() {
  var nv = getInfo();
  dsnv.push(nv);
  var dataJason = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", dataJason);
  renderDSNV(dsnv);
  clearForm();
}

function xoaNV(id) {
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].taiKhoan == id) {
      index = i;
    }
  }
  dsnv.splice(index, 1);

  renderDSNV();
}

function suaNV(id) {
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].taiKhoan == id) {
      index = i;
    }
  }
  var nv = dsnv[index];

  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.hoTen;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}

function updateNV() {
  var nv = getInfo();
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].taiKhoan == nv.taiKhoan) {
      index = i;
    }
  }
  dsnv[index] = nv;
  renderDSNV(dsnv);
}

function timKiemNV() {
  var loaiNV = document.getElementById("searchName").value.trim().toLowerCase();

  var ketQuaTimKiem = dsnv.filter((value) => {
    return value.xepLoaiNV().toLowerCase().includes(loaiNV.toLowerCase());
  });

  renderDSNV(ketQuaTimKiem);
}
