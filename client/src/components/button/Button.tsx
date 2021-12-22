import React from "react";

import "./Button.scss";

interface btnTypes {
   text: string;
   url?: string;
   bgColor: string;
   txtColor: string;
}
const Button: React.FC<btnTypes> = ({ text, url, bgColor, txtColor }) => {
   return (
      <div className="btn-container">
         <a
            href={url}
            style={{ background: `${bgColor}`, color: `${txtColor}` }}
         >
            {text}
         </a>
      </div>
   );
};

export default Button;
