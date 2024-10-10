/* Hàm bật/tắt hiển thị danh sách con */
function toggleDropdown(element) {
  var parentLi = element.parentElement;
  parentLi.classList.toggle("active");
}
var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie", // Loại biểu đồ là "pie" (biểu đồ tròn)
  data: {
    labels: ["Red", "Blue", "Yellow"], // Các nhãn cho biểu đồ tròn
    datasets: [
      {
        data: [300, 50, 100], // Dữ liệu cho biểu đồ
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Màu sắc cho mỗi phần
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "left", // Chú giải sẽ xuất hiện ở trên biểu đồ (ngang)
        labels: {
          boxWidth: 20, // Kích thước hộp màu
          padding: 20, // Khoảng cách giữa các chú giải
        },
      },
    },
  },
});

var ctx = document.getElementById("myBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar", // Loại biểu đồ là "bar" (biểu đồ cột)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1, // Độ rộng của đường viền cột
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});

var ctx = document.getElementById("myMultiLineChart").getContext("2d");
var myMultiLineChart = new Chart(ctx, {
  type: "line", // Loại biểu đồ là "line"
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Nhãn cho trục X
    datasets: [
      {
        label: "Doanh thu 1",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho đường thứ 1
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)", // Màu cho đường thứ 1
        tension: 0.1,
      },
      {
        label: "Doanh thu 2",
        data: [28, 48, 40, 19, 86, 27], // Dữ liệu cho đường thứ 2
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)", // Màu cho đường thứ 2
        tension: 0.1,
      },
      {
        label: "Doanh thu 3",
        data: [18, 48, 77, 9, 100, 43], // Dữ liệu cho đường thứ 3
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)", // Màu cho đường thứ 3
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục Y từ 0
      },
    },
  },
});

var ctx = document.getElementById("Tdoanhthu").getContext("2d");
var myLineChart = new Chart(ctx, {
  type: "line", // Loại biểu đồ là "line" (biểu đồ đường)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        fill: false, // Không tô màu dưới đường
        borderColor: "rgba(75, 192, 192, 1)", // Màu của đường
        tension: 0.1, // Độ cong của đường
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});
var ctx = document.getElementById("allKhach").getContext("2d");
var myLineChart = new Chart(ctx, {
  type: "line", // Loại biểu đồ là "line" (biểu đồ đường)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        fill: false, // Không tô màu dưới đường
        borderColor: "rgba(75, 192, 192, 1)", // Màu của đường
        tension: 0.1, // Độ cong của đường
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});

var ctx = document.getElementById("Nhaphang").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar", // Loại biểu đồ là "bar" (biểu đồ cột)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1, // Độ rộng của đường viền cột
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});

var ctx = document.getElementById("Xuathang").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar", // Loại biểu đồ là "bar" (biểu đồ cột)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1, // Độ rộng của đường viền cột
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});

var ctx = document.getElementById("Datweb").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar", // Loại biểu đồ là "bar" (biểu đồ cột)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1, // Độ rộng của đường viền cột
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});

var ctx = document.getElementById("Tructiep").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar", // Loại biểu đồ là "bar" (biểu đồ cột)
  data: {
    labels: ["January", "February", "March", "April", "May", "June"], // Các nhãn
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: [65, 59, 80, 81, 56, 55], // Dữ liệu cho biểu đồ
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1, // Độ rộng của đường viền cột
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Bắt đầu trục y từ số 0
      },
    },
  },
});
