import React, { Component } from 'react';
import './styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-root">
        <div>
          <p>
            Inspiration by <a href="https://github.com/IonicaBizau/react-todo-app" target="_blank" rel="noopener noreferrer">IonicaBizau</a>.
          </p>
          <blockquote>
            <p>
              There is one of all in
              {" "}
              <a href="https://github.com/Kzis/React-Course" target="_blank" rel="noopener noreferrer">React Class</a>.
            </p>
          </blockquote>
        </div>
        <p>success in  May 04, 2018</p>
      </div>
    );
  }
}

export default Footer;