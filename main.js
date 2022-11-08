var navLinks=document.getElementById("navLinks");
function showMenu(){
  navLinks.style.right = "0";
}
  function hideMenu(){
  navLinks.style.right = "-200px";
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.header')
sr.reveal('.text-box', {delay: 700})
sr.reveal('.nav-links', {delay: 1000, origin: 'bottom'})
sr.reveal('.about_handle', {delay: 900, origin: 'left'})
sr.reveal('.about_box', {delay: 900, origin: 'right'})
sr.reveal('.about_description', {delay: 1250, origin: 'bottom'})
sr.reveal('.about_data', {delay: 1000, origin: 'top'})
sr.reveal('.skills_handle', {delay: 900, origin: 'bottom'})
sr.reveal('.skills_container', {delay: 1000, origin: 'left'})
sr.reveal('.services_handle', {delay: 900, origin: 'top'})
sr.reveal('.services_card', {delay: 1000, origin: 'right'})
sr.reveal('.contact_handle', {delay: 1000, origin: 'bottom'})
sr.reveal('.contact_container', {delay: 1000, origin: 'left'})
sr.reveal('.footer_title', {delay: 1000, origin: 'right'})
sr.reveal('.footer_social', {delay: 1000, origin: 'bottom'})
sr.reveal('.footer_list', {delay: 1000, origin: 'top'})
sr.reveal('.footer_copy', {delay: 1000, origin: 'left'})