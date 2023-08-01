import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahazzia App</title>
        <meta charSet="UTF-8" />
      </Head>
      <Card color="cyan" className="darked">
        <CardBody>
          <Typography variant="h3" color="white">
            Rahazzia
          </Typography>
          <Typography color="white" variant="h5" className="font-medium">
            Hanya untuk yang tau tau aja 🤓
          </Typography>
        </CardBody>
        <CardFooter>
          <Button color="white" fullWidth>
            Mulai Berpesan
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
