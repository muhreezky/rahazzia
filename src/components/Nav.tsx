import { Button, Collapse, IconButton, Navbar } from "@material-tailwind/react";
import Typo from "./Typo";
import { List, X } from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Nav () {
  const router = useRouter();
  const { data: session } = useSession();
  const [openNav, setOpenNav] = useState(false);
  const navsList: JSX.Element = (
    <div className="mt-2 mb-4 flex p-3 flex-col gap-2 lg:mt-0 lg:mb-0 lg:flex-row lg:gap-4">
      {!session ? (
        <>
          <Button variant="outlined" className="w-full lg:w-auto" onClick={() => router.push("/login")}>
            Login
          </Button>
          <Button variant="gradient" className="w-full lg:w-auto" onClick={() => router.push("/register")}>
            Register
          </Button>
        </>
      ) : (
        <>
          <Button variant="outlined" color="red" onClick={() => signOut()}>
            Logout
          </Button>
          <Button variant="gradient" className="w-full lg:w-auto" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>
        </>
      )}
    </div>
  )
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  return (
    <>
      <Navbar className="sticky h-max max-w-full top-0 z-10 px-4 py-5 lg:px-8 rounded-none">
        <div className="flex items-center justify-between">
          <Typo textGradient variant="h4" color="cyan" className="cursor-pointer mr-4 py-1.5 font-bold">
            <Link href="/">
              Rahazzia
            </Link>
          </Typo>
          <div className="flex items-center justify-center gap-4">
            <IconButton
              variant="text"
              className="!absolute right-1 lg:hidden mr-5"
              onClick={() => setOpenNav(s => !s)}
              size="lg"
            >
              {openNav ? <X className="text-3xl" /> : <List className="text-3xl" />}
            </IconButton>
            <div className="hidden lg:flex items-end">
              {navsList}
            </div>
          </div>
        </div>
        <Collapse open={openNav}>
          {navsList}
        </Collapse>
      </Navbar>
    </>
  )
}