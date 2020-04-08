import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './src/components/CodeBlock';

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
