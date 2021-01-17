interface Props {
  title: string;
}

const NavbarApp = (props: Props) => {
  let output: string = `
    <nav>
      <div class="dark:bg-gray-800 bg-gray-300">
        <h1 class="dark:text-white text-gray-800">${props.title}</h1>
        <button id="toggleDark" class="dark:text-white text-gray-800">THEME</button>
      </div>
    </nav>
  `;
  return output;
};

export default NavbarApp;
