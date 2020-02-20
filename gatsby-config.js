module.exports = {
  siteMetadata: {
    title: 'Muhammad Ebeid',
    description: "Muhammad Ebeid's Portfolio"
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/Layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              maxHeight: 420,
              loading: 'eager'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: false,
        tailwind: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static'
      }
    }
  ]
};
