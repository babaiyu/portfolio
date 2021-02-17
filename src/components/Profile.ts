import profilePict from '../assets/pp.jpg';

const Profile = () => {
  let output: string = `
    <figure class="transform -translate-y-24 md:flex md:items-center md:justify-center md:flex-row">
      <img
        class="w-48 h-48 rounded-full border-8 dark:border-gray-900 border-gray-100"
        src=${profilePict}
        alt="profile_picture"
      />
      <div class="md:ml-5">
        <div>
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
        </div>
        <div class="my-5"></div>
        <div>
          <p>Bayu Permana Putra</p>
          <div class="rounded-md py-3 px-5 dark:bg-green-700 bg-green-500 mt-3">
            <p class="text-white">Frontend Developer</p>
          </div>
        </div>
      </div>
    </figure>
  `;
  return output;
};

export default Profile;
