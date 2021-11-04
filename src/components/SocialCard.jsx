import React from 'react';
import { FaFacebook, FaTwitter,  FaLinkedin, FaGithub} from "react-icons/fa";

const SocialCard = () => {
    return (
        <>
             <div className="card">
                <div className="card-block">
                    <h2>Social Network</h2>
                    <div className="row">
                    <div className="col-md-3">
                        <p className="social-buttons"><a href="https://twitter.com/" title=""><span className="social-round-icon fa-icon"><FaFacebook /></span>beifti</a></p>
                    </div>
                    <div className="col-md-3">
                        <p className="social-buttons"><a href="https://twitter.com/" title=""><span className="social-round-icon fa-icon"><FaTwitter /></span>@webdevifti</a></p>
                    </div>
                    <div className="col-md-3">
                        <p className="social-buttons"><a href="https://www.linkedin.com/" title=""><span className="social-round-icon fa-icon"><FaLinkedin /></span>webdevifti</a></p>
                    </div>
                    <div className="col-md-3">
                        <p className="social-buttons"><a href="https://dribbble.com/" title=""><span className="social-round-icon fa-icon"><FaGithub /></span>webdevifti</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialCard
