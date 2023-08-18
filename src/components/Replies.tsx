import { AccordionBody, Collapse } from "@material-tailwind/react";
import Reply from "./Reply";

type MyProps = {
  messages: any[];
};
export default function Replies({ messages }: MyProps) {
  return (
    <>
      {messages.map((e: Reply, i: number) => (
        <Reply text={e.text} key={i} />
      ))}
      {!messages?.length && <div className="text-white">Belum ada balasan</div>}
    </>
  );
}
