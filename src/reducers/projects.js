const projectsIntialState = []
const projectsReducer = (state = projectsIntialState,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.payLoad]
        case 'REMOVE_CLIENT_PROJECTS' :
            return state.filter(project => project.client!=action.payLoad.clientId)
        default:
            return[...state]
    }
}
export default projectsReducer