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
  'button': {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '4px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    transitionDuration: '0.4s',
  },
  'button:hover': {
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
  }
});
const typography = new Typography(theme);
typography.injectStyles(typography)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
