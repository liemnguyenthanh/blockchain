import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../features/sidebar";
import { login, logout } from "../features/user";
import { connectWallet } from "../utils/useAuth";
function HeaderApp() {
  const sidebar = useSelector((state) => state.sidebar.value);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const connect = async () => {
    const account = await connectWallet()
    if (account) {
      dispatch(login({ account: account }))
    }
  }
  const logoutWallet = () => {
    dispatch(logout())
  }
  return (
    <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav top-nav-collapse" style={sidebar ? { marginLeft: '240px' } : {}}>
      <div className="float-left">
        <a
          data-activates="slide-out"
          className="button-collapse black-text"
          onClick={() => { dispatch(toggle()) }}
        >
          <i className="fas fa-bars"></i>
        </a>
      </div>
      <div className="breadcrumb-dn mr-auto">
      <p>{user ? user.account : ''}</p>
      </div>
      {
        user && user.account ?
          <button className="btn btn-danger"
            onClick={() => logoutWallet()}
          >
            Logout
          </button> :
          <button className="btn btn-dark"
            onClick={() => connect()}
          >
            Connect MetaMask
          </button>
      }
    </nav>
  );
}

export default HeaderApp;
