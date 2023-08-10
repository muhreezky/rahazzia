import { Card, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type MyProps = ComponentPropsWithoutRef<"div"> & {
  email?: string;
  username: string;
};
export default function ProfileCard(props: MyProps) {
  const { username } = props;
  return (
    <>
      <Card className="my-5 mx-5 md:mx-7 lg:mx-36 break-words">
        <CardHeader color="indigo" variant="gradient" className="p-6 lg:p-10">
          <div className="flex items-center justify-center">
            <Image
              src={`https://ui-avatars.com/api/?size=128&name=${username}&background=random`}
              alt={username || "Profile Pic"}
              width={128}
              height={128}
              className="rounded-full border-2 border-light-blue-200"
            />
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
