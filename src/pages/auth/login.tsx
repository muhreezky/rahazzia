import PassInput from "@/components/PassInput";
import { Card, CardBody, CardHeader, Input } from "@material-tailwind/react";

export default function Login () {
  return (
    <>
      <Card color="light-blue" className="m-8">
        <CardHeader>
          Login to your Account
        </CardHeader>
        <CardBody>
          <Input color="white" className="w-full" name="username" id="username" label="Email / Username" />
          <PassInput name="password" />
        </CardBody>
      </Card>
    </>
  )
}