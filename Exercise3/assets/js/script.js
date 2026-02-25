document.addEventListener('DOMContentLoaded', () => {
    // Responsive menu
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active'); // thêm class active khi click vào menu

            const icon = menuToggle.querySelector('i');
            // kiểm tra đang có active ko để đổi icon trong <i> từ 3/// thành x
            if (nav.classList.contains('active')) { 
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // chuyển banner bằng nút bấm và auto
    const leftBtn = document.querySelector('.left-nav-button');
    const rightBtn = document.querySelector('.right-nav-button');
    const bannerImages = document.querySelectorAll('.banner-image > div'); // lấy các thẻ div là con của banner-image
    let currentIndex = 0;

    function showBanner(index) {
        bannerImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length; 
        showBanner(currentIndex);
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        showBanner(currentIndex);
    });

    // Tự động chuyển banner sau 5 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bannerImages.length; 
        showBanner(currentIndex);
    }, 5000);
});
