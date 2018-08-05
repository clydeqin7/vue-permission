const getters = {
  token: state => state.user.token,
  addRouters: state => state.permission.addRouters,
  roles: state => state.user.roles
}
export default getters
