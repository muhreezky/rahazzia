import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { ChatFill } from "react-bootstrap-icons";
import { KeyedMutator } from "swr";
import * as Yup from "yup";

type MyProps = {
  message: Message;
  handler: () => void;
  open: boolean;
  mutate: KeyedMutator<any>;
};

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Balasan harus diisi")
});

async function reply (id: string, text: string) {
  const { data } = await axios.post(`/api/messages/replies/${id}`, { text });
  return data;
}

export default function ReplyMsg (props: MyProps) {
  const { handler, message, open, mutate } = props;
  const [mutating, setMutating] = useState(false);
  const formik = useFormik({
    initialValues: {
      text: ""
    },
    validationSchema,
    onSubmit({ text }) {
      setMutating(true);
      mutate(async () => await reply(message.id, text))
        .then(() => handler())
        .catch((e) => console.error(e))
        .finally(() => setMutating(false));
    }
  });
  return (
    <>
      <div className="ml-5 mb-5">
        <Button 
          fullWidth 
          onClick={handler} 
          size="md" 
          color="white" 
          variant="outlined"
          className="flex items-center gap-3 shadow-lg"
        >
          <ChatFill /> Balas
        </Button>
      </div>
        <Dialog open={open} handler={handler}>
          <form onSubmit={formik.handleSubmit}>
            <DialogHeader className="bg-blue-600 text-white">
              Balas Pesan ini
            </DialogHeader>
            <DialogBody>
              <Textarea 
                required 
                onChange={formik.handleChange} 
                name="text" 
                id="text" 
                label="Balasan anda..." 
              />
            </DialogBody>
            <DialogFooter>
              <Button disabled={mutating} className="flex gap-3 items-center" color="blue" type="submit" fullWidth>
                {mutating 
                ? <><Spinner />{" Tunggu..."}</> 
                : <><ChatFill /> Balas</>
                }
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
    </>
  )
}