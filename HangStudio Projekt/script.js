document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  const bemutatkozas = document.getElementById('bemutatkozas');
  if (bemutatkozas) bemutatkozas.style.display = 'block';
});
