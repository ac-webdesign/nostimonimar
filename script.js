 // scrolling animation
 const elements = document.querySelectorAll('h1, h2, .h2');

 const handleScroll = () => {
     elements.forEach(el => {
         const rect = el.getBoundingClientRect();
         if (rect.top < window.innerHeight && rect.bottom > 0) {
             el.classList.add('show');
         } else {
             el.classList.remove('show');
         }
     });
 };      
  // Initial check to handle elements in view on load
 handleScroll();

 // Attach the scroll event listener
 window.addEventListener('scroll', handleScroll);    