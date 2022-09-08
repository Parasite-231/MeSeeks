import React from "react";

export default function UserLoginButton({ type, buttonText }) {
  return (
    <div className="mb-3">
      <button type={type} className="btn btn-block">
        {buttonText}
      </button>
    </div>
  );
}
