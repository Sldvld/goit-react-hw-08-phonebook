const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelecors = {
  getIsLoggedIn,
  getUserName,
};
export default authSelecors;
