import React from 'react';
import sliderImg1 from "../images/img-05.jpg";
import sliderImg2 from "../images/img-06.jpg";
import sliderImg3 from "../images/img-08.jpg";
const ProjectsSlider = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Projects</h2>
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    

                    <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src={sliderImg1} className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={sliderImg2} className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src={sliderImg3} className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                        </div>
                    </div>
                    </div>
                    <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                </div>
                </div>
            </div> 
        </>
    )
}

export default ProjectsSlider
