const goUpBtn = document.querySelector('.go-up-btn');
const el = document.getElementById('footer');

document.addEventListener('scroll', (e) => {

    if (window.scrollY > 300) {
        goUpBtn.style.opacity = '1';
    } else {
        goUpBtn.style.opacity = '0';
    }

    if (window.scrollY >= 4700) {
        goUpBtn.style.backgroundColor = 'white';
        goUpBtn.style.color = 'black';
    } else {
        goUpBtn.style.backgroundColor = 'black';
        goUpBtn.style.color = 'white';
    }
});

new Vue({
    el: '#header',
});

new Vue({
    el: '#app',
});