import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import Messages from "./Messages";
import Typo from "./Typo";
import useMessages from "@/hooks/useMessages";
import LoadingScreen from "./LoadingScreen";
import SendMessage from "./SendMessage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type MyProps = {
  email?: string;
  username: string;
};
export default function ProfileCard(props: MyProps) {
  const { username } = props;
  const { data: session } = useSession();
  const [after, setAfter] = useState<string>("");
  const {
    data: message,
    isLoading,
    error,
    after: afterId,
    hasNext,
  } = useMessages(username, after);
  const [list, setList] = useState<any[]>([]);

  const addToList = (arr: any[]) => setList((l) => [...l, ...arr]);
  const nextPage = (after: string, data: any[]) => {
    setAfter(after);
    addToList(data);
  };

  return (
    <>
      <Card color="light-blue" className="my-5 md:mx-5 lg:mx-36 break-words">
        <CardHeader
          color="indigo"
          variant="gradient"
          className="w-auto p-6 lg:p-10 mx-10"
        >
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
          {session?.user?.username !== username ? (
            <SendMessage username={username} />
          ) : null}
          <Messages messages={list.length ? list : message?.data?.messages} />
          <Button
            disabled={!hasNext}
            fullWidth
            className="mt-5"
            color="white"
            onClick={() => nextPage(afterId, message?.data?.messages)}
          >
            Lanjut...
          </Button>
          {isLoading && (
            <LoadingScreen
              size={12}
              fontSize="lg"
              text="Yang sabar sayangg..."
            />
          )}
        </CardBody>
      </Card>
    </>
  );
}
