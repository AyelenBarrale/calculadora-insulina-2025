import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: props => <h1 {...props} className="mdx-h1" />,
  h2: props => <h2 {...props} className="mdx-h2" />,
  h3: props => <h3 {...props} className="mdx-h3" />,
  p: props => <p {...props} className="mdx-p" />,
  ul: props => <ul {...props} className="mdx-ul" />,
  li: props => <li {...props} className="mdx-li" />,
};

// eslint-disable-next-line react/prop-types
export function MDXWrapper({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
