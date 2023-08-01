import { IconButton, Input } from "@material-tailwind/react";
import { useState, type PropsWithRef, ReactElement } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type PassInputProps = PropsWithRef<any> & {
  label?: string;
};
export default function PassInput(props: PassInputProps) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="relative flex w-full mb-3 max-w-[24rem]">
      <Input
        label={props.label}
        type={showPass ? "text" : "password"}
        name={props.name}
        id={props.name}
        className={`w-full p-3 ${props.className}`}
      />
      <IconButton>
        {showPass ? <FaEyeSlash /> : <FaEye />}
      </IconButton>
    </div>
  );
}
