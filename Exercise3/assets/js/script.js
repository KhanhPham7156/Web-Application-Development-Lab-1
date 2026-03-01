document.addEventListener('DOMContentLoaded', () => {
    // menu sổ ra khi bấm vô 3///
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

    // hàm chạy slider cho banner và review
    function initSlider(containerSelector, itemSelector, autoPlay = false, interval = 5000) {
        const container = document.querySelector(containerSelector); // lấy element cần slider vd banner hoặc review
        if (!container) return;

        const leftBtn = container.querySelector('.left-nav-button');
        const rightBtn = container.querySelector('.right-nav-button');
        const items = container.querySelectorAll(itemSelector);
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i == index); // duyệt mọi slide nếu = index mới active, false = bỏ active
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

    // booking form validate
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            // hiển thị lỗi cho từng fieldset
            if (!bookingForm.checkValidity()) { // checkValidity() trả về true nếu mọi input hợp lệ
                const groups = bookingForm.querySelectorAll('.form-group');

                // duyệt qua từng group và lấy các kiểu input
                groups.forEach(group => {
                    const input = group.querySelector('input, select, textarea');
                    const errorSpan = group.querySelector('.error');
                    if (input && errorSpan) {
                        if (!input.validity.valid) {
                            errorSpan.classList.add('active');
                        } else {
                            errorSpan.classList.remove('active');
                        }
                    }
                });
                
                alert('Vui lòng kiểm tra lại các thông tin bị sai.');
            } else {
                alert('Cảm ơn bạn! Chúng tôi đã nhận được thông tin của bạn');
                bookingForm.reset();
                // ẩn tất cả lỗi sau khi reset
                bookingForm.querySelectorAll('.error').forEach(el => el.classList.remove('active')); // lấy tất cả các error đang bị active và ẩn đi
            }
        });

        // kiểm tra lỗi khi người dùng đang nhập
        bookingForm.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => { // theo dõi event input

                /*  - lấy input đang nhập và tìm lên cha của form-group
                    - làm v để chỉ hiển thị lỗi trong đúng cái form-group. Nếu ko có trình duyệt sẽ chỉ hiển thị lỗi ở 
                      cái .error đầu tiên mà nó tìm thấy
                */
                const group = input.closest('.form-group'); 
                if (group) {
                    const errorSpan = group.querySelector('.error');
                    if (errorSpan) {
                        if (input.validity.valid) {
                            errorSpan.classList.remove('active');
                        } else if (input.value !== "") {
                            errorSpan.classList.add('active');
                        }
                    }
                }
            });
        });

        // hiển thị ngày tối thiểu là ngày hiện tại cho ô date
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0]; // lấy ngày hiện tại chuyển sang string và lấy phần trước 'T' (time)
            dateInput.setAttribute('min', today); // set required min bên html là ngày hiện tại
        }
    }
});
