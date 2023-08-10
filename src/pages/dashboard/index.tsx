import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
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
      <Card color="light-blue" className="my-5 mx-5 md:mx-7 lg:mx-36 break-words">
        <CardHeader variant="gradient" color="indigo" className="mx-5 p-6 lg:p-10 text-lg lg:text-2xl font-extrabold">
          {/* My Account */}
          <div className="flex items-center justify-center">
            <Image 
              src={`https://ui-avatars.com/api/?size=128&name=${session?.user?.email}&background=random`} 
              alt={session?.user?.email || "Profile Pic"}
              width={128}
              height={128}
              className="rounded-full border-2 border-light-blue-200"
            />
          </div>
        </CardHeader>
        <CardBody>
          {session?.user?.email}
        </CardBody>
      </Card>
    </>
  )
}