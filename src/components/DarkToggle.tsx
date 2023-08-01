"use client";

import { IconButton } from "@material-tailwind/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function DarkToggle () {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(localStorage.darkMode || false);
  }, []);
  
  useEffect(() => {
    const root = document.querySelector("html");
    localStorage.darkMode = dark || "";
    (root) && (root.className = dark ? "dark" : "");
  }, [dark]);

  return (
    <IconButton className="p-4 rounded-full" onClick={() => setDark(d => !d)}>
      {dark ? <FaSun /> : <FaMoon />}
    </IconButton>
  )
}