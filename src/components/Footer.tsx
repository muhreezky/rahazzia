import { Button } from "@material-tailwind/react";
import { Github, Globe2, Instagram, Linkedin } from "react-bootstrap-icons";
import Typo from "./Typo";

export default function Footer () {
  return (
    <footer className="bg-light-blue-600 mt-auto flex items-center text-left flex-col lg:flex-row lg:justify-between w-full px-4 pt-3 shadow-xl">
      <div className="lg:mb-0">
        <Typo color="white" variant="small" className="font-bold">
          &copy; Copyright 2023 MuhReezky Studio
        </Typo>
      </div>
      <div className="p-4 flex justify-center items-center gap-1 flex-col">
        <Typo color="white" variant="paragraph" className="mb-1 font-bold">
          Links
        </Typo>
        <div className="grid grid-cols-2">
          <a href="https://github.com/muhreezky">
            <Button color="white" size="sm" variant="text" className="flex items-center gap-3">
              <Github /> GitHub
            </Button>
          </a>
          <a href="https://instagram.com/muh.reezky">
            <Button color="white" size="sm" variant="text" className="flex items-center gap-3">
              <Instagram /> Instagram
            </Button>
          </a>
          <a href="https://muhreezky.vercel.app">
            <Button color="white" size="sm" variant="text" className="flex items-center gap-3">
              <Globe2 /> Website
            </Button>
          </a>
          <a href="https://linkedin.com/in/muhreezky">
            <Button color="white" size="sm" variant="text" className="flex items-center gap-3">
              <Linkedin /> LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </footer>
  )
}