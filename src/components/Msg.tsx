import { useState } from "react";
import Replies from "./Replies";

type MyProps = {
  message: Message;
}
export default function Msg (props: MyProps) {
  const [openReplies, setOpenReplies] = useState(false);
  const toggleReplies = () => setOpenReplies(s => !s);
  return (
    <>
      <div 
        onClick={toggleReplies} 
        className="border-2 mb-4 px-4 py-2 border-black rounded-md bg-blue-600 cursor-pointer"
      >
        {props?.message?.text}
      </div>
      <Replies open={openReplies} messages={props?.message?.replies} />
    </>
  )
}