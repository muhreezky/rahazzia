import { Button, Input, InputProps } from "@material-tailwind/react";
import React, { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

type MyProps = Omit<InputProps, "ref">;
export default function PassInput(props: MyProps) {
  const [showPass, setShowPass] = useState(false);
  const toggleShow = () => setShowPass(s => !s);
  return (
    <>
      <div className="relative flex w-full mb-3">
        <Input
          type={showPass ? "text" : "password"}
          {...props}
        />
        <Button variant="gradient" onClick={toggleShow} className="!absolute right-1 top-1" size="sm">
          {showPass ? <EyeSlashFill /> : <EyeFill />}
        </Button>
      </div>
    </>
  );
}
