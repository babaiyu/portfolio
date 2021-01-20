export const funToggleDark = () => {
  let htmlClass = document.querySelector('html').classList;
  if (localStorage.theme === 'dark') {
    htmlClass.remove('dark');
    localStorage.removeItem('theme');
  } else {
    htmlClass.add('dark');
    localStorage.theme = 'dark';
  }
};

export const funToggleMenu = () => {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
};
