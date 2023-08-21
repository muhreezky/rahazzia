import LoadingScreen from "@/components/LoadingScreen";
import PassInput from "@/components/PassInput";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const { data: session, status } = useSession();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "", username: "", password: ""
    },
    onSubmit: (val) => {
      const { email, password } = val;
      setIsLoading(true);
      axios.post("/api/register", val)
        .then(() => {
          setIsError(false);
          signIn("credentials", { email, password, redirect: true, callbackUrl: "/dashboard" });
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  })
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
        <form onSubmit={formik.handleSubmit}>
          <CardBody className="flex flex-col gap-3 p-5">
            <Input
              color="white"
              type="email"
              className="w-full"
              label="Email"
              id="email"
              name="email"
              required
              onChange={formik.handleChange}
            />
            <Input
              color="white"
              className="w-full"
              label="Username"
              id="username"
              name="username"
              required
              onChange={formik.handleChange}
            />
            <PassInput
              color="white"
              className="w-full"
              label="Password"
              id="password"
              name="password"
              required
              onChange={formik.handleChange}
            />
            <Alert color="red" open={isError} onClose={() => setIsError(false)}>
              Daftar akun error, mungkin username atau email sudah ada yang punya
            </Alert>
          </CardBody>
          <CardFooter className="flex flex-col gap-3">
            <Button disabled={isLoading} type="submit" color="white" fullWidth>
              {isLoading ? "Tunggu..." : "Daftar"}
            </Button>
            <Link href="/login" className="text-white underline hover:font-bold">
              Sudah punya akun? Login di sini
            </Link>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
