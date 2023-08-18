import PassInput from "@/components/PassInput";
import loginSchema from "@/schemas/login.schema";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
} from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const { data } = await axios.post("/api/login", { email, password });
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (val) => {
      login(val)
        .catch((e) => {
          setIsLoginError(true);
          setLoading(false);
        });
    },
  });
  return (
    <>
      <Head>
        <title>Login - Rahazzia</title>
      </Head>
      <Card className="my-5 mx-4 lg:mx-20" color="light-blue" variant="gradient">
        <CardHeader
          className="text-center text-lg lg:text-2xl p-6 lg:p-8 font-bold"
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
              label={formik.errors.email || "Email"}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              required
            />
            <PassInput
              id="password"
              name="password"
              color="white"
              label={formik.errors.password || "Password"}
              className="w-full"
              error={!!formik.errors.password}
              onChange={formik.handleChange}
              required
            />
            <Alert color="red" open={isLoginError} onClose={() => setIsLoginError(false)}>
              E-mail atau Password mungkin salah, coba lagi.
            </Alert>
          </CardBody>
          <CardFooter>
            <Button 
              className="flex flex-row gap-3 items-center justify-center" 
              type="submit" 
              color="white" 
              disabled={loading}
              fullWidth
            >
              {loading ? <><Spinner /> Loading...</> : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
