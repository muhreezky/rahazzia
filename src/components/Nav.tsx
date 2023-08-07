import { Button, IconButton, Navbar } from "@material-tailwind/react";
import Typo from "./Typo";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav () {
  const router = useRouter();
  return (
    <Navbar className="sticky h-max max-w-full top-0 z-10 px-4 py-5 lg:px-8 rounded-none">
      <div className="flex items-center justify-between">
        <Typo textGradient variant="h4" color="cyan" className="cursor-pointer mr-4 py-1.5 font-bold">
          <Link href="/">
            Rahazzia
          </Link>
        </Typo>
        <div className="flex items-center gap-3">
          <IconButton className="rounded-full" onClick={() => router.push("/login")}>
            <FaUser />
          </IconButton>
        </div>
      </div>
    </Navbar>
  )
}