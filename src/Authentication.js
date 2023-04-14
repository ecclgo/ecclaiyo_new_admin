import { forwardRef, useImperativeHandle } from "react";

const Authentication = forwardRef((props, ref) => {
  const TOKEN = "TOKEN";
  
  const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem("isLoggedInVar", "true");
  };
  
  const logUserOut = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem("adminId");
    localStorage.setItem("isLoggedInVar", "false");
  };

  useImperativeHandle(ref, () => ({
    logUserIn,
    logUserOut,
  }));
});


export default Authentication;