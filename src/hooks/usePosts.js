import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        nodes {
          frontmatter {
            date
            slug
            title
          }
          excerpt
        }
      }
    }
  `);

  return posts.allMdx.nodes.map((post) => ({
    excerpt: post.excerpt,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    description: post.frontmatter.description
  }));
};

export default usePosts;
