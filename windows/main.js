let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem', 
    delay: 300 
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});



//carousels
$('#owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  items: 1,
})

// nav bar
function closeNav() {
    document.getElementById("sidemenu").style.display = "none";
  }
  function openNav() {
    document.getElementById("sidemenu").style.display = "flex";
  }


