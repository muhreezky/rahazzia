type MyProps = {
  text: string;
}
export default function Reply (props: MyProps) {
  return (
    <div className="ml-5 mb-2 px-4 py-2 lg:ml-10 bg-white rounded-md break-words text-black">
      {props.text}
    </div>
  )
}