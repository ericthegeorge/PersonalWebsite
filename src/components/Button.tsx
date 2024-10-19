import React from "react";

interface Props {
  colour?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

const Button = ({ colour = "primary", children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
