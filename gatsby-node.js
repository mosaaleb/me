const kebabCase = (str) => (
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')
);

exports.createPages = async ({ actions, graphql }) => {
  const posts = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
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
      allMdx(filter: { fileAbsolutePath: { regex: "/tils/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const tags = await graphql(`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
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

  tags.data.allMdx.group.forEach((tag) => {
    actions.createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}`,
      component: require.resolve('./src/templates/Tag.js'),
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
