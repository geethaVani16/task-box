import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ClientList = (props) => {
    // console.log(props,'props')
    return(
        <div>
            <h2>Listing clients</h2>
            <ul>
                {props.clients.map(client => {
                    return <li key={client.id}><Link to={`/clients/${client.id}`}>{client.name}</Link> -{props.projects.filter(project => project.client===client.id).length}</li>
                })}
            </ul>

            <Link to='/clients/new'>Add Client</Link>
        </div>
    )
}

// HOC - higher order Component 

const mapStateToProps = (state) => {
    //console.log(state,'state')
    return {
        clients:state.clients,
        projects:state.projects
    }
}
// ClientList is called as wrapped Component
export default connect(mapStateToProps)(ClientList)