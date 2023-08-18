import { Card, CardBody, CardHeader } from "@material-tailwind/react";

export default function ErrorPage () {
  return (
    <Card>
      <CardHeader className="p-8 text-3xl font-extrabold">
        Error
      </CardHeader>
      <CardBody className="shadow-xl flex items-center justify-center gap-3" color="red">
        Maaf, ada error yang tidak diharapkan
      </CardBody>
    </Card>
  )
}