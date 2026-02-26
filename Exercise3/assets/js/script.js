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

    // Hàm chạy slider cho banner và review
    function initSlider(containerSelector, itemSelector, autoPlay = false, interval = 5000) {
        const container = document.querySelector(containerSelector); // lấy element cần slider vd banner hoặc review
        if (!container) return;

        const leftBtn = container.querySelector('.left-nav-button');
        const rightBtn = container.querySelector('.right-nav-button');
        const items = container.querySelectorAll(itemSelector);
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index); // duyệt mọi slide nếu = index mới active
            });
        }

        if (leftBtn) {
            leftBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                showItem(currentIndex);
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                showItem(currentIndex);
            });
        }

        if (autoPlay) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length; // cho index nó chạy vòng tròn
                showItem(currentIndex);
            }, interval);
        }
    }

    // chạy banner
    initSlider('.banner', '.banner-image > div', true);
    // chạy review
    initSlider('.review', '.review-item', true);
});
