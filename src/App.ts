import NavbarApp from './components/Navbar';
import {funToggleDark} from './functions/index';

const container: HTMLElement = document.getElementById('app');

const main = () => {
  // Component
  container.innerHTML += NavbarApp({
    title: 'Babaiyu',
  });

  // Function for trigger event
  document.addEventListener('DOMContentLoaded', () => {
    const toggleDark = document.getElementById('toggleDark');

    toggleDark.addEventListener('click', funToggleDark);
  });

  // Dark Mode Configuration
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.querySelector('html').classList.add('dark');
  } else {
    document.querySelector('html').classList.remove('dark');
  }
};

export default main;
