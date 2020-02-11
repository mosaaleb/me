import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date
            slug
            title
            author
            categories
            description
          }
          excerpt
        }
      }
    }
  `);

  return posts.allMdx.nodes.map((post) => ({
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    categories: post.frontmatter.categories,
    description: post.frontmatter.description,
    excerpt: post.excerpt
  }));
};

export default usePosts;