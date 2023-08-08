import PassInput from "@/components/PassInput";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import Head from "next/head";

export default function Register() {
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
