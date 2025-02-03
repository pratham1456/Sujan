document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const searchBtn = document.getElementById('search-btn');
    const loginBtn = document.getElementById('login-btn');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const searchContainer = document.getElementById('search');
    const loginContainer = document.getElementById('login');
    const searchClose = document.getElementById('search-close');
    const loginClose = document.getElementById('login-close');
    const navMenu = document.getElementById('nav-menu');
  
    // Search functionality
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        searchContainer.classList.add('show-search');
      });
    }
  
    if (searchClose) {
      searchClose.addEventListener('click', () => {
        searchContainer.classList.remove('show-search');
      });
    }
  
    // Login functionality
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        loginContainer.classList.add('show-login');
      });
    }
  
    if (loginClose) {
      loginClose.addEventListener('click', () => {
        loginContainer.classList.remove('show-login');
      });
    }
  
    // Navigation toggle for mobile
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  });
  


  async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}


getData();