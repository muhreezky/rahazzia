import { Dialog, DialogHeader } from "@material-tailwind/react";

type MyProps = {
  open: boolean | false;
  handler: () => void;
  username?: string;
}
export default function SendMessage (props: MyProps) {
  const { open, handler, username } = props;
  return (
    <>
      <Dialog open={open} handler={handler}>
        <form>
          <DialogHeader>
            Kirim Pesan untuk @{username}
          </DialogHeader>
        </form>
      </Dialog>
    </>
  )
}