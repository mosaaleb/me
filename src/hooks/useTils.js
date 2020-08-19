import { graphql, useStaticQuery } from 'gatsby';

const useTils = () => {
  const tils = useStaticQuery(graphql`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/tils/"}}) {
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

  return tils.allMdx.nodes.map((til) => ({
    excerpt: til.excerpt,
    date: til.frontmatter.date,
    slug: til.frontmatter.slug,
    title: til.frontmatter.title,
    author: til.frontmatter.author,
    categories: til.frontmatter.categories,
    description: til.frontmatter.description
  }));
};

export default useTils;
