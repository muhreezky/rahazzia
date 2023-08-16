import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

type MyProps = {
  message: Message;
};

export default function ReplyMsg (props: MyProps) {
  const [openDlg, setOpenDlg] = useState(false);
  const toggleOpen = () => setOpenDlg(o => !o);
  // const { trigger, isMutating } = useSWRMutation(`/api/messages/${}`);
  const formik = useFormik({
    initialValues: {
      text: ""
    },
    onSubmit(val) {
      
    }
  });
  return (
    <>
      <Button onClick={toggleOpen} color="green">
        Balas
      </Button>
      <Dialog open={openDlg} handler={toggleOpen}>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader className="bg-blue-600">
            Balas Pesan ini
          </DialogHeader>
          <DialogBody>
            <Textarea onChange={formik.handleChange} name="text" id="text" label="Balasan anda..." />
          </DialogBody>
          <DialogFooter className="px-3 py-1">
            <Button color="blue" type="submit" fullWidth>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  )
}