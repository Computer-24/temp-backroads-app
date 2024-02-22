import React from 'react';
import {pageLinks, socialLinks} from "../data";

function Footer(props) {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map(link => (
                    <li>
                        <a href={link.href} className="footer-link">{link.text}</a>
                    </li>
                ))}

            </ul>
            <ul className="footer-icons">
                {socialLinks.map(socialLink => (
                    <li>
                        <a href={socialLink.href} target="_blank" className="footer-icon" rel="noreferrer">
                            <i className={socialLink.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>

    );
}

export default Footer;