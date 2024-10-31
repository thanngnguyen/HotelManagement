const lgname = document.getElementById("lgname");
const storedUsername = localStorage.getItem("username");
if (storedUsername) {
  lgname.innerHTML = `<i class="fas fa-user-circle"></i> ${storedUsername}`;
}
const linknav = document.querySelectorAll(".linav");

// Thêm sự kiện click cho từng liên kết
linknav.forEach((links) => {
  links.addEventListener("click", function () {
    // Xóa lớp "clicked" khỏi tất cả liên kết khác (nếu có)
    linknav.forEach((l) => l.classList.remove("li-after"));

    // Thêm lớp "clicked" cho liên kết đã được nhấn
    this.classList.add("li-after");
  });
});

document.getElementById("check-in").addEventListener("change", function () {
  let checkInDate = new Date(this.value);
  let checkOutInput = document.getElementById("check-out");

  // Ngăn chặn việc chọn ngày trả phòng trước ngày nhận phòng
  checkOutInput.min = this.value;
});

// Lấy các phần tử HTML
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".dropdown-item");

  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(item);

      roomTypeInput.value = this.innerHTML; // Gán giá trị được chọn vào input
    });
  });

  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const roomCount = document.getElementById("roomCount");

  // Sự kiện giảm số phòng
  decreaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(roomCount.value);
    if (currentValue > 1) {
      roomCount.value = currentValue - 1;
    }
  });

  // Sự kiện tăng số phòng
  increaseBtn.addEventListener("click", function () {
    console.log("hehe");
    let currentValue = parseInt(roomCount.value);
    if (currentValue < 80) {
      // Giới hạn số lượng phòng tối đa là 80
      roomCount.value = currentValue + 1;
    }
  });
});

const track = document.querySelector(".bang-chuyen-track");
let currentPosition = 0;
const itemWidth = document.querySelector(".bang-chuyen-item").clientWidth;
const itemsVisible = 3; // Số lượng card có thể nhìn thấy cùng lúc
const totalItems = track.children.length; // Tổng số lượng card
const maxPosition = (totalItems - itemsVisible) * (itemWidth + 20); // 20 là khoảng cách margin giữa các card

function moveLeft() {
  if (currentPosition > 0) {
    currentPosition -= itemWidth + 20; // Trừ cả phần margin
    track.style.transform = `translateX(-${currentPosition}px)`;
  }
}

function moveRight() {
  if (currentPosition < maxPosition) {
    currentPosition += itemWidth + 20; // Cộng cả phần margin
    track.style.transform = `translateX(-${currentPosition}px)`;
  }
}

function DichVu(DvuId) {
  const TatcaDvu = document.getElementsByClassName("dvu");

  // Ẩn tất cả các div
  for (let i = 0; i < TatcaDvu.length; i++) {
    TatcaDvu[i].style.display = "none";
  }

  // Hiển thị div được chọn
  const LuachonDvu = document.getElementById(DvuId);
  LuachonDvu.style.display = "block";
}
// vị trí mặc định
document.querySelectorAll(".li-dvu").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định
    const targetId = this.getAttribute("href").substring(1); // Lấy ID của phần tử đích
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Cuộn mượt đến phần tử đích mà không thay đổi trạng thái cuộn hiện tại
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// doi mau
// Lấy tất cả các liên kết
const links = document.querySelectorAll(".li-link");

// Thêm sự kiện click cho từng liên kết
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Xóa lớp "clicked" khỏi tất cả liên kết khác (nếu có)
    links.forEach((l) => l.classList.remove("li-after"));

    // Thêm lớp "clicked" cho liên kết đã được nhấn
    this.classList.add("li-after");
  });
});
