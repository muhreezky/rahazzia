import Reply from "./Reply";
import { ReactNode } from "react";

type MyProps = {
  messages: any[];
  children?: ReactNode | null;
};
export default function Replies({ messages, children }: MyProps) {
  return (
    <>
      {children}
      {messages && messages.map((e: Reply, i: number) => (
        <Reply text={e.text} key={i} />
      ))}
      {!messages?.length && <div className="text-white mb-5">Belum ada balasan</div>}
    </>
  );
}
