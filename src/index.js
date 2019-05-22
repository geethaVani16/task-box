import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { addClient } from './actions/clients'
import { addProject } from './actions/projects';


const store=configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

const client = { id:uuid(), name:'geetha'}
store.dispatch(addClient(client))

const project={
    id:uuid(),
    title:'FHQ',
    client:client.id
}
store.dispatch(addProject(project))


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


