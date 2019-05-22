import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeClient } from '../../actions/clients'
import { removeClientProjects } from '../../actions/projects'
import ProjectItem from '../projects/Item'

const ClientShow = (props) => {
    console.log(props,'props')
    const { client }=props
    return (
        <div>
            <h2>client : { client.name }</h2>
            <h3>listing Projects for {client.name}</h3>
            <ul>
                {props.projects.map(project => <ProjectItem title={project.title} key={project.id}/>)}
            </ul>
            <Link to={`/clients/${client.id}/edit`}> Edit </Link>
            <button onClick={ () => {
                const confirmDelete = window.confirm('are you sure')
                if (confirmDelete) {
                    props.dispatch(removeClient(client.id))
                    props.dispatch(removeClientProjects(client.id))
                    props.history.push('/clients')                    
                }
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    // console.log(props,'props')
    const id = props.match.params.id
    return {
        client: state.clients.find(client => client.id == id),
        projects:state.projects.filter(project => project.client == id )
    }
}

export default connect(mapStateToProps)(ClientShow)