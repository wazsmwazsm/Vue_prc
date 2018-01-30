
export default {
  state: {
    userInfo: null,
    login_flag: false
  },
  mutations: {
    login: (state, userInfo) => {
      state.login_flag = true
      state.userInfo = userInfo
    },
    logout: state => state.login_flag = false
  }
}
