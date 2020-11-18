export default {
    doneTimeOut: ({commit}) => {
        setTimeout(() => {
            commit('setComleteTimeOut')
        }, 100)
    }
};