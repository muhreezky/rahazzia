import { Spinner } from "@material-tailwind/react";

type MyProps = {
  text?: string;
  size?: number | string;
  fontSize?: "base"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"|"4xl"|"5xl"|"6xl"|"7xl"|"8xl"|"9xl";
  className?: string;
}
export default function LoadingScreen(props: MyProps) {
  const { text, size, fontSize = "md", className } = props;
  return (
    <div className={"flex justify-center items-center flex-col gap-3 m-20 " + fontSize + " " + className}>
      <Spinner className={`h-${size} w-${size}`} />
      {text || "Tunggu Sebentar..."}
    </div>
  )
}