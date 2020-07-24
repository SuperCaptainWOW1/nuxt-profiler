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
  // Important to compare id with null because 
  // coercion to boolean will return false in case of id = 0
  getIsUserLoggedIn: state => state.activeUserID !== null
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