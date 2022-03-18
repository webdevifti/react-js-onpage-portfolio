import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import footerImg1 from "../images/mashup-icon.svg";

const Footer = () => {
    return (
        <>
            <footer className="footer-container white-text-container text-center">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12">
                        <p><img src={footerImg1} alt="" /></p>
                        
                        <p>©All right reserved. Design <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://unsplash.com/" title="Beautiful Free Images">Unsplash</a></p>
                        <p>
                        <a className="fa-icon fa-icon-2x" href="https://facebook.com/" title="">
                            <FaFacebook />
                        </a>
                        <a className="fa-icon fa-icon-2x" href="https://twitter.com/" title="">
                            <FaTwitter />
                        </a>
                        <a className="fa-icon fa-icon-2x" href="https://dribbble.com/" title="">
                            <FaGithub />
                        </a>
                        <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/" title="">
                            <FaLinkedin />
                        </a>
                       
                        </p>
                    </div>
                    </div>
                </div>
            </footer> 
        </>
    )
}

export default Footer
