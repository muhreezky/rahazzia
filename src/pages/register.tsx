import PassInput from "@/components/PassInput";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@material-tailwind/react";
import Head from "next/head";


export default function Register () {
  return (
    <>
      <Head>
        <title>New Account - Rahazzia</title>
      </Head>
      <Card color="light-blue" className="m-8">
        <CardHeader className="p-10" color="teal" variant="gradient">
          Register
        </CardHeader>
        <form>
          <CardBody className="flex flex-col gap-3 p-5">
            <Input color="white" type="email" className="w-full" label="Email" id="email" name="email" />
            <Input color="white" className="w-full" label="Username" id="username" name="username" />
            <PassInput color="white" className="w-full" label="Password" id="password" name="password" />
          </CardBody>
          <CardFooter>
            <Button type="submit" color="white" fullWidth>
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}