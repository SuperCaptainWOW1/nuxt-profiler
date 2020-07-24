export const state = () => ({
  activeUserID: null,
  usersData: [
    {
      id: 0,
      login: 'Oleg',
      password: 'yaoleg',
    },
    {
      id: 1,
      login: 'neOleg',
      password: 'yaneoleg',
    },
    {
      id: 2,
      login: 'Olga',
      password: 'yaolga',
    }
  ]
})

export const getters = {
  getUsersData: state => state.usersData,
  getActiveUserData: state => state.usersData.find(u => u.id === state.activeUserID),
}

export const actions = {
  setActiveUserID ({ commit }, id) {
    commit('SET_ACTIVE_USER_ID', id)
  }
}

export const mutations = {
  SET_ACTIVE_USER_ID(state, id) {
    state.activeUserID = id
  }
}