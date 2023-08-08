import PassInput from "@/components/PassInput";
import loginSchema from "@/schemas/login.schema";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function Login() {
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (val) => {
      await login(val);
    },
  });
  return (
    <>
      <Head>
        <title>Login - Rahazzia</title>
      </Head>
      <Card className="my-5 mx-4 lg:mx-20" color="light-blue">
        <CardHeader
          className="text-center text-2xl p-6 lg:p-8 font-bold"
          color="teal"
          variant="gradient"
        >
          Login
        </CardHeader>
        <form onSubmit={formik.handleSubmit}>
          <CardBody className="flex flex-col gap-3">
            <Input
              color="white"
              className="w-full"
              name="email"
              id="email"
              label="Email"
              onChange={formik.handleChange}
              required
            />
            <PassInput
              id="password"
              name="password"
              color="white"
              label="Password"
              className="w-full"
              onChange={formik.handleChange}
              required
            />
          </CardBody>
          <CardFooter>
            <Button type="submit" fullWidth color="white">
              Confirm
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
