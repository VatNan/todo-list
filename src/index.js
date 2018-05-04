import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
// import funstonTheme from 'typography-theme-funston';
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
