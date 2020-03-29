import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark'

const components = {
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: (children) => {
    const language = children.children.props.className.replace(/language-/, '');
    return(
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.children.props.children.trim()}
      language={language}
    >
      {({
        style,
        tokens,
        className,
        getLineProps,
        getTokenProps
      }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={line}>
              {line.map((token, key) => (
                <div {...getTokenProps({ token, key })} key={token} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
  }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
