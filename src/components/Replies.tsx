import { Collapse } from "@material-tailwind/react";

type MyProps = {
  open: boolean;
  messages: any[];
};
export default function Replies ({ open, messages }: MyProps) {
  
  return (
    <div>
      <Collapse className="flex flex-col" open={open}>

      </Collapse>
    </div>
  )
}