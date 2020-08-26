import { graphql, useStaticQuery } from 'gatsby';

const useTils = () => {
  const tils = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/tils/" } }) {
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

  return tils.allMdx.nodes.map((til) => ({
    excerpt: til.excerpt,
    date: til.frontmatter.date,
    tags: til.frontmatter.tags,
    slug: til.frontmatter.slug,
    title: til.frontmatter.title,
    author: til.frontmatter.author,
    description: til.frontmatter.description
  }));
};

export default useTils;
