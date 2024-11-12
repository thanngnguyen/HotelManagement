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
};

const guests = {
    Deluxe_Twin: {
        adults: 2,
        children: 1,
        baby: 1
    },
    Deluxe_King: {
        adults: 1,
        children: 0,
        baby: 0
    },
    Deluxe_Triple: {
        adults: 3,
        children: 2,
        baby: 1
    },
    Grand_Suite: {
        adults: 2,
        children: 1,
        baby: 1
    },
    Apartment: {
        adults: 6,
        children: 3,
        baby: 2
    },
    Premium_Deluxe_Triple: {
        adults: 3,
        children: 1,
        baby: 1
    },
    Superior_Triple: {
        adults: 3,
        children: 1,
        baby: 1
    },
    Premium_Deluxe_King: {
        adults: 1,
        children: 0,
        baby: 0
    },
    Superior_Twin: {
        adults: 2,
        children: 1,
        baby: 1
    }
};

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
const roomType = roomCountInput.getAttribute("data-room")

document.addEventListener('DOMContentLoaded', function() {
    const storedRooms = JSON.parse(localStorage.getItem("rooms"));


    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(roomCountInput.value);
        if (currentValue > 0) {
            roomCountInput.value = currentValue - 1;
        }
        generateRoom(parseInt(roomCountInput.value));
    });
    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(roomCountInput.value);
        if (currentValue < storedRooms[roomType]) {
            roomCountInput.value = currentValue + 1;
        }
        generateRoom(parseInt(roomCountInput.value));
    });    
});

const dateInfo = document.querySelector(".datphong_nav_1 .text_min");
const moneyInfo = document.querySelector(".tong-tien");

function updateBookingInfo() {
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

    const reversedCheckInDate = checkInDate.split("-").reverse().join("/");
    const reversedCheckOutDate = checkOutDate.split("-").reverse().join("/");

    dateInfo.innerHTML = `
        <b style='font-size: 17px'>${roomType.replaceAll("_", " ")}</b><br>
        <b>${reversedCheckInDate} - ${reversedCheckOutDate}</b> (${days} ngày ${days - 1} đêm)
    `;
}

updateBookingInfo();

checkInInput.addEventListener("change", updateBookingInfo);
checkOutInput.addEventListener("change", updateBookingInfo);

checkInInput.addEventListener("change", function () {
    updateSelectedRooms(parseInt(roomCountInput.value));
});
checkOutInput.addEventListener("change", function () {
    updateSelectedRooms(parseInt(roomCountInput.value));
});

function calculateDays() {
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    return days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
}

const pricePerNight = parseInt(document.querySelector('.gia-tien').textContent.replace(/[^0-9]/g, ''));

function generateRoom(number) {
    const roomPrice = calculateDays() * pricePerNight * number;

    const roomDetails = document.getElementById("chon_nguoi");
    const selectedRooms = document.getElementsByClassName("line_text")[2];

    roomDetails.innerHTML = "";
    selectedRooms.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room-div");
        roomDiv.style.cssText = `
            display: flex;
            justify-content: space-around;
            padding: 20px 0;
            border-bottom: 2px dashed #000;
            transition: background-color 0.3s;
        `;
        roomDiv.innerHTML = `
            <p style='font-weight: bold'>Chọn số người phòng ${i}: </p>
            <div class="input-group" style='display: flex; flex-direction: column; align-items: center'>
                <label for="nguoilon">Người lớn</label>
                <select style='border-radius: 10px; width: 100%' id="nguoilon_${i}" name="nguoilon"></select>
            </div>
            <div class="input-group" style='display: flex; flex-direction: column; align-items: center'>
                <label for="treem">Trẻ em</label>
                <select style='border-radius: 10px; width: 100%' id="treem_${i}" name="treem"></select>
            </div>
            <div class="input-group" style='display: flex; flex-direction: column; align-items: center'>
                <label for="embe">Em bé (0-5 tuổi)</label>
                <select style='border-radius: 10px; width: 100%' id="embe_${i}" name="embe"></select>
            </div>
        `;
        roomDetails.appendChild(roomDiv);

        for (let i = 1; i <= guests[roomType].adults; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            document.getElementsByName("nguoilon")[document.getElementsByName("nguoilon").length - 1].appendChild(option);
        }
        for (let i = 0; i <= guests[roomType].children; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            document.getElementsByName("treem")[document.getElementsByName("treem").length - 1].appendChild(option);
        }
        for (let i = 0; i <= guests[roomType].baby; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            document.getElementsByName("embe")[document.getElementsByName("embe").length - 1].appendChild(option);
        }

        const selectedRoomDiv = document.createElement("div");
        selectedRoomDiv.id = `selectedroom_${i}`;
        selectedRoomDiv.innerHTML = `
            <p style='margin: 0'>Phòng ${i}: 1 Người lớn - 0 Trẻ em - 0 Em bé</p>
            <p style='font-weight: bold; margin: 0'>${pricePerNight.toLocaleString()} VNĐ/Đêm</p>
        `;
        selectedRooms.appendChild(selectedRoomDiv);

        if (i < number) {
            selectedRooms.innerHTML += `
                <hr>
            `;
        }

        moneyInfo.innerHTML = `
            ${roomPrice.toLocaleString()} VNĐ
        `;

        document.getElementById(`nguoilon_${i}`).addEventListener("input", () => updateSelectedRooms(number));
        document.getElementById(`treem_${i}`).addEventListener("input", () => updateSelectedRooms(number));
        document.getElementById(`embe_${i}`).addEventListener("input", () => updateSelectedRooms(number));
    }
}

function updateSelectedRooms(number) {
    let totalPrice = 0;

    for (let i = 1; i <= number; i++) {
        const adults = parseInt(document.getElementById(`nguoilon_${i}`).value);
        const children = parseInt(document.getElementById(`treem_${i}`).value);
        const baby = document.getElementById(`embe_${i}`).value;
        const selectedRoomDiv = document.getElementById(`selectedroom_${i}`);

        const extraAdults = adults > 4 ? adults - 4 : 0;
        const extraChildren = adults + children > 4 ? adults + children - 4 - extraAdults : 0;

        const extraAdultsFee = extraAdults * 270000;
        const extraChildrenFee = extraChildren * 160000;
        const roomTotal = pricePerNight + extraAdultsFee + extraChildrenFee;

        selectedRoomDiv.innerHTML = `
            Phòng ${i}: ${adults} Người lớn - ${children} Trẻ em - ${baby} Em bé
        `;
        if (extraAdults > 0) {
            selectedRoomDiv.innerHTML += `
                <p style='margin: 0'>${extraAdults} người lớn: <b>${extraAdultsFee.toLocaleString()} VNĐ</b></p>
            `;
        }
        if (extraChildren > 0) {
            selectedRoomDiv.innerHTML += `
                <p style='margin: 0'>${extraChildren} trẻ em: <b>${extraChildrenFee.toLocaleString()} VNĐ</b></p>
            `;
        }
        selectedRoomDiv.innerHTML += `
            <p><b>${roomTotal.toLocaleString()} VNĐ/Đêm</b></p>
        `;

        totalPrice += parseInt(roomTotal);
    }
    totalPrice *= calculateDays();

    moneyInfo.innerHTML = `
        ${totalPrice.toLocaleString()} VNĐ
    `;
}

document.querySelector('.dat-ngay-datphong').addEventListener('click', function() {
    if ( document.querySelector('.tong-tien').textContent.trim() === "") {
        alert('Vui lòng chọn phòng mong muốn');
    } else {
        sessionStorage.setItem('price', document.querySelector('.tong-tien').textContent.replace(/[^0-9]/g, ''));
        window.location.href = 'payment.html';
    }
});