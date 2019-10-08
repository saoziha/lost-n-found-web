import React, {Component} from 'react';
import {Container} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fuild="true">
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2"/> by{" "}
            <a
              href="javascript:void(0)"
              rel="noopener noreferrer"
              target="_blank"
            >
              ST United
            </a>{" "}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;