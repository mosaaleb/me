import { graphql, useStaticQuery } from 'gatsby';

const useTags = () => {
  const tags = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  return tags.allMdx.group.map((tag) => (
    tag.fieldValue
  ));
};

export default useTags;
