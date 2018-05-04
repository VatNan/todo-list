import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
// import funstonTheme from 'typography-theme-funston';
// import altonTheme from 'typography-theme-alton';
// import fairyGatesTheme from 'typography-theme-fairy-gates';
// import githubTheme from 'typography-theme-github';
// import wordpress2010Theme from 'typography-theme-wordpress-2010';
import App from './component/App';

// typography
const theme = bootstrapTheme;
theme.overrideStyles = () => ({
  'h1,p,label': {
    color: 'white',
  },
  'a': {
    color: '#81ffcc',
  },
  'html': {
    backgroundColor: 'blanchedalmond',
  },
  'blockquote': {
    borderLeft: '0.25rem solid #eceeef',
      paddingLeft: '1rem',
  },
});
const typography = new Typography(theme);
typography.injectStyles(typography)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
