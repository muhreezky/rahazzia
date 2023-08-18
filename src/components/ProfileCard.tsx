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
    mutate,
  } = useMessages(username, after);
  const [list, setList] = useState<any[]>([]);
  const addToList = (arg: any[]) => setList(l => [...l, ...arg]);
  const goNext = (after: string, data: any[]) => {
    if (!data) return;
    addToList(data);
    setAfter(after);
  }
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
            <SendMessage username={username} mutate={mutate} />
          ) : null}
          <Messages messages={list} />
          <div className="flex justify-center items-center flex-row gap-3 mt-5">
            <Button
              disabled={!hasNext}
              color="white"
              onClick={() => goNext(afterId, message?.data?.messages)}
              fullWidth
            >
              {!list.length ? "Lihat Pesan" : hasNext ? "Lanjut..." : "Habis."}
            </Button>
          </div>
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
