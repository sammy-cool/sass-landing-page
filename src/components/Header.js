import React from "react";
// import useToast from "./useToast.jsx";
import { createToast, setDefaultColors, setDefaultMessages } from "customizable-toast-notification";

const Header = () => {
  // const showToast1 = useToast();
  const [state] = React.useState({
    heading: "About Us",
    link1: "Home",
    link2: "About Us",
  });

  // let yell = gg || 'warning';
  // var gg = '';
   // Function to trigger the toast
   const showToast = () => {
    // gg = 'error';
    setDefaultColors({
      info: 'black',
      success: 'green',
      error: 'red',
      warning: 'green',
    });
    setDefaultMessages({
      info: 'This is an informational message!',
      success: 'Your action was successful!',
      error: 'An error has occurred!',
      warning: 'This is a warning message!',
    });
    createToast({
      // message: 'This is a success toast notification!',
      duration: 3000,
      // animationDuration: "5s",
      // animationEasing: "ease-in-out",
      position: 'top-left',
      type: 'info', // info, success, error, or warning
      // backgroundColor: 'green', // Custom background color
      textColor: 'white', // Custom text color
      showCloseButton: true
    });
  };
  
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">{state.heading}</h1>
        <div className="header__content-links">
          <a href="/">{state.link1}</a>
          {/* <button onClick={() => showToast1({ message: "Success!", type: yell })}>
        Show Toast1
      </button> */}
          <span className="header__content-span"></span>
          <a href="/">{state.link2}</a>
          <button onClick={showToast}>Show Toast</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
