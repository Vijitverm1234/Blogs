import React from "react";
import "./Footer.css";
import { Github, Instagram, Linkedin, Send, X } from "lucide-react";

const Footer = () => {
  return (
    <div className="back">
      <div className="footer">
        <div className="first">
          <div className="first-heading">Why Choose Our Blog?</div>
          <hr />
          <p>
            Discover a space for insightful articles, expert tips, and inspiring
            stories. Our blog empowers you with knowledge, fosters creativity,
            and connects you with a vibrant community of thinkers and innovators.
          </p>
        </div>
        <div className="second">
          <div className="first-heading">Stay Connected</div>
          <hr />
          <div className="links">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
              aria-label="GitHub Profile"
            >
              <Github color="#333" size={40} />
            </a>
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
              aria-label="Instagram Profile"
            >
              <Instagram color="#333" size={40} />
            </a>
            <a
              href="https://x.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
              aria-label="X Profile"
            >
              <X color="#333" size={40} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="links-inside"
              aria-label="LinkedIn Profile"
            >
              <Linkedin color="#333" size={40} />
            </a>
          </div>
        </div>
        <div className="third">
          <div className="first-heading">Get in Touch</div>
          <hr />
          <form
            action="https://api.web3forms.com/submit"
            method="post"
            onSubmit={(e) => e.preventDefault()} // Temporary client-side handling
          >
            <input
              type="hidden"
              name="access_key"
              value="defcb9f7-0c55-49c3-b552-afa5a246e5e1"
            />
            <textarea
              placeholder="Share your thoughts or questions..."
              name="message"
              rows="4"
              required
            ></textarea>
            <button type="submit" aria-label="Send Message">
              <Send />
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Blog Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;