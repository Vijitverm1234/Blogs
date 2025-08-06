import React from "react";
import "./Footer.css";
import { Github, Instagram, Linkedin, Send, X } from "lucide-react";
const Footer = () => {
  return (
    <div className="back">
      <div className="footer">
        <div className="first">
          <div className="first-heading">Why Blog ?</div>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis deleniti dolorum fuga ratione ex, natus quis modi sapiente
            repellat adipisci tempore in tenetur itaque dolore rem ducimus iure
            sequi.
          </p>
        </div>
        <div className="second">
          <div className="first-heading">Connect with me</div>
          <hr />
          <div className="links">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
            >
              <Github color="#333" size={40} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
            >
              <Instagram color="#333" size={40} aria-hidden="true" />
            </a>
            <a
              href="https://x.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
            >
              <X color="#333" size={40} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
            >
              <Linkedin color="#333" size={40} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="third">
          <div className="first-heading">Connect with me</div>
          <hr />
          <form action="https://api.web3forms.com/submit" method="post">
            <input
              type="hidden"
              name="access_key"
              value="defcb9f7-0c55-49c3-b552-afa5a246e5e1"
            ></input>
            <textarea
              placeholder="Enter Your message"
              name="message"
            ></textarea>
            <button type="submit">
              <Send></Send>
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Blog Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
