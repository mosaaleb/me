/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneLight';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({
        className,
        style,
        tokens,
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
  );
};

CodeBlock.defaultProps = {
  className: 'ruby'
};

CodeBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default CodeBlock;
