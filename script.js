// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// Simple contact form handler (demo)
document.getElementById('contactForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  alert('Thanks, your message has been received (demo).');
  this.reset();
});
