import { Button } from "@material-tailwind/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahazzia App</title>
        <meta charSet="UTF-8" />
      </Head>
      <div className="p-5 flex justify-center items-center">
        <Button>Click Me</Button>
      </div>
    </>
  );
}
