import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <a href="mailto:warren.leyes@gmail.com">
            <i className="fas fa-envelope-square"></i> Email</a>
          <a href="tel:+6043455203">
            <i className="far fa-mobile-alt"></i> Phone</a>
          <a href="https://twitter.com/warren_leyes" target="_blank">
            <i className="fab fa-twitter-square"></i> Twitter</a>
          <a href="https://www.linkedin.com/in/warren-leyes/" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
        <p className="copyright">Copyright
      <i className="fal fa-copyright"></i> Warren Leyes 2018</p>
      </footer>
    )
  }
}

export default Footer;