import { graphql, useStaticQuery } from 'gatsby';


const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
          title
          siteUrl
          authorName
          siteLocale
          description
          siteLanguage
          twitterUsername
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
