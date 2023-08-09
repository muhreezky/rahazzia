import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { options } from "../api/auth/[...nextauth]";
import Image from "next/image";

export default function Dashboard () {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") router.push("/login");
  if (status === "loading") return <h1>Loading...</h1>
  if (status === "authenticated") return (
    <>
      <Head>
        <title>Dashboard | Rahazzia</title>
      </Head>
      <Card color="light-blue" className="my-5 mx-5 md:mx-7 lg:mx-36">
        <CardHeader color="teal" className="p-6 lg:p-10 text-lg lg:text-2xl font-extrabold">
          My Account
        </CardHeader>
        <CardBody className="flex flex-col gap-3 items-center">
          <Image 
            src="https://ui-avatars.com/api/?size=128" 
            alt={session?.user?.email || "Profile Pic"}
            width={128}
            height={128}
          />
          {session?.user?.email}
        </CardBody>
      </Card>
    </>
  )
}