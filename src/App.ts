import NavbarApp from './components/Navbar';
import Jumbroton from './components/Jumbroton';
import Profile from './components/Profile';
import ListPict from './components/ListPict';
import {funToggleDark, funToggleMenu} from './functions/index';

const container: HTMLElement = document.getElementById('app');

const main = () => {
  // Component order by ascending
  container.innerHTML += NavbarApp({
    title: 'BABAIYU',
  });

  container.innerHTML += Jumbroton();
  container.innerHTML += Profile();
  container.innerHTML += ListPict();

  // Function for trigger event
  document.addEventListener('DOMContentLoaded', () => {
    const toggleDark = document.getElementById('toggleDark');
    toggleDark.addEventListener('click', funToggleDark);

    const hamburger = document.getElementById('hamburgerbtn');
    hamburger.addEventListener('click', funToggleMenu);
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
