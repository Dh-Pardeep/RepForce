// Get the button:
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



// preloader

setTimeout(() => {
    const box = document.getElementById("preloader_box");
    box.style.display = "none";
    document.body.classList.remove("overflow_hidden");
}, 3000);




// nav bar scrolling
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

$('.navbarbutton').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });