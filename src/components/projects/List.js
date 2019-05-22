import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectItem from './Item'

const ProjectList = (props) => {
    return(
        <div>
            <h2>Listing Projects</h2>
            <ul>
                { props.projects.map(project => {
                    return <ProjectItem title={project.title} key={project.id}/>
                })}
            </ul>

            <Link to='/projects/new'>Add project</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects:state.projects,
        clients:state.clients
    }
}
export default connect(mapStateToProps)(ProjectList)