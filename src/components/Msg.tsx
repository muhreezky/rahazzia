import { MouseEvent, useState } from "react";
import Replies from "./Replies";
import { ChevronCompactDown, ChevronCompactUp, ChevronDown } from "react-bootstrap-icons";
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import ReplyMsg from "./ReplyMsg";

type MyProps = {
  message: Message;
}

function replyDialog (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
  e.stopPropagation();
}

export default function Msg (props: MyProps) {
  const [openReplies, setOpenReplies] = useState(false);
  const [replyMode, setReplyMode] = useState(false);
  const toggleReplies = () => setOpenReplies(s => !s);
  return (
    <div className="flex items-center gap-3 flex-row">
      <div className="grow">
        <Accordion 
          open={openReplies}
          icon={<ChevronDown className={openReplies ? "rotate-180" : ""} />}
        >
          <AccordionHeader 
            className="text-white"
            onClick={toggleReplies}
          >
            {props?.message?.text}
          </AccordionHeader>
          <AccordionBody>
            <Replies messages={props?.message?.replies}>
              <ReplyMsg open={replyMode} message={props?.message} handler={() => setReplyMode(o => !o)} />
            </Replies>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}