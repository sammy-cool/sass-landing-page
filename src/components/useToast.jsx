// import { useState, useEffect } from "react";
// import { createToast } from "customizable-toast-notification";


// const useToast = () => {
//   const [toastConfig, setToastConfig] = useState(null);

//   useEffect(() => {
//     if (toastConfig) {
//       createToast(toastConfig);
//     }
//   }, [toastConfig]);

//   return setToastConfig;
// };

// export default useToast;

// TODO // ==== another soln
import { useState } from "react";
import { createToast } from "customizable-toast-notification";

const useToast = () => {
  const [toastConfig, setToastConfig] = useState(null);

  const showToast = (options) => {
    setToastConfig(options); // Update state with new toast config
    setTimeout(() => {
      createToast(options); // Delay to allow state update before triggering toast
    }, 0);
  };

  return showToast; // Return function to manually trigger toast
};

export default useToast;

