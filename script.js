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


 // TEXT ANIMATION

const text = document.querySelector('.text-animation');
const cursor = document.querySelector('.cursor');
const phrase = text.textContent;
let index = 0;

function showLetter() {
    if (index <= phrase.length) {
        text.textContent = phrase.slice(0, index);
        index++;
        setTimeout(showLetter, 50);
    } else {
        // Stop animation and ensure cursor blinks
        cursor.style.display = 'inline-block';
    }
}

showLetter();
