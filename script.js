// Change the paragraph text
function changeText() {
    const paragraph = document.getElementById('text-paragraph');
    paragraph.textContent = 'The text has been successfully changed!';
  }
  
  // Modify the color box style
  function changeColor() {
    const box = document.getElementById('color-box');
    box.style.backgroundColor = 'salmon';
    box.style.borderRadius = '15px';
    box.style.border = '2px solid black';
  }
  
  // Add a new element
  function addElement() {
    const container = document.getElementById('element-container');
    if (!document.getElementById('dynamic-element')) {
      const newElement = document.createElement('p');
      newElement.id = 'dynamic-element';
      newElement.textContent = 'This element was added dynamically!';
      container.appendChild(newElement);
    }
  }
  
  // Remove the dynamically added element
  function removeElement() {
    const element = document.getElementById('dynamic-element');
    if (element) {
      element.remove();
    }
  }
  