import { Button, Input, InputProps } from "@material-tailwind/react";
import React, { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

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
        <Button onClick={toggleShow} className="!absolute top-1 right-1 px-3">
          {showPass ? <EyeSlashFill /> : <EyeFill />}
        </Button>
      </div>
    </>
  );
}
