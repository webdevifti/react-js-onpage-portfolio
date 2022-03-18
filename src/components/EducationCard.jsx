import React from 'react'

const EducationCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Education</h2>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="education-experience">
                        <small className="date">2017-2015</small>
                        <h3 className="h5 date-title">Design Master</h3>
                        <p>Chicago University</p>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="education-experience">
                        <small className="date">2015-2012</small>
                        <h3 className="h5 date-title">Metrics Degree</h3>
                        <p>Ecole 87</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="education-experience">
                        <small className="date">2012-2011</small>
                        <h3 className="h5 date-title">Motion Design Course</h3>
                        <p>Pascal’s Lee Studio</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default EducationCard
