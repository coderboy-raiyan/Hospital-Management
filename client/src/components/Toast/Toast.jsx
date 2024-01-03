import React from "react";
import toast from "react-hot-toast";

function Toast({ message }) {
  toast.custom();
  return <div>Toast</div>;
}

export default Toast;
