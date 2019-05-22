import React from 'react'
import ClientForm from './Form'
import { editClient } from '../../actions/clients'
import { connect } from 'react-redux'

const ClientEdit = (props) => {
    const handleSubmit = (formData) => {
        // console.log(formData)
        props.dispatch(editClient(formData))
        props.history.push(`/clients/${formData.id}`)
    }
    return (
        <div>
            <h2>edit Client</h2>
            <ClientForm handleSubmit={handleSubmit} client={props.client}/>
        </div>
    )
}
const mapStateToProps=(state,props) => {
    const id =props.match.params.id
    return {
        client:state.clients.find(client => client.id==id)
    }
}
export default connect(mapStateToProps)(ClientEdit)