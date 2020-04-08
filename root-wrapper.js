import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Prism from "prism-react-renderer/prism";
import CodeBlock from './src/components/CodeBlock';

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-ruby");

const components = {
  'p.inlineCode': props => (
    <code style={{ backgroundColor: '#FAF8F5', color: '#728fcb' }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <CodeBlock
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
