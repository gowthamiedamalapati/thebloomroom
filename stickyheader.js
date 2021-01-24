window.addEventListener('scroll', function(){
    const imgImg = document.querySelector('.img img');
    const mainNav = document.getElementById("mainNav");

    if(window.pageYOffset > 0){ 
        imgImg.style.height = "64px";
        mainNav.classList.add('bg-black');
        mainNav.classList.add('txt-white');
    } else {
        imgImg.style.height = "84px";
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove('txt-white');
    }
});