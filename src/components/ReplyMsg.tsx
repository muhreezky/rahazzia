import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";
import { ChatFill } from "react-bootstrap-icons";
import * as Yup from "yup";

type MyProps = {
  message: Message;
  handler: () => void;
  open: boolean;
};

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Balasan harus diisi")
});

export default function ReplyMsg (props: MyProps) {
  const { handler, message, open } = props;
  const formik = useFormik({
    initialValues: {
      text: ""
    },
    validationSchema,
    onSubmit(val) {
      
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
      <form onSubmit={formik.handleSubmit}>
        <Dialog open={open} handler={handler}>
          <DialogHeader className="bg-blue-600 text-white">
            Balas Pesan ini
          </DialogHeader>
          <DialogBody>
            <Textarea required onChange={formik.handleChange} name="text" id="text" label="Balasan anda..." />
          </DialogBody>
          <DialogFooter>
            <Button color="blue" type="submit" fullWidth>
              Submit
            </Button>
          </DialogFooter>
        </Dialog>
      </form>
    </>
  )
}