import React, { Component } from 'react';
import ProjectComponent from '../components/ProjectComponent';

class ProjectsContainer extends Component {
    render() {
        return (
            <div>
                <h4 className="hr-title">
                    ⚒ Projects ⚒
                </h4>
                <ProjectComponent />
            </div>
        );
    }
}

export default ProjectsContainer;
