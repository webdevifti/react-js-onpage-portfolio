import React from 'react';
import projectImg1 from "../images/img-02.jpg";
import projectImg2 from "../images/img-03.jpg";
import projectImg3 from "../images/img-04.jpg";

const ProjectsCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Projects</h2>
                    <div className="row">
                    <div className="col-md-4">
                        <img src={projectImg1} className="img-responsive" alt="" />
                        <h3 className="h5">Amelia App</h3>
                        <p>June 2017</p>
                    </div>
                    <div className="col-md-4">
                        <img src={projectImg2} className="img-responsive" alt="" />
                        <h3 className="h5">Portland</h3>
                        <p>March 2017</p>
                    </div>
                    <div className="col-md-4">
                        <img src={projectImg3} className="img-responsive" alt="" />
                        <h3 className="h5">Denz for Nilon</h3>
                        <p>Jan 2017</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard
