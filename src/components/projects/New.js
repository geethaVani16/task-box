import React from 'react'
import ProjectForm from './Form'
import { connect } from 'react-redux'
import { addProject } from '../../actions/projects'



class ProjectNew extends React.Component {

    handleSubmit = (formData) => {
        console.log(formData)
        this.props.dispatch(addProject(formData))
    } 
    render(){
        return(
            <div>
                <h2>Add Project</h2>
                <ProjectForm handleSubmit={this.handleSubmit} clients={this.props.clients}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients:state.clients
    }

}
export default connect(mapStateToProps)(ProjectNew)