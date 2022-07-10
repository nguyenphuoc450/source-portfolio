export const state = () => ({
    themeDark: true
})

export const getters = {
    getThemeDark (state) {
        return state.themeDark
    }
}

export const mutations = {
    setThemeDark (state, payload) {
        state.themeDark = !state.themeDark
    }
}

export const actions = {
    toggleThemeDark ({ commit }, payload) {
        commit('setThemeDark')
    }
}