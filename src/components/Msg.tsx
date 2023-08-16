import { useState } from "react";
import Replies from "./Replies";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
import { Button } from "@material-tailwind/react";

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
        className="flex justify-between items-center border-2 mb-4 px-4 py-2 border-black rounded-md bg-blue-600 cursor-pointer"
      >
        <div>
          {props?.message?.text}
        </div>
        <div className="flex gap-3">
          {openReplies ? <ChevronCompactUp /> : <ChevronCompactDown />}
        </div>
      </div>
      <Replies open={openReplies} messages={props?.message?.replies} />
    </>
  )
}