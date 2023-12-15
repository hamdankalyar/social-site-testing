document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidePanel = document.querySelector('.side-panel');
    const closeBtn = document.getElementById('close-btn');
    const siteContainer = document.querySelector('.content-container');

    menuIcon.addEventListener('click', function() {
        if (sidePanel.style.right === '0px' || sidePanel.style.right === '') {
            sidePanel.style.right = '-290px';
            siteContainer.style.transform = 'translateX(0)';
            menuIcon.classList.remove('active');
            document.body.classList.remove('side-panel-open');
        } else {
            sidePanel.style.right = '0px';
            siteContainer.style.transform = 'translateX(250px)';
            menuIcon.classList.add('active');
            document.body.classList.add('side-panel-open');
        }
    });

    closeBtn.addEventListener('click', function() {
        sidePanel.style.right = '-290px';
        siteContainer.style.transform = 'translateX(0)';
        menuIcon.classList.remove('active');
        document.body.classList.remove('side-panel-open');
    });
});
