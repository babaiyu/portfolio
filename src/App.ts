const main = () => {
  const hello = 'Hello World';
  document.addEventListener('DOMContentLoaded', () => {
    const example = document.getElementById('example');
    example.innerText = hello;
  });
};

export default main;
