import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_NAME } from "../../utils/constants";

export default function Footer() {
  const location = useLocation();

  if (["/login", "/signup", "/404", "/activation"].includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer   footer-white ">
      <div className="container">
        <div className="row">
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/">
                  {SITE_NAME}
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  Terms & Conditons
                </Link>
              </li>
              <li>
                <Link to="/contact">
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
