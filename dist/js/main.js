const goUpBtn = document.querySelector('.go-up-btn');

document.addEventListener('scroll', (e) => {

    if (window.scrollY > 300) {
        goUpBtn.style.opacity = '1';
    } else {
        goUpBtn.style.opacity = '0';
    }

    if (window.scrollY >= 3576) {
        goUpBtn.style.backgroundColor = 'white';
        goUpBtn.style.color = 'black';
    } else {
        goUpBtn.style.backgroundColor = 'black';
        goUpBtn.style.color = 'white';
    }
});