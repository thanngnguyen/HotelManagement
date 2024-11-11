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
    { title: "", image: "https://muongthanh.com/images/brands/2019/10/11/original/muongthanh-vinh_1570769415.jpg",textdiachi :"Nghệ An",khoangcach:"330km"
    },
    { title: "", image: "https://muongthanh.com/images/brands/2023/10/10/original/muong-thanh-holiday-mui-ne_1696915424.jpg",textdiachi :"Hồ Chí Minh",khoangcach:"1.670.0km"
    },
    { title: "", image: "https://muongthanh.com/images/brands/2023/10/10/original/muong-thanh-holiday-vung-tau_1696917018.jpg",textdiachi :"Đắk Lắk",khoangcach:"1.299.6km"
    },
    { title: "", image: "https://muongthanh.com/images/brands/2019/05/16/original/bacgiang_1557992670.jpg",textdiachi :"Bắc Giang",khoangcach:"85km"
    },
  ],
  offers: [
    { title: "",link:"https://vinpearl.com/vi/hoi-lim-co-gi-choi-a-z-cac-hoat-dong-dac-sac?fbclid=IwZXh0bgNhZW0CMTAAAR2vZbI1N_ZRnQVPUFVf7UsLaMbsxdL_EjphfPVG5q3lfd7EhYblQaTyZxs_aem_LSDlvgPrV16dLwOHsgLd5A" ,image: "https://statics.vinpearl.com/hoi-lim-01_1696528183.jpg",
      textlehoi :"Hội Lim Bắc Ninh",thongtin:"Hội Lim Bắc Ninh là một trong những lễ hội mang đậm bản sắc văn hóa dân tộc Việt Nam. Không chỉ là một sự kiện văn hóa tâm linh, lễ hội làng Lim còn là dịp để người dân giao lưu và biểu ......"
    },
    { title: "",link:"https://moitruong.net.vn/le-hoi-dua-voi-net-van-hoa-doc-dao-cua-nguoi-tay-nguyen-58374.html" ,image: "https://mtcs.1cdn.vn/2023/02/20/voi.jpg",
      textlehoi :"Lễ hội đua Voi",thongtin:"Lễ hội đua Voi được coi là một trong những lễ hội văn hóa truyền thống lâu đời của người Tây Nguyên."
    },
    { title: "",link:"https://ninhbinh.gov.vn/tin-noi-bat/cac-hoat-dong-tai-le-hoi-hoa-lu-nam-2024-336351?fbclid=IwZXh0bgNhZW0CMTAAAR3o3wJeOzqeVQqDMSvug5IA8kSQJYymg526TuE4RG83ziTFaJUoiXTiayc_aem_jzKgcqs8o8oEodSDsMCjKQ" ,image: "https://img.baoninhbinh.org.vn/DATA/ARTICLES/2024/4/18/cac-hoat-dong-tai-le-hoi-hoa-lu-nam-2024-8eaf7.jpg",
      textlehoi :" Lễ hội Hoa Lư",thongtin:"Ngày 18/4, tức mùng 9/3 âm lịch, tại sân lễ hội Khu Di tích Quốc gia đặc biệt Cố đô Hoa Lư, đã diễn ra nhiều hoạt động của Lễ hội Hoa Lư năm 2024, thu hút đông đảo nhân dân, du khách đến xem và cổ vũ."
    },
    { title: "",link:"https://www.vietjetair.com/vi/pages/le-hoi-chua-huong---net-dep-dac-trung-cua-mien-bac-dip-tet-1666203054959?fbclid=IwZXh0bgNhZW0CMTAAAR0hWKTSBRrARq0gKjY_iYyJzo0njNY6IQY0dERdOZ6J_KCPXQaYvatc51Y_aem_H3Kpgo9U2uP4KzEq4MyMpQ#:~:text=L%E1%BB%85%20h%E1%BB%99i%20ch%C3%B9a%20H%C6%B0%C6%A1ng%202024,l%C3%A0%2010%2F02%2F2024", image: "https://lh3.googleusercontent.com/0bVnhSBPQaLvibwc9DBa0LVva7TSY0vJZDmrXHsEVyEb3o0N6XaVO9aScmfQa6egLWda-t0tkzhzYOXtquPmOtDEGwjeFBcPMqznhrB6j83LqHsHxtMpltZd50NSuv54lHyBCqRRvwX8St2xdGl2tA",
      textlehoi :"Lễ hội Chùa Hương",thongtin:"Lễ chùa Hương diễn ra trên địa bàn xã Hương Sơn, thuộc địa phận huyện Mỹ Đức, tỉnh Hà Tây. "
    },
  ],
  services: [
  ],
  sea : [
    { image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009656.jpg?k=350b38ee5a5f178f225d363eab93c7c14fbfee30168745e7db3a5fa38cd5be0e&o="
    ,textlehoi:"Thành Phố Hải Phòng",thongtin:"Cách đây 88km"
    },
    { image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009666.jpg?k=03bcdc06ffce1c018aa6c491745278c22dbd9df5b66b3ac9049383e4e54b8558&o="
      ,textlehoi:"Cửa Lò",thongtin:"Cách đây 245km",
    },
    { image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009662.jpg?k=72b776fd2f897de1ff6bc4df7c9d45fb191b8d23593fa1f845c7341b5062e8ad&o="
      ,textlehoi:"Đà Nẵng",thongtin:"Cách đây 604km",
    },
    { image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009629.jpg?k=d7d4199619fd9b98ee00e6dba8835b8140738639c0311913cf74180abe514339&o="
      ,textlehoi:"Tân Thành",thongtin:"Cách đây 627km",
    },
    { image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o="
      ,textlehoi:"Lăng Cô",thongtin:"Cách đây 581km",
    },
  ],
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
          <h1 class="diachi_text">${item.textdiachi}</h1>
          <h5 class="khoangcach">${item.khoangcach}</h5>
        </div>
      `;
      container.appendChild(galleryItem);
    });
  }
  else if(type=== 'offers'){
    items.forEach(item => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item_block";
      galleryItem.innerHTML = `
      <a target="_blank" class ="a_begin" href="${item.link}">
        <div class="gallery-item_block_img">
        <img src="${item.image}" alt="${item.title}" style="width:100%; height: 200px; object-fit: cover;border-radius: 8px;">
        </div>
          <div class="overlay">
        </div>
        <div class="gallery_block_text" style="width: 100%;">
          <h3 class="thongtin">${item.textlehoi}</h3>
          <p class="khoangcach" style="">${item.thongtin}</p>
        </div>
        </a>
      `;
      container.appendChild(galleryItem);
    });
  }
  else if(type=== 'sea'){
    items.forEach(item => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item_block";
      galleryItem.innerHTML = `
      <a target="_blank" class ="a_begin" href="${item.link}">
        <div class="gallery-item_block_img">
        <img src="${item.image}" alt="${item.title}" style="max-width:250px; height: 200px; object-fit: cover;border-radius: 8px;">
        </div>
          <div class="overlay">
        </div>
        <div class="gallery_block_text" style="width:250px;">
          <h4>${item.textlehoi}</h4>
          <h6>${item.thongtin}</h6>
        </div>
        </a>
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
