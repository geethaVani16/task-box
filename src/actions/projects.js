export const addProject = (project) => {
    return {
        type:'ADD_PROJECT',
        payLoad:project
    }
}
export const removeClientProjects = (clientId) => {
    return {
        type : 'REMOVE_CLIENT_PROJECTS',
        payLoad:{
            clientId
        }
    }
}