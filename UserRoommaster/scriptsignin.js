const email = document.getElementsByName("email")[0];
const pass = document.getElementById("password");

function check(event) {
  event.preventDefault();

  let e = email.value.trim();
  let p = pass.value.trim();

  if (!e || !p) {
    alert("Bạn chưa điền đầy đủ thông tin");
    return;
  }

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  let account = accounts.find(acc => acc.email === e && acc.password === p);

  if (account) {
    let temp = accounts.find(acc => acc.email === e);
    sessionStorage.setItem("username", temp.username);
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Email hoặc mật khẩu không đúng!");
  }
}