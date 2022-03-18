import React from 'react';

const WorksCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Work</h2>
                    <div className="work-experience">
                    <small className="date">2017-2015</small>
                    <h3 className="h5 date-title">Web developer - <a href="http://en.orson.io" title="Create professionnal website">Orson.io</a></h3>
                    

                    <p>Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Vitae ultricies leo integer malesuada nunc. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Fermentum leo vel orci porta non. Posuere sollicitudin aliquam ultrices sagittis. Aliquam faucibus purus in massa tempor nec.</p>
                    </div>

                    <div className="work-experience">
                    <small className="date">2017-2015</small>
                    <h3 className="h5 date-title">Web developer - <a href="http://mashup-template.com" title="">Mashup Template</a></h3>
                    
                    <p>Fermentum leo vel orci porta non. Posuere sollicitudin aliquam ultrices sagittis. Aliquam faucibus purus in massa tempor nec.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksCard
