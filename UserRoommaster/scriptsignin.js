window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".main");

    loader.style.display = "none"; // Ẩn màn hình chờ
    content.style.opacity = "1"; // Đảm bảo nội dung trở nên rõ ràng
  }, 2000); // Đặt thời gian chờ là 3 giây
});

// const email = document.getElementsByName("email")[0];
// const pass = document.getElementById("password");
const mess = document.getElementById("message");

function check(event) {
  // Prevent form submission
  event.preventDefault();

  const email = document.getElementsByName("email")[0].value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
  // let e = email.value.trim();
  // let p = pass.value.trim();

  if (!storedUser) {
    alert("Bạn chưa điền đầy đủ thông tin");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (!checkPassword(password)) {
    if (password.length < 8) {
      mess.textContent = "Mật khẩu phải có ít nhất 8 ký tự.";
    } else {
      mess.textContent =
        "Mật khẩu phải bao gồm chữ in hoa, chữ thường, số và ký tự đặc biệt.";
    }
    mess.style.color = "red";
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Thông tin đăng nhập không hợp lệ");
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
