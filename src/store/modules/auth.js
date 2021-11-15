export default {
    namespaced: true,

    state: {
        user: null,
    },
    getters: {
        check(state) {
            return !!state.user
        },
    },
    mutations: {},
    actions: {}
}
