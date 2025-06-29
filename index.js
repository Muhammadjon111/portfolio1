// Bismillahir Rohmanir Rohiim
const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-contents');

links.forEach((tab, i) => {
  tab.onclick = () => {
    links.forEach((l) => l.classList.remove('active-link'));
    contents.forEach((c) => c.classList.remove('active-tab'));
    tab.classList.add('active-link');
    contents[i].classList.add('active-tab');
  };
});

// nav bar toggle
const navBtn = document.querySelector('.fa-bars');
const ul = document.querySelector('ul');
const closeBtn = document.querySelector('.fa-times');
const aTag = document.querySelectorAll('ul li a');

navBtn.addEventListener('click', () => {
  ul.style.right = '0';
});
closeBtn.addEventListener('click', () => {
  ul.style.right = '-200px';
});

aTag.forEach((tab) => {
  tab.onclick = () => {
    ul.style.right = '-200px';
  };
});

// aTag.addEventListener('click', () => {
//   ul.style.right = '0';
// });
const scriptURL =
  'https://script.google.com/macros/s/AKfycbwYUWzf2MUXsr6c4A6decyipQZ8-F7Uu4_mirCYeTybstfWvCL0hDdK7OJorVe3qdUUBw/exec';
// const scriptURL =
//   'https://script.google.com/macros/s/AKfycbwYUWzf2MUXsr6c4A6decyipQZ8-F7Uu4_mirCYeTybstfWvCL0hDdK7OJorVe3qdUUBw/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
