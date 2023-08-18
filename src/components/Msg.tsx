import { MouseEvent, useState } from "react";
import Replies from "./Replies";
import { ChevronDown } from "react-bootstrap-icons";
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import ReplyMsg from "./ReplyMsg";
import { KeyedMutator } from "swr";
import useReplies from "@/hooks/useReplies";

type MyProps = {
  message: Message;
  mutate: KeyedMutator<any>;
}

export default function Msg (props: MyProps) {
  const { data: reply, mutate } = useReplies(props.message.id);
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
            <Replies messages={reply?.data?.replies}>
              <ReplyMsg mutate={mutate} open={replyMode} message={props?.message} handler={() => setReplyMode(o => !o)} />
            </Replies>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}