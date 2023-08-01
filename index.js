
document.addEventListener('DOMContentLoaded', function () {
    class Tabs {
      constructor(element) {
        this.tabsElement = element;
        this.tabButtons = Array.from(this.tabsElement.querySelector('nav').children);
        this.tabContents = Array.from(this.tabsElement.querySelector('div').children);
  
        this.tabButtons.forEach((button, index) => {
          button.addEventListener('click', () => this.showTab(index));
        });
  
        
        this.showTab(0);
      }
  
      showTab(index) {
        if (index < 0 || index >= this.tabButtons.length) {
          return; 
        }
  
        
        this.tabContents.forEach((content) => {
          content.style.display = 'none';
        });
  
        
        this.tabButtons.forEach((button) => {
          button.classList.remove('active');
        });
  
       
        this.tabContents[index].style.display = 'block';
        this.tabButtons[index].classList.add('active');
      }
    }
  
    const tabsEl = document.querySelector('#tabs');
    new Tabs(tabsEl);
  });