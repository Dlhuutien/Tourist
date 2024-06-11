// Lấy thông tin sản phẩm được chọn từ localStorage
var productId = localStorage.getItem('selectedProduct');
var product = getProductById(productId);

// Hiển thị thông tin sản phẩm lên trang chi tiết
document.getElementById('productName').innerHTML = product.name;
document.getElementById('productPrice').innerHTML = product.price;
document.getElementById('productIMG').src = product.image;
document.getElementById('productSize').innerHTML = product.size;
document.getElementById('productDescription').innerHTML = product.description;
document.getElementById('productIntro').innerHTML = product.introduction;
// Hàm lấy thông tin sản phẩm từ ID
function getProductById(id) {
    var products = [
        {
            id: 1,
            name: "Du Lịch Nhật Bản: Disneyland - Tokyo - Phú Sĩ - Yokohama",
            price: "37.990.000vnđ",
            image: "images/Nhat/Nhat_01.jpg",
            size: "6 ngày 5 đêm",
            description: "Du Lịch Nhật Bản: Disneyland - Tokyo - Phú Sĩ - Yokohama - Thủy Cung Sea Paradise<br>Mã tour: BTTOJP00HCM22042419P<br>Số chỗ còn: 16 chỗ<br>Phương tiện: Máy bay - Xe ô tô<br>Khởi hành tại: Hồ Chí Minh",
            introduction: "",
        },
        {
            id: 2,
            name: "Du Lịch Đông Âu: Hungary - Áo - CH Séc - Slovakia - Ba Lan",
            price: "89.999.000vnđ",
            image: "images/DongAu/DongAu_01.jpg",
            size: "11 ngày 10 đêm",
            description: "Du Lịch Vương Quốc Anh: Anh - Scotland (Tặng vé du thuyền sông Thames)<br>Mã tour: BTTOGB00HCM26072455P<br>Số chỗ còn: 8 chỗ<br> Phương tiện: Máy bay - Xe ô tô<br> Khởi hành tại: Hồ Chí Minh",
            introduction: "",
        },
        {
            id: 3,
            name: "Du Lịch Đông Âu: Hungary - Áo - CH Séc - Slovakia - Ba Lan",
            price: "89.999.000vnđ",
            image: "images/Anh/Anh.jpg",
            size: "10 ngày 9 đêm",
            description: "Du Lịch Vương Quốc Anh: Anh - Scotland (Tặng vé du thuyền sông Thames) <br>Mã tour: BTTOGB00HCM26072455P<br> Số chỗ còn: 8 chỗ<br> Phương tiện: Máy bay - Xe ô tô<br> Khởi hành tại: Hồ Chí Minh",
            introduction: "",
        },
        {
            id: 4,
            name: "Du Lịch Miền Bắc: Hà Nội - Ninh Bình - Hạ Long - Tuyệt Tình Cốc - Bái Đính - Tràng An - Vinh Hạ Long - Yên Tử",
            price: "10.990.000vnđ",
            image: "images/TrongNuoc/HaNoi_01.jpg",
            size: "4 ngày 3 đêm",
            description: "Du Lịch Miền Bắc: Hà Nội - Ninh Bình - Hạ Long - Tuyệt Tình Cốc - Bái Đính - Tràng An - Vinh Hạ Long - Yên Tử <br> Mã tour: BTTDHN00HCM22042419P<br> Số chỗ còn: 9 chỗ<br> Phương tiện: Máy bay - Xe ô tô<br> Khởi hành tại: Hồ Chí Minh",
            introduction: "",
        },
        {
            id: 5,
            name: "Du Lịch Vĩnh Long: Vĩnh Long - KDL Vinh Sang",
            price: "890.000vnđ",
            image: "images/TrongNuoc/VinhLong_01.jpg",
            size: "1 ngày 0 đêm",
            description: "Du Lịch Vĩnh Long: Vĩnh Long - KDL Vinh Sang <br> Mã tour: BTTDVIL0HCM21032444P<br> Số chỗ còn: 10 chỗ<br> Phương tiện: Xe ô tô<br> Khởi hành tại: Hồ Chí Minh",
            introduction: "",
        },
        {
            id: 5,
            name: "Du Lịch Miền Tây: Tiền Giang - Cần Thơ - Vĩnh Long",
            price: "2.590.000vnđ",
            image: "images/TrongNuoc/TienGiang_01.jpg",
            size: "2 ngày 1 đêm",
            description: "Du Lịch Miền Tây: Tiền Giang - Cần Thơ - Vĩnh Long <br>Mã tour: BTTDVIL0HCM21032441P<br> Số chỗ còn: 10 chỗ<br> Phương tiện: Xe ô tô<br> Khởi hành tại: Hồ Chí Minh<br>",
            introduction: "",
        }
    ];

    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            return products[i];
        }
    }

    return null;
}

function showDetail(productId) {
    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem('selectedProduct', productId);

    // Chuyển sang trang chi tiết sản phẩm
    window.location.href = 'results.html';
}
