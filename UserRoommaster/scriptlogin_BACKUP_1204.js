window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".main");

    loader.style.display = "none"; // Ẩn màn hình chờ
    content.style.opacity = "1"; // Đảm bảo nội dung trở nên rõ ràng
  }, 2000); // Đặt thời gian chờ là 3 giây
});

// const fname = document.getElementsByName("fname")[0];
// const lname = document.getElementsByName("lname")[0];
// const email = document.getElementsByName("email")[0];
// const pass = document.getElementById("password");
const mess = document.getElementById("message");
const lgname = document.getElementById("lgname");

sessionStorage.removeItem("username");

function check(event) {
  event.preventDefault();

  let fn = fname.value.trim();
  let ln = lname.value.trim();
  let e = email.value.trim();
  let p = pass.value.trim();

  if (!fname || !lname || !email || !password) {
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
  } else {
    mess.textContent = "Mật khẩu hợp lệ.";
    mess.style.color = "green";
    alert("Đăng ký thành công!");
		addAccount(`${fn} ${ln}`, e, p)
		sessionStorage.setItem("username", `${fn} ${ln}`)
    window.location.href = "index.html";
  }
  const user = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  };
  localStorage.setItem("registeredUser", JSON.stringify(user));
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

function addAccount(username, email, password) {
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  let newAccount = {
    username: username,
    email: email,
    password: password
  };

  accounts.push(newAccount);

  localStorage.setItem("accounts", JSON.stringify(accounts));
}