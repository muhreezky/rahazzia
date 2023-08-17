import Msg from "./Msg";

type MyProps = {
  username?: string,
  messages?: any[]
}
export default function Messages (props: MyProps) {
  const { messages } = props;
  return (
    <>
      <div className="flex flex-col">
        {messages && messages?.map ((e: any, i: number) => <Msg key={i} message={e} />)}
      </div>
    </>
  )
}