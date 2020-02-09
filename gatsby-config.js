module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: false,
        tailwind: true
        // whitelist: ['whitelist'],
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'],
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'],
      }
    }
  ]
};
