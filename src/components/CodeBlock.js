/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import Prism from 'prism-react-renderer/prism';
import theme from 'prism-react-renderer/themes/duotoneLight';

const CodeBlock = ({ codeString, language }) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={codeString}
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
);

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  codeString: PropTypes.string.isRequired
};

export default CodeBlock;
