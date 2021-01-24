interface Props {
  title: string;
}

const NavbarApp = (props: Props) => {
  let output: string = `
  <nav class="flex flex-row p-10 md:justify-between dark:bg-gray-800 bg-gray-300">
    <div class="flex flex-row justify-between">
      <a href="/" class="dark:text-white text-gray-900">${props.title}</a>
      <p id="hamburgerbtn" class="md:hidden dark:bg-white bg-gray-500">menu</p>
    </div>
    <ul class="hidden md:flex md:flex-row" id="mobileMenu">
      <li class="pr-5">
        <button id="toggleDark" class="dark:text-white text-gray-800">
          THEME
        </button>
      </li>
    </ul>
  </nav>
`;
  return output;
};

export default NavbarApp;
