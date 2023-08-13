import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

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
      {session.user && <ProfileCard username={session.user.username as string} />}
    </>
  )
}