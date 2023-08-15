import { Collapse } from "@material-tailwind/react";
import Reply from "./Reply";

type MyProps = {
  open: boolean;
  messages: any[];
};
export default function Replies ({ open, messages }: MyProps) {
  
  return (
    <div className={open ? "mb-2 block" : "hidden"}>
      <Collapse className="flex flex-col" open={open}>
        {messages.map((e: Reply, i: number) => (
          <Reply text={e.text} key={i} />
        ))}
      </Collapse>
    </div>
  )
}