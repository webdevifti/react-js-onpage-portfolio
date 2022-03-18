import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <header className="white-text-container section-container">
                <div className="text-center">
                <h1>I am Eftekhar Alam</h1>
                <p>Web Developer</p>
                <p>
                    <a className="fa-icon fa-icon-2x" href="https://facebook.com/beifti" title="Facebook / Be Ifti">
                    <FaFacebook />
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://twitter.com/webdevifti" title="Twitter / webdevifti">
                    <FaTwitter />
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/webdevifti" title="Linkedin / webdevifti">
                    <FaLinkedin />
                    </a>
                    <a className="fa-icon fa-icon-2x" href="https://github.com/webdevifti" title="Github / webdevifti">
                    <FaGithub />
                    </a>
                </p>
                </div>
            </header> 
        </>
    )
}

export default Header
