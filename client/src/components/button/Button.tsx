import React from "react";

import "./Button.scss";

interface btnTypes {
   text: string;
   url?: string;

   txtColor: string;
}
const Button: React.FC<btnTypes> = ({ text, url, txtColor }) => {
   return (
      <a
         className="reusable-btn"
         href={url}
         style={{
            color: `${txtColor}`,
            cursor: "pointer",
            transition: "all 0.3s ease-out",
         }}
      >
         {text}
      </a>
   );
};

export default Button;
