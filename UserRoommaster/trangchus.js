window.addEventListener("scroll", function() {
    const header = document.getElementById("main-header");
    const nav = document.getElementsByClassName("navbarHeader")[0]; // Lấy phần tử navbarHeader đầu tiên
    if (window.scrollY > 50) {
      header.classList.add("header-small");
      nav.classList.add("header-small");
    } else {
      header.classList.remove("header-small");
      nav.classList.remove("header-small");
    }
});
const galleries = {
  brands: [
      { title: "Thương Hiệu 1", image: "https://muongthanh.com/images/trademark/type/2019/05/original/brand_1_1556849367.jpg",text: "Roommaster",text_hotel:"LUXURY",image_hover:"https://muongthanh.com/images/trademark/type/2019/05/original/symbol-luxury_1556850064.png"
        ,text_1 :"Sincerity",text_2 : "Outstanding",text_3 : "True Vietnamese Hospitality"
      },
      { title: "Thương Hiệu 2", image: "https://muongthanh.com/images/trademark/type/2019/05/original/brand_2_1556849374.jpg",text: "Roommaster",text_hotel:"GRAND",image_hover:"https://muongthanh.com/images/trademark/type/2019/05/original/symbol-grand_1556850031.png",
        text_1 :"Modern mood",text_2 :"Convenience",text_3 :"Networking"
       },
       { title: "Thương Hiệu 3", image: "https://muongthanh.com/images/trademark/type/2023/10/original/phan-khuc-holiday_1696914758.jpg",text : "Roommaster",text_hotel:"Holiday",image_hover:"https://muongthanh.com/images/trademark/type/2019/05/original/symbol-holiday_1556850046.png"
        ,text_1 :"Local experience",text_2 :"Vacation lifestyle",text_3 :""
       },
      { title: "Thương Hiệu 4", image: "https://muongthanh.com/images/trademark/type/2019/05/original/brand_4_1556849388.jpg" ,text : "Roommaster",text_hotel:"Room master",image_hover:"https://muongthanh.com/images/trademark/type/2019/05/original/symbol-muongthanh_1556850057.png"
        ,text_1 :"Best price",text_2 :"Be Home",text_3 :""}
  ],
  destinations: [
    { title: "", image: "https://muongthanh.com/images/brands/2019/10/11/original/muongthanh-vinh_1570769415.jpg",text :"Nghệ An"
    },
    { title: "", image: "https://muongthanh.com/images/brands/2023/10/10/original/muong-thanh-holiday-mui-ne_1696915424.jpg",text :"Hà Nội"
    },
    { title: "", image: "https://muongthanh.com/images/brands/2023/10/10/original/muong-thanh-holiday-vung-tau_1696917018.jpg",text :"Đắk Lắk"
    },
  ],
  offers: [
  ],
  services: [
  ]
};
let currentIndex = 0; // Chỉ số tab hiện tại
const tabs = document.querySelectorAll('.tab');
const tabInfoElement = document.getElementById('tab-info'); // Phần tử <p> hiển thị tên tab

function updateActiveTab() {
  // Xóa lớp "active" khỏi tất cả các tab
  tabs.forEach(tab => tab.classList.remove('active'));
  // Đặt lớp "active" cho tab hiện tại
  tabs[currentIndex].classList.add('active');

}

function toggleTabsMenu(direction) {
  if (direction === 'left') {
    currentIndex = (currentIndex === 0) ? tabs.length - 1 : currentIndex - 1;
  } else if (direction === 'right') {
    currentIndex = (currentIndex === tabs.length - 1) ? 0 : currentIndex + 1;
  }
  updateActiveTab();
  const tabType = tabs[currentIndex].getAttribute("data-type"); // Lấy loại tab
  showGallery(tabType);
}

function showGallery(type) {
  // Xóa nội dung cũ
  const container = document.getElementById("gallery-container");
  container.innerHTML = "";

  // Lấy danh sách item từ galleries theo loại tab
  const items = galleries[type];
  if (type === 'brands') {
    items.forEach(item => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="overlay"></div>
        <div class="gallery_text">
          <p>${item.text}</p>
          <h1>${item.text_hotel}</h1>
          <div class="img_hover" style="background-image: url(${item.image_hover})"></div>
          <p>${item.text_1}</p>
          <p>${item.text_2}</p>
          <p>${item.text_3}</p>
        </div>
      `;
      container.appendChild(galleryItem);
    });
  } 
  else if(type === 'destinations'){
    items.forEach(item => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="overlay"></div>
        <div class="gallery_text">
          <p>${item.text}</p>
        </div>
      `;
      container.appendChild(galleryItem);
    });
  }

  // Cập nhật trạng thái nút đã chọn
  document.querySelectorAll(".nav-tabs .tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.querySelector(`.nav-tabs .tab[data-type="${type}"]`).classList.add("active");
}

// Hiển thị tab đầu tiên mặc định
showGallery('brands');
