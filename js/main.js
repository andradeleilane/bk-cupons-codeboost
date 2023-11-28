var swiper = new Swiper(".slide-combos", {
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,
    pagination: {
        el: ".s-combos .control .swiper-pagination",
        clickable: true,
    },
    navigation: {
       nextEl: '.s-combos .area-slide .btn.next',
       prevEl: '.s-combos .area-slide .btn.prev'
    }
});