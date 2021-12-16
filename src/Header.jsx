import React from "react";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <a href="https://www.gosuslugi.ru/" className="header__logo"></a>
      </div>
      <div className="header__lang">
        <div className="header__lang_icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <circle
                cx="11.7499"
                cy="11.7499"
                r="11.4236"
                fill="#C4C4C4"
                stroke="#E1E1E1"
                stroke-width="0.652774"
              ></circle>
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M0 -0.0184326H37.5V11.9995H0V-0.0184326Z"
                fill="white"
              ></path>
              <path d="M0 12H37.5V24.0179H0V12Z" fill="#D52B1E"></path>
              <path d="M0 8.09485H37.5V16.207H0V8.09485Z" fill="#0039A6"></path>
              <circle
                cx="11.7499"
                cy="11.7499"
                r="11.2799"
                stroke="#E1E1E1"
                stroke-width="0.939995"
              ></circle>
            </g>
          </svg>
        </div>
        <div className="header__lang_text">RUS</div>
      </div>
    </div>
  );
};

export default Header;
