/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-postcss'],
  optimize: {
    bundle: true,
    minify: true,
  },
  buildOptions: {
    baseUrl: '',
  },
  devOptions: {
    port: 3500,
  },
};
