import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import Messages from "./Messages";
import Typo from "./Typo";
import useMessages from "@/hooks/useMessages";

type MyProps = ComponentPropsWithoutRef<"div"> & {
  email?: string;
  username: string;
};
export default function ProfileCard(props: MyProps) {
  const { username } = props;
  const { data:messages, isLoading, error } = useMessages(username);
  return (
    <>
      <Card color="light-blue" className="my-5 md:mx-5 lg:mx-36 break-words">
        <CardHeader color="indigo" variant="gradient" className="w-auto p-6 lg:p-10 mx-10">
          <div className="flex items-center justify-center gap-3 flex-col">
            <Image
              src={`https://ui-avatars.com/api/?size=128&name=${username}&background=random`}
              alt={username || "Profile Pic"}
              width={128}
              height={128}
              className="rounded-full border-2 border-light-blue-200"
            />
            <Typo variant="h5">
              <b>{username}</b>
            </Typo>
          </div>
        </CardHeader>
        <CardBody>
          <Messages messages={messages.values} />
        </CardBody>
      </Card>
    </>
  );
}
