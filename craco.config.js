const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@navigation': path.resolve(__dirname, 'src/navigation/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      '@dashboardWrappers': path.resolve(__dirname, 'src/dashboardWrappers/index'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages/index'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },
  devServer: {
    allowedHosts: ['localhost'],
  },
};
