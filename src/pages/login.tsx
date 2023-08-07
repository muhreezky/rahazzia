import PassInput from "@/components/PassInput";
import { Button, Card, CardBody, CardFooter, Input } from "@material-tailwind/react";
import Head from "next/head";

export default function Login () {
  return (
    <>
      <Head>
        <title>Login - Rahazzia</title>
      </Head>
      <Card className="m-5 lg:m-8" color="light-blue">
        <form>
          <CardBody className="flex flex-col gap-3">
            <div className="text-center text-3xl font-bold">
              Login
            </div>
            <Input variant="standard" color="white" className="w-full" name="username" id="username" label="Email / Username" />
            <PassInput variant="standard" name="password" color="white" label="Password" className="w-full" />
          </CardBody>
          <CardFooter>
            <Button type="submit" fullWidth color="white">
              Confirm
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}