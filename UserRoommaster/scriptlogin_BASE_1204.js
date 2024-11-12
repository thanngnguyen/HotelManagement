const fname = document.getElementsByName("fname")[0];
const lname = document.getElementsByName("lname")[0];
const email = document.getElementsByName("email")[0];
const pass = document.getElementById("password");
const mess = document.getElementById("message");
const lgname = document.getElementById("lgname");

function check(event) {
  // Prevent form submission
  event.preventDefault();

  let fn = fname.value.trim();
  let ln = lname.value.trim();
  let e = email.value.trim();
  let p = pass.value.trim();
  //   let lg = lgname.value.trim();

  if (!fn || !ln || !e || !p) {
    alert("Bạn chưa điền đầy đủ thông tin");
    return;
  }

  if (!validateEmail(e)) {
    alert("Email không hợp lệ");
    return;
  }

  if (!checkPassword(p)) {
    if (p.length < 8) {
      mess.textContent = "Mật khẩu phải có ít nhất 8 ký tự.";
    } else {
      mess.textContent =
        "Mật khẩu phải bao gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.";
    }
    mess.style.color = "red";
    return;
  } else {
    mess.textContent = "Mật khẩu hợp lệ.";
    mess.style.color = "green";
    alert("Đăng ký thành công!");
    localStorage.setItem("username", `${fn} ${ln}`);
    window.location.href = "index.html";
  }
}

function checkPassword(password) {
  const cHoa = /[A-Z]/.test(password);
  const cThuong = /[a-z]/.test(password);
  const cSo = /\d/.test(password);
  const kytu = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= 8 && cHoa && cThuong && cSo && kytu;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
