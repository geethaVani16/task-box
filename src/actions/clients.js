// add client
export const addClient = (client) => {
    return {
        type:'ADD_CLIENT',
        payLoad:client
    }
}
// edit clent
export const editClient = (client) => {
    return {
        type:'EDIT_CLIENT',
        payLoad:client
    }
}
// remove client
export const removeClient = (id) => {
    return {
        type: 'REMOVE_CLIENT',
        payLoad:{
            id
        }
    }
}


// in node.js
// module.exports = one === export default one
// module.exports = { one,two } === export one,export two
