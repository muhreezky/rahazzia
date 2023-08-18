import LoadingScreen from "@/components/LoadingScreen";
import PassInput from "@/components/PassInput";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") return <LoadingScreen fontSize="3xl" size={12} />
  if (session) router.push("/dashboard");
  return (
    <>
      <Head>
        <title>New Account - Rahazzia</title>
      </Head>
      <Card color="light-blue" className="my-5 mx-4 lg:mx-20">
        <CardHeader
          className="p-6 lg:p-8 text-lg lg:text-2xl text-center font-bold"
          color="teal"
          variant="gradient"
        >
          Ayo Mulai
        </CardHeader>
        <form method="POST" action="/api/register">
          <CardBody className="flex flex-col gap-3 p-5">
            <Input
              color="white"
              type="email"
              className="w-full"
              label="Email"
              id="email"
              name="email"
              required
            />
            <Input
              color="white"
              className="w-full"
              label="Username"
              id="username"
              name="username"
              required
            />
            <PassInput
              color="white"
              className="w-full"
              label="Password"
              id="password"
              name="password"
              required
            />
          </CardBody>
          <CardFooter>
            <Button type="submit" color="white" fullWidth>
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
