const clientsIntialState = []

const clientsReducer = (state = clientsIntialState, action) => {
    switch(action.type) {
        case 'ADD_CLIENT':
            return [...state,action.payLoad]
        case 'EDIT_CLIENT' :
            return state.map(client => {
                if(client.id === action.payLoad.id){
                    return {...client,...action.payLoad}
                } else {
                    return {...client}
                }
            })
        case 'REMOVE_CLIENT' :
            return state.filter(client => client.id!== action.payLoad.id)
        default:
            return [...state]
    }
}
export default clientsReducer