let rooms = {
    Deluxe_Twin: 16,
    Deluxe_King: 16,
    Deluxe_Triple: 8,
    Grand_Suite: 3,
    Apartment: 3,
    Premium_Deluxe_Triple: 3,
    Superior_Triple: 6,
    Premium_Deluxe_King: 6,
    Superior_Twin: 9
}
localStorage.setItem("rooms", JSON.stringify(rooms));

const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");

var today = new Date().toISOString().split('T')[0];
checkInInput.setAttribute('min', today);
checkOutInput.setAttribute('min', today);

checkInInput.setAttribute('value', today)
checkOutInput.setAttribute('value', new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);


checkInInput.addEventListener("change", function () {
    let checkInDate = new Date(checkInInput.value);

    checkInDate.setDate(checkInDate.getDate() + 1);

    const minCheckOutDate = checkInDate.toISOString().split('T')[0];
    checkOutInput.setAttribute('min', minCheckOutDate);

    if (checkOutInput.value < minCheckOutDate) {
        checkOutInput.value = minCheckOutDate;
    }
});


const roomCountInput = document.getElementById("roomCount");

roomCountInput.setAttribute('value', 0);

const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
document.addEventListener('DOMContentLoaded', function() {
    const storedRooms = JSON.parse(localStorage.getItem("rooms"));

    const roomType = roomCount.getAttribute("data-room");

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(roomCount.value);
        if (currentValue > 0) {
            roomCountInput.value = currentValue - 1;
        }
        updateBookingInfo();
    });
    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(roomCount.value);
        if (currentValue < storedRooms[roomType]) {
            roomCountInput.value = currentValue + 1;
        }
        updateBookingInfo();
    });    
});

document.getElementById("nguoilon").value = '1';
document.getElementById("treem").value = '0';
document.getElementById("embe").value = '0';

const adultsSelect = document.getElementById("nguoilon");
const childrenSelect = document.getElementById("treem");
const babySelect = document.getElementById("embe");

const roomInfo = document.querySelector(".background_nav_2 .line_text");
const dateInfo = document.querySelector(".datphong_nav_1 .text_min");
const totalPriceElement = document.querySelector(".datphong_nav_1 .tong-tien");

function updateBookingInfo() {
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;
    const roomCount = roomCountInput.value;
    const adults = parseInt(adultsSelect.value);
    const children = parseInt(childrenSelect.value);
    const baby = babySelect.value;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const priceText = document.querySelector('.gia-tien').textContent;
    const pricePerNight = parseInt(priceText.replace(/[^0-9]/g, ''));
    const roomPrice = days * pricePerNight * parseInt(roomCount);

    dateInfo.innerHTML = `
        <b>${checkInDate} - ${checkOutDate}</b> (${days} ngày ${days - 1} đêm)
        <p style='margin-top: 1rem; font-weight: bold; font-size: 16px'>${roomPrice.toLocaleString()} VNĐ</p>
    `;
    roomInfo.innerHTML = `
        <p>Phòng: ${roomCount} phòng Apartment</p>
        <p>${adults} người lớn - ${children} trẻ em - ${baby} em bé</p>
    `;

    let extraAdultsFee = 0;
    let extraChildrenFee = 0;

    if (adults + children > 4) {
        let extraAdults = adults > 4 ? adults - 4 : 0;
        let extraChildren = adults + children > 4 ? adults + children - 4 - extraAdults : 0;
    
        extraAdultsFee = extraAdults * 270000;
        extraChildrenFee = extraChildren * 160000;
    
        roomInfo.innerHTML += `<p style='font-size: 17px; font-weight: bold'>Phụ phí:</p>`
    
        if (extraAdults > 0) {
            roomInfo.innerHTML += `
                <p>${extraAdults} người lớn: <b>${extraAdultsFee.toLocaleString()} VNĐ</b></p>
            `;
        }
        if (extraChildren > 0) {
            roomInfo.innerHTML += `
                <p>${extraChildren} trẻ em: <b>${extraChildrenFee.toLocaleString()} VNĐ</b></p>
            `;
        }
    }

    const totalPrice = roomPrice + extraAdultsFee + extraChildrenFee;
    totalPriceElement.textContent = `${totalPrice.toLocaleString()} VNĐ`;
}

checkInInput.addEventListener("change", updateBookingInfo);
checkOutInput.addEventListener("change", updateBookingInfo);
adultsSelect.addEventListener("change", updateBookingInfo);
childrenSelect.addEventListener("change", updateBookingInfo);
babySelect.addEventListener("change", updateBookingInfo);

updateBookingInfo();