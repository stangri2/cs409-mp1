/* Your JS here. */

document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('small');
  else navbar.classList.remove('small');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');
window.addEventListener('scroll', () => {
  let index = sections.length;
  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
});

let slideIndex = 0;
const slides = document.querySelector('.carousel .slides');
const imgs = document.querySelectorAll('.carousel img');
document.querySelector('.next').onclick = () => moveSlide(1);
document.querySelector('.prev').onclick = () => moveSlide(-1);

function moveSlide(n) {
  slideIndex = (slideIndex + n + imgs.length) % imgs.length;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

