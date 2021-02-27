import {dataListPict as data} from '../mock/data';

const loopPict = () => {
  let res = '';
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    res += `
      <div class="w-1/3 p-5 mx-auto">
        <img src=${el.img} alt=${el.title} class="w-60 h-52 rounded-md" />
      </div>
    `;
  }
  return res;
};

const ListPict = () => {
  let output: string = `
    <div class="mt-7 md:flex md:items-center md:justify-center md:flex-row flex-wrap">
      ${loopPict()}
    </div>
  `;

  return output;
};

export default ListPict;
