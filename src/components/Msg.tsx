import { MouseEvent, useState } from "react";
import Replies from "./Replies";
import { ChevronCompactDown, ChevronCompactUp, ChevronDown } from "react-bootstrap-icons";
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

type MyProps = {
  message: Message;
}

function replyDialog (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
  e.stopPropagation();
}

export default function Msg (props: MyProps) {
  const [openReplies, setOpenReplies] = useState(false);
  const toggleReplies = () => setOpenReplies(s => !s);
  return (
    <>
      <Accordion 
        // onClick={toggleReplies} 
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
          <Replies messages={props?.message?.replies} />
        </AccordionBody>
      </Accordion>
    </>
  )
}