exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/Post.js'),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};
