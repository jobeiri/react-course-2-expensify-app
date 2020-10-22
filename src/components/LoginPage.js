import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login with Google</button>
    <button>Amir Hossein Jobeiri</button>
    <button>Amir Hossein Jobeiri</button>
    <button>Amir Hossein Jobeiri</button>
    <button>Amir Hossein Jobeiri</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
