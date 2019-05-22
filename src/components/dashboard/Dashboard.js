import React from 'react'
import { connect } from 'react-redux'


const Dashboard = (props) => {
    return(
        <div>
            <h3>Total Clients -{props.clients.length} </h3>
            <h4>Recent Client</h4>
            <p>{props.clients[props.clients.length-1].name}</p>
            <h3>Total Projects - {props.projects.length}</h3>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        clients:state.clients,
        projects:state.projects
    }
}

export default connect(mapStateToProps)(Dashboard)