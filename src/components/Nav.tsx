import { Button, IconButton, Navbar } from "@material-tailwind/react";
import Typo from "./Typo";
import { FaUser } from "react-icons/fa";

export default function Nav () {
  return (
    <Navbar className="sticky h-max max-w-full top-0 z-10 px-4 py-5 lg:px-8 rounded-none">
      <div className="flex items-center justify-between">
        <Typo textGradient variant="h4" color="cyan" as="a" href="#" className="cursor-pointer mr-4 py-1.5 font-bold">
          Rahazzia
        </Typo>
        <div className="flex items-center gap-3">
          <IconButton className="rounded-full">
            <FaUser />
          </IconButton>
        </div>
      </div>
    </Navbar>
  )
}