import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
    type: "button" | "submit"
    title: string;
    icon?: ReactNode;
    variant: 'btn_dark_green';
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
   <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
    type={type}
   >
        {icon}
        <label className="bold-16 whitespace-nowrap">{title}</label>
   </button>
  )
}

export default Button