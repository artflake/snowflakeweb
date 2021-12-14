import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_NAME } from "../../utils/constants";

export default function Footer() {
  const location = useLocation();

  if (["/login", "/signup"].includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer   footer-white ">
      <div className="container">
        <div className="row">
          <nav className="footer-nav">
            <ul>
              <li>
                <Link rel="noopener noreferrer" to="/">
                  {SITE_NAME}
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/blog" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/terms" target="_blank">
                  Terms & Conditons
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/contact" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © <script>document.write(new Date().getFullYear())</script>, made
              with <i className="fa fa-heart heart"></i> by {SITE_NAME}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
