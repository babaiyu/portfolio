import profilePict from '../assets/pp.jpg';

const Profile = () => {
  let output: string = `
    <figure class="transform -translate-y-24 md:flex md:items-center md:justify-center md:flex-row">
      <img
        class="w-48 h-48 rounded-full border-8 dark:border-gray-900 border-gray-100"
        src=${profilePict}
        alt="profile_picture"
      />
      <div class="md:ml-5 w-48 h-48 justify-between flex flex-col">
        <div>
        </div>
        <div>
          <a href="https://github.com/babaiyu" target="_blank"><ion-icon name="logo-github" size="large" class="dark:text-white text-gray-800"></ion-icon></a>
          <a href="https://www.linkedin.com/in/bayu-permana-putra-8ba540170/" target="_blank"><ion-icon name="logo-linkedin" size="large" class="dark:text-white text-gray-800"></ion-icon></a>
          <a href="https://www.instagram.com/babaiyu/" target="_blank"><ion-icon name="logo-instagram" size="large" class="dark:text-white text-gray-800"></ion-icon></a>
          <a href="https://www.facebook.com/bayu.permanaputra.94/" target="_blank"><ion-icon name="logo-facebook" size="large" class="dark:text-white text-gray-800"></ion-icon></a>
        </div>
        <div class="p-3 m-5">
          <p class="dark:text-white text-gray-900 md:text-lg text-sm">Bayu Permana Putra</p>
          <div class="rounded-md py-3 px-5 bg-gray-500 mt-3">
            <p class="text-white">Frontend Developer</p>
          </div>
        </div>
      </div>
    </figure>
  `;
  return output;
};

export default Profile;
