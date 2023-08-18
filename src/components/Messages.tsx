import { KeyedMutator } from "swr";
import Msg from "./Msg";

type MyProps = {
  username?: string;
  messages?: any[];
  mutate: KeyedMutator<any>;
}
export default function Messages (props: MyProps) {
  const { messages, mutate } = props;
  return (
    <>
      <div className="flex flex-col">
        {messages && messages?.map ((e: any, i: number) => <Msg mutate={mutate} key={i} message={e} />)}
      </div>
    </>
  )
}