// Images expansion
'use strict'
const items = document.querySelectorAll('.item');

items.forEach(element => {
  element.addEventListener('mouseover', () => {
    removeFocus();
    element.classList.add('selected');
  })

  // Remove expansion from previous image
let removeFocus = () => {
    items.forEach(element => {
      element.classList.remove('selected');
    })
  }
})