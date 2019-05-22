import React from 'react'
import ClientForm from './Form'
import { addClient } from '../../actions/clients'
import { connect } from 'react-redux'

class ClientNew extends React.Component {

    handleSubmit=(formData) => {
        // console.log(formData,'formdata is comming from props')
        this.props.dispatch(addClient(formData))
        this.props.history.push('/clients')

    }
    render(){
        return(
            <div>
                <h2>Add Client</h2>
                <ClientForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default connect()(ClientNew)