import { ComponentProps } from "react";

type MyProps = ComponentProps<"div"> & {
  username?: string,
  messages?: any[]
}
export default function Messages (props: MyProps) {
  const { messages } = props;
  return (
    <>
      <div className="flex flex-col">
        {messages && 
          messages.map(
            (e: any, i: number) => (
              <div key={i} className="w-full">{JSON.stringify(e)}</div>
            )
          )
        }
      </div>
    </>
  )
}