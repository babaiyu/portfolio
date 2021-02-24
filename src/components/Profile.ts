import profilePict from '../assets/pp.jpg';
import {dataAccount} from '../mock/data';

const renderAccount = () => {
  let output: string = '';
  for (let i = 0; i < dataAccount.length; i++) {
    let element: string = `<a href=${dataAccount[i].url} target="_blank"><ion-icon name=${dataAccount[i].logo} size="large" class="dark:text-white text-gray-800 mr-3"></ion-icon></a>`;
    output += element;
  }
  return output;
};

const Profile = () => {
  let output: string = `
    <figure class="transform -translate-y-24 md:flex md:items-center md:justify-center md:flex-row md:mx-auto">
      <img
        class="w-48 h-48 rounded-full border-8 dark:border-gray-900 border-gray-100"
        src=${profilePict}
        alt="profile_picture"
      />
      <div class="md:ml-5 w-52 md:w-48 h-48 justify-between flex flex-col">
        <div>
        </div>
        <div>
          ${renderAccount()}
        </div>
        <div>
          <div class="rounded-md py-3 px-5 bg-gray-500 md:mt-3 md:mx-3">
            <p class="dark:text-white text-gray-900 md:text-lg text-4xl">Bayu Permana Putra</p>
            <hr />
            <p class="text-white">Frontend Developer</p>
          </div>
        </div>
      </div>
    </figure>
  `;
  return output;
};

export default Profile;
