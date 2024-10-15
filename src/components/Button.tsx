import React from "react";

interface Props {
  text: string;
  type: string;
}

const Button = ({ text, type }: Props) => {
  return <div className="btn btn-primary">{text}</div>;
};

export default Button;
