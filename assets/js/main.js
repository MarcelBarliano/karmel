const navbarNav = document.querySelector('.navbar-nav');
const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerIcon = hamburgerMenu.querySelector('i');

// Ketika hamburger menu di klik
hamburgerMenu.addEventListener("click", () => {
    navbarNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    navbar.classList.toggle('active');
})

const navigation = document.querySelector('--scroll-pading');
const navigationHeight = navigation.offsetHeight;
// Scroll Padding
document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

// Klik diluar sidebar untuk menghilangkan navbar
document.addEventListener('click', function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        if (navbarNav.classList.contains('active')) {
            navbarNav.classList.remove('active');
            
            // Mengganti ikon pada elemen #hamburger-menu saat menu ditutup
            hamburgerIcon.setAttribute('data-feather', 'menu');
            feather.replace(); // Memperbarui ikon dengan Feather Icons
        }
    }
});

document.onkeydown = function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }
}
