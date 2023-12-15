document.addEventListener('DOMContentLoaded', function() {
    const closeBanner = document.getElementById('close-banner');
    const banner = document.querySelector('.banner');

    closeBanner.addEventListener('click', function() {
        banner.classList.add('closed');
    });
});
