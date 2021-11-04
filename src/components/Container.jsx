import React from 'react';
import AboutCard from './AboutCard';
import ContactCard from './ContactCard';
import EducationCard from './EducationCard';
import LanguageCard from './LanguageCard';
import ProjectsCard from './ProjectsCard';
import ProjectsSlider from './ProjectsSlider';
import SocialCard from './SocialCard';
import WorksCard from './WorksCard';

const Container = () => {
    return (
        
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <AboutCard />
                        <ProjectsCard />
                        <WorksCard />
                        <EducationCard />
                        <LanguageCard />
                        <ProjectsSlider />
                        <SocialCard />
                        <ContactCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container
