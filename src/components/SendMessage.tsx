import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { PencilFill, SendFill } from "react-bootstrap-icons";
import { KeyedMutator } from "swr";

type MyProps = {
  username: string;
  mutate: KeyedMutator<any>;
}
type TArg = {
  text?: string;
}
async function sendMessage (username: string, { arg }: { arg: TArg }) {
  const { data } = await axios.post(`/api/messages/${username}`, arg);
  return data;
}
export default function SendMessage (props: MyProps) {
  const { username, mutate } = props;
  const [open, setOpen] = useState(false);
  const handler = () => setOpen(o => !o);
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      text: ""
    },
    onSubmit(val) {
      mutate(
        async () => await sendMessage(username, { arg: { text: val.text } })
      ).then((e) => {
        handler();
      });
    }
  });
  return (
    <>
      <Button fullWidth className="flex items-center gap-3 mb-5" color="indigo" variant="gradient" onClick={handler}>
        <PencilFill /> Tulis Pesan
      </Button>
      <Dialog open={open} handler={handler}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            Kirim Pesan untuk @{username}
          </DialogHeader>
          <DialogBody className="p-3">
            <Textarea onChange={handleChange} name="text" id="text" label="Tulis Pesan di sini" />
          </DialogBody>
          <DialogFooter>
            <Button className="flex gap-3 justify-center items-center" type="submit" color="light-green" variant="gradient" fullWidth>
              <SendFill /> Kirim!!!
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  )
}