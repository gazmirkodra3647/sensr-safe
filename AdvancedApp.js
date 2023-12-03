/*
Filename: AdvancedApp.js
Content: Advanced JavaScript Application

This code is an advanced JavaScript application that demonstrates various concepts and techniques. It includes dynamic data manipulation, asynchronous operations, event handling, animation, and more.

Feel free to explore and modify this code to understand the complexity and sophistication of JavaScript application development.

Author: [Your Name]
Date: [Current Date]
*/

// Application Initialization
(function() {
  // Global Variables
  let data = [];
  let counter = 0;
  let timer;

  // DOM Elements
  const container = document.getElementById('container');
  const button = document.getElementById('button');
  const list = document.getElementById('list');

  // Event Listeners
  button.addEventListener('click', fetchData);

  // Functions
  function fetchData() {
    showLoader(true);

    // Simulating asynchronous data fetching from an API
    setTimeout(() => {
      data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
      showLoader(false);
      renderData();
    }, 1500);
  }

  function renderData() {
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      list.appendChild(listItem);
    });

    animateList();
  }

  function animateList() {
    const items = Array.from(list.children);
    items.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'opacity 500ms, transform 500ms';
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }

  function showLoader(show) {
    clearTimeout(timer);
    if (show) {
      container.classList.add('loading');
      timer = setTimeout(() => {
        container.classList.add('timeout');
      }, 5000);
    } else {
      container.classList.remove('loading');
      container.classList.remove('timeout');
    }
  }
})();