import { Button, IconButton, Input, InputProps } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type MyProps = Omit<InputProps, "ref">;
export default function PassInput(props: MyProps) {
  const [showPass, setShowPass] = useState(false);
  const toggleShow = () => setShowPass(s => !s);
  return (
    <>
      <div className="relative flex items-center w-full mb-3">
        <Input
          type={showPass ? "text" : "password"}
          {...props}
        />
        <IconButton onClick={toggleShow} className="!absolute top-1 right-1 px-3">
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </IconButton>
      </div>
    </>
  );
}
