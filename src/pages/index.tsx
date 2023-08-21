import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Rahazzia App</title>
        <meta charSet="UTF-8" />
      </Head>
      <Card color="cyan" className="my-5 mx-3 lg:mx-15">
        <CardBody>
          <Typography variant="h3" color="white">
            Rahazzia
          </Typography>
          <Typography color="white" variant="h5" className="font-medium">
            Hanya untuk yang tau tau aja 🤓. Mulailah menerima pesan rahasia yang jujur dari orang lain
          </Typography>
        </CardBody>
        <CardFooter>
          <Button color="white" fullWidth onClick={() => router.push("/dashboard")}>
            Mulai Sekarang
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
