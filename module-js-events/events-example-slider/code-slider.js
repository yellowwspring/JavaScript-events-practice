let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

// button next
document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 128;   // offset += 128
    if (offset > 384) {   // 384 - size 3 images -- 128 * 3 = 384
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

// button previous
document.querySelector('.slider-previous').addEventListener('click', function () {
    offset = offset - 128;
    if (offset < 0) {
        offset = 384;
    }
    sliderLine.style.left = -offset + 'px';
})
