import React from "react";
// import useToast from "./useToast.jsx";
// import { noop, createToast, setDefaultColors, setDefaultMessages } from "customizable-toast-notification/dist/index.esm.mjs";
const {createToast, setDefaultMessages, setDefaultColors, noop} = require("customizable-toast-notification");

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
      info: 'teal',
      success: 'orange',
      error: 'red',
      warning: 'snow',
    });
    setDefaultMessages({
      info: 'This is an informational message!',
      success: 'Your action was successful!',
      error: 'An error has occurred!',
      warning: 'This is a warning message!',
    });
    createToast({
      message: 'This is a success toast notification!',
      duration: 5000,
      animationDuration: "2.5s",
      animationEasing: "ease-in-out",
      position: 'top-left',
      type: 'warning', // info, success, error, or warning
      backgroundColor: 'green', // Custom background color
      textColor: 'white', // Custom text color
      showCloseButton: true,
      // autoClose: false,
      cta: {
        label: "Download",
        href: "https://cdn.jsdelivr.net/npm/customizable-toast-notification",
        variant: "link",
        target: "_blank"
      }
    });
    createToast({
      message: "File uploaded successfully!",
      type: "success",
      cta: {
        label: "View File",
        onClick: () => {
          window.open('https://cdn.jsdelivr.net/npm/customizable-toast-notification');
        },
        autoClose: true // Close toast after click (default: true)
      }
    });
    createToast({
      message: "Ready to sync your data?",
      duration: 50000,
      cta: {
        label: "Sync Now",
        ariaLabel: "Start data synchronization",
        autoClose: false,
        onClick: async () => {
          noop();
          // Manually close if needed
        }
      }
    });
  };

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">{state.heading}</h1>
        <div className="header__content-links">
          <a href="/">{state.link1}</a>
          <span className="header__content-span"></span>
          <a href="/">{state.link2}</a>
          <button onClick={showToast}>Show Toast</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
