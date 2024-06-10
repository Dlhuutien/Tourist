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
            name: "",
            price: "",
            image: "images/DongAu/DongAu_01.jpg",
            size: "",
            description: "",
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
