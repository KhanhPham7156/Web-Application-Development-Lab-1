document.addEventListener('DOMContentLoaded', () => {
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
});
