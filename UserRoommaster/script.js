// Gán sự kiện khi chọn một mục trong dropdown
const items = document.querySelectorAll(".dropdown-item");
const roomTypeInput = document.getElementById("roomTypeInput");

items.forEach((item) => {
  item.addEventListener("click", function () {
    roomTypeInput.value = this.textContent; // Gán giá trị được chọn vào input
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
    let currentValue = parseInt(roomCount.value);
    if (currentValue < 80) {
      // Giới hạn số lượng phòng tối đa là 80
      roomCount.value = currentValue + 1;
    }
  });
});
