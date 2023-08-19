import { Button } from "@material-tailwind/react";
import { Github, Instagram } from "react-bootstrap-icons";
import Typo from "./Typo";

export default function Footer () {
  return (
    <footer className="bg-light-blue-600 mt-auto flex items-center flex-col lg:flex-row lg:justify-between w-full p-4 shadow-xl">
      <div className="mb-5 lg:mb-0">
        <Typo color="white" variant="small" className="font-bold">
          &copy; Copyright 2023 MuhReezky Studio
        </Typo>
      </div>
      <div className="flex items-center gap-1 flex-col">
        <Typo color="white" variant="paragraph" className="mb-1 font-bold">
          Links
        </Typo>
        <div className="flex flex-col lg:flex-row">
          <a href="https://github.com/muhreezky">
            <Button color="white" variant="text" className="flex items-center gap-3">
              <Github /> @muhreezky
            </Button>
          </a>
          <a href="https://instagram.com/muh.reezky">
            <Button color="white" variant="text" className="flex items-center gap-3">
              <Instagram /> @muh.reezky
            </Button>
          </a>
        </div>
      </div>
    </footer>
  )
}