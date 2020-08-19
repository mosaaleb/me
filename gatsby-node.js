exports.createPages = async ({ actions, graphql }) => {
  const posts = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}){
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const tils = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/tils/"}}){
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  posts.data.allMdx.nodes.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/Post.js'),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });

  tils.data.allMdx.nodes.forEach((til) => {
    actions.createPage({
      path: `/today-i-learned/${til.frontmatter.slug}`,
      component: require.resolve('./src/templates/Til.js'),
      context: {
        slug: til.frontmatter.slug
      }
    });
  });
};
