const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@navigations': path.resolve(__dirname, 'src/navigations/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      // '@connectedComponents': path.resolve(__dirname, 'src/connectedComponents/index'),
      // '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      // '@themes': path.resolve(__dirname, 'src/themes'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.ngrok-free.app', '.ngrok.app'],
  },
};
