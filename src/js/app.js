const button = document.querySelector('.btn');
const popover = document.querySelector('.tooltip');

button.addEventListener('click', handler);
    
function handler() {
    if (popover.classList.contains("active")) {
        popover.classList.remove("active");
      } else {
        popover.classList.add("active");
      }
}